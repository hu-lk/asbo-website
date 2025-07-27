import { CheckCircle, Headphones, BadgeCheck } from "lucide-react";

const features = [
  {
    icon: <BadgeCheck className="w-8 h-8 text-cyan-600" />,
    title: "Quality Assurance",
    description:
      "All our products undergo rigorous testing to ensure they meet the highest standards of quality and durability.",
  },
  {
    icon: <CheckCircle className="w-8 h-8 text-cyan-600" />,
    title: "Genuine Parts",
    description:
      "We only stock genuine parts that are compatible with all major washing machine brands for reliable performance.",
  },
  {
    icon: <Headphones className="w-8 h-8 text-cyan-600" />,
    title: "Expert Support",
    description:
      "Our team of experts is always available to help you find the right parts and provide installation guidance.",
  },
];

export default function WhyChooseSection() {
  return (
    <section className="px-4 sm:px-10 lg:px-32 py-16 bg-slate-50">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-blue-900">Why Choose ASBO</h2>
        <p className="text-gray-600 mt-2">
          We&apos;re committed to providing the highest quality washing machine
          parts and products
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-sm text-center px-6 py-8 transition hover:shadow-md"
          >
            <div className="mb-4 flex justify-center">{item.icon}</div>
            <h3 className="font-semibold text-blue-900 text-lg">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm mt-2">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
