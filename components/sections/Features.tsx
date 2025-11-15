"use client";
import AnimatedSection from "../ui/AnimatedSection";
import { useState } from "react";
import FeatureDemoModal from "../ui/FeatureDemoModal";

export default function Features() {
  const [demoFeature, setDemoFeature] = useState<{
    title: string;
    demoUrl: string;
    description: string;
  } | null>(null);

  const features = [
    {
      icon: "🛒",
      title: "Fast Checkout",
      description:
        "Lightning-fast barcode scanning and intuitive interface for quick customer checkout.",
      demoUrl: "https://www.youtube.com/embed/1Q8fG0TtVAY", // Example video
    },
    {
      icon: "📦",
      title: "Inventory Management",
      description:
        "Real-time stock tracking, low stock alerts, and automatic reorder notifications.",
      demoUrl: "https://www.youtube.com/embed/2Vv-BfVoq4g",
    },
    {
      icon: "📊",
      title: "Sales Analytics",
      description:
        "Detailed reports and insights to help you make data-driven business decisions.",
      demoUrl: "https://www.youtube.com/embed/3fumBcKC6RE",
    },
    {
      icon: "👥",
      title: "Customer Management",
      description:
        "Track customer purchases, loyalty programs, and personalized promotions.",
      demoUrl: "https://www.youtube.com/embed/4UZrsTqkcW4",
    },
    {
      icon: "💰",
      title: "Multiple Payment Methods",
      description:
        "Accept cash, cards, mobile payments, and split payments seamlessly.",
      demoUrl: "https://www.youtube.com/embed/5qap5aO4i9A",
    },
    {
      icon: "👨‍💼",
      title: "Employee Management",
      description:
        "Role-based access, time tracking, and payroll integration for your team.",
      demoUrl: "https://www.youtube.com/embed/6Dh-RL__uN4",
    },
    {
      icon: "🧾",
      title: "Receipt Printing",
      description:
        "Professional receipts with your branding, both thermal and standard printing.",
      demoUrl: "https://www.youtube.com/embed/7QUtEmBT_-w",
    },
    {
      icon: "🔄",
      title: "Product Variants",
      description:
        "Manage products with multiple sizes, colors, and variations effortlessly.",
      demoUrl: "https://www.youtube.com/embed/8ZcmTl_1ER8",
    },
    {
      icon: "📱",
      title: "Desktop & Web",
      description:
        "Works on desktop application and web browser for maximum flexibility.",
      demoUrl: "https://www.youtube.com/embed/9bZkp7q19f0",
    },
  ];

  return (
    <section id="features" className="relative overflow-hidden bg-white py-20">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-blue-100/10 blur-3xl"></div>
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-indigo-100/10 blur-3xl"></div>

      <div className="max-w-8xl relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
              />
            </svg>
            Features
          </div>
          <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
            Everything You Need to Run Your Business
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-600">
            Our POS system includes all the features you need to manage sales,
            inventory, customers, and employees in one place.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <AnimatedSection
              key={index}
              animation="fade-up"
              delay={index * 100}
            >
              <div className="group rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg">
                <div className="mb-4 text-5xl transition-transform group-hover:scale-110">
                  {feature.icon}
                </div>
                <h3 className="mb-3 text-xl font-bold text-gray-900 transition-colors group-hover:text-blue-600">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
                <button
                  onClick={() => setDemoFeature(feature)}
                  className="relative mt-4 inline-flex cursor-pointer items-center justify-center rounded-full border-2 border-blue-300 bg-white px-3 py-1.5 text-sm font-medium text-blue-600 shadow-xs transition-all duration-200 hover:border-blue-400 hover:bg-blue-100/70 hover:shadow-md focus:ring-2 focus:ring-blue-300 focus:outline-none active:scale-[0.97]"
                >
                  View Demo
                </button>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
      <FeatureDemoModal
        feature={demoFeature}
        onClose={() => setDemoFeature(null)}
      />
    </section>
  );
}
