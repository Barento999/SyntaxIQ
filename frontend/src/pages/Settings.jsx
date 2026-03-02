import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AuthContext from "../context/AuthContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Settings = () => {
  const { user, setUser } = useContext(AuthContext);
  const [activeTab, setActiveTab] = useState("profile");
  const navigate = useNavigate();

  // Profile state
  const [profileData, setProfileData] = useState({
    name: user?.name || "",
    email: user?.email || "",
  });
  const [profileLoading, setProfileLoading] = useState(false);
  const [profileMessage, setProfileMessage] = useState({ type: "", text: "" });

  // Preferences state
  const [preferences, setPreferences] = useState({
    emailNotifications: true,
    autoSaveCode: false,
    darkMode: true,
  });
  const [preferencesLoading, setPreferencesLoading] = useState(false);

  // Security state
  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [passwordLoading, setPasswordLoading] = useState(false);
  const [passwordMessage, setPasswordMessage] = useState({
    type: "",
    text: "",
  });
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);

  // Load preferences on mount
  useEffect(() => {
    fetchPreferences();
  }, []);

  const fetchPreferences = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/auth/preferences`,
        { headers: { Authorization: `Bearer ${user.token}` } }
      );
      setPreferences(data.data);
    } catch (err) {
      console.error("Error fetching preferences:", err);
    }
  };

  // Profile handlers
  const handleProfileChange = (e) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  };

  const handleProfileSubmit = async (e) => {
    e.preventDefault();
    setProfileLoading(true);
    setProfileMessage({ type: "", text: "" });

    try {
      const { data } = await axios.put(
        `${import.meta.env.VITE_API_URL}/auth/profile`,
        profileData,
        { headers: { Authorization: `Bearer ${user.token}` } }
      );

      // Update user context
      setUser({ ...user, name: data.data.name, email: data.data.email });
      setProfileMessage({
        type: "success",
        text: "Profile updated successfully!",
      });
    } catch (err) {
      setProfileMessage({
        type: "error",
        text: err.response?.data?.message || "Failed to update profile",
      });
    } finally {
      setProfileLoading(false);
    }
  };

  // Preferences handlers
  const togglePreference = async (key) => {
    const newPreferences = { ...preferences, [key]: !preferences[key] };
    setPreferences(newPreferences);
    setPreferencesLoading(true);

    try {
      await axios.put(
        `${import.meta.env.VITE_API_URL}/auth/preferences`,
        newPreferences,
        { headers: { Authorization: `Bearer ${user.token}` } }
      );
    } catch (err) {
      console.error("Error updating preferences:", err);
      // Revert on error
      setPreferences(preferences);
    } finally {
      setPreferencesLoading(false);
    }
  };
    );
  };

  // Security handlers
  const handlePasswordChange = (e) => {
    setPasswordData({ ...passwordData, [e.target.name]: e.target.value });
  };

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    setPasswordLoading(true);
    setPasswordMessage({ type: "", text: "" });

    if (passwordData.newPassword !== passwordData.confirmPassword) {
      setPasswordMessage({ type: "error", text: "Passwords do not match" });
      setPasswordLoading(false);
      return;
    }

    if (passwordData.newPassword.length < 6) {
      setPasswordMessage({
        type: "error",
        text: "Password must be at least 6 characters",
      });
      setPasswordLoading(false);
      return;
    }

    try {
      await axios.put(
        `${import.meta.env.VITE_API_URL}/auth/password`,
        {
          currentPassword: passwordData.currentPassword,
          newPassword: passwordData.newPassword,
        },
        { headers: { Authorization: `Bearer ${user.token}` } },
      );

      setPasswordMessage({
        type: "success",
        text: "Password updated successfully!",
      });
      setPasswordData({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
    } catch (err) {
      setPasswordMessage({
        type: "error",
        text: err.response?.data?.message || "Failed to update password",
      });
    } finally {
      setPasswordLoading(false);
    }
  };

  const toggle2FA = () => {
    setTwoFactorEnabled(!twoFactorEnabled);
    // In a real app, this would call an API
    alert(
      twoFactorEnabled
        ? "Two-factor authentication disabled"
        : "Two-factor authentication enabled",
    );
  };

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

                  {profileMessage.text && (
                    <div
                      className={`mb-6 p-4 rounded-xl backdrop-blur-sm ${
                        profileMessage.type === "success"
                          ? "bg-green-500/10 border border-green-500/30"
                          : "bg-red-500/10 border border-red-500/30"
                      }`}>
                      <div className="flex items-center">
                        <svg
                          className={`w-5 h-5 mr-3 ${
                            profileMessage.type === "success"
                              ? "text-green-400"
                              : "text-red-400"
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20">
                          {profileMessage.type === "success" ? (
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          ) : (
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                              clipRule="evenodd"
                            />
                          )}
                        </svg>
                        <p
                          className={`text-sm ${
                            profileMessage.type === "success"
                              ? "text-green-400"
                              : "text-red-400"
                          }`}>
                          {profileMessage.text}
                        </p>
                      </div>
                    </div>
                  )}

                  <form onSubmit={handleProfileSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={profileData.name}
                        onChange={handleProfileChange}
                        required
                        className="block w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all backdrop-blur-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={profileData.email}
                        onChange={handleProfileChange}
                        required
                        className="block w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all backdrop-blur-sm"
                      />
                    </div>
                    <div>
                      <button
                        type="submit"
                        disabled={profileLoading}
                        className="px-6 py-3 bg-gradient-to-r from-green-400 to-emerald-500 text-black font-semibold rounded-xl hover:from-green-500 hover:to-emerald-600 transition-all shadow-lg shadow-green-500/50 disabled:opacity-50 disabled:cursor-not-allowed">
                        {profileLoading ? "Saving..." : "Save Changes"}
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
                      <button
                        onClick={() => togglePreference("emailNotifications")}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                          preferences.emailNotifications
                            ? "bg-green-500"
                            : "bg-white/10"
                        }`}>
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition shadow-lg ${
                            preferences.emailNotifications
                              ? "translate-x-6"
                              : "translate-x-1"
                          }`}
                        />
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
                      <button
                        onClick={() => togglePreference("autoSaveCode")}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                          preferences.autoSaveCode
                            ? "bg-green-500"
                            : "bg-white/10"
                        }`}>
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition shadow-lg ${
                            preferences.autoSaveCode
                              ? "translate-x-6"
                              : "translate-x-1"
                          }`}
                        />
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
                      <button
                        onClick={() => togglePreference("darkMode")}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                          preferences.darkMode ? "bg-green-500" : "bg-white/10"
                        }`}>
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition shadow-lg ${
                            preferences.darkMode
                              ? "translate-x-6"
                              : "translate-x-1"
                          }`}
                        />
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

                  {passwordMessage.text && (
                    <div
                      className={`mb-6 p-4 rounded-xl backdrop-blur-sm ${
                        passwordMessage.type === "success"
                          ? "bg-green-500/10 border border-green-500/30"
                          : "bg-red-500/10 border border-red-500/30"
                      }`}>
                      <div className="flex items-center">
                        <svg
                          className={`w-5 h-5 mr-3 ${
                            passwordMessage.type === "success"
                              ? "text-green-400"
                              : "text-red-400"
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20">
                          {passwordMessage.type === "success" ? (
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          ) : (
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                              clipRule="evenodd"
                            />
                          )}
                        </svg>
                        <p
                          className={`text-sm ${
                            passwordMessage.type === "success"
                              ? "text-green-400"
                              : "text-red-400"
                          }`}>
                          {passwordMessage.text}
                        </p>
                      </div>
                    </div>
                  )}

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-sm font-semibold text-gray-300 mb-4">
                        Change Password
                      </h3>
                      <form
                        onSubmit={handlePasswordSubmit}
                        className="space-y-4">
                        <div>
                          <label className="block text-sm font-semibold text-gray-300 mb-2">
                            Current Password
                          </label>
                          <input
                            type="password"
                            name="currentPassword"
                            value={passwordData.currentPassword}
                            onChange={handlePasswordChange}
                            placeholder="Enter current password"
                            required
                            className="block w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all backdrop-blur-sm"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-300 mb-2">
                            New Password
                          </label>
                          <input
                            type="password"
                            name="newPassword"
                            value={passwordData.newPassword}
                            onChange={handlePasswordChange}
                            placeholder="Enter new password"
                            required
                            className="block w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all backdrop-blur-sm"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-300 mb-2">
                            Confirm New Password
                          </label>
                          <input
                            type="password"
                            name="confirmPassword"
                            value={passwordData.confirmPassword}
                            onChange={handlePasswordChange}
                            placeholder="Confirm new password"
                            required
                            className="block w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all backdrop-blur-sm"
                          />
                        </div>
                        <button
                          type="submit"
                          disabled={passwordLoading}
                          className="px-6 py-3 bg-gradient-to-r from-green-400 to-emerald-500 text-black font-semibold rounded-xl hover:from-green-500 hover:to-emerald-600 transition-all shadow-lg shadow-green-500/50 disabled:opacity-50 disabled:cursor-not-allowed">
                          {passwordLoading ? "Updating..." : "Update Password"}
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
                            {twoFactorEnabled
                              ? "Two-factor authentication is enabled"
                              : "Add an extra layer of security"}
                          </p>
                        </div>
                        <button
                          onClick={toggle2FA}
                          className={`px-4 py-2 border rounded-lg text-sm font-medium transition-all ${
                            twoFactorEnabled
                              ? "bg-red-500/20 border-red-500/30 text-red-400 hover:bg-red-500/30"
                              : "bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 hover:text-white"
                          }`}>
                          {twoFactorEnabled ? "Disable" : "Enable"}
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
