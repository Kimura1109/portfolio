"use client";
import { useState, useEffect } from "react";

function useScrollAnimation() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".animate-fadeUp").forEach((el) => {
      observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);
}

export default function Home() {
  useScrollAnimation();

  const works = [
    {
      title: "KOTO COFFEE",
      category: "カフェ / LP",
      desc: "スペシャルティコーヒー専門店のLP制作",
      url: "https://koto-coffee.vercel.app",
      pc: "/works/koto-coffee-pc.png",
      sp: "/works/koto-coffee-sp.png",
    },
    {
      title: "HANA HAIR",
      category: "ヘアサロン / LP",
      desc: "ナチュラル系ヘアサロンのLP制作",
      url: "https://hana-hair-gamma.vercel.app",
      pc: "/works/hana-hair-pc.png",
      sp: "/works/hana-hair-sp.png",
    },
    {
      title: "居酒屋 夜",
      category: "居酒屋 / LP",
      desc: "こだわり居酒屋のLP制作",
      url: "#",
      pc: "/works/izakaya-yoru-pc.png",
      sp: "/works/izakaya-yoru-sp.png",
    },
  ];

  const strengths = [
    { icon: "⚡", title: "修正は24時間以内", desc: "依頼から24時間以内に対応。スピード感が違います。" },
    { icon: "🤝", title: "担当者は常に同じ", desc: "大手と違い、最初から最後まで私一人が対応。毎回説明し直す手間がありません。" },
    { icon: "👂", title: "丁寧なヒアリング", desc: "一人一人のビジネスと向き合い、本当に必要なサイトを一緒に考えます。" },
  ];

  return (
    <main className="min-h-screen bg-white text-[#1a1a1a] font-[family-name:var(--font-noto-sans-jp)]">

      {/* ナビゲーション */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 px-8 py-5 flex justify-between items-center border-b border-[#e8e8e8]">
        <a href="/">
          <h1 className="text-sm tracking-widest font-medium">RUMISENSE</h1>
          <p className="text-[10px] tracking-widest text-[#999]">ルミセンス</p>
        </a>
        <ul className="flex gap-10 text-xs tracking-widest text-[#666]">
          <li><a href="/service" className="hover:text-black transition-colors">SERVICE</a></li>
          <li><a href="/flow" className="hover:text-black transition-colors">FLOW</a></li>
          <li><a href="/about" className="hover:text-black transition-colors">ABOUT</a></li>
          <li>
            <a href="/contact" className="bg-[#1a2f5e] text-white px-6 py-2 text-xs tracking-widest hover:bg-[#333] transition-colors">
              無料相談
            </a>
          </li>
        </ul>
      </nav>

      {/* ヒーロー */}
      <section className="min-h-screen flex flex-col justify-between px-16 pt-20 relative overflow-hidden" style={{backgroundImage: 'url(/hero-image.png)', backgroundSize: 'cover', backgroundPosition: 'center right', backgroundAttachment: 'fixed'}}>
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent z-0" />
        <div className="relative z-10">
          <div className="max-w-2xl mt-20">
            <p className="text-xs tracking-[0.5em] text-[#999] mb-8 hero-sub">WEB CREATION</p>
            <h2 className="text-7xl font-[family-name:var(--font-cormorant)] font-light leading-tight mb-8 hero-title">
              あなたの想いを、<br />
              <span className="italic">Webで形に。</span>
            </h2>
            <div className="w-16 h-px bg-black mb-8" />
            <p className="text-sm text-[#666] leading-8 max-w-lg mb-8">
              大手にはできない、一人一人への丁寧な向き合い方がRumisenseの強みです。
            </p>
            <div className="flex gap-6 mb-12">
              {[
                { num: "¥0", label: "制作費無料" },
                { num: "24h", label: "修正対応" },
                { num: "1名", label: "専任担当" },
              ].map((item) => (
                <div key={item.label} className="text-center">
                  <div className="w-28 h-28 rounded-full bg-[#1a2f5e] flex items-center justify-center">
                    <p className="text-2xl font-[family-name:var(--font-cormorant)] font-light text-white leading-none">{item.num}</p>
                  </div>
                  <p className="text-[10px] tracking-[0.2em] text-[#999] mt-2">{item.label}</p>
                </div>
              ))}
            </div>
            <div className="flex gap-6 hero-btn">
              <a href="/contact" className="bg-black text-white text-xs tracking-widest px-10 py-4 hover:bg-[#333] transition-colors">
                無料相談を予約する
              </a>
              <a href="#works" className="border border-black text-xs tracking-widest px-10 py-4 hover:bg-black hover:text-white transition-all duration-300">
                実績を見る
              </a>
            </div>
          </div>

          {/* 無限スクロール */}
          <div id="works" className="w-full pb-16 overflow-hidden">
            <div className="flex animate-scroll" style={{ width: "max-content" }}>
              {[...works, ...works].map((work, index) => (
                <a key={index} href={work.url} target="_blank" className="group block mx-6 flex-shrink-0">
                  <div className="relative w-72 h-36">
                    <div className="absolute left-0 top-0 w-3/4">
                      <img src={work.pc} alt={`${work.title} PC`} className="w-full drop-shadow-xl group-hover:opacity-90 transition-opacity" />
                    </div>
                    <div className="absolute right-6 bottom-4 w-1/5 z-10">
                      <img src={work.sp} alt={`${work.title} SP`} className="w-full drop-shadow-xl group-hover:opacity-90 transition-opacity" />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* お悩み */}
      <section className="py-24 px-16 bg-white animate-fadeUp">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16 text-center">
            <p className="text-xs tracking-[0.5em] text-[#999] mb-3">PROBLEMS</p>
            <h3 className="text-4xl font-[family-name:var(--font-cormorant)] font-light">
              こんなお悩み、<span className="italic">ありませんか？</span>
            </h3>
          </div>
          <div className="max-w-2xl mx-auto space-y-3">
            {[
              "Web制作会社に頼んだら見積もりが高すぎた——",
              "修正を頼んだら何日も待たされた——",
              "担当者が変わるたびに説明し直しが必要だった——",
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-6 px-8 py-5 bg-[#f8f8f8]" style={{borderLeft: '3px solid #1a2f5e'}}>
                <span className="text-2xl font-[family-name:var(--font-cormorant)] font-light text-[#1a2f5e] min-w-[32px]">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="text-sm text-[#333] leading-8">{text}</p>
              </div>
            ))}
            <div className="mt-8 p-6 bg-[#f0f4fa] text-center">
              <p className="text-sm text-[#1a2f5e] leading-8">
                Rumisenseなら、<span className="font-bold">すべて解決できます。</span><br />
                一人が最初から最後まで、責任を持って対応します。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 強み */}
      <section className="py-24 px-16 bg-[#1a2f5e] text-white animate-fadeUp">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <p className="text-xs tracking-[0.5em] text-[#666] mb-3">WHY RUMISENSE</p>
            <h3 className="text-4xl font-[family-name:var(--font-cormorant)] font-light">大手とは、<span className="italic">違う。</span></h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {strengths.map((s) => (
              <div key={s.title} className="border-t border-[#333] pt-8">
                <p className="text-3xl mb-4">{s.icon}</p>
                <h4 className="text-base font-medium mb-4 text-white">{s.title}</h4>
                <p className="text-sm text-[#999] leading-7">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 価格インパクト */}
      <section className="py-24 px-16 bg-white animate-fadeUp">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16 text-center">
            <p className="text-xs tracking-[0.5em] text-[#999] mb-3">PRICING</p>
            <h3 className="text-4xl font-[family-name:var(--font-cormorant)] font-light text-[#1a1a1a]">
              制作費、<span className="italic">¥0。</span>
            </h3>
            <p className="text-sm text-[#666] mt-4">初期費用なし。月額だけでプロのサイトが持てます。</p>
          </div>
          <div className="max-w-2xl mx-auto flex gap-px bg-[#e8e8e8]">
            <div className="flex-1 bg-[#f8f8f8] px-6 py-8 text-center">
              <p className="text-xs tracking-[0.2em] text-[#999] mb-4">制作費</p>
              <p className="text-6xl font-[family-name:var(--font-cormorant)] font-light text-[#1a2f5e] leading-none">¥0</p>
              <p className="text-xs text-[#999] mt-2">初期費用なし</p>
            </div>
            <div className="flex-1 bg-[#1a2f5e] px-6 py-8 text-center">
              <p className="text-xs tracking-[0.2em] text-white/60 mb-4">月額</p>
              <p className="text-6xl font-[family-name:var(--font-cormorant)] font-light text-white leading-none">¥9,800</p>
              <p className="text-xs text-white/40 mt-2">× 6ヶ月〜</p>
            </div>
            <div className="flex-1 bg-[#f8f8f8] px-6 py-8 text-center">
              <p className="text-xs tracking-[0.2em] text-[#999] mb-4">修正対応</p>
              <p className="text-6xl font-[family-name:var(--font-cormorant)] font-light text-[#1a2f5e] leading-none">24h</p>
              <p className="text-xs text-[#999] mt-2">以内に対応</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <a href="/service" className="border border-black text-xs tracking-widest px-12 py-4 hover:bg-black hover:text-white transition-all duration-300 inline-block">
              プランの詳細を見る →
            </a>
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer className="py-8 bg-[#1a2f5e] text-center border-t border-[#222]">
        <p className="text-xs tracking-widest text-[#444] mb-1">RUMISENSE / ルミセンス</p>
        <p className="text-xs text-[#333]">© 2024 Keisuke Kimura</p>
      </footer>

    </main>
  );
}