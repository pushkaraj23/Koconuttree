"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-[#1e0506] shadow-lg">
      <div className="relative max-w-7xl mx-auto bg-[#3a0b0e]  px-6 py-7 flex items-center justify-between rounded-b-4xl">
        {/* LEFT NAV */}
        <nav className="flex items-center gap-8 text-white font-semibold">
          <Link href="/" className="hover:text-gold transition">
            Home
          </Link>
          <Link href="/about" className="hover:text-gold transition">
            About Us
          </Link>
          <Link href="/menu" className="hover:text-gold transition">
            Menu
          </Link>
          <Link href="/reviews" className="hover:text-gold transition">
            Reviews
          </Link>
          <Link href="/gallery" className="hover:text-gold transition">
            Gallery
          </Link>
        </nav>

        {/* CENTER LOGO */}
        <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
          <Link href="/" className="block">
            <div className="w-20 h-20 rounded-full bg-gold flex items-center justify-center shadow-xl">
              <span className="font-pacifico text-brown text-sm text-center leading-tight">
                Koconut
                <br />
                tree
              </span>
            </div>
          </Link>
        </div>

        {/* RIGHT NAV + CTA */}
        <div className="flex items-center gap-6">
          <Link
            href="/contact"
            className="text-white hover:text-gold transition"
          >
            Contact Us
          </Link>

          <Link
            href="/order"
            className="px-5 py-2 rounded-full border border-gold text-gold hover:bg-gold hover:text-brown transition"
          >
            Order Online
          </Link>

          <Link
            href="/table-reservation"
            className="px-5 py-2 rounded-full bg-gold text-brown font-semibold hover:opacity-90 transition"
          >
            Book a Table
          </Link>
        </div>
      </div>
    </header>
  );
}
