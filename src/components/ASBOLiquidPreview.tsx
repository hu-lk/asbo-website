"use client";

import Image from "next/image";

const liquidImagePath = "/assets/liquid_image.jpg";
export default function ASBOLiquidPreview() {
  return (
    <section className="bg-gradient-to-r from-[#e6f7f5] to-[#f5f5f5] py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-10 md:mb-0 order-2 md:order-1">
            <Image
              src={liquidImagePath}
              alt="ASBO Liquid"
              width={300}
              height={600}
              className="mx-auto max-w-[300px]"
            />
          </div>
          <div className="w-full md:w-1/2 pl-0 md:pl-8 order-1 md:order-2">
            <div className="bg-white bg-opacity-80 p-8 rounded-2xl shadow-lg">
              <span className="inline-block bg-[#4AC6B7] text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
                Coming Soon
              </span>
              <h2 className="text-4xl font-bold text-[#1B365D] mb-4">
                ASBO Cloth Washing Liquid
              </h2>
              <p className="text-gray-600 mb-6">
                Experience deep cleaning performance with our premium washing
                liquid. Specially formulated for all fabric types.
              </p>
              <div className="mb-8">
                <p className="text-[#1B365D] font-medium mb-2">Key Features:</p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#4AC6B7] rounded-full mr-2"></span>
                    <span>Deep cleaning formula</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#4AC6B7] rounded-full mr-2"></span>
                    <span>Gentle on fabrics</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#4AC6B7] rounded-full mr-2"></span>
                    <span>Fresh scent technology</span>
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-gray-600 mb-3">
                  Be the first to know when we launch:
                </p>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="flex-1 border border-gray-300 rounded-l-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#4AC6B7] focus:border-transparent text-sm"
                  />
                  <button className="bg-[#1B365D] hover:bg-[#4AC6B7] text-white px-6 py-2 rounded-r-full transition-colors duration-300">
                    Notify Me
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
