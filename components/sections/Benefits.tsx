import AnimatedSection from "../ui/AnimatedSection";

export default function Benefits() {
  const benefits = [
    {
      icon: (
        <svg
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Save Time",
      description:
        "Reduce checkout time by 50% with our fast and intuitive interface.",
      stat: "50%",
      label: "Faster Checkout",
    },
    {
      icon: (
        <svg
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Reduce Errors",
      description:
        "Automatic calculations and barcode scanning eliminate manual entry mistakes.",
      stat: "99%",
      label: "Accuracy Rate",
    },
    {
      icon: (
        <svg
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
          />
        </svg>
      ),
      title: "Increase Sales",
      description:
        "Better inventory management and customer insights lead to more sales.",
      stat: "30%",
      label: "Sales Growth",
    },
    {
      icon: (
        <svg
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Happy Customers",
      description:
        "Faster service and loyalty programs keep customers coming back.",
      stat: "4.9/5",
      label: "Customer Rating",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-linear-to-br from-gray-50 to-blue-50 py-20">
      <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-blue-200/10 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-indigo-200/10 blur-3xl"></div>

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
                d="M5 13l4 4L19 7"
              />
            </svg>
            Benefits
          </div>
          <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
            Why Businesses Love Our POS System
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-gray-600">
            Join hundreds of successful businesses already using our platform
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <AnimatedSection
              key={index}
              animation="fade-up"
              delay={index * 100}
            >
              <div className="group">
                <div className="relative h-full overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 shadow-xs transition-all duration-300 hover:-translate-y-2 hover:border-blue-300 hover:shadow-lg">
                  {/* Icon Badge */}
                  <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-blue-500 to-indigo-600 text-white shadow-md transition-transform group-hover:scale-110 group-hover:rotate-3">
                    {benefit.icon}
                  </div>

                  {/* Stat */}
                  <div className="mb-2 bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-5xl font-bold text-transparent">
                    {benefit.stat}
                  </div>

                  {/* Label */}
                  <div className="mb-4 text-sm font-semibold tracking-wide text-blue-600 uppercase">
                    {benefit.label}
                  </div>

                  {/* Divider */}
                  <div className="mb-4 h-1 w-12 rounded-full bg-linear-to-r from-blue-600 to-indigo-600"></div>

                  {/* Title & Description */}
                  <h3 className="mb-3 text-xl font-bold text-gray-900">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">{benefit.description}</p>

                  {/* Hover Gradient Overlay */}
                  <div className="pointer-events-none absolute inset-0 rounded-2xl bg-linear-to-br from-blue-600/0 to-indigo-600/0 opacity-0 transition-opacity group-hover:opacity-5"></div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
