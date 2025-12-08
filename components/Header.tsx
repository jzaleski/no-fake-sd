"use client";

import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-black sticky top-0 z-50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative" aria-label="Main navigation">
        <div className="flex h-24 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-white">NO FAKE SD</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8 h-full">
            <Link
              href="/"
              className="text-white hover:text-gray-300 hover:underline transition-colors font-medium flex items-center h-full"
            >
              Home
            </Link>
            <Link
              href="/resources"
              className="text-white hover:text-gray-300 hover:underline transition-colors font-medium flex items-center h-full"
            >
              Resources
            </Link>
            <Link
              href="/service-dog-etiquette"
              className="text-white hover:text-gray-300 hover:underline transition-colors font-medium flex items-center h-full"
            >
              Service Dog Etiquette
            </Link>
            <Link
              href="/get-involved"
              className="text-white hover:text-gray-300 hover:underline transition-colors font-medium flex items-center h-full"
            >
              Get Involved
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden rounded-md p-2 text-white hover:bg-gray-900 flex items-center"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <span className="sr-only">{mobileMenuOpen ? "Close menu" : "Open menu"}</span>
            <svg
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div
            className="absolute top-full left-0 right-0 md:hidden bg-black border-t border-gray-800 py-4 space-y-2"
            role="menu"
            aria-label="Mobile navigation menu"
          >
            <Link
              href="/"
              className="block px-6 py-2 text-white hover:bg-gray-900 hover:underline rounded-md font-medium mx-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/resources"
              className="block px-6 py-2 text-white hover:bg-gray-900 hover:underline rounded-md font-medium mx-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              Resources
            </Link>
            <Link
              href="/service-dog-etiquette"
              className="block px-6 py-2 text-white hover:bg-gray-900 hover:underline rounded-md font-medium mx-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              Service Dog Etiquette
            </Link>
            <Link
              href="/get-involved"
              className="block px-6 py-2 text-white hover:bg-gray-900 hover:underline rounded-md font-medium mx-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Involved
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
