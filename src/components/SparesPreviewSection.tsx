import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const previewData = [
  {
    title: "Shock Absorbers",
    description:
      "High-quality shock absorbers to reduce vibration and noise during spin cycles.",
    image: "/assets/inlet_outlet.jpg",
  },
  {
    title: "Inlet/Outlet Pipes",
    description:
      "Durable pipes and hoses for reliable water flow and drainage systems.",
    image: "/assets/inlet_outlet.jpg",
  },
  {
    title: "Stabilizers",
    description:
      "Precision-engineered stabilizers to keep your washing machine balanced and secure.",
    image: "/assets/stands.jpg",
  },
];

export default function SparesPreviewSection() {
  return (
    <section className="px-4 sm:px-10 lg:px-32 py-16 bg-white">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-blue-900">
          Browse ASBO Spares Categories
        </h2>
        <p className="text-gray-600 mt-2 max-w-xl mx-auto">
          Find the exact washing machine parts you need from our extensive
          collection of genuine spares.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {previewData.map((item, index) => (
          <div
            key={index}
            className="rounded-xl overflow-hidden shadow-md bg-white transform transition duration-300 hover:shadow-xl hover:scale-[1.02] cursor-pointer hover:ring-2 hover:ring-blue-200
"
          >
            <div className="overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg text-blue-900">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 mt-1">{item.description}</p>
              <Link
                href="/asbo-spares"
                className="text-emerald-600 font-medium text-sm mt-2 inline-block"
              >
                Explore Products →
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link href="/asbo-spares">
          <Button className="bg-blue-900 text-white hover:bg-blue-800">
            View All Categories
          </Button>
        </Link>
      </div>
    </section>
  );
}
