import { useEffect, useState } from "react";
import ServiceCard from "../components/ServiceCard";
import toast from "react-hot-toast";

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("../public/services.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch services");
        return res.json();
      })
      .then((data) => setServices(data))
      .catch((err) => toast.error(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-20 mt-10">
      <h1 className="text-3xl font-bold text-center mb-8">Our Winter Care Services</h1>

      {loading ? (
        <p className="text-center text-gray-500">Loading services...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.serviceId} service={service} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Services;
