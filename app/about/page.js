"use client";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-[#1a1a1a] font-[family-name:var(--font-noto-sans-jp)]">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 px-8 py-5 flex justify-between items-center border-b border-[#e8e8e8]">
        <a href="/">
          <h1 className="text-sm tracking-widest font-medium">RUMISENSE</h1>
          <p className="text-[10px] tracking-widest text-[#999]">ルミセンス</p>
        </a>
        <ul className="flex gap-10 text-xs tracking-widest text-[#666]">
          <li><a href="/service" className="hover:text-black transition-colors">SERVICE</a></li>
          <li><a href="/flow" className="hover:text-black transition-colors">FLOW</a></li>
          <li><a href="/about" className="text-black font-medium">ABOUT</a></li>
          <li>
            <a href="/contact" className="bg-[#1a2f5e] text-white px-6 py-2 text-xs tracking-widest hover:bg-[#333] transition-colors">
              無料相談
            </a>
          </li>
        </ul>
      </nav>

      <section className="pt-40 pb-32 px-16 bg-[#f8f8f8]">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-20">
          <div className="md:w-1/2 flex items-center justify-center">
            <div className="w-64 h-64 bg-[#e8e8e8] flex items-center justify-center text-[#999] text-sm tracking-widest">
              PHOTO
            </div>
          </div>
          <div className="md:w-1/2">
            <p className="text-xs tracking-[0.5em] text-[#999] mb-3">PROFILE</p>
            <h2 className="text-5xl font-[family-name:var(--font-cormorant)] font-light mb-2">Keisuke Kimura</h2>
            <p className="text-sm text-[#999] tracking-widest mb-8">Rumisense / ルミセンス</p>
            <div className="w-8 h-px bg-black mb-8" />
            <p className="text-sm text-[#666] leading-8 mb-8">
              はじめまして、木村恵輔と申します。<br /><br />
              Rumisenseは、<span className="font-bold text-black">「一人だからこそできること」</span>を大切にしたWeb制作屋です。
              大手制作会社のように担当者が変わったり、修正に何日もかかったりすることはありません。<br /><br />
              修正依頼から<span className="font-bold text-black">24時間以内</span>に対応。
              ヒアリングから公開まで、すべて私一人が責任を持って対応します。<br /><br />
              まずはZOOMで気軽にお話しましょう。相談は無料です。
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex gap-8">
                <span className="text-[#999] w-24">SKILL</span>
                <span>Next.js / React / Tailwind CSS</span>
              </div>
              <div className="flex gap-8">
                <span className="text-[#999] w-24">対応エリア</span>
                <span>全国対応（オンライン）</span>
              </div>
              <div className="flex gap-8">
                <span className="text-[#999] w-24">修正対応</span>
                <span>24時間以内</span>
              </div>
            </div>
            <div className="mt-12">
              <a href="/contact" className="bg-black text-white text-xs tracking-widest px-12 py-4 hover:bg-[#333] transition-colors inline-block">
                無料相談を予約する →
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 bg-[#1a2f5e] text-center border-t border-[#222]">
        <p className="text-xs tracking-widest text-[#444] mb-1">RUMISENSE / ルミセンス</p>
        <p className="text-xs text-[#333]">© 2024 Keisuke Kimura</p>
      </footer>
    </main>
  );
}