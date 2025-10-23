
import { useEffect, useState } from "react";
import HeroSlider from "../components/HeroSlider";
import ServiceCard from "../components/ServiceCard";


const Home = () => {
  const [services, setServices] = useState([]);
  const [tips, setTips] = useState([]);
  const [vets, setVets] = useState([]);

  useEffect(() => {
    fetch("../public/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((error) => console.error("Error loading services:", error));

     fetch("../public/tips.json")
      .then((res) => res.json())
      .then((data) => setTips(data))
      .catch((error) => console.error("Error loading tips:", error));

    fetch("../public/vets.json")
      .then((res) => res.json())
      .then((data) => setVets(data))
      .catch((error) => console.error("Error loading vets:", error));
  }, []);

  return (
    <div>
      {/* Hero Slider */}
      <HeroSlider />

      <section className="w-full mx-auto px-4 md:px-20 py-10 bg-gray-50">
        <h2 className="text-xl md:text-3xl text-center font-bold mb-8 text-gray-800">
          Popular Winter Care Services
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.length > 0 ? (
            services.map((service) => (
              <ServiceCard key={service.serviceId} service={service} />
            ))
          ) : (
            <p className="text-center text-gray-500 w-full col-span-full">
              Loading services...
            </p>
          )}
        </div>
      </section>
      
       {/* 🐾 Winter Care Tips Section */}
      <section className="w-full bg-[#E8F5F2] py-12 px-4 md:px-20">
        <h2 className="text-xl md:text-3xl text-center font-bold mb-10 text-gray-800">
          Winter Care Tips for Pets
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
          {tips.length > 0 ? (
            tips.map((tip) => (
              <div
                key={tip.id}
                className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-all"
              >
                <div className="text-5xl mb-3">{tip.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{tip.title}</h3>
                <p className="text-gray-600 text-sm">{tip.desc}</p>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 w-full col-span-full">
              Loading tips...
            </p>
          )}
        </div>
      </section>

      {/* 👩‍⚕️ Meet Our Expert Vets */}
      <section className="w-full py-12 px-4 md:px-20 bg-white">
        <h2 className="text-xl md:text-3xl text-center font-bold mb-10 text-gray-800">
          Meet Our Expert Vets
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {vets.length > 0 ? (
            vets.map((vet) => (
              <div
                key={vet.id}
                className="bg-gray-50 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all"
              >
                <img
                  src={vet.image}
                  alt={vet.name}
                  className="w-full h-60 object-cover object-top-left"
                />
                <div className="p-5 text-center">
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">
                    {vet.name}
                  </h3>
                  <p className="text-[#60AEA0] font-medium">{vet.specialty}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 w-full col-span-full">
              Loading vets...
            </p>
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;
