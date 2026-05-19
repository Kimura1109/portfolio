"use client";
import Nav from "../components/Nav";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-[#1a1a1a] font-[family-name:var(--font-noto-sans-jp)]">
      <Nav />

      <section className="pt-28 md:pt-40 pb-16 md:pb-32 px-6 md:px-16 bg-[#f8f8f8]">
        <div className="max-w-3xl mx-auto">
          <div className="">
            <p className="text-xs tracking-[0.5em] text-[#999] mb-3">PROFILE</p>
            <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-cormorant)] font-light mb-2">Keisuke Kimura</h2>
            <p className="text-sm text-[#999] tracking-widest mb-8">Rumisense / ルミセンス</p>
            <div className="w-8 h-px bg-black mb-8" />
            <p className="text-sm text-[#666] leading-8 mb-8">
              はじめまして、木村恵輔と申します。<br /><br />
              Rumisenseは、<span className="font-bold text-black">「一人だからこそできること」</span>を大切にしたWeb制作屋です。
              大手制作会社のように担当者が変わったり、修正に何日もかかったりすることはありません。<br /><br />
              修正依頼から<span className="font-bold text-black">最短24時間</span>で対応。
              ヒアリングから公開まで、すべて私一人が責任を持って対応します。<br /><br />
              まずはZOOMで気軽にお話しましょう。相談は無料です。
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex gap-6 md:gap-8">
                <span className="text-[#999] w-20 md:w-24 flex-shrink-0">SKILL</span>
                <span>Next.js / React / Tailwind CSS</span>
              </div>
              <div className="flex gap-6 md:gap-8">
                <span className="text-[#999] w-20 md:w-24 flex-shrink-0">対応エリア</span>
                <span>全国対応（オンライン）</span>
              </div>
              <div className="flex gap-6 md:gap-8">
                <span className="text-[#999] w-20 md:w-24 flex-shrink-0">修正対応</span>
                <span>最短24時間</span>
              </div>
            </div>
            <div className="mt-10 md:mt-12">
              <a href="/contact" className="bg-black text-white text-xs tracking-widest px-10 md:px-12 py-4 hover:bg-[#333] transition-colors inline-block">
                無料相談を予約する →
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 bg-[#1a2f5e] text-center border-t border-[#222]">
        <a href="https://www.instagram.com/remisense_official" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white/40 hover:text-white/80 transition-colors mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
          <span className="text-xs tracking-widest">@remisense_official</span>
        </a>
        <p className="text-xs tracking-widest text-[#444] mb-1">RUMISENSE / ルミセンス</p>
        <p className="text-xs text-[#333]">© 2024 Keisuke Kimura</p>
      </footer>
    </main>
  );
}
