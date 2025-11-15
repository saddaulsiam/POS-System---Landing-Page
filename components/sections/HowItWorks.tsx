import AnimatedSection from "../ui/AnimatedSection";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Sign Up & Setup",
      description:
        "Create your account in 2 minutes. Our setup wizard helps you configure your store, add products, and customize settings.",
      icon: "📝",
    },
    {
      number: "02",
      title: "Add Your Products",
      description:
        "Import from spreadsheet or add manually. Include images, variants, prices, and stock levels. Barcode generation is automatic.",
      icon: "📦",
    },
    {
      number: "03",
      title: "Train Your Team",
      description:
        "Invite employees and set permissions. Our intuitive interface means minimal training needed - most staff learn in under an hour.",
      icon: "👥",
    },
    {
      number: "04",
      title: "Start Selling",
      description:
        "Begin processing sales immediately. Accept payments, print receipts, and track everything in real-time. It's that simple!",
      icon: "🚀",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-20">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-blue-100/20 blur-3xl"></div>
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-indigo-100/20 blur-3xl"></div>

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
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            How It Works
          </div>
          <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
            Get Started in 4 Easy Steps
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-gray-600">
            From signup to first sale in under 30 minutes
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <AnimatedSection
              key={index}
              animation="fade-up"
              delay={index * 150}
            >
              <div className="group relative">
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="absolute top-16 left-full hidden h-0.5 w-full -translate-x-8 bg-linear-to-r from-blue-300 to-blue-100 lg:block" />
                )}

                <div className="relative h-full overflow-hidden rounded-2xl border-2 border-blue-100 bg-linear-to-br from-blue-50 to-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-300 hover:shadow-2xl">
                  {/* Step Number Badge */}
                  <div className="absolute top-4 right-4 flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-blue-600 to-indigo-600 text-sm font-bold text-white opacity-80 shadow-md">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-white text-5xl shadow-lg ring-2 ring-blue-100 transition-transform group-hover:scale-110 group-hover:rotate-3">
                    {step.icon}
                  </div>

                  {/* Step Label */}
                  <div className="mb-3 text-xs font-bold tracking-wider text-blue-600 uppercase">
                    Step {step.number}
                  </div>

                  {/* Title */}
                  <h3 className="mb-4 text-xl font-bold text-gray-900">
                    {step.title}
                  </h3>

                  {/* Divider */}
                  <div className="mb-4 h-1 w-12 rounded-full bg-linear-to-r from-blue-600 to-indigo-600"></div>

                  {/* Description */}
                  <p className="leading-relaxed text-gray-600">
                    {step.description}
                  </p>

                  {/* Hover Gradient Overlay */}
                  <div className="pointer-events-none absolute inset-0 rounded-2xl bg-linear-to-br from-blue-600/0 to-indigo-600/0 opacity-0 transition-opacity group-hover:opacity-5"></div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#pricing"
            className="group inline-flex items-center gap-2 rounded-xl bg-linear-to-r from-blue-600 to-indigo-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-2xl"
          >
            Start Your Free Trial
            <svg
              className="h-5 w-5 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
