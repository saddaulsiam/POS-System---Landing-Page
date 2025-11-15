export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-gray-900 py-16 text-gray-300">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-blue-600 to-indigo-600 shadow-lg">
                <span className="text-xl font-bold text-white">S</span>
              </div>
              <h3 className="text-xl font-bold text-white">SmartPOS</h3>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              Modern point of sale system for businesses of all sizes. Built
              with ❤️ to help you grow.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-bold text-white">Product</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#features"
                  className="inline-block transition-colors duration-300 hover:pl-2 hover:text-blue-400"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="inline-block transition-colors duration-300 hover:pl-2 hover:text-blue-400"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#demo"
                  className="inline-block transition-colors duration-300 hover:pl-2 hover:text-blue-400"
                >
                  Demo
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-block transition-colors duration-300 hover:pl-2 hover:text-blue-400"
                >
                  Documentation
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-bold text-white">Company</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#"
                  className="inline-block transition-colors duration-300 hover:pl-2 hover:text-blue-400"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="inline-block transition-colors duration-300 hover:pl-2 hover:text-blue-400"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-block transition-colors duration-300 hover:pl-2 hover:text-blue-400"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-block transition-colors duration-300 hover:pl-2 hover:text-blue-400"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-bold text-white">Legal</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#"
                  className="inline-block transition-colors duration-300 hover:pl-2 hover:text-blue-400"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-block transition-colors duration-300 hover:pl-2 hover:text-blue-400"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-block transition-colors duration-300 hover:pl-2 hover:text-blue-400"
                >
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between border-t border-gray-800 pt-8 md:flex-row">
          <p className="text-sm text-gray-400">
            © 2025 SmartPOS. All rights reserved.
          </p>
          <div className="mt-4 flex gap-6 md:mt-0">
            <a
              href="#"
              className="transition-all hover:scale-110 hover:text-blue-400"
            >
              <span className="sr-only">Facebook</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </a>
            <a
              href="#"
              className="transition-all hover:scale-110 hover:text-blue-400"
            >
              <span className="sr-only">Twitter</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a
              href="#"
              className="transition-all hover:scale-110 hover:text-blue-400"
            >
              <span className="sr-only">LinkedIn</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
