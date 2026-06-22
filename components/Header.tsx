"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "./Logo";

const NAV = [
  { label: "Home", href: "/" },
  { label: "Logo Work", href: "/logo-work" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const solid = scrolled || !isHome;
  const darkText = solid;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          solid
            ? "bg-white/95 backdrop-blur border-b border-[#ececec]"
            : "bg-transparent"
        }`}
      >
        <div className="container-x flex items-center justify-between h-[88px]">
          <Link
            href="/"
            aria-label="Break Time Boys — home"
            className={`${darkText ? "text-ink" : "text-white"} transition-colors`}
          >
            <Logo className="w-9 h-9" />
          </Link>
          <button
            onClick={() => setOpen(true)}
            className={`flex items-center gap-3 ${
              darkText ? "text-ink" : "text-white"
            } transition-colors`}
            aria-label="Open menu"
          >
            <span className="text-sm font-semibold tracking-wide">Menu</span>
            <span className="flex flex-col gap-[5px]">
              <span className="block w-7 h-[2px] bg-current" />
              <span className="block w-7 h-[2px] bg-current" />
            </span>
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-50 flex flex-col bg-ink text-white overflow-y-auto transition-[opacity,visibility] duration-500 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="container-x flex items-center justify-between h-[88px] shrink-0">
          <Logo className="w-9 h-9 text-white" />
          <button
            onClick={() => setOpen(false)}
            className="flex items-center gap-3"
            aria-label="Close menu"
          >
            <span className="text-sm font-semibold tracking-wide">Close</span>
            <span className="relative block w-7 h-7">
              <span className="absolute top-1/2 left-0 w-7 h-[2px] bg-white rotate-45" />
              <span className="absolute top-1/2 left-0 w-7 h-[2px] bg-white -rotate-45" />
            </span>
          </button>
        </div>

        <nav className="container-x flex-1 flex items-center">
          <ul className="space-y-1 py-12">
            {NAV.map((item, i) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`group inline-flex items-baseline gap-5 display font-bold text-5xl md:text-7xl transition-colors ${
                    pathname === item.href
                      ? "text-white"
                      : "text-[#5a5a5a] hover:text-white"
                  }`}
                >
                  <span className="text-xs tracking-widest text-[#5a5a5a]">
                    0{i + 1}
                  </span>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="container-x pb-12 shrink-0">
          <div className="hairline !bg-white/15 mb-8" />
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <p className="eyebrow text-[#5a5a5a] mb-2">Get in touch</p>
              <a
                href="mailto:info@breaktimeboys.com"
                className="text-lg hover:underline"
              >
                info@breaktimeboys.com
              </a>
            </div>
            <div className="flex gap-6 text-sm">
              <a
                href="https://www.facebook.com/breaktimeboys/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#9a9a9a] hover:text-white transition-colors"
              >
                Facebook
              </a>
              <a
                href="https://www.instagram.com/breaktimeboysstudio/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#9a9a9a] hover:text-white transition-colors"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
