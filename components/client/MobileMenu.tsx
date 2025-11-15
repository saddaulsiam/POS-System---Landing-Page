"use client";

import { useState } from "react";

interface MobileMenuProps {
  menuItems: Array<{ href: string; label: string }>;
}

export default function MobileMenu({ menuItems }: MobileMenuProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="rounded-lg p-2 text-gray-700 transition-colors hover:bg-gray-100 md:hidden"
        aria-label="Toggle menu"
      >
        {isMobileMenuOpen ? (
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </button>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="border-t border-gray-200 py-4 md:hidden">
          <div className="space-y-2">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block rounded-lg px-4 py-2.5 font-medium text-gray-700 transition-colors hover:bg-blue-50 hover:text-blue-600"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-3 block rounded-xl bg-linear-to-r from-blue-600 to-indigo-600 px-4 py-2.5 text-center font-semibold text-white transition-all hover:shadow-lg"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </>
  );
}
