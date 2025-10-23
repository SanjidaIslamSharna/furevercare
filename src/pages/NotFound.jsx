import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="max-w-xl text-center bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-6xl font-extrabold text-gray-800 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-3">Page Not Found</h2>
        <p className="text-gray-500 mb-6">
          Sorry, the page you are looking for does not exist. Please check the URL or go back to the home page.
        </p>

        <div className="flex items-center justify-center gap-4">
          <Link
            to="/"
            className="px-5 py-2 bg-[#60AEA0] text-white rounded-lg hover:bg-[#378982] transition"
          >
            Go to Home
          </Link>

          <Link
            to="/services"
            className="px-5 py-2 border border-gray-200 rounded-lg hover:bg-gray-100 transition"
          >
            Browse Services
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
