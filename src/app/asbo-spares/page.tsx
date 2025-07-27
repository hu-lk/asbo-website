"use client";

import { Input } from "@/components/ui/input";
import { useState } from "react";
import Image from "next/image";

const spareTypes = [
  { name: "Door lock", image: "/assets/stands.jpg" },
  { name: "Single Inlet valve", image: "/assets/stands.jpg" },
  { name: "Double Inlet valve", image: "/assets/stands.jpg" },
  { name: "3 way Inlet valve", image: "/assets/stands.jpg" },
  { name: "Sensor", image: "/assets/stands.jpg" },
  { name: "Drain motor", image: "/assets/stands.jpg" },
  { name: "Single drain pump", image: "/assets/stands.jpg" },
  { name: "Double drain pump", image: "/assets/stands.jpg" },
  { name: "Inlet pipe 1.5m", image: "/assets/stands.jpg" },
  { name: "Inlet pipe 2.3m", image: "/assets/stands.jpg" },
  { name: "Outlet pipe", image: "/assets/stands.jpg" },
  { name: "Door handle", image: "/assets/stands.jpg" },
  { name: "Dampers", image: "/assets/stands.jpg" },
  { name: "Suspension rods", image: "/assets/stands.jpg" },
  { name: "Gear box", image: "/assets/stands.jpg" },
  { name: "Triangle lg,samsung,ifb", image: "/assets/stands.jpg" },
];

export default function AsboSparesPage() {
  const [search, setSearch] = useState("");

  const filtered = spareTypes.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="px-4 sm:px-10 lg:px-32 py-16 bg-white min-h-screen">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-blue-900">All ASBO Spares</h1>
        <p className="text-gray-600 max-w-xl mx-auto mt-2">
          Browse our full range of high-quality washing machine spare parts.
        </p>
      </div>

      <div className="max-w-md mx-auto mb-10">
        <Input
          type="text"
          placeholder="Search spare type..."
          className="bg-gray-100"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((item, index) => (
          <div
            key={index}
            className="rounded-xl overflow-hidden shadow-md bg-white transform transition duration-300 hover:shadow-xl hover:scale-[1.02] cursor-pointer hover:ring-2 hover:ring-blue-200"
          >
            <Image
              src={item.image}
              alt="Stands"
              width={400}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="font-semibold text-lg text-blue-900">
                {item.name}
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                Available for LG, IFB, Samsung
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
