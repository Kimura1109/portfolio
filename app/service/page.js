"use client";
import Nav from "../components/Nav";

const footer = (
  <footer className="py-8 bg-[#1a2f5e] text-center border-t border-[#222]">
    <div className="flex items-center justify-center gap-6 mb-4">
      <a href="https://www.instagram.com/rumisense_official" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white/40 hover:text-white/80 transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
        <span className="text-xs tracking-widest">@rumisense_official</span>
      </a>
      <a href="https://www.tiktok.com/@rumisense.official" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white/40 hover:text-white/80 transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
          <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.19 8.19 0 004.79 1.54V6.77a4.85 4.85 0 01-1.02-.08z"/>
        </svg>
        <span className="text-xs tracking-widest">@rumisense.official</span>
      </a>
    </div>
    <p className="text-xs tracking-widest text-[#444] mb-1">RUMISENSE / ルミセンス</p>
    <p className="text-xs text-[#333]">© 2024 Keisuke Kimura</p>
  </footer>
);

export default function ServiceIndexPage() {
  return (
    <main className="min-h-screen bg-white text-[#1a1a1a] font-[family-name:var(--font-noto-sans-jp)]">
      <Nav />

      {/* Hero */}
      <section className="bg-[#1a2f5e] h-[320px] md:h-[380px] flex items-center px-6 md:px-16">
        <div className="max-w-5xl mx-auto w-full">
          <p className="text-xs tracking-[0.5em] text-white/30 mb-4">SERVICE</p>
          <h1 className="text-5xl md:text-7xl font-[family-name:var(--font-cormorant)] font-light text-white mb-4">
            Service
          </h1>
          <p className="text-sm text-white/50 leading-8">
            Web制作からブログ運用まで。<br className="md:hidden" />問い合わせが入り続ける仕組みをつくります。
          </p>
        </div>
      </section>

      {/* Panel 01 — Web */}
      <a href="/service/web" className="group block border-b border-[#ececec]">
        <div className="max-w-5xl mx-auto px-6 md:px-16 py-16 md:py-24">
          <div className="flex flex-col md:flex-row md:items-start gap-10 md:gap-24">
            <div className="flex-1">
              <p className="text-[10px] tracking-[0.5em] text-[#bbb] mb-10">01 — WEB PRODUCTION</p>
              <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-cormorant)] font-light mb-7 leading-snug">
                HP・LP制作
              </h2>
              <p className="text-sm text-[#666] leading-8 mb-10 max-w-sm">
                制作費0円。月額だけで、<br className="md:hidden" />集客できるホームページ・LPを持てます。<br className="md:hidden" />デザインから公開・修正対応まで、<br className="md:hidden" />すべてお任せください。
              </p>
              <div className="border-l-2 border-amber-400 pl-5 py-1">
                <p className="text-[10px] tracking-[0.4em] text-amber-600 mb-2">OPENING CAMPAIGN — 先着10名</p>
                <div className="flex items-end gap-3">
                  <span className="text-2xl font-[family-name:var(--font-cormorant)] font-light text-amber-600">¥6,500</span>
                  <span className="text-xs text-[#bbb] line-through mb-0.5">¥9,800</span>
                  <span className="text-xs text-[#999] mb-0.5">/月</span>
                </div>
              </div>
            </div>
            <div className="shrink-0 md:pt-20 md:text-right">
              <p className="text-[10px] tracking-[0.4em] text-[#bbb] mb-3">STARTING FROM</p>
              <p className="text-7xl md:text-8xl font-[family-name:var(--font-cormorant)] text-[#1a2f5e]">¥9,800</p>
              <p className="text-xs text-[#999] mt-1 mb-10">/月</p>
              <span className="text-xs tracking-widest text-[#1a2f5e] group-hover:translate-x-1 transition-transform inline-block">
                詳しく見る →
              </span>
            </div>
          </div>
        </div>
      </a>

      {/* Panel 02 — Blog */}
      <a href="/service/blog" className="group block border-b border-[#ececec]">
        <div className="max-w-5xl mx-auto px-6 md:px-16 py-16 md:py-24">
          <div className="flex flex-col md:flex-row md:items-start gap-10 md:gap-24">
            <div className="flex-1">
              <p className="text-[10px] tracking-[0.5em] text-[#bbb] mb-10">02 — BLOG WRITING</p>
              <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-cormorant)] font-light mb-7 leading-snug">
                ブログ入稿代行
              </h2>
              <p className="text-sm text-[#666] leading-8 max-w-sm">
                キーワード選定からSEO記事の<br className="md:hidden" />執筆・microCMS入稿まで一括代行。<br className="md:hidden" />更新が止まらないブログ運用を、<br className="md:hidden" />月額固定でお任せいただけます。
              </p>
            </div>
            <div className="shrink-0 md:pt-20 md:text-right">
              <p className="text-[10px] tracking-[0.4em] text-[#bbb] mb-3">MONTHLY · 月2記事</p>
              <p className="text-7xl md:text-8xl font-[family-name:var(--font-cormorant)] text-[#1a2f5e]">¥8,800</p>
              <p className="text-xs text-[#999] mt-1 mb-10">/月</p>
              <span className="text-xs tracking-widest text-[#1a2f5e] group-hover:translate-x-1 transition-transform inline-block">
                詳しく見る →
              </span>
            </div>
          </div>
        </div>
      </a>

      {/* CTA */}
      <section className="py-24 md:py-36 text-center px-6">
        <p className="text-[10px] tracking-[0.6em] text-[#bbb] mb-8">FREE CONSULTATION</p>
        <h3 className="text-3xl md:text-4xl font-[family-name:var(--font-cormorant)] font-light mb-5 leading-snug">
          どのサービスか迷っていても<br className="md:hidden" />大丈夫です
        </h3>
        <p className="text-sm text-[#888] mb-12 leading-9">
          現状のお困りごとをお聞かせください。<br />
          最適なご提案を無料でご案内します。
        </p>
        <a href="/contact" className="bg-[#1a2f5e] text-white text-xs tracking-widest px-12 md:px-16 py-4 hover:bg-[#0f1e3d] transition-colors inline-block">
          無料相談を予約する →
        </a>
      </section>

      {footer}
    </main>
  );
}
