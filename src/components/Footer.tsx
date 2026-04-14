import Link from "next/link";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "ARID Lab", href: "/arid-lab" },
  { label: "Research", href: "/research" },
  { label: "Teaching", href: "/teaching" },
  { label: "Service & Impact", href: "/service-impact" },
];

export default function Footer() {
  return (
    <footer className="bg-surface-container-highest px-4 sm:px-6 lg:px-8 py-20">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-10">
        {/* Nav links */}
        <nav className="flex flex-wrap justify-center gap-6">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs uppercase tracking-[0.2em] text-on-surface-variant transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Social icons */}
        <div className="flex items-center gap-6">
          <a
            href="mailto:mari.isa@ttu.edu"
            className="text-on-surface-variant transition-colors hover:text-primary"
            aria-label="Email"
          >
            <span className="material-symbols-outlined text-2xl">email</span>
          </a>
          <a
            href="#"
            className="text-on-surface-variant transition-colors hover:text-primary"
            aria-label="Google Scholar"
          >
            <span className="material-symbols-outlined text-2xl">school</span>
          </a>
          <a
            href="#"
            className="text-on-surface-variant transition-colors hover:text-primary"
            aria-label="ResearchGate"
          >
            <span className="material-symbols-outlined text-2xl">science</span>
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-on-surface-variant">
          &copy; 2026 Dr. Mari Isa
        </p>
      </div>
    </footer>
  );
}
