import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import Logo from "./Logo";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center space-x-8">
            <Logo size="md" showText={true} variant="default" />
            <div className="hidden md:flex items-center space-x-6">
              <button
                onClick={() => navigate("/dashboard")}
                className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
                Dashboard
              </button>
              <button
                onClick={() => navigate("/pricing")}
                className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
                Pricing
              </button>
              <button
                onClick={() => navigate("/docs")}
                className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
                Docs
              </button>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => navigate("/settings")}
              className="hidden sm:flex items-center space-x-3 px-3 py-1.5 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                {user?.name?.charAt(0).toUpperCase()}
              </div>
              <span className="text-sm font-medium text-gray-700">
                {user?.name}
              </span>
            </button>
            <button
              onClick={handleLogout}
              className="inline-flex items-center px-3 py-1.5 border border-gray-300 text-sm font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors">
              Sign out
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
