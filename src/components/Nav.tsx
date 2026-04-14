"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "ARID Lab", href: "/arid-lab" },
  { label: "Research", href: "/research" },
  { label: "Teaching", href: "/teaching" },
  { label: "Service & Impact", href: "/service-impact" },
];

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-outline-variant/40">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="font-headline text-xl italic text-primary transition-opacity hover:opacity-80"
        >
          Dr. Mari Isa
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm tracking-wide transition-colors ${
                isActive(link.href)
                  ? "font-semibold text-primary"
                  : "text-on-surface-variant hover:text-primary"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop action buttons */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href="mailto:mari.isa@ttu.edu"
            className="text-sm text-on-surface-variant transition-colors hover:text-primary"
          >
            Contact
          </a>
          <a
            href="#"
            className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-on-primary transition-opacity hover:opacity-90"
          >
            Google Scholar
          </a>
          <ThemeToggle />
        </div>

        {/* Theme toggle + Mobile hamburger */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex flex-col items-center justify-center gap-1.5"
            aria-label="Toggle menu"
          >
            <span
              className={`block h-0.5 w-6 bg-on-surface transition-transform ${
                mobileOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-on-surface transition-opacity ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-on-surface transition-transform ${
                mobileOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`overflow-hidden border-b border-outline-variant/40 bg-background/95 backdrop-blur-xl transition-all md:hidden ${
          mobileOpen ? "max-h-96 py-4" : "max-h-0 py-0"
        }`}
      >
        <div className="flex flex-col gap-3 px-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`text-sm tracking-wide transition-colors ${
                isActive(link.href)
                  ? "font-semibold text-primary"
                  : "text-on-surface-variant hover:text-primary"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <hr className="border-outline-variant/40" />
          <a
            href="mailto:mari.isa@ttu.edu"
            className="text-sm text-on-surface-variant hover:text-primary"
          >
            Contact
          </a>
          <a
            href="#"
            className="w-fit rounded-full bg-primary px-4 py-2 text-sm font-medium text-on-primary"
          >
            Google Scholar
          </a>
        </div>
      </div>
    </nav>
  );
}
