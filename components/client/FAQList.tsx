"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "How long does it take to set up SmartPOS?",
    answer:
      "Most businesses are up and running in under 30 minutes. Our intuitive setup wizard guides you through adding products, configuring settings, and training your team. We also offer free onboarding support to ensure a smooth transition.",
  },
  {
    question: "Can I use SmartPOS offline?",
    answer:
      "Yes! The desktop version works completely offline. All your data is stored locally and syncs automatically when you're back online. Perfect for areas with unreliable internet connections.",
  },
  {
    question: "What payment methods does SmartPOS support?",
    answer:
      "SmartPOS supports cash, credit/debit cards, mobile payments, and split payments. We integrate with major payment processors and can accommodate custom payment solutions for your business.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Absolutely. We use bank-level encryption for all data transmission and storage. Your data is backed up automatically, and you have full control over access permissions for your team members.",
  },
  {
    question: "Can I import my existing product data?",
    answer:
      "Yes! You can easily import products from Excel, CSV, or most other POS systems. Our support team can help with bulk imports and data migration from your current system.",
  },
  {
    question: "What kind of support do you offer?",
    answer:
      "We offer email support for all plans, priority support for Professional plans, and 24/7 phone support for Enterprise customers. We also have extensive documentation, video tutorials, and a community forum.",
  },
  {
    question: "Can I try before I buy?",
    answer:
      "Yes! We offer a 60-day free trial with full access to all features. No credit card required. If you need more time to evaluate, just contact us and we'll extend your trial.",
  },
  {
    question: "What happens if I need to cancel?",
    answer:
      "You can cancel anytime with no penalties or fees. Your data remains accessible for 90 days after cancellation, and you can export everything before closing your account.",
  },
];

export default function FAQList() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="mx-auto max-w-4xl">
      <div className="grid gap-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`group overflow-hidden rounded-xl border bg-white transition-all duration-300 ${
              openIndex === index
                ? "-translate-y-1 border-blue-500 shadow-lg shadow-blue-100/50"
                : "border-gray-100 shadow-xs hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-md"
            }`}
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className={`flex w-full items-start justify-between gap-4 px-6 py-6 text-left transition-all duration-300 sm:px-8 ${
                openIndex === index
                  ? "bg-linear-to-br from-blue-50/80 via-sky-50/60 to-indigo-50/40"
                  : "hover:bg-linear-to-br hover:from-blue-50/80 hover:via-sky-50/60 hover:to-indigo-50/40"
              }`}
            >
              <div className="flex flex-1 items-start gap-4">
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg transition-all duration-300 ${
                    openIndex === index
                      ? "scale-110 bg-blue-600 shadow-md"
                      : "bg-blue-100 group-hover:scale-110 group-hover:bg-blue-600 group-hover:shadow-md"
                  }`}
                >
                  <svg
                    className={`h-5 w-5 transition-colors duration-300 ${
                      openIndex === index
                        ? "text-white"
                        : "text-blue-600 group-hover:text-white"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <span
                  className={`pt-1 text-lg font-semibold transition-colors duration-300 ${
                    openIndex === index
                      ? "text-blue-600"
                      : "text-gray-900 group-hover:text-blue-600"
                  }`}
                >
                  {faq.question}
                </span>
              </div>
              <div
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-all duration-300 ${
                  openIndex === index
                    ? "scale-110 bg-blue-100"
                    : "bg-gray-100 group-hover:scale-110 group-hover:bg-blue-100"
                }`}
              >
                <svg
                  className={`h-5 w-5 transition-all duration-300 ${
                    openIndex === index
                      ? "rotate-180 text-blue-600"
                      : "text-gray-600 group-hover:text-blue-600"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index
                  ? "max-h-96 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="px-6 pb-6 pl-20 sm:px-8">
                <div className="border-l-4 border-blue-200 py-2 pl-6">
                  <p className="leading-relaxed text-gray-600">{faq.answer}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
