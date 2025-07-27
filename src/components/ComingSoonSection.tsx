"use client";

import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function ComingSoonSection() {
  return (
    <section className="bg-secondary py-16 px-4 sm:px-10 lg:px-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left - Product Image */}
        <div className="flex justify-center">
          <Image
            src="/assets/combine_liquid_image-removebg-preview.png"
            alt="ASBO Cloth Washing Liquid"
            width={400}
            height={600}
            className="rounded-xl object-cover shadow-lg"
          />
        </div>

        {/* Right - Info & Notify Form */}
        <div className="bg-white shadow-lg rounded-xl p-8 space-y-4">
          <div className="inline-block px-3 py-1 bg-emerald-500 text-white text-xs rounded-full font-semibold">
            Coming Soon
          </div>

          <h2 className="text-3xl font-bold text-blue-900">
            ASBO Cloth Washing Liquid
          </h2>
          <p className="text-gray-600">
            Experience deep cleaning performance with our premium washing
            liquid. Specially formulated for all fabric types.
          </p>

          {/* Features */}
          <ul className="space-y-2 mt-4">
            <FeatureItem text="Deep cleaning formula" />
            <FeatureItem text="Gentle on fabrics" />
            <FeatureItem text="Fresh scent technology" />
          </ul>

          {/* Notify me input */}
          <div className="mt-6 flex flex-col sm:flex-row gap-2">
            <Input
              type="email"
              placeholder="Your email address"
              className="flex-1 bg-gray-100 rounded-md"
            />
            <Button className="bg-blue-900 hover:bg-blue-800 text-white px-6">
              Notify Me
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureItem({ text }: { text: string }) {
  return (
    <li className="flex items-center gap-2 text-sm text-gray-700">
      <CheckCircle className="w-4 h-4 text-emerald-500" />
      <span>{text}</span>
    </li>
  );
}
