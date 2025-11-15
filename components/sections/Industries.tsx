export default function Industries() {
  const industries = [
    {
      name: "Retail Stores",
      icon: "🏪",
      description:
        "Perfect for grocery stores, convenience stores, and retail shops",
      features: ["Barcode scanning", "Inventory tracking", "Loyalty programs"],
    },
    {
      name: "Restaurants & Cafes",
      icon: "🍽️",
      description: "Streamline orders and kitchen management",
      features: ["Table management", "Quick orders", "Receipt customization"],
    },
    {
      name: "Fashion & Apparel",
      icon: "👗",
      description: "Manage sizes, colors, and seasonal inventory",
      features: ["Product variants", "Style tracking", "Size management"],
    },
    {
      name: "Pharmacies",
      icon: "💊",
      description: "Track medications and prescriptions with ease",
      features: ["Expiry tracking", "Batch management", "Compliance reports"],
    },
    {
      name: "Beauty & Salon",
      icon: "💄",
      description: "Manage services, products, and appointments",
      features: ["Service tracking", "Staff commissions", "Customer history"],
    },
    {
      name: "Electronics",
      icon: "📱",
      description: "Handle complex products with warranties",
      features: ["Serial numbers", "Warranty tracking", "Tech support"],
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gray-900 py-20 text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute h-full w-full bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-size-[14px_24px]"></div>
      </div>
      <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl"></div>

      <div className="max-w-8xl relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-block">
            <span className="rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-lg">
              Industries
            </span>
          </div>
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
            Built for Every Type of Business
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-gray-300">
            Trusted by businesses across multiple industries
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-gray-700/50 bg-gray-800/30 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/50 hover:bg-gray-800/50 hover:shadow-2xl hover:shadow-blue-500/20"
            >
              {/* Icon with gradient background */}
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-blue-600 to-indigo-600 text-4xl shadow-lg transition-transform duration-300 group-hover:scale-110">
                {industry.icon}
              </div>
              <h3 className="mb-3 text-2xl font-bold">{industry.name}</h3>
              <p className="mb-6 text-gray-400">{industry.description}</p>
              <ul className="space-y-3">
                {industry.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3 text-gray-300"
                  >
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-500/20">
                      <svg
                        className="h-4 w-4 text-blue-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
