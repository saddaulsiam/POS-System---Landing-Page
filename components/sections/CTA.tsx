"use client";

import { useState } from "react";

export default function CTA() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    business: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate API
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSuccess(true);
    setIsSubmitting(false);

    setTimeout(() => {
      setFormData({ name: "", email: "", phone: "", business: "" });
      setIsSuccess(false);
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));

    if (errors[id]) {
      setErrors((prev) => ({ ...prev, [id]: "" }));
    }
  };

  return (
    <section id="contact" className="bg-gray-50 py-20">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl bg-linear-to-br from-blue-600 to-indigo-700 shadow-2xl">
          <div className="grid grid-cols-1 gap-0 lg:grid-cols-2">
            {/* LEFT SIDE CONTENT */}
            <div className="flex flex-col justify-center p-8 text-white lg:p-12">
              <h2 className="mb-6 text-3xl font-bold sm:text-4xl lg:text-5xl">
                Get Started Today
              </h2>
              <p className="mb-8 text-lg text-blue-100 sm:text-xl">
                Join hundreds of successful businesses using SmartPOS. Start
                your free trial today.
              </p>

              <div className="mb-8 space-y-4">
                {[
                  "60-day free trial",
                  "No credit card required",
                  "Setup in 30 minutes",
                  "Cancel anytime",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-400">
                      <svg
                        className="h-5 w-5 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        />
                      </svg>
                    </div>
                    <span className="text-lg">{item}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-blue-400/30 pt-6">
                <p className="text-sm text-blue-200">
                  Trusted by 500+ businesses worldwide
                </p>
              </div>
            </div>

            {/* RIGHT SIDE FORM */}
            <div className="bg-white p-8 lg:p-12">
              <h3 className="mb-6 text-2xl font-bold text-gray-900">
                Start Your Free Trial
              </h3>

              {isSuccess ? (
                <div className="flex min-h-[400px] items-center justify-center text-center">
                  <div className="animate-in zoom-in fade-in duration-500">
                    <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
                      <svg
                        className="h-10 w-10 text-green-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <h4 className="mb-2 text-2xl font-bold text-gray-900">
                      Success!
                    </h4>
                    <p className="text-gray-600">
                      We&apos;ll be in touch shortly.
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* NAME */}
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium text-gray-700"
                    >
                      Full Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className={`w-full rounded-lg border-2 px-4 py-3 transition-all outline-none ${
                        errors.name
                          ? "border-red-500 focus:border-red-500 focus:ring-red-200"
                          : "border-gray-300 focus:border-blue-500 focus:ring-blue-200"
                      }`}
                      required
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                    )}
                  </div>

                  {/* EMAIL */}
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-gray-700"
                    >
                      Email Address *
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      className={`w-full rounded-lg border-2 px-4 py-3 transition-all outline-none ${
                        errors.email
                          ? "border-red-500 focus:border-red-500 focus:ring-red-200"
                          : "border-gray-300 focus:border-blue-500 focus:ring-blue-200"
                      }`}
                      required
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* PHONE */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-medium text-gray-700"
                    >
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      className="w-full rounded-lg border-2 border-gray-300 px-4 py-3 transition-all outline-none focus:border-blue-500 focus:ring-blue-200"
                    />
                  </div>

                  {/* BUSINESS */}
                  <div>
                    <label
                      htmlFor="business"
                      className="mb-2 block text-sm font-medium text-gray-700"
                    >
                      Business Name
                    </label>
                    <input
                      id="business"
                      type="text"
                      value={formData.business}
                      onChange={handleChange}
                      placeholder="Your Business Name"
                      className="w-full rounded-lg border-2 border-gray-300 px-4 py-3 transition-all outline-none focus:border-blue-500 focus:ring-blue-200"
                    />
                  </div>

                  {/* SUBMIT BUTTON */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative w-full rounded-lg bg-linear-to-r from-blue-600 to-indigo-600 px-6 py-4 text-lg font-bold text-white shadow-lg transition-all hover:scale-[1.02] hover:from-blue-700 hover:to-indigo-700 disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg
                          className="h-5 w-5 animate-spin"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <circle
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                            className="opacity-25"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Processing...
                      </span>
                    ) : (
                      <>
                        Get Started Free
                        <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">
                          →
                        </span>
                      </>
                    )}
                  </button>

                  <p className="text-center text-xs text-gray-600">
                    By signing up, you agree to our{" "}
                    <a className="text-blue-600 hover:underline">Terms</a> and{" "}
                    <a className="text-blue-600 hover:underline">
                      Privacy Policy
                    </a>
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
