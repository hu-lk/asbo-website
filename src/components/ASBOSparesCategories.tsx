"use client";

import Image from "next/image";

const inlet_outlet_image = "/assets/inlet_outlet_image.jpg";
const shock_absorbers_image = "/assets/shock_absorbers_image.jpg";
const stabilizers_image = "/assets/stabilizers_image.jpg";

export default function ASBOSparesCategories() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B365D] mb-4">
            Browse ASBO Spares Categories
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find the exact washing machine parts you need from our extensive
            collection of genuine spares
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="h-48 overflow-hidden">
              <Image
                src={shock_absorbers_image}
                alt="Shock Absorbers"
                width={400}
                height={300}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#1B365D] mb-2">
                Shock Absorbers
              </h3>
              <p className="text-gray-600 mb-4">
                High-quality shock absorbers to reduce vibration and noise
                during spin cycles.
              </p>
              <a
                href="#"
                className="inline-flex items-center text-[#4AC6B7] font-medium hover:text-[#1B365D] transition-colors duration-300"
              >
                Explore Products
                <span className="ml-2">→</span>
              </a>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="h-48 overflow-hidden">
              <Image
                src={inlet_outlet_image}
                alt="Inlet/Outlet Pipes"
                width={400}
                height={300}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#1B365D] mb-2">
                Inlet/Outlet Pipes
              </h3>
              <p className="text-gray-600 mb-4">
                Durable pipes and hoses for reliable water flow and drainage
                systems.
              </p>
              <a
                href="#"
                className="inline-flex items-center text-[#4AC6B7] font-medium hover:text-[#1B365D] transition-colors duration-300"
              >
                Explore Products
                <span className="ml-2">→</span>
              </a>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="h-48 overflow-hidden">
              <Image
                src={stabilizers_image}
                alt="Stabilizers"
                width={400}
                height={300}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#1B365D] mb-2">
                Stabilizers
              </h3>
              <p className="text-gray-600 mb-4">
                Precision-engineered stabilizers to keep your washing machine
                balanced and secure.
              </p>
              <a
                href="#"
                className="inline-flex items-center text-[#4AC6B7] font-medium hover:text-[#1B365D] transition-colors duration-300"
              >
                Explore Products
                <span className="ml-2">→</span>
              </a>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="bg-[#1B365D] hover:bg-[#4AC6B7] text-white py-3 px-8 rounded-full font-medium transition-colors duration-300 shadow-lg">
            View All Categories
          </button>
        </div>
      </div>
    </section>
  );
}
