"use client";

import Image from "next/image";

const hero_page_image_path = "/assets/hero_page_image.jpg";

export default function Hero() {
  return (
    <section className="relative">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 pr-0 md:pr-8 mb-10 md:mb-0">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1B365D] mb-4">
              Premium Washing Machine Parts
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Discover genuine ASBO spares for all major washing machine brands.
              Quality parts for reliable performance.
            </p>
            <button className="bg-[#1B365D] hover:bg-[#4AC6B7] text-white py-3 px-8 rounded-full font-medium transition-colors duration-300 shadow-lg">
              Shop Now
            </button>
          </div>
          <div className="bg-red-500 text-white p-4">Tailwind is working!</div>

          <div className="w-full md:w-1/2 relative">
            <div className="bg-[#f5f5f5] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={hero_page_image_path}
                alt="ASBO Spares"
                width={600}
                height={500}
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
