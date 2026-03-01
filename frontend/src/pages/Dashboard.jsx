import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Editor from "@monaco-editor/react";
import axios from "axios";
import AuthContext from "../context/AuthContext";
import Navbar from "../components/Navbar";
import Stats from "../components/Stats";
import Footer from "../components/Footer";

const Dashboard = () => {
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("javascript");
  const [loading, setLoading] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [filteredReviews, setFilteredReviews] = useState([]);
  const [error, setError] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [filterLanguage, setFilterLanguage] = useState("all");
  const [showTemplates, setShowTemplates] = useState(false);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const languages = [
    { value: "javascript", label: "JavaScript" },
    { value: "typescript", label: "TypeScript" },
    { value: "python", label: "Python" },
    { value: "java", label: "Java" },
    { value: "cpp", label: "C++" },
    { value: "csharp", label: "C#" },
    { value: "go", label: "Go" },
    { value: "rust", label: "Rust" },
    { value: "php", label: "PHP" },
    { value: "ruby", label: "Ruby" },
    { value: "swift", label: "Swift" },
    { value: "kotlin", label: "Kotlin" },
  ];

  const codeTemplates = {
    javascript: `// JavaScript Example
function calculateSum(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}

const numbers = [1, 2, 3, 4, 5];
console.log(calculateSum(numbers));`,
    python: `# Python Example
def calculate_sum(arr):
    return sum(arr)

numbers = [1, 2, 3, 4, 5]
print(calculate_sum(numbers))`,
    java: `// Java Example
public class Calculator {
    public static int calculateSum(int[] arr) {
        int sum = 0;
        for (int num : arr) {
            sum += num;
        }
        return sum;
    }
    
    public static void main(String[] args) {
        int[] numbers = {1, 2, 3, 4, 5};
        System.out.println(calculateSum(numbers));
    }
}`,
    typescript: `// TypeScript Example
function calculateSum(arr: number[]): number {
  return arr.reduce((sum, num) => sum + num, 0);
}

const numbers: number[] = [1, 2, 3, 4, 5];
console.log(calculateSum(numbers));`,
    go: `// Go Example
package main

import "fmt"

func calculateSum(arr []int) int {
    sum := 0
    for _, num := range arr {
        sum += num
    }
    return sum
}

func main() {
    numbers := []int{1, 2, 3, 4, 5}
    fmt.Println(calculateSum(numbers))
}`,
    rust: `// Rust Example
fn calculate_sum(arr: &[i32]) -> i32 {
    arr.iter().sum()
}

fn main() {
    let numbers = vec![1, 2, 3, 4, 5];
    println!("{}", calculate_sum(&numbers));
}`,
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  useEffect(() => {
    filterReviews();
  }, [reviews, searchQuery, filterLanguage]);

  const filterReviews = () => {
    let filtered = [...reviews];

    // Filter by language
    if (filterLanguage !== "all") {
      filtered = filtered.filter(
        (review) => review.language === filterLanguage,
      );
    }

    // Filter by search query
    if (searchQuery.trim()) {
      filtered = filtered.filter(
        (review) =>
          review.aiResponse?.summary
            ?.toLowerCase()
            .includes(searchQuery.toLowerCase()) ||
          review.language.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    }

    setFilteredReviews(filtered);
  };

  const fetchReviews = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/review/user`,
        {
          headers: { Authorization: `Bearer ${user.token}` },
        },
      );
      setReviews(data.data || []);
    } catch (err) {
      console.error("Error fetching reviews:", err);
      setReviews([]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!code.trim()) {
      setError("Please enter code to review");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/review`,
        { code, language },
        { headers: { Authorization: `Bearer ${user.token}` } },
      );
      navigate(`/review/${data.data._id}`);
    } catch (err) {
      setError(
        err.response?.data?.message || "Failed to submit code for review",
      );
    } finally {
      setLoading(false);
    }
  };

  const loadTemplate = (templateLang) => {
    setLanguage(templateLang);
    setCode(codeTemplates[templateLang] || "");
    setShowTemplates(false);
  };

  const clearCode = () => {
    setCode("");
    setError("");
  };

  const handleDeleteReview = async (reviewId, e) => {
    e.stopPropagation();
    if (!window.confirm("Are you sure you want to delete this review?")) {
      return;
    }

    try {
      await axios.delete(`${import.meta.env.VITE_API_URL}/review/${reviewId}`, {
        headers: { Authorization: `Bearer ${user.token}` },
      });
      fetchReviews();
    } catch (err) {
      console.error("Error deleting review:", err);
    }
  };

  return (
    <div className="min-h-screen bg-black relative">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl"></div>

      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white">Dashboard</h1>
            <p className="mt-2 text-gray-400">
              Submit your code for AI-powered analysis
            </p>
          </div>
          <div className="mt-4 md:mt-0 flex items-center space-x-3">
            <button
              onClick={() => setShowTemplates(!showTemplates)}
              className="inline-flex items-center px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm font-medium text-gray-300 hover:bg-white/10 hover:text-white transition-all">
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                />
              </svg>
              Templates
            </button>
            <button
              onClick={() => navigate("/docs")}
              className="inline-flex items-center px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm font-medium text-gray-300 hover:bg-white/10 hover:text-white transition-all">
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
              Docs
            </button>
          </div>
        </div>

        {/* Templates Modal */}
        {showTemplates && (
          <div className="mb-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-white">Code Templates</h3>
              <button
                onClick={() => setShowTemplates(false)}
                className="text-gray-400 hover:text-white transition-colors">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
              {Object.keys(codeTemplates).map((lang) => (
                <button
                  key={lang}
                  onClick={() => loadTemplate(lang)}
                  className="p-4 bg-white/5 border border-white/10 rounded-xl hover:border-green-500/30 hover:bg-white/10 transition-all group">
                  <div className="text-sm font-semibold text-white group-hover:text-green-400 transition-colors">
                    {languages.find((l) => l.value === lang)?.label || lang}
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        <Stats reviews={reviews} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main content */}
          <div className="lg:col-span-2">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden shadow-xl">
              <div className="px-6 py-5 border-b border-white/10">
                <h2 className="text-xl font-bold text-white flex items-center">
                  <svg
                    className="w-6 h-6 mr-3 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                  New Review
                </h2>
              </div>

              <form onSubmit={handleSubmit} className="p-6 space-y-6">
                {error && (
                  <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-xl backdrop-blur-sm">
                    <div className="flex items-center">
                      <svg
                        className="w-5 h-5 text-red-400 mr-3"
                        fill="currentColor"
                        viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <p className="text-sm text-red-400">{error}</p>
                    </div>
                  </div>
                )}

                <div className="flex items-center justify-between gap-4">
                  <div className="flex-1">
                    <label
                      htmlFor="language"
                      className="block text-sm font-semibold text-gray-300 mb-2">
                      Language
                    </label>
                    <select
                      id="language"
                      value={language}
                      onChange={(e) => setLanguage(e.target.value)}
                      className="block w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all backdrop-blur-sm">
                      {languages.map((lang) => (
                        <option
                          key={lang.value}
                          value={lang.value}
                          className="bg-gray-900">
                          {lang.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="pt-7">
                    <button
                      type="button"
                      onClick={clearCode}
                      className="px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm font-medium text-gray-300 hover:bg-white/10 hover:text-white transition-all">
                      Clear
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Code
                  </label>
                  <div className="border border-white/10 rounded-xl overflow-hidden shadow-lg shadow-green-500/10">
                    <Editor
                      height="400px"
                      language={language}
                      value={code}
                      onChange={(value) => setCode(value || "")}
                      theme="vs-dark"
                      options={{
                        minimap: { enabled: false },
                        fontSize: 14,
                        lineNumbers: "on",
                        scrollBeyondLastLine: false,
                        automaticLayout: true,
                        tabSize: 2,
                      }}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex justify-center items-center py-4 px-4 border border-transparent rounded-xl shadow-lg text-base font-bold text-black bg-gradient-to-r from-green-400 to-emerald-500 hover:from-green-500 hover:to-emerald-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 focus:ring-offset-black disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-green-500/50 hover:shadow-green-500/70 hover:scale-[1.02]">
                  {loading ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-black"
                        fill="none"
                        viewBox="0 0 24 24">
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Analyzing...
                    </>
                  ) : (
                    <>
                      Submit for Review
                      <svg
                        className="w-5 h-5 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Search and Filter */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 shadow-xl">
              <h3 className="text-lg font-bold text-white mb-4">
                Filter Reviews
              </h3>

              {/* Search */}
              <div className="mb-4">
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Search
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search reviews..."
                    className="w-full px-4 py-2 pl-10 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
                  />
                  <svg
                    className="absolute left-3 top-2.5 w-5 h-5 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
              </div>

              {/* Language Filter */}
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Language
                </label>
                <select
                  value={filterLanguage}
                  onChange={(e) => setFilterLanguage(e.target.value)}
                  className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-500 transition-all">
                  <option value="all" className="bg-gray-900">
                    All Languages
                  </option>
                  {languages.map((lang) => (
                    <option
                      key={lang.value}
                      value={lang.value}
                      className="bg-gray-900">
                      {lang.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Results Count */}
              <div className="mt-4 pt-4 border-t border-white/10">
                <p className="text-sm text-gray-400">
                  Showing{" "}
                  <span className="text-green-400 font-semibold">
                    {filteredReviews.length}
                  </span>{" "}
                  of {reviews.length} reviews
                </p>
              </div>
            </div>

            {/* Recent Reviews */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden shadow-xl">
              <div className="px-6 py-5 border-b border-white/10">
                <h3 className="text-xl font-bold text-white flex items-center">
                  <svg
                    className="w-6 h-6 mr-3 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Recent Reviews
                </h3>
              </div>

              <div className="divide-y divide-white/10 max-h-[600px] overflow-y-auto">
                {!filteredReviews || filteredReviews.length === 0 ? (
                  <div className="px-6 py-12 text-center">
                    <svg
                      className="mx-auto h-12 w-12 text-gray-600"
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
                    <p className="mt-3 text-sm text-gray-400">
                      {searchQuery || filterLanguage !== "all"
                        ? "No matching reviews"
                        : "No reviews yet"}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      {searchQuery || filterLanguage !== "all"
                        ? "Try adjusting your filters"
                        : "Submit your first code review"}
                    </p>
                  </div>
                ) : (
                  filteredReviews.slice(0, 10).map((review) => (
                    <div
                      key={review._id}
                      className="px-6 py-4 hover:bg-white/5 transition-all group relative">
                      <div
                        onClick={() => navigate(`/review/${review._id}`)}
                        className="cursor-pointer">
                        <div className="flex items-center justify-between mb-2">
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-green-500/20 text-green-400 border border-green-500/30">
                            {review.language}
                          </span>
                          <div className="flex items-center space-x-2">
                            <span className="text-xs text-gray-500">
                              {new Date(review.createdAt).toLocaleDateString()}
                            </span>
                            <button
                              onClick={(e) => handleDeleteReview(review._id, e)}
                              className="opacity-0 group-hover:opacity-100 p-1 hover:bg-red-500/20 rounded transition-all">
                              <svg
                                className="w-4 h-4 text-red-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24">
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                />
                              </svg>
                            </button>
                          </div>
                        </div>
                        <p className="text-sm text-gray-400 line-clamp-2 group-hover:text-gray-300 transition-colors">
                          {review.aiResponse?.summary || "Review completed"}
                        </p>
                        {review.aiResponse?.overallScore && (
                          <div className="mt-2 flex items-center">
                            <span className="text-xs text-gray-500 mr-2">
                              Score:
                            </span>
                            <div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
                              <div
                                className={`h-full ${
                                  review.aiResponse.overallScore >= 80
                                    ? "bg-green-400"
                                    : review.aiResponse.overallScore >= 60
                                      ? "bg-yellow-400"
                                      : "bg-red-400"
                                }`}
                                style={{
                                  width: `${review.aiResponse.overallScore}%`,
                                }}
                              />
                            </div>
                            <span className="text-xs text-gray-400 ml-2 font-semibold">
                              {review.aiResponse.overallScore}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;
