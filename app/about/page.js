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
        <p className="text-xs tracking-widest text-[#444] mb-1">RUMISENSE / ルミセンス</p>
        <p className="text-xs text-[#333]">© 2024 Keisuke Kimura</p>
      </footer>
    </main>
  );
}
