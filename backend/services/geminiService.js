import dotenv from "dotenv";
dotenv.config();
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export const analyzeCode = async (code, language) => {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    const prompt = `You are an expert code reviewer. Analyze the following ${language} code and provide a comprehensive review.

CRITICAL: You MUST respond with ONLY valid JSON. No markdown, no code blocks, no explanations outside the JSON structure.

Code to review:
\`\`\`${language}
${code}
\`\`\`

Return ONLY this exact JSON structure:
{
  "summary": "Brief overview of the code (2-3 sentences)",
  "bugs": [
    {
      "issue": "Description of the bug",
      "severity": "low|medium|high",
      "suggestion": "How to fix it"
    }
  ],
  "securityIssues": [
    {
      "issue": "Security vulnerability description",
      "risk": "Explanation of the risk",
      "fix": "How to mitigate"
    }
  ],
  "performanceImprovements": [
    {
      "issue": "Performance issue description",
      "improvement": "Optimization suggestion"
    }
  ],
  "codeQualitySuggestions": [
    {
      "issue": "Code quality issue",
      "recommendation": "Best practice suggestion"
    }
  ],
  "refactoredCode": "Complete refactored version of the code",
  "overallScore": 75
}

Rules:
- Return ONLY valid JSON
- No markdown formatting
- No code block markers
- overallScore must be a number between 0-100
- If no issues found in a category, use empty array []
- Be specific and actionable in suggestions`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    let text = response.text();

    // Clean up response - remove markdown code blocks if present
    text = text
      .replace(/```json\n?/g, "")
      .replace(/```\n?/g, "")
      .trim();

    // Parse JSON
    const parsedResponse = JSON.parse(text);

    // Validate structure
    if (!parsedResponse.summary || !parsedResponse.overallScore) {
      throw new Error("Invalid response structure from AI");
    }

    return parsedResponse;
  } catch (error) {
    console.error("Gemini API Error:", error);

    // Return fallback response
    return {
      summary: "Unable to analyze code at this time. Please try again.",
      bugs: [],
      securityIssues: [],
      performanceImprovements: [],
      codeQualitySuggestions: [],
      refactoredCode: code,
      overallScore: 0,
      error: error.message,
    };
  }
};
