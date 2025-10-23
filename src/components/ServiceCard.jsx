import { Link } from "react-router-dom";
import { Star } from "lucide-react";

const ServiceCard = ({ service }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col">
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={service.image}
          alt={service.serviceName}
          className="w-full h-48 object-cover transform transition-transform duration-500 hover:scale-125"
        />

        {/* Rating badge */}
        <div className="absolute top-3 right-3 bg-[#E59959] text-white px-2 py-1 rounded-lg text-xs flex items-center gap-1">
          <Star size={14} className="fill-white text-white" />
          {service.rating}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow p-5">
        <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-1">
          {service.serviceName}
        </h3>

        <p className="text-[#60AEA0] font-semibold text-base mb-3">
          ${service.price.toFixed(2)}
        </p>

        <div className="mt-auto">
            <Link
                to={`/service/${service.serviceId}`}
                className="block bg-[#60AEA0] text-center text-white text-sm px-4 py-2 rounded-lg hover:bg-[#378982] transition-all w-full"
                >
                View Details
            </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
