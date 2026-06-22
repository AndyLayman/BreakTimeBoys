"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import Clock from "./Clock";

const NAV = [
  { label: "Home", href: "/", note: "Index" },
  { label: "Logo Work", href: "/logo-work", note: "Selected marks" },
  { label: "Contact", href: "/contact", note: "Say sallut" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

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

  return (
    <>
      <header className="sticky top-0 z-40 bg-paper bd-b">
        <div className="container-x flex items-center justify-between h-[68px] md:h-[76px]">
          <Link
            href="/"
            className="flex items-center gap-3"
            aria-label="Break Time Boys — home"
          >
            <Logo className="w-7 h-7" />
            <span className="hidden sm:block display text-lg leading-none">
              Break Time Boys
            </span>
          </Link>
          <div className="flex items-center gap-4 md:gap-6">
            <span className="hidden lg:block label">[ Bonney Lake, WA ]</span>
            <Clock />
            <button
              onClick={() => setOpen(true)}
              className="label bd px-3 py-2 inline-flex items-center gap-2 hover:bg-ink hover:text-paper transition-colors"
              aria-label="Open menu"
            >
              Menu <span className="text-base leading-none">+</span>
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-50 bg-ink text-paper flex flex-col transition-[opacity,visibility] duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="container-x flex items-center justify-between h-[68px] md:h-[76px] border-b border-white/20 shrink-0">
          <span className="display text-lg">Break Time Boys</span>
          <button
            onClick={() => setOpen(false)}
            className="label border border-white/40 px-3 py-2 inline-flex items-center gap-2 hover:bg-accent hover:border-accent transition-colors"
            aria-label="Close menu"
          >
            Close <span className="text-base leading-none">×</span>
          </button>
        </div>

        <nav className="container-x flex-1 flex flex-col justify-center">
          {NAV.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="group flex items-baseline gap-5 md:gap-8 border-b border-white/15 py-5 md:py-7"
            >
              <span className="label text-white/40">[0{i + 1}]</span>
              <span
                className={`huge text-5xl md:text-8xl transition-all duration-200 group-hover:translate-x-3 ${
                  pathname === item.href
                    ? "text-accent"
                    : "group-hover:text-accent"
                }`}
              >
                {item.label}
              </span>
              <span className="ml-auto label text-white/40 hidden md:block">
                {item.note}
              </span>
            </Link>
          ))}
        </nav>

        <div className="container-x border-t border-white/20 py-6 shrink-0 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <a
            href="mailto:info@breaktimeboys.com"
            className="mono text-sm hover:text-accent transition-colors"
          >
            info@breaktimeboys.com
          </a>
          <div className="flex gap-6 label text-white/60">
            <a
              href="https://www.facebook.com/breaktimeboys/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com/breaktimeboysstudio/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
