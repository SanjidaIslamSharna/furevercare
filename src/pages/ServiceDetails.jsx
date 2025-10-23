import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Star } from "lucide-react";
import { toast } from "react-hot-toast";
import ServiceNotFound from "./ServiceNotFound";
import SkeletonLoader from "../components/SkeletonLoader";

const ServiceDetails = () => {
  const { id } = useParams();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    setLoading(true);
    setNotFound(false);
    fetch("/services.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch services");
        return res.json();
      })
      .then((data) => {
        const selected = data.find((item) => item.serviceId === Number(id));
        if (!selected) {
          setNotFound(true);
          setService(null);
        } else {
          setService(selected);
        }
      })
      .catch((err) => {
        console.error(err);
        setNotFound(true);
      })
      .finally(() => setLoading(false));
  }, [id]);

  const handleBooking = (e) => {
    e.preventDefault();
    toast.success("Service booked successfully!");
    e.target.reset();
  };

  if (loading) return <SkeletonLoader />;
  if (notFound) return <ServiceNotFound serviceId={id} />;

  // service must be present now
  return (
    <div className="max-w-6xl mx-auto px-4 md:px-10 py-10">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Image */}
        <div className="relative">
          <img
            src={service.image}
            alt={service.serviceName}
            className="rounded-xl shadow-md w-full h-80 md:h-full object-cover"
          />
        </div>

        {/* Details */}
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
              {service.serviceName}
            </h2>
            <p className="text-gray-600 mb-3">{service.description}</p>

            {/* Category */}
            <p className="text-[#60AEA0] font-semibold mb-3">Category: {service.category}</p>

            {/* Compact row: rating, slots, price */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <div className="flex items-center gap-1 bg-[#E59959] text-white px-2 py-1 rounded-lg">
                <Star size={16} className="fill-white" />
                {service.rating} / 5
              </div>
              <div className="bg-[#60AEA0] text-white px-2 py-1 rounded-lg">
                {service.slotsAvailable} slots
              </div>
              <div className="text-2xl md:text-3xl font-bold text-gray-800">
                ${service.price}
              </div>
            </div>

            <p className="text-gray-700 font-medium mb-4">
              Provider: {service.providerName} ({service.providerEmail})
            </p>
          </div>

          {/* Booking Form */}
          <form onSubmit={handleBooking} className="mt-4 space-y-3">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#60AEA0]"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#60AEA0]"
            />
            <button
              type="submit"
              className="bg-[#60AEA0] text-white px-4 py-3 rounded-lg w-full hover:bg-[#378982] transition-all font-semibold"
            >
              Book Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
