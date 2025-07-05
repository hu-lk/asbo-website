"use client";

import { FaMedal, FaCheckCircle, FaHeadset } from "react-icons/fa";

export default function WhyChooseASBO() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B365D] mb-4">
            Why Choose ASBO
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We&apos;re committed to providing the highest quality washing
            machine parts and products
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-md text-center">
            <div className="w-16 h-16 bg-[#e6f7f5] rounded-full flex items-center justify-center mx-auto mb-6">
              <FaMedal className="text-2xl text-[#4AC6B7]" />
            </div>
            <h3 className="text-xl font-bold text-[#1B365D] mb-3">
              Quality Assurance
            </h3>
            <p className="text-gray-600">
              All our products undergo rigorous testing to ensure they meet the
              highest standards of quality and durability.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md text-center">
            <div className="w-16 h-16 bg-[#e6f7f5] rounded-full flex items-center justify-center mx-auto mb-6">
              <FaCheckCircle className="text-2xl text-[#4AC6B7]" />
            </div>
            <h3 className="text-xl font-bold text-[#1B365D] mb-3">
              Genuine Parts
            </h3>
            <p className="text-gray-600">
              We only stock genuine parts that are compatible with all major
              washing machine brands for reliable performance.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md text-center">
            <div className="w-16 h-16 bg-[#e6f7f5] rounded-full flex items-center justify-center mx-auto mb-6">
              <FaHeadset className="text-2xl text-[#4AC6B7]" />
            </div>
            <h3 className="text-xl font-bold text-[#1B365D] mb-3">
              Expert Support
            </h3>
            <p className="text-gray-600">
              Our team of experts is always available to help you find the right
              parts and provide installation guidance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
