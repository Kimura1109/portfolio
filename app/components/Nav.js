"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Nav({ dark = false }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => { setOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // iframeで埋め込まれた際にスクロール位置を親に送信
  useEffect(() => {
    const send = () => {
      try { window.parent.postMessage({ type: 'iframe-scroll', scrollY: window.scrollY }, '*') } catch {}
    }
    send()
    window.addEventListener('scroll', send, { passive: true })
    return () => window.removeEventListener('scroll', send)
  }, []);

  const links = [
    { href: "/service", label: "SERVICE" },
    { href: "/flow", label: "FLOW" },
    { href: "/about", label: "ABOUT" },
    { href: "/blog", label: "BLOG" },
  ];

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <nav
        className={`fixed top-0 w-full backdrop-blur-sm z-50 flex justify-between items-center border-b px-6 md:px-8 h-16 md:h-[72px] ${
          dark
            ? "bg-[#1a2f5e]/95 border-white/10"
            : "bg-white/95 border-[#e8e8e8]"
        }`}
      >
        <a href="/" onClick={() => setOpen(false)}>
          <img
            src="/logo.svg"
            alt="RUMISENSE"
            className={`h-7 md:h-8 w-auto ${dark ? "brightness-0 invert" : ""}`}
          />
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex gap-10 text-xs tracking-widest">
          {links.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className={`transition-colors ${
                  isActive(href)
                    ? dark
                      ? "text-white font-medium"
                      : "text-black font-medium"
                    : dark
                    ? "text-white/50 hover:text-white"
                    : "text-[#666] hover:text-black"
                }`}
              >
                {label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/contact"
              className={`px-6 py-2 text-xs tracking-widest transition-colors ${
                dark
                  ? "bg-white text-[#1a2f5e] hover:bg-[#e8e8e8]"
                  : "bg-[#1a2f5e] text-white hover:bg-[#333]"
              }`}
            >
              無料相談
            </a>
          </li>
        </ul>

        {/* Hamburger */}
        <button
          className="md:hidden relative w-6 h-4 flex flex-col justify-between"
          onClick={() => setOpen(!open)}
          aria-label={open ? "メニューを閉じる" : "メニューを開く"}
        >
          <span
            className={`block w-full h-px transition-all duration-300 origin-center ${
              dark ? "bg-white" : "bg-[#1a1a1a]"
            } ${open ? "rotate-45 translate-y-[7.5px]" : ""}`}
          />
          <span
            className={`block w-full h-px transition-all duration-300 ${
              dark ? "bg-white" : "bg-[#1a1a1a]"
            } ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-full h-px transition-all duration-300 origin-center ${
              dark ? "bg-white" : "bg-[#1a1a1a]"
            } ${open ? "-rotate-45 -translate-y-[7.5px]" : ""}`}
          />
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-x-0 bottom-0 z-40 md:hidden transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        } ${dark ? "bg-[#1a2f5e]" : "bg-white"}`}
        style={{ top: "64px" }}
      >
        <ul className="flex flex-col items-center justify-center h-full gap-10">
          {links.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className={`text-sm tracking-[0.3em] transition-colors ${
                  isActive(href)
                    ? dark
                      ? "text-white font-medium"
                      : "text-black font-medium"
                    : dark
                    ? "text-white/50"
                    : "text-[#666]"
                }`}
              >
                {label}
              </a>
            </li>
          ))}
          <li className="mt-4">
            <a
              href="/contact"
              className={`block px-12 py-4 text-xs tracking-[0.3em] ${
                dark ? "bg-white text-[#1a2f5e]" : "bg-[#1a2f5e] text-white"
              }`}
            >
              無料相談を予約する →
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
