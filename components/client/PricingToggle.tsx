"use client";

import { useState } from "react";

interface PricingToggleProps {
  onToggle: (isAnnual: boolean) => void;
}

export default function PricingToggle({ onToggle }: PricingToggleProps) {
  const [isAnnual, setIsAnnual] = useState(false);

  const handleToggle = (value: boolean) => {
    setIsAnnual(value);
    onToggle(value);
  };

  return (
    <div className="inline-flex items-center rounded-full bg-white p-1.5 shadow-md">
      <button
        onClick={() => handleToggle(false)}
        className={`cursor-pointer rounded-full px-6 py-2.5 font-semibold transition-all duration-300 ${
          !isAnnual
            ? "bg-blue-600 text-white shadow-lg"
            : "text-gray-600 hover:text-gray-900"
        }`}
      >
        Monthly
      </button>
      <button
        onClick={() => handleToggle(true)}
        className={`cursor-pointer rounded-full px-6 py-2.5 font-semibold transition-all duration-300 ${
          isAnnual
            ? "bg-blue-600 text-white shadow-lg"
            : "text-gray-600 hover:text-gray-900"
        }`}
      >
        Annual
        <span className="ml-2 rounded-full bg-green-100 px-2.5 py-1 text-xs font-bold text-green-700">
          Save 15%
        </span>
      </button>
    </div>
  );
}
