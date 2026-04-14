"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { siteMap, type SitePage } from "@/lib/siteMap";

/* ------------------------------------------------------------------ */
/*  TableOfContents                                                    */
/*  Faithful React port of the vanilla-JS floating TOC (toc.js)       */
/* ------------------------------------------------------------------ */

export default function TableOfContents() {
  const pathname = usePathname();

  /* ---- state ---- */
  const [isMinimized, setIsMinimized] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const [heroVisible, setHeroVisible] = useState(true);
  const [expandedPages, setExpandedPages] = useState<Set<string>>(new Set());

  /* ref to avoid stale closure in scroll handler */
  const activeSectionRef = useRef(activeSection);
  activeSectionRef.current = activeSection;

  /* ---- derived ---- */
  const currentPage = siteMap.find((p) => p.path === pathname) ?? null;

  /* ---- localStorage sync for minimized state ---- */
  useEffect(() => {
    const stored = localStorage.getItem("toc-minimized");
    if (stored === "true") setIsMinimized(true);
  }, []);

  useEffect(() => {
    localStorage.setItem("toc-minimized", String(isMinimized));
  }, [isMinimized]);

  /* ---- expand current page sections by default ---- */
  useEffect(() => {
    if (currentPage) {
      setExpandedPages(new Set([currentPage.path]));
    }
  }, [pathname]); // eslint-disable-line react-hooks/exhaustive-deps

  /* ---- hero IntersectionObserver ---- */
  useEffect(() => {
    const main = document.querySelector("main");
    const noHero = main?.getAttribute("data-no-hero") === "true";
    if (noHero) {
      setHeroVisible(false);
      return;
    }

    const firstSection =
      document.querySelector("main > section:first-of-type") ??
      document.querySelector("section:first-of-type");

    if (!firstSection) {
      setHeroVisible(false);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setHeroVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.1 },
    );

    observer.observe(firstSection);
    return () => observer.disconnect();
  }, [pathname]);

  /* ---- scrollspy ---- */
  useEffect(() => {
    const HEADER_OFFSET = 100;
    let ticking = false;

    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const targets = Array.from(document.querySelectorAll("h2[id]"));
        const scrollPos = window.scrollY + HEADER_OFFSET;
        let active: string | null = null;

        for (let i = targets.length - 1; i >= 0; i--) {
          if ((targets[i] as HTMLElement).offsetTop <= scrollPos) {
            active = targets[i].id;
            break;
          }
        }

        if (active && active !== activeSectionRef.current) {
          setActiveSection(active);
        }
        ticking = false;
      });
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // initial check
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  /* ---- keyboard (Escape) ---- */
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        if (isMobileOpen) {
          setIsMobileOpen(false);
        } else if (!isMinimized) {
          setIsMinimized(true);
        }
      }
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isMobileOpen, isMinimized]);

  /* ---- helpers ---- */
  const scrollToSection = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.pageYOffset - 80;
    window.scrollTo({ top: y, behavior: "smooth" });
  }, []);

  const togglePage = useCallback((path: string) => {
    setExpandedPages((prev) => {
      const next = new Set(prev);
      if (next.has(path)) next.delete(path);
      else next.add(path);
      return next;
    });
  }, []);

  /* ---- minimized label text ---- */
  const minimizedLabel = (() => {
    if (activeSection && currentPage) {
      const sec = currentPage.sections.find((s) => s.id === activeSection);
      if (sec) return sec.text;
    }
    return currentPage?.label ?? "";
  })();

  /* ---- visibility flags ---- */
  const tocHidden = heroVisible;

  /* ---- shared page list renderer ---- */
  function renderPageList(mobile: boolean) {
    return siteMap.map((page) => {
      // Skip pages with no sections that aren't the current page
      if (page.sections.length === 0 && page.path !== pathname) return null;

      const isCurrent = page.path === pathname;
      const isExpanded = expandedPages.has(page.path);

      return (
        <div key={page.path} className="mb-0.5">
          {/* Page link row */}
          <div className="flex items-center gap-[5px]">
            {/* Chevron (only if page has sections) */}
            {page.sections.length > 0 && (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  togglePage(page.path);
                }}
                className={`flex-shrink-0 text-[8px] text-on-surface-variant select-none transition-transform duration-200 ${
                  isExpanded ? "rotate-90" : ""
                }`}
                aria-label={isExpanded ? "Collapse" : "Expand"}
              >
                &#x25B8;
              </button>
            )}

            {/* Page name */}
            {isCurrent ? (
              <button
                onClick={() => {
                  if (mobile) setIsMobileOpen(false);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className={`text-left ${
                  mobile ? "text-[14px] py-1.5 pl-2" : "text-[13px] py-1 pl-1.5"
                } font-semibold text-primary border-l-2 border-primary/40 leading-tight hover:text-primary transition-colors cursor-pointer`}
              >
                {page.label}
              </button>
            ) : (
              <Link
                href={page.path}
                onClick={() => {
                  if (mobile) setIsMobileOpen(false);
                }}
                className={`${
                  mobile ? "text-[14px] py-1.5 pl-2" : "text-[13px] py-1 pl-1.5"
                } font-semibold text-primary border-l-2 border-transparent leading-tight hover:text-primary transition-colors`}
              >
                {page.label}
              </Link>
            )}
          </div>

          {/* Section children */}
          {page.sections.length > 0 && (
            <div
              className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
                isExpanded ? "max-h-[600px]" : "max-h-0"
              }`}
            >
              {page.sections.map((sec) => {
                const isActive = isCurrent && activeSection === sec.id;

                if (isCurrent) {
                  return (
                    <button
                      key={sec.id}
                      onClick={() => {
                        if (mobile) {
                          setIsMobileOpen(false);
                          setTimeout(() => scrollToSection(sec.id), 100);
                        } else {
                          scrollToSection(sec.id);
                        }
                      }}
                      className={`block w-full text-left ${
                        mobile ? "text-xs py-1 pl-6" : "text-xs py-[3px] pl-[18px]"
                      } leading-tight transition-colors duration-200 cursor-pointer ${
                        isActive
                          ? "text-primary font-bold"
                          : "text-on-surface-variant hover:text-primary"
                      }`}
                    >
                      {sec.text}
                    </button>
                  );
                }

                return (
                  <Link
                    key={sec.id}
                    href={`${page.path}#${sec.id}`}
                    onClick={() => {
                      if (mobile) setIsMobileOpen(false);
                    }}
                    className={`block ${
                      mobile ? "text-xs py-1 pl-6" : "text-xs py-[3px] pl-[18px]"
                    } text-on-surface-variant hover:text-primary leading-tight transition-colors duration-200`}
                  >
                    {sec.text}
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      );
    });
  }

  /* ================================================================ */
  /*  RENDER                                                          */
  /* ================================================================ */

  return (
    <>
      {/* ===== DESKTOP PANEL (>= 768px) ===== */}
      <nav
        role="navigation"
        aria-label="Site table of contents"
        className={`hidden md:block fixed right-6 top-1/2 -translate-y-1/2 w-[210px] max-h-[75vh] overflow-y-auto
          bg-surface-container/80 backdrop-blur-[2px] border border-outline-variant/10 rounded-xl
          p-4 z-40 transition-opacity duration-300 font-[var(--font-body)]
          [&::-webkit-scrollbar]:w-[3px] [&::-webkit-scrollbar-thumb]:bg-[rgba(77,68,75,0.15)] [&::-webkit-scrollbar-thumb]:rounded-[3px]
          ${tocHidden || isMinimized ? "opacity-0 pointer-events-none" : "opacity-100"}`}
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-2.5 pb-1.5 border-b border-outline-variant/15">
          <span className="text-[9px] uppercase tracking-[0.2em] text-secondary">
            Explore
          </span>
          <button
            onClick={() => setIsMinimized(true)}
            aria-label="Minimize navigation"
            className="text-on-surface-variant text-sm leading-none opacity-50 hover:opacity-100 transition-opacity cursor-pointer bg-transparent border-none p-0.5"
          >
            &times;
          </button>
        </div>

        {/* Page list */}
        {renderPageList(false)}
      </nav>

      {/* ===== MINIMIZED TAB (>= 768px) ===== */}
      <div
        role="button"
        tabIndex={0}
        aria-label="Expand navigation"
        onClick={() => setIsMinimized(false)}
        onKeyDown={(e) => {
          if (e.key === "Enter") setIsMinimized(false);
        }}
        className={`hidden md:block fixed right-0 top-1/2 -translate-y-1/2 w-7
          bg-primary/[0.12] backdrop-blur-[6px] border border-primary/[0.15] border-r-0
          rounded-l-lg py-3.5 px-[5px] cursor-pointer z-40
          transition-all duration-300
          [writing-mode:vertical-rl] [text-orientation:mixed]
          font-[var(--font-body)] text-[11px] font-semibold text-primary
          tracking-[0.08em] whitespace-nowrap overflow-hidden text-ellipsis max-h-[200px]
          shadow-[-2px_0_8px_rgba(54,28,54,0.08)]
          hover:bg-primary/[0.18] hover:w-8
          ${tocHidden || !isMinimized ? "opacity-0 pointer-events-none" : "opacity-100"}`}
      >
        {minimizedLabel}
      </div>

      {/* ===== MOBILE PILL (< 768px) ===== */}
      <div
        role="button"
        aria-label="Open site navigation"
        onClick={() => setIsMobileOpen(true)}
        className={`md:hidden fixed bottom-6 right-6 w-11 h-11 rounded-full
          bg-surface-container/50 backdrop-blur-[10px] border border-outline-variant/15
          z-40 cursor-pointer flex items-center justify-center
          shadow-[0_4px_12px_rgba(77,68,75,0.08)] transition-opacity duration-300
          ${tocHidden ? "opacity-0 pointer-events-none" : "opacity-100"}`}
      >
        <span className="material-symbols-outlined text-xl text-primary">
          toc
        </span>
      </div>

      {/* ===== MOBILE OVERLAY (< 768px) ===== */}
      {isMobileOpen && (
        <div className="md:hidden fixed inset-0 z-50 flex flex-col justify-end">
          {/* Scrim */}
          <div
            className="absolute inset-0 bg-black/20"
            onClick={() => setIsMobileOpen(false)}
          />

          {/* Panel */}
          <div
            className="relative bg-surface-container/95 backdrop-blur-[16px] rounded-t-2xl p-6 max-h-[70vh] overflow-y-auto z-[51] font-[var(--font-body)]"
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-4 pb-3 border-b border-outline-variant/20">
              <span className="text-[11px] uppercase tracking-[0.15em] text-secondary font-bold">
                Explore This Site
              </span>
              <button
                onClick={() => setIsMobileOpen(false)}
                aria-label="Close navigation"
                className="text-on-surface-variant text-xl bg-transparent border-none p-1 cursor-pointer"
              >
                &times;
              </button>
            </div>

            {/* Page list */}
            {renderPageList(true)}
          </div>
        </div>
      )}
    </>
  );
}
