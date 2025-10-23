import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-10">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-6">
        <div>
          <Link to="/" >
            <img src={logo} alt="Footer Logo" className="h-10 mb-2" />
          </Link>
          <h3 className="text-xl font-semibold text-white mb-2">FurEverCare</h3>
          <p className="text-sm">
            Keeping your furry friends warm, cozy, and happy this winter ❄️
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Quick Links</h3>
          <ul className="text-sm space-y-1">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/profile">My Profile</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Contact Us</h3>
          <p>Email: support@furevercare.com</p>
          <p>Phone: +880-1234-567890</p>
          <div className="mt-3 flex gap-3">
            <a href="#" className="hover:text-white">🐾 Facebook</a>
            <a href="#" className="hover:text-white">🐾 Instagram</a>
          </div>
        </div>
      </div>

      <div className="text-center mt-6 text-gray-500 text-sm">
        © {new Date().getFullYear()} FurEverCare. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
