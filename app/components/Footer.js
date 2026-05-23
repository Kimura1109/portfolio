export default function Footer() {
  return (
    <footer className="bg-[#1a2f5e] border-t border-white/5">
      <div className="px-6 md:px-16 py-16 md:py-20">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">

          <div className="col-span-2 md:col-span-1">
            <p className="text-xl font-[family-name:var(--font-cormorant)] font-light text-white tracking-[0.2em] mb-1">RUMISENSE</p>
            <p className="text-[9px] tracking-[0.35em] text-white/25 mb-6">ルミセンス</p>
            <p className="text-xs text-white/45 leading-7 mb-8">
              Web制作・ブログ入稿代行<br />
              個人事業主 / 木村 恵輔
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/rumisense_official" target="_blank" rel="noopener noreferrer" className="text-white/25 hover:text-white/60 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://www.tiktok.com/@rumisense.official" target="_blank" rel="noopener noreferrer" className="text-white/25 hover:text-white/60 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.19 8.19 0 004.79 1.54V6.77a4.85 4.85 0 01-1.02-.08z"/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <p className="text-[9px] tracking-[0.5em] text-white/20 mb-6">NAVIGATION</p>
            <ul className="space-y-4">
              {[["TOP", "/"], ["ABOUT", "/about"], ["SERVICE", "/service"], ["FLOW", "/flow"], ["CONTACT", "/contact"]].map(([label, href]) => (
                <li key={label}>
                  <a href={href} className="text-[10px] tracking-[0.25em] text-white/35 hover:text-white/70 transition-colors">{label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[9px] tracking-[0.5em] text-white/20 mb-6">SERVICE</p>
            <ul className="space-y-4">
              {[["HP・LP制作", "/service/web"], ["ブログ入稿代行", "/service/blog"]].map(([label, href]) => (
                <li key={label}>
                  <a href={href} className="text-xs text-white/35 hover:text-white/70 transition-colors leading-6">{label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[9px] tracking-[0.5em] text-white/20 mb-6">CONTACT</p>
            <a href="/contact" className="block border border-white/15 text-white/50 text-[9px] tracking-[0.2em] md:tracking-[0.4em] px-3 py-3.5 hover:border-white/35 hover:text-white/80 transition-all duration-300 text-center mb-5">
              無料相談を予約する →
            </a>
            <p className="text-[10px] text-white/40 leading-7">
              まずはお気軽にご相談ください。<br />無料でご対応いたします。
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5 px-6 md:px-16 py-5">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <a href="/privacy" className="text-[9px] text-white/15 hover:text-white/35 transition-colors tracking-wider">プライバシーポリシー</a>
          <p className="text-[9px] text-white/15">© 2024 Keisuke Kimura / RUMISENSE</p>
        </div>
      </div>
    </footer>
  );
}
