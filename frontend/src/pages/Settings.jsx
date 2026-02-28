import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import Navbar from "../components/Navbar";

const Settings = () => {
  const { user } = useContext(AuthContext);
  const [activeTab, setActiveTab] = useState("profile");
  const navigate = useNavigate();

  const tabs = [
    { id: "profile", name: "Profile", icon: "👤" },
    { id: "preferences", name: "Preferences", icon: "⚙️" },
    { id: "security", name: "Security", icon: "🔒" },
    { id: "billing", name: "Billing", icon: "💳" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
          <p className="mt-1 text-sm text-gray-600">
            Manage your account settings and preferences
          </p>
        </div>

        <div className="lg:grid lg:grid-cols-12 lg:gap-6">
          {/* Sidebar */}
          <aside className="lg:col-span-3">
            <nav className="space-y-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    activeTab === tab.id
                      ? "bg-blue-50 text-blue-700"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}>
                  <span className="mr-3">{tab.icon}</span>
                  {tab.name}
                </button>
              ))}
            </nav>
          </aside>

          {/* Main content */}
          <main className="lg:col-span-9 mt-6 lg:mt-0">
            <div className="bg-white rounded-lg border border-gray-200">
              {activeTab === "profile" && (
                <div className="p-6">
                  <h2 className="text-lg font-semibold text-gray-900 mb-6">
                    Profile Information
                  </h2>
                  <form className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        defaultValue={user?.name}
                        className="block w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        defaultValue={user?.email}
                        className="block w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                        Save Changes
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {activeTab === "preferences" && (
                <div className="p-6">
                  <h2 className="text-lg font-semibold text-gray-900 mb-6">
                    Preferences
                  </h2>
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          Email Notifications
                        </p>
                        <p className="text-sm text-gray-500">
                          Receive email updates about your reviews
                        </p>
                      </div>
                      <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-blue-600">
                        <span className="translate-x-6 inline-block h-4 w-4 transform rounded-full bg-white transition" />
                      </button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          Auto-save Code
                        </p>
                        <p className="text-sm text-gray-500">
                          Automatically save your code in the editor
                        </p>
                      </div>
                      <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200">
                        <span className="translate-x-1 inline-block h-4 w-4 transform rounded-full bg-white transition" />
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "security" && (
                <div className="p-6">
                  <h2 className="text-lg font-semibold text-gray-900 mb-6">
                    Security
                  </h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-sm font-medium text-gray-900 mb-4">
                        Change Password
                      </h3>
                      <form className="space-y-4">
                        <input
                          type="password"
                          placeholder="Current password"
                          className="block w-full px-3 py-2 border border-gray-300 rounded-lg"
                        />
                        <input
                          type="password"
                          placeholder="New password"
                          className="block w-full px-3 py-2 border border-gray-300 rounded-lg"
                        />
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                          Update Password
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "billing" && (
                <div className="p-6">
                  <h2 className="text-lg font-semibold text-gray-900 mb-6">
                    Billing
                  </h2>
                  <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          Current Plan
                        </p>
                        <p className="text-2xl font-bold text-gray-900 mt-1">
                          Free
                        </p>
                      </div>
                      <button
                        onClick={() => navigate("/pricing")}
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                        Upgrade
                      </button>
                    </div>
                    <p className="text-sm text-gray-600">
                      10 reviews per month • Basic features
                    </p>
                  </div>
                </div>
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Settings;
