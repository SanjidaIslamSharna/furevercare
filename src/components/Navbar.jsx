import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();

  // Get avatar: photoURL -> initials -> fallback color avatar
  const getAvatar = () => {
    if (user?.photoURL) return user.photoURL;
    if (user?.displayName) {
      // Use initials as fallback avatar
      return `https://via.placeholder.com/40/60AEA0/FFFFFF?text=${user.displayName
        .slice(0, 2)
        .toUpperCase()}`;
    }
    return `https://via.placeholder.com/40/60AEA0/FFFFFF?text=US`; // default initials
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="w-full mx-auto px-4 md:px-20 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="h-10" />
        </Link>

        {/* Hamburger for mobile */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? (
            <X className="w-6 h-6 text-[#60AEA0]" />
          ) : (
            <Menu className="w-6 h-6 text-[#60AEA0]" />
          )}
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-[#E59959] font-semibold" : "hover:text-[#E59959] transition"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive ? "text-[#E59959] font-semibold" : "hover:text-[#E59959] transition"
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              isActive ? "text-[#E59959] font-semibold" : "hover:text-[#E59959] transition"
            }
          >
            My Profile
          </NavLink>

          {user ? (
            <div className="flex items-center gap-3 relative group">
              <img
                src={getAvatar()}
                alt="avatar"
                className="w-10 h-10 rounded-full object-cover border border-gray-300"
              />
              {/* Hover name */}
              <span className="absolute top-full left-1/2 -translate-x-1/2 mt-1 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
                {user.displayName || "User"}
              </span>
              <button
                onClick={logout}
                className="ml-2 bg-[#60AEA0] px-3 py-1 text-white rounded hover:bg-[#378982] transition"
              >
                Logout
              </button>
            </div>
          ) : (
            <>
              <Link
                to="/login"
                className="px-3 py-1 border border-[#60AEA0] text-[#60AEA0] rounded hover:bg-[#beeae2]"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="px-3 py-1 bg-[#60AEA0] text-white rounded hover:bg-[#378982]"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t shadow-md flex flex-col px-6 py-4 space-y-2">
          <NavLink
            to="/"
            onClick={() => setIsOpen(false)}
            className="hover:text-[#E59959] transition"
          >
            Home
          </NavLink>
          <NavLink
            to="/services"
            onClick={() => setIsOpen(false)}
            className="hover:text-[#E59959] transition"
          >
            Services
          </NavLink>
          <NavLink
            to="/profile"
            onClick={() => setIsOpen(false)}
            className="hover:text-[#E59959] transition"
          >
            My Profile
          </NavLink>

          {user ? (
            <>
              <div className="flex items-center gap-2 mt-2">
                <img
                  src={getAvatar()}
                  alt="avatar"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <span>{user.displayName || "User"}</span>
              </div>
              <button
                onClick={() => {
                  logout();
                  setIsOpen(false);
                }}
                className="mt-2 bg-[#60AEA0] text-white px-3 py-1 rounded w-full"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                onClick={() => setIsOpen(false)}
                className="px-3 py-1 border border-[#60AEA0] text-[#60AEA0] rounded hover:bg-[#beeae2]"
              >
                Login
              </Link>
              <Link
                to="/signup"
                onClick={() => setIsOpen(false)}
                className="px-3 py-1 bg-[#60AEA0] text-white rounded hover:bg-[#378982]"
              >
                Register
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
