"use client";

import { useRouter } from "next/navigation";

export default function ServiceCard({
  icon,
  title,
  subtitle,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}) {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push("/asbo-services")}
      className="cursor-pointer border border-gray-200 rounded-lg p-4 bg-white shadow-sm flex items-start gap-3 text-left hover:shadow-md hover:border-blue-300 transition duration-200"
    >
      <div className="text-blue-600">{icon}</div>
      <div>
        <div className="font-semibold text-sm">{title}</div>
        <div className="text-xs text-gray-500">{subtitle}</div>
      </div>
    </div>
  );
}
