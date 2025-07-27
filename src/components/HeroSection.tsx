"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { WashingMachine, Utensils, Microwave, Snowflake } from "lucide-react";
import { AirVent } from "lucide-react"; // use for AC
import ServiceCard from "./ServiceCard";

export default function HeroSection() {
  return (
    <section className="px-4 sm:px-10 lg:px-32 py-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Left content */}
      <div className="flex flex-col gap-6 text-center lg:text-left">
        <h1 className="text-4xl sm:text-5xl font-bold text-blue-900 leading-tight">
          Premium Appliance Parts
          <br />& Services
        </h1>
        <p className="text-gray-600 text-lg">
          Your trusted partner for high-quality spare parts across all major
          home appliances.
        </p>

        {/* Service categories */}
        <div className="grid grid-cols-2 gap-4 mt-4">
          <ServiceCard
            icon={<WashingMachine className="w-5 h-5" />}
            title="Washing Machine"
            subtitle="All brands & models"
          />
          <ServiceCard
            icon={<Utensils className="w-5 h-5" />}
            title="Dishwasher"
            subtitle="Complete solutions"
          />
          <ServiceCard
            icon={<Microwave className="w-5 h-5" />}
            title="Microwave"
            subtitle="Expert repairs"
          />
          <ServiceCard
            icon={<Snowflake className="w-5 h-5" />}
            title="Refrigerator"
            subtitle="Cooling solutions"
          />
          <ServiceCard
            icon={<AirVent className="w-5 h-5" />}
            title="AC"
            subtitle="Efficient cooling"
          />
        </div>

        <div className="mt-6">
          <Button
            className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-2 rounded-md"
            onClick={() => (window.location.href = "/asbo-services")}
          >
            Book a Service
          </Button>
        </div>
      </div>

      {/* Right image */}
      <div className="flex justify-center">
        <Image
          src="/assets/hero_page_image.jpg"
          alt="Appliances"
          width={600}
          height={400}
          className="rounded-xl object-cover shadow-lg"
        />
      </div>
    </section>
  );
}
