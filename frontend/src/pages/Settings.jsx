import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Settings = () => {
  const { user } = useContext(AuthContext);
  const [activeTab, setActiveTab] = useState("profile");
  const navigate = useNavigate();

  const tabs = [
    {
      id: "profile",
      name: "Profile",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      ),
    },
    {
      id: "preferences",
      name: "Preferences",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
          />
        </svg>
      ),
    },
    {
      id: "security",
      name: "Security",
      icon: (
        <svg
          className="w-5 h-5"
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
      ),
    },
    {
      id: "billing",
      name: "Billing",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-black relative">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl"></div>

      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white">Settings</h1>
          <p className="mt-2 text-gray-400">
            Manage your account settings and preferences
          </p>
        </div>

        <div className="lg:grid lg:grid-cols-12 lg:gap-6">
          {/* Sidebar */}
          <aside className="lg:col-span-3">
            <nav className="space-y-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center px-4 py-3 text-sm font-medium rounded-xl transition-all ${
                    activeTab === tab.id
                      ? "bg-green-500/20 text-green-400 border border-green-500/30"
                      : "text-gray-400 hover:bg-white/5 hover:text-white border border-transparent"
                  }`}>
                  <span className="mr-3">{tab.icon}</span>
                  {tab.name}
                </button>
              ))}
            </nav>
          </aside>

          {/* Main content */}
          <main className="lg:col-span-9 mt-6 lg:mt-0">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 shadow-xl">
              {activeTab === "profile" && (
                <div className="p-8">
                  <h2 className="text-2xl font-bold text-white mb-6">
                    Profile Information
                  </h2>
                  <form className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        defaultValue={user?.name}
                        className="block w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all backdrop-blur-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        defaultValue={user?.email}
                        className="block w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all backdrop-blur-sm"
                      />
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="px-6 py-3 bg-gradient-to-r from-green-400 to-emerald-500 text-black font-semibold rounded-xl hover:from-green-500 hover:to-emerald-600 transition-all shadow-lg shadow-green-500/50">
                        Save Changes
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {activeTab === "preferences" && (
                <div className="p-8">
                  <h2 className="text-2xl font-bold text-white mb-6">
                    Preferences
                  </h2>
                  <div className="space-y-6">
                    <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10">
                      <div>
                        <p className="text-sm font-semibold text-white">
                          Email Notifications
                        </p>
                        <p className="text-sm text-gray-400 mt-1">
                          Receive email updates about your reviews
                        </p>
                      </div>
                      <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-green-500 transition-colors">
                        <span className="translate-x-6 inline-block h-4 w-4 transform rounded-full bg-white transition shadow-lg" />
                      </button>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10">
                      <div>
                        <p className="text-sm font-semibold text-white">
                          Auto-save Code
                        </p>
                        <p className="text-sm text-gray-400 mt-1">
                          Automatically save your code in the editor
                        </p>
                      </div>
                      <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-white/10 transition-colors">
                        <span className="translate-x-1 inline-block h-4 w-4 transform rounded-full bg-white transition shadow-lg" />
                      </button>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10">
                      <div>
                        <p className="text-sm font-semibold text-white">
                          Dark Mode
                        </p>
                        <p className="text-sm text-gray-400 mt-1">
                          Use dark theme across the application
                        </p>
                      </div>
                      <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-green-500 transition-colors">
                        <span className="translate-x-6 inline-block h-4 w-4 transform rounded-full bg-white transition shadow-lg" />
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "security" && (
                <div className="p-8">
                  <h2 className="text-2xl font-bold text-white mb-6">
                    Security
                  </h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-sm font-semibold text-gray-300 mb-4">
                        Change Password
                      </h3>
                      <form className="space-y-4">
                        <div>
                          <label className="block text-sm font-semibold text-gray-300 mb-2">
                            Current Password
                          </label>
                          <input
                            type="password"
                            placeholder="Enter current password"
                            className="block w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all backdrop-blur-sm"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-300 mb-2">
                            New Password
                          </label>
                          <input
                            type="password"
                            placeholder="Enter new password"
                            className="block w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all backdrop-blur-sm"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-300 mb-2">
                            Confirm New Password
                          </label>
                          <input
                            type="password"
                            placeholder="Confirm new password"
                            className="block w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all backdrop-blur-sm"
                          />
                        </div>
                        <button
                          type="submit"
                          className="px-6 py-3 bg-gradient-to-r from-green-400 to-emerald-500 text-black font-semibold rounded-xl hover:from-green-500 hover:to-emerald-600 transition-all shadow-lg shadow-green-500/50">
                          Update Password
                        </button>
                      </form>
                    </div>
                    <div className="pt-6 border-t border-white/10">
                      <h3 className="text-sm font-semibold text-gray-300 mb-4">
                        Two-Factor Authentication
                      </h3>
                      <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10">
                        <div>
                          <p className="text-sm font-semibold text-white">
                            2FA Status
                          </p>
                          <p className="text-sm text-gray-400 mt-1">
                            Add an extra layer of security
                          </p>
                        </div>
                        <button className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm font-medium text-gray-300 hover:bg-white/10 hover:text-white transition-all">
                          Enable
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "billing" && (
                <div className="p-8">
                  <h2 className="text-2xl font-bold text-white mb-6">
                    Billing
                  </h2>
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <p className="text-sm font-semibold text-gray-300">
                          Current Plan
                        </p>
                        <p className="text-3xl font-bold text-white mt-2">
                          Free
                        </p>
                      </div>
                      <button
                        onClick={() => navigate("/pricing")}
                        className="px-6 py-3 bg-gradient-to-r from-green-400 to-emerald-500 text-black font-semibold rounded-xl hover:from-green-500 hover:to-emerald-600 transition-all shadow-lg shadow-green-500/50">
                        Upgrade
                      </button>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-400 mt-4">
                      <svg
                        className="w-4 h-4 text-green-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>10 reviews per month</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-400 mt-2">
                      <svg
                        className="w-4 h-4 text-green-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>Basic features</span>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h3 className="text-sm font-semibold text-gray-300 mb-4">
                      Payment Method
                    </h3>
                    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-8 bg-gradient-to-br from-green-400 to-emerald-500 rounded flex items-center justify-center">
                            <svg
                              className="w-6 h-6 text-white"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24">
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                              />
                            </svg>
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-white">
                              No payment method
                            </p>
                            <p className="text-xs text-gray-400 mt-1">
                              Add a card to upgrade
                            </p>
                          </div>
                        </div>
                        <button className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm font-medium text-gray-300 hover:bg-white/10 hover:text-white transition-all">
                          Add Card
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Settings;
