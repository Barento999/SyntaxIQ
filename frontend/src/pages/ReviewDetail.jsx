import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import AuthContext from "../context/AuthContext";
import Navbar from "../components/Navbar";
import LoadingSpinner from "../components/LoadingSpinner";
import CodeSnippet from "../components/CodeSnippet";

const ReviewDetail = () => {
  const [review, setReview] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    fetchReview();
  }, [id]);

  const fetchReview = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/review/${id}`,
        {
          headers: { Authorization: `Bearer ${user.token}` },
        },
      );
      setReview(data.data);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to load review");
    } finally {
      setLoading(false);
    }
  };

  const getSeverityColor = (severity) => {
    switch (severity) {
      case "high":
        return "bg-red-500/20 text-red-400 border-red-500/30";
      case "medium":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      case "low":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    }
  };

  const getScoreColor = (score) => {
    if (score >= 80) return "text-green-400";
    if (score >= 60) return "text-yellow-400";
    return "text-red-400";
  };

  const getScoreGradient = (score) => {
    if (score >= 80) return "from-green-400 to-emerald-500";
    if (score >= 60) return "from-yellow-400 to-orange-500";
    return "from-red-400 to-pink-500";
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
        <Navbar />
        <div className="flex items-center justify-center h-96 relative z-10">
          <LoadingSpinner size="lg" text="Loading review..." />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-black relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
        <Navbar />
        <div className="max-w-4xl mx-auto px-4 py-8 relative z-10">
          <div className="bg-red-500/10 border border-red-500/30 text-red-400 px-6 py-4 rounded-xl backdrop-blur-sm">
            <div className="flex items-center">
              <svg
                className="w-6 h-6 mr-3"
                fill="currentColor"
                viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="font-medium">{error}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!review) return null;

  const { aiResponse } = review;

  return (
    <div className="min-h-screen bg-black relative">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl"></div>

      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-8 relative z-10">
        <button
          onClick={() => navigate("/dashboard")}
          className="mb-6 flex items-center text-green-400 hover:text-green-300 font-medium transition-colors group">
          <svg
            className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Dashboard
        </button>

        {/* Header Card */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl shadow-xl p-8 mb-6 border border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg shadow-green-500/50">
                  <svg
                    className="w-7 h-7 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-white">
                    Code Review Results
                  </h1>
                  <p className="text-gray-400 mt-1">
                    <span className="font-semibold text-green-400">
                      {review.language}
                    </span>{" "}
                    • {new Date(review.createdAt).toLocaleString()}
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
              <div
                className={`text-6xl font-bold ${getScoreColor(aiResponse.overallScore)} mb-2`}>
                {aiResponse.overallScore}
              </div>
              <div className="text-sm font-semibold text-gray-400 uppercase tracking-wide">
                Overall Score
              </div>
              <div className="mt-3 w-32 h-2 bg-white/10 rounded-full overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r ${getScoreGradient(aiResponse.overallScore)} transition-all duration-1000`}
                  style={{ width: `${aiResponse.overallScore}%` }}></div>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-green-500/10 border-l-4 border-green-500 p-5 rounded-lg backdrop-blur-sm">
            <div className="flex items-start">
              <svg
                className="w-6 h-6 text-green-400 mr-3 mt-0.5 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <div>
                <h3 className="font-bold text-green-400 mb-2 text-lg">
                  Summary
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {aiResponse.summary}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bugs Section */}
        {aiResponse.bugs && aiResponse.bugs.length > 0 && (
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl shadow-xl p-8 mb-6 border border-white/10">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-red-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white">Bugs Found</h3>
              <span className="bg-red-500/20 text-red-400 text-sm font-bold px-3 py-1 rounded-full border border-red-500/30">
                {aiResponse.bugs.length}
              </span>
            </div>
            <div className="space-y-4">
              {aiResponse.bugs.map((bug, index) => (
                <div
                  key={index}
                  className="border border-white/10 rounded-xl p-5 hover:border-red-500/30 transition-colors bg-white/5 backdrop-blur-sm">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="font-bold text-white text-lg flex-1">
                      {bug.issue}
                    </h4>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-bold border uppercase ${getSeverityColor(bug.severity)}`}>
                      {bug.severity}
                    </span>
                  </div>
                  <div className="bg-green-500/10 border-l-4 border-green-400 p-4 rounded backdrop-blur-sm">
                    <p className="text-sm font-semibold text-green-400 mb-1 flex items-center">
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                        />
                      </svg>
                      Suggestion:
                    </p>
                    <p className="text-gray-300">{bug.suggestion}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Security Issues */}
        {aiResponse.securityIssues && aiResponse.securityIssues.length > 0 && (
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl shadow-xl p-8 mb-6 border border-white/10">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-red-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white">Security Issues</h3>
              <span className="bg-red-500/20 text-red-400 text-sm font-bold px-3 py-1 rounded-full border border-red-500/30">
                {aiResponse.securityIssues.length}
              </span>
            </div>
            <div className="space-y-4">
              {aiResponse.securityIssues.map((issue, index) => (
                <div
                  key={index}
                  className="border border-red-500/30 bg-red-500/10 rounded-xl p-5 backdrop-blur-sm">
                  <h4 className="font-bold text-red-400 mb-3 text-lg">
                    {issue.issue}
                  </h4>
                  <div className="space-y-2">
                    <div className="bg-white/5 p-3 rounded-lg border border-white/10">
                      <p className="text-sm font-semibold text-red-400 mb-1 flex items-center">
                        <svg
                          className="w-4 h-4 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                          />
                        </svg>
                        Risk:
                      </p>
                      <p className="text-gray-300">{issue.risk}</p>
                    </div>
                    <div className="bg-white/5 p-3 rounded-lg border border-white/10">
                      <p className="text-sm font-semibold text-green-400 mb-1 flex items-center">
                        <svg
                          className="w-4 h-4 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        Fix:
                      </p>
                      <p className="text-gray-300">{issue.fix}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Performance Improvements */}
        {aiResponse.performanceImprovements &&
          aiResponse.performanceImprovements.length > 0 && (
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl shadow-xl p-8 mb-6 border border-white/10">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-yellow-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Performance Improvements
                </h3>
                <span className="bg-yellow-500/20 text-yellow-400 text-sm font-bold px-3 py-1 rounded-full border border-yellow-500/30">
                  {aiResponse.performanceImprovements.length}
                </span>
              </div>
              <div className="space-y-4">
                {aiResponse.performanceImprovements.map((perf, index) => (
                  <div
                    key={index}
                    className="border border-yellow-500/30 bg-yellow-500/10 rounded-xl p-5 backdrop-blur-sm">
                    <h4 className="font-bold text-yellow-400 mb-2 text-lg">
                      {perf.issue}
                    </h4>
                    <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                      <p className="text-sm font-semibold text-green-400 mb-1 flex items-center">
                        <svg
                          className="w-4 h-4 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                          />
                        </svg>
                        Improvement:
                      </p>
                      <p className="text-gray-300">{perf.improvement}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        {/* Code Quality Suggestions */}
        {aiResponse.codeQualitySuggestions &&
          aiResponse.codeQualitySuggestions.length > 0 && (
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl shadow-xl p-8 mb-6 border border-white/10">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-purple-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Code Quality Suggestions
                </h3>
                <span className="bg-purple-500/20 text-purple-400 text-sm font-bold px-3 py-1 rounded-full border border-purple-500/30">
                  {aiResponse.codeQualitySuggestions.length}
                </span>
              </div>
              <div className="space-y-4">
                {aiResponse.codeQualitySuggestions.map((suggestion, index) => (
                  <div
                    key={index}
                    className="border border-purple-500/30 bg-purple-500/10 rounded-xl p-5 backdrop-blur-sm">
                    <h4 className="font-bold text-purple-400 mb-2 text-lg">
                      {suggestion.issue}
                    </h4>
                    <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                      <p className="text-sm font-semibold text-green-400 mb-1 flex items-center">
                        <svg
                          className="w-4 h-4 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                        Recommendation:
                      </p>
                      <p className="text-gray-300">
                        {suggestion.recommendation}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        {/* Refactored Code */}
        {aiResponse.refactoredCode && (
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl shadow-xl p-8 mb-6 border border-white/10">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white">Refactored Code</h3>
            </div>
            <CodeSnippet
              code={aiResponse.refactoredCode}
              language={review.language}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ReviewDetail;
