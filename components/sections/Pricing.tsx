"use client";

import { BadgeCheck, Headphones, RefreshCw, ShieldCheck } from "lucide-react";
import { useState } from "react";
import PricingToggle from "../client/PricingToggle";
import AnimatedSection from "../ui/AnimatedSection";

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Starter",
      price: isAnnual ? 29 : 39,
      period: isAnnual ? "/month (billed annually)" : "/month",
      description: "Perfect for new businesses.",
      features: [
        { name: "User Logins: 3 Cashier, 1 Manager", active: true },
        { name: "Products: Up to 300", active: true },
        { name: "Manage Inventory", active: true },
        { name: "Manage Customer Profiles", active: true },
        { name: "Employee Management", active: false },
        { name: "Product Variants", active: false },
        { name: "Sales Reports: Basic", active: true },
        { name: "Print Receipts", active: true },
        { name: "Custom Receipts", active: true },
        { name: "Parked Sales", active: false },
        { name: "Loyalty Programs", active: false },
        { name: "Multi-Location (outlet) Management", active: false },
        {
          name: "Custom Integrations & Development Service",
          active: false,
        },
        { name: "Dedicated Account Manager", active: false },
        { name: "Training: Online", active: true },
        { name: "Support Channel: Email", active: true },
        { name: "24/7 Phone Support", active: true },
      ],
      cta: "Start 3 Months Free Trial",
      popular: false,
    },
    {
      name: "Standard",
      price: isAnnual ? 59 : 79,
      period: isAnnual ? "/month (billed annually)" : "/month",
      description: "For growing businesses that need more power",
      features: [
        { name: "User Logins: 10 Cashier, 3 Manager", active: true },
        { name: "Unlimited Products", active: true },
        { name: "Manage Inventory", active: true },
        { name: "Manage Customer Profiles", active: true },
        { name: "Employee Management", active: true },
        { name: "Product Variants", active: true },
        { name: "Sales Reports: Advanced", active: true },
        { name: "Print Receipts", active: true },
        { name: "Custom Receipts", active: true },
        { name: "Parked Sales", active: true },
        { name: "Loyalty Programs", active: true },
        { name: "Multi-Location (outlet) Management", active: false },
        {
          name: "Custom Integrations & Development Service",
          active: false,
        },
        { name: "Dedicated Account Manager", active: false },
        { name: "Training: Online", active: true },
        { name: "Support Channel: Priority Email & Chat", active: true },
        { name: "24/7 Phone Support", active: true },
      ],
      cta: "Purchase",
      popular: true,
    },
    {
      name: "Enterprise",
      price: isAnnual ? 99 : 129,
      period: isAnnual ? "/month (billed annually)" : "/month",
      description: "For large businesses with custom needs",
      features: [
        { name: "User Logins: 10 Cashier, 3 Manager", active: true },
        { name: "Unlimited Products", active: true },
        { name: "Manage Inventory", active: true },
        { name: "Manage Customer Profiles", active: true },
        { name: "Employee Management", active: true },
        { name: "Product Variants", active: true },
        { name: "Sales Reports: Advanced", active: true },
        { name: "Print Receipts", active: true },
        { name: "Custom Receipts", active: true },
        { name: "Parked Sales", active: true },
        { name: "Loyalty Programs", active: true },
        { name: "Multi-Location (outlet) Management", active: true },
        {
          name: "Custom Integrations & Development Service",
          active: true,
        },
        { name: "Dedicated Account Manager", active: true },
        { name: "Personalized Onboarding & Training", active: true },
        { name: "Dedicated Enterprise Support Queue", active: true },
        { name: "24/7 Phone Support", active: true },
      ],
      cta: "Purchase",
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="relative overflow-hidden bg-white py-20">
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-linear-to-br from-blue-50/30 to-indigo-50/20"></div>
      <div className="absolute top-1/4 right-0 h-96 w-96 rounded-full bg-blue-200/10 blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 h-96 w-96 rounded-full bg-indigo-200/10 blur-3xl"></div>

      <div className="max-w-8xl relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-block">
            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              Plans and pricing
            </span>
          </div>
          <h2 className="mb-5 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Choose the plan that&apos;s right for your business. All plans
            include a 60-day free trial.
          </p>

          <div className="mt-5 mb-8 flex items-center justify-center space-x-10 text-sm text-gray-500">
            <p className="flex items-center justify-center gap-2">
              <Headphones className="size-4" />
              24/7 support
            </p>

            <p className="flex items-center justify-center gap-2">
              <ShieldCheck className="size-4" />
              30-day money-back guarantee
            </p>

            <p className="flex items-center justify-center gap-2">
              <RefreshCw className="size-4" />
              Cancel anytime
            </p>
          </div>

          {/* Toggle */}
          <PricingToggle onToggle={setIsAnnual} />
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {plans.map((plan, index) => (
            <AnimatedSection
              key={index}
              animation="fade-up"
              delay={index * 100}
              className={`group relative rounded-2xl bg-white p-8 transition-all duration-300 ${
                plan.popular
                  ? "border-2 border-blue-500 shadow-xl shadow-blue-100/50 hover:-translate-y-2 hover:shadow-2xl"
                  : "border border-gray-200 shadow-md hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 rounded-full bg-linear-to-r from-blue-600 to-indigo-600 px-6 py-2 text-sm font-bold text-white shadow-lg">
                    <svg
                      className="h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-8 text-center">
                <h3 className="mb-2 text-2xl font-bold text-gray-900">
                  {plan.name}
                </h3>
                <p className="mb-4 text-gray-600">{plan.description}</p>
                <div className="mb-2">
                  {typeof plan.price === "number" ? (
                    <>
                      <span className="text-5xl font-bold text-gray-900">
                        ${plan.price}
                      </span>
                      <span className="text-gray-600">{plan.period}</span>
                    </>
                  ) : (
                    <span className="text-4xl font-bold text-gray-900">
                      {plan.price}
                    </span>
                  )}
                </div>
              </div>

              <ul className="mb-8 space-y-4">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div
                      className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${feature.active ? "bg-green-100" : "bg-red-100"}`}
                    >
                      {feature.active ? (
                        <svg
                          className="h-4 w-4 text-green-600"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ) : (
                        <svg
                          className="h-4 w-4 text-red-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      )}
                    </div>
                    <span className="text-gray-700">{feature.name}</span>
                  </li>
                ))}
              </ul>

              {/* Only Starter plan offers free trial, but now it scrolls to #contact */}
              {plan.name === "Starter" ? (
                <a
                  href="#contact"
                  className={`block w-full rounded-xl px-6 py-3.5 text-center font-bold transition-all duration-300 ${
                    plan.popular
                      ? "bg-linear-to-r from-blue-600 to-indigo-600 text-white shadow-lg hover:scale-105 hover:from-blue-700 hover:to-indigo-700 hover:shadow-xl"
                      : "bg-gray-100 text-gray-900 hover:scale-105 hover:bg-gray-200"
                  }`}
                >
                  {plan.cta}
                </a>
              ) : (
                <button
                  type="button"
                  // Replace with your purchase logic or link
                  className={`block w-full cursor-pointer rounded-xl px-6 py-3.5 text-center font-bold transition-all duration-300 ${
                    plan.popular
                      ? "bg-linear-to-r from-blue-600 to-indigo-600 text-white shadow-lg hover:scale-105 hover:from-blue-700 hover:to-indigo-700 hover:shadow-xl"
                      : "bg-gray-100 text-gray-900 hover:scale-105 hover:bg-gray-200"
                  }`}
                >
                  Purchase
                </button>
              )}
            </AnimatedSection>
          ))}
        </div>
      </div>

      {/* Secure checkout note */}
      <div className="mt-12 flex flex-col items-center">
        <p className="flex items-center gap-2 text-sm text-gray-500">
          <BadgeCheck className="size-4 text-green-500" />
          100% Secure Checkout — SSL Encrypted
        </p>
      </div>
    </section>
  );
}
