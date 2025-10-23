import { Link } from "react-router-dom";

const ServiceNotFound = ({ serviceId }) => {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-lg p-8 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-3">Service Not Found</h2>
        <p className="text-gray-600 mb-6">
          Service not found. Please try searching for the service or go back to the home page. The service ID is <span className="font-mono text-sm bg-gray-100 px-2 py-1 rounded">#{serviceId}</span>.
        </p>

        <div className="flex justify-center gap-4">
          <Link
            to="/services"
            className="px-5 py-2 bg-[#60AEA0] text-white rounded-lg hover:bg-[#378982] transition"
          >
            View All Services
          </Link>
          <Link
            to="/"
            className="px-5 py-2 border border-gray-200 rounded-lg hover:bg-gray-100 transition"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceNotFound;
