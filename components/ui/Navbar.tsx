import MobileMenu from "../client/MobileMenu";

export default function Navbar() {
  const menuItems = [
    { href: "#features", label: "Features" },
    { href: "#pricing", label: "Pricing" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <nav className="fixed top-0 right-0 left-0 z-50 border-b border-gray-200 bg-white/95 shadow-sm backdrop-blur-md">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-linear-to-br from-blue-600 to-indigo-600 shadow-lg transition-transform hover:scale-105">
              <span className="text-xl font-bold text-white">S</span>
            </div>
            <span className="bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-2xl font-bold text-transparent">
              SmartPOS
            </span>
          </div>

          <div className="hidden items-center space-x-8 md:flex">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="group relative font-medium text-gray-700 transition-all hover:text-blue-600"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-blue-600 transition-all group-hover:w-full"></span>
              </a>
            ))}
            <a
              href="#contact"
              className="rounded-xl bg-linear-to-r from-blue-600 to-indigo-600 px-6 py-2.5 font-semibold text-white transition-all hover:scale-105 hover:shadow-lg"
            >
              Get Started
            </a>
          </div>

          <MobileMenu menuItems={menuItems} />
        </div>
      </div>
    </nav>
  );
}
