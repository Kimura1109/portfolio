"use client";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

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

      <Footer />
    </main>
  );
}
