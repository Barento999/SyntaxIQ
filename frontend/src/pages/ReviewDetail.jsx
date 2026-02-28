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
        return "bg-red-100 text-red-800 border-red-300";
      case "medium":
        return "bg-yellow-100 text-yellow-800 border-yellow-300";
      case "low":
        return "bg-green-100 text-green-800 border-green-300";
      default:
        return "bg-gray-100 text-gray-800 border-gray-300";
    }
  };

  const getScoreColor = (score) => {
    if (score >= 80) return "text-green-600";
    if (score >= 60) return "text-yellow-600";
    return "text-red-600";
  };

  const getScoreGradient = (score) => {
    if (score >= 80) return "from-green-500 to-emerald-500";
    if (score >= 60) return "from-yellow-500 to-orange-500";
    return "from-red-500 to-pink-500";
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        <Navbar />
        <div className="flex items-center justify-center h-96">
          <LoadingSpinner size="lg" text="Loading review..." />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        <Navbar />
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="bg-red-50 border-l-4 border-red-500 text-red-700 px-6 py-4 rounded-lg">
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-8">
        <button
          onClick={() => navigate("/dashboard")}
          className="mb-6 flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors group">
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
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-6 border border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center">
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
                  <h1 className="text-3xl font-bold text-gray-900">
                    Code Review Results
                  </h1>
                  <p className="text-gray-600 mt-1">
                    <span className="font-semibold text-blue-600">
                      {review.language}
                    </span>{" "}
                    • {new Date(review.createdAt).toLocaleString()}
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center bg-gradient-to-br from-gray-50 to-blue-50 p-6 rounded-2xl border-2 border-gray-200">
              <div
                className={`text-6xl font-bold ${getScoreColor(aiResponse.overallScore)} mb-2`}>
                {aiResponse.overallScore}
              </div>
              <div className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                Overall Score
              </div>
              <div className="mt-3 w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r ${getScoreGradient(aiResponse.overallScore)} transition-all duration-1000`}
                  style={{ width: `${aiResponse.overallScore}%` }}></div>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-5 rounded-lg">
            <div className="flex items-start">
              <svg
                className="w-6 h-6 text-blue-600 mr-3 mt-0.5 flex-shrink-0"
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
                <h3 className="font-bold text-blue-900 mb-2 text-lg">
                  Summary
                </h3>
                <p className="text-blue-800 leading-relaxed">
                  {aiResponse.summary}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bugs Section */}
        {aiResponse.bugs && aiResponse.bugs.length > 0 && (
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-6 border border-gray-200">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🐛</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Bugs Found</h3>
              <span className="bg-red-100 text-red-800 text-sm font-semibold px-3 py-1 rounded-full">
                {aiResponse.bugs.length}
              </span>
            </div>
            <div className="space-y-4">
              {aiResponse.bugs.map((bug, index) => (
                <div
                  key={index}
                  className="border-2 border-gray-200 rounded-xl p-5 hover:border-red-300 transition-colors">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="font-bold text-gray-900 text-lg flex-1">
                      {bug.issue}
                    </h4>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-bold border-2 uppercase ${getSeverityColor(bug.severity)}`}>
                      {bug.severity}
                    </span>
                  </div>
                  <div className="bg-gray-50 border-l-4 border-blue-400 p-4 rounded">
                    <p className="text-sm font-semibold text-gray-700 mb-1">
                      💡 Suggestion:
                    </p>
                    <p className="text-gray-700">{bug.suggestion}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Security Issues */}
        {aiResponse.securityIssues && aiResponse.securityIssues.length > 0 && (
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-6 border border-gray-200">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                Security Issues
              </h3>
              <span className="bg-red-100 text-red-800 text-sm font-semibold px-3 py-1 rounded-full">
                {aiResponse.securityIssues.length}
              </span>
            </div>
            <div className="space-y-4">
              {aiResponse.securityIssues.map((issue, index) => (
                <div
                  key={index}
                  className="border-2 border-red-200 bg-red-50 rounded-xl p-5">
                  <h4 className="font-bold text-red-900 mb-3 text-lg">
                    {issue.issue}
                  </h4>
                  <div className="space-y-2">
                    <div className="bg-white p-3 rounded-lg">
                      <p className="text-sm font-semibold text-red-800 mb-1">
                        ⚠️ Risk:
                      </p>
                      <p className="text-gray-700">{issue.risk}</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="text-sm font-semibold text-green-800 mb-1">
                        ✅ Fix:
                      </p>
                      <p className="text-gray-700">{issue.fix}</p>
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
            <div className="bg-white rounded-2xl shadow-xl p-8 mb-6 border border-gray-200">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Performance Improvements
                </h3>
                <span className="bg-yellow-100 text-yellow-800 text-sm font-semibold px-3 py-1 rounded-full">
                  {aiResponse.performanceImprovements.length}
                </span>
              </div>
              <div className="space-y-4">
                {aiResponse.performanceImprovements.map((perf, index) => (
                  <div
                    key={index}
                    className="border-2 border-yellow-200 bg-yellow-50 rounded-xl p-5">
                    <h4 className="font-bold text-yellow-900 mb-2 text-lg">
                      {perf.issue}
                    </h4>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-sm font-semibold text-gray-700 mb-1">
                        🚀 Improvement:
                      </p>
                      <p className="text-gray-700">{perf.improvement}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        {/* Code Quality Suggestions */}
        {aiResponse.codeQualitySuggestions &&
          aiResponse.codeQualitySuggestions.length > 0 && (
            <div className="bg-white rounded-2xl shadow-xl p-8 mb-6 border border-gray-200">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">✨</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Code Quality Suggestions
                </h3>
                <span className="bg-purple-100 text-purple-800 text-sm font-semibold px-3 py-1 rounded-full">
                  {aiResponse.codeQualitySuggestions.length}
                </span>
              </div>
              <div className="space-y-4">
                {aiResponse.codeQualitySuggestions.map((suggestion, index) => (
                  <div
                    key={index}
                    className="border-2 border-purple-200 bg-purple-50 rounded-xl p-5">
                    <h4 className="font-bold text-purple-900 mb-2 text-lg">
                      {suggestion.issue}
                    </h4>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-sm font-semibold text-gray-700 mb-1">
                        📝 Recommendation:
                      </p>
                      <p className="text-gray-700">
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
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-6 border border-gray-200">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🔧</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                Refactored Code
              </h3>
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
