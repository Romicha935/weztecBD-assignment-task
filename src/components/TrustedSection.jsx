import React from "react";

const TrustedSection = () => {
  const companies = [
    "Google",
    "Facebook",
    "Amazon",
    "Netflix",
    "Microsoft",
    "Apple",
  ];

  return (
    <section className=" max-w-3xl mx-auto  text-center">
 
      <h2 className="text-gray-700 font-semibold text-sm uppercase tracking-wide mb-6">
        Trusted by +10,000 consultants & organisations
      </h2>

     
      <div className="bg-gray-100 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 px-6">
        {companies.map((name, index) => (
          <div
            key={index}
            className="flex items-center justify-center cursor-pointer  transition"
          >
            <p className="font-medium text-gray-600">{name}</p>
          </div>
        ))}
      </div>

      
      <div className="mt-10 border-b-4 border-blue-500 w-full"></div>
    </section>
  );
};

export default TrustedSection;
