"use client";
import { useEffect } from "react";
import Nav from "./components/Nav";

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

  const strengths = [
    { icon: "⚡", title: "修正は最短24時間", desc: "依頼から最短24時間で対応。スピード感が違います。" },
    { icon: "🤝", title: "担当者は常に同じ", desc: "大手と違い、最初から最後まで私一人が対応。毎回説明し直す手間がありません。" },
    { icon: "👂", title: "丁寧なヒアリング", desc: "一人一人のビジネスと向き合い、本当に必要なサイトを一緒に考えます。" },
  ];

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


  return (
    <main className="min-h-screen bg-white text-[#1a1a1a] font-[family-name:var(--font-noto-sans-jp)]">

      <Nav />

      {/* ヒーロー */}
      <section className="relative overflow-hidden min-h-screen flex flex-col">

        {/* PC: 元のデザイン */}
        <div
          className="absolute inset-0 hidden md:block"
          style={{
            backgroundImage: 'url(/hero-image.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center right',
            backgroundAttachment: 'fixed',
          }}
        />
        <div className="absolute inset-0 hidden md:block bg-gradient-to-r from-white via-white/80 to-transparent" />

        {/* SP: 人物が写っている位置に合わせてpositionを調整 */}
        <div
          className="absolute inset-0 md:hidden"
          style={{
            backgroundImage: 'url(/hero-image.png)',
            backgroundSize: 'cover',
            backgroundPosition: '75% center',
          }}
        />
        {/* SP: 左（テキスト）→ 右（人物）へフェード */}
        <div
          className="absolute inset-0 md:hidden"
          style={{
            background: 'linear-gradient(to right, white 32%, rgba(255,255,255,0.75) 50%, rgba(255,255,255,0.1) 70%, transparent 100%)',
          }}
        />

        {/* コンテンツ */}
        <div className="relative z-10 flex-1 flex flex-col justify-between px-6 md:px-16 pt-16 md:pt-20 pb-16">
          {/* SP: 左55%に収める / PC: 元のmax-w-2xl */}
          <div className="w-[55%] md:w-auto md:max-w-2xl mt-24 md:mt-20">
            <p className="text-xs tracking-[0.5em] text-[#999] mb-5 md:mb-8 hero-sub">WEB CREATION</p>
            <h2 className="text-[1.45rem] md:text-7xl font-[family-name:var(--font-cormorant)] font-light leading-snug mb-5 md:mb-8 hero-title">
              あなたの想いを、<br />
              <span className="italic md:hidden">webで形に。</span>
              <span className="italic hidden md:inline">Webで形に。</span>
            </h2>
            <div className="w-10 md:w-16 h-px bg-black mb-5 md:mb-8" />
            {/* 説明文はPCのみ */}
            <p className="hidden md:block text-sm text-[#666] leading-8 max-w-lg mb-8">
              大手にはできない、一人一人への丁寧な向き合い方がRumisenseの強みです。
            </p>
            {/* 丸バッジはPCのみ */}
            <div className="hidden md:flex gap-6 mb-12">
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
            <div className="hero-btn flex flex-col gap-3 md:flex-row md:gap-6">
              <a href="/contact" className="bg-black text-white text-xs tracking-widest px-6 py-3 md:px-8 md:py-4 hover:bg-[#333] transition-colors text-center">
                無料相談を予約する
              </a>
              <a href="#works" className="hidden md:block border border-black text-xs tracking-widest px-8 py-4 hover:bg-black hover:text-white transition-all duration-300 text-center">
                実績を見る
              </a>
            </div>
          </div>

          {/* 無限スクロール */}
          <div id="works" className="w-full overflow-hidden mt-12 md:mt-0 pb-0">
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

      {/* 開業記念キャンペーン */}
      <section className="px-6 md:px-16 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="relative overflow-hidden bg-[#1a2f5e] text-white px-6 md:px-10 py-6 md:py-8">
            <div className="absolute top-0 left-0 bg-amber-400 text-[#1a2f5e] text-[10px] tracking-widest font-bold px-3 py-1">
              GRAND OPEN — 先着10名様限定
            </div>
            <div className="mt-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <p className="text-xs tracking-[0.3em] text-amber-400/80 mb-2">OPENING CAMPAIGN</p>
                <p className="text-xl md:text-2xl font-[family-name:var(--font-cormorant)] font-light leading-snug">
                  開業を記念して、Basicプランを特別価格でご提供
                </p>
                <div className="flex items-end gap-3 mt-2">
                  <span className="text-4xl md:text-5xl font-[family-name:var(--font-cormorant)] font-light text-amber-400">¥6,500</span>
                  <span className="text-sm text-white/60 mb-1">/月</span>
                  <span className="text-sm text-white/40 line-through mb-1">通常 ¥9,800/月</span>
                </div>
              </div>
              <div className="border-l border-white/20 pl-6 hidden md:block shrink-0">
                <p className="text-xs text-white/50 leading-7">6ヶ月間契約 / 計 ¥39,000（税込）</p>
                <p className="text-xs text-white/50 leading-7">初期費用¥5,000 / 修正月5回対応</p>
                <p className="text-xs text-amber-400/70 leading-7">残りわずか。お早めにどうぞ。</p>
              </div>
              <div className="md:hidden text-xs text-white/50 leading-7">
                <p>6ヶ月間契約 / 計 ¥39,000（税込）</p>
                <p>初期費用¥5,000 / 修正月5回対応</p>
                <p className="text-amber-400/70">残りわずか。お早めにどうぞ。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* お悩み */}
      <section className="py-16 md:py-24 px-6 md:px-16 bg-white animate-fadeUp">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 md:mb-16 text-center">
            <p className="text-xs tracking-[0.5em] text-[#999] mb-3">PROBLEMS</p>
            <h3 className="text-3xl md:text-4xl font-[family-name:var(--font-cormorant)] font-light">
              <span className="md:hidden">こんなお悩み、<br /><span className="italic">ありませんか？</span></span>
              <span className="hidden md:inline">こんなお悩み、<span className="italic">ありませんか？</span></span>
            </h3>
          </div>
          <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center">
            <div className="w-full md:w-1/2">
              <img src="/mondai.png" alt="お悩みイラスト" className="w-full rounded-sm" />
            </div>
            <div className="w-full md:w-1/2 space-y-3">
              {[
                "Web制作会社に頼んだら見積もりが高すぎた——",
                "修正を頼んだら何日も待たされた——",
                "担当者が変わるたびに説明し直しが必要だった——",
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-3 md:gap-6 px-4 md:px-8 py-4 md:py-5 bg-[#f8f8f8]" style={{borderLeft: '3px solid #1a2f5e'}}>
                  <span className="text-2xl font-[family-name:var(--font-cormorant)] font-light text-[#1a2f5e] min-w-[32px]">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="text-sm text-[#333] leading-7 md:leading-8">{text}</p>
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
        </div>
      </section>

      {/* 他社との違い */}
      <section className="py-16 md:py-24 px-6 md:px-16 bg-[#f8f8f8] animate-fadeUp">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 md:mb-16 text-center">
            <p className="text-xs tracking-[0.5em] text-[#999] mb-3">COMPARISON</p>
            <h3 className="text-3xl md:text-4xl font-[family-name:var(--font-cormorant)] font-light">
              大手との、<span className="italic">違い。</span>
            </h3>
          </div>

          {/* ヘッダー行 */}
          <div className="grid grid-cols-[1fr_1fr_1fr] gap-px bg-[#e8e8e8]">
            <div className="bg-[#f8f8f8]" />
            <div className="bg-[#e8e8e8] py-3 px-2 text-center">
              <p className="text-[10px] md:text-xs tracking-widest text-[#888]">大手制作会社</p>
            </div>
            <div className="bg-[#1a2f5e] py-3 px-2 text-center">
              <p className="text-[10px] md:text-xs tracking-widest text-white">Rumisense</p>
            </div>
          </div>

          {/* 比較行 */}
          {[
            { label: "制作費",      other: "数十〜数百万円",  us: "¥0" },
            { label: "修正対応",    other: "数日〜数週間",    us: "最短24時間" },
            { label: "担当者",      other: "複数名・変わる",  us: "1名固定" },
            { label: "相談・見積り", other: "有料の場合も",    us: "完全無料" },
            { label: "ヒアリング",  other: "画一的",          us: "個別・丁寧" },
          ].map((row) => (
            <div key={row.label} className="grid grid-cols-[1fr_1fr_1fr] gap-px bg-[#e8e8e8] mt-px">
              <div className="bg-white py-5 px-4 md:px-6 flex items-center">
                <p className="text-xs md:text-sm text-[#333] tracking-wide">{row.label}</p>
              </div>
              <div className="bg-white py-5 px-2 md:px-4 flex items-center justify-center text-center">
                <p className="text-[11px] md:text-xs text-[#aaa] leading-5">{row.other}</p>
              </div>
              <div className="bg-[#f0f4fa] py-5 px-2 md:px-4 flex items-center justify-center text-center">
                <p className="text-[11px] md:text-xs font-bold text-[#1a2f5e] leading-5">{row.us}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 強み */}
      <section className="py-16 md:py-24 px-6 md:px-16 bg-[#1a2f5e] text-white animate-fadeUp">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 md:mb-16">
            <p className="text-xs tracking-[0.5em] text-[#4a6fa5] mb-3">WHY RUMISENSE</p>
            <h3 className="text-3xl md:text-4xl font-[family-name:var(--font-cormorant)] font-light">大手とは、<span className="italic">違う。</span></h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
            {strengths.map((s, i) => (
              <div key={s.title} className="relative pt-10 pb-8 px-6 border border-white/10">
                <span
                  className="absolute top-3 right-4 font-[family-name:var(--font-cormorant)] font-light leading-none select-none"
                  style={{ fontSize: '5rem', color: 'rgba(255,255,255,0.07)' }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h4 className="text-base font-medium mb-3 text-white relative z-10">{s.title}</h4>
                <p className="text-sm text-[#7a9cc8] leading-7 relative z-10">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 実績募集 */}
      <section className="py-16 md:py-24 px-6 md:px-16 bg-[#f8f8f8] animate-fadeUp">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs tracking-[0.5em] text-[#999] mb-3">WORKS</p>
          <h3 className="text-3xl md:text-4xl font-[family-name:var(--font-cormorant)] font-light mb-6">
            実績、<span className="italic">募集中。</span>
          </h3>
          <div className="w-8 h-px bg-black mx-auto mb-10" />
          <p className="text-sm text-[#666] leading-8 mb-2">
            Rumisenseは<span className="font-bold text-black">2026年5月</span>に始動したばかりのWeb制作屋です。<br />
            今はまだ実績が少ないため、一緒にサイトを作ってくださるお客様を探しています。
          </p>
          <p className="text-sm text-[#666] leading-8 mb-10">
            「安くていいサイトが欲しい」「新しいお店・サービスを始めた」——<br />
            そんな方のご協力、お待ちしています。
          </p>
          <a href="/contact" className="bg-[#1a2f5e] text-white text-xs tracking-widest px-10 md:px-12 py-4 hover:bg-[#243d75] transition-colors inline-block">
            実績にご協力いただける方はこちら →
          </a>
        </div>
      </section>

      {/* 価格インパクト */}
      <section className="py-16 md:py-24 px-6 md:px-16 bg-white animate-fadeUp">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 md:mb-16 text-center">
            <p className="text-xs tracking-[0.5em] text-[#999] mb-3">PRICING</p>
            <h3 className="text-3xl md:text-4xl font-[family-name:var(--font-cormorant)] font-light text-[#1a1a1a]">
              制作費、<span className="italic">¥0。</span>
            </h3>
            <p className="text-sm text-[#666] mt-4">初期費用なし。月額だけでプロのサイトが持てます。</p>
          </div>
          <div className="max-w-2xl mx-auto flex flex-col sm:flex-row gap-px bg-[#e8e8e8]">
            <div className="flex-1 bg-[#f8f8f8] px-4 md:px-6 py-6 md:py-8 text-center">
              <p className="text-xs tracking-[0.2em] text-[#999] mb-4">制作費</p>
              <p className="text-5xl md:text-6xl font-[family-name:var(--font-cormorant)] font-light text-[#1a2f5e] leading-none">¥0</p>
              <p className="text-xs text-[#999] mt-2">初期費用なし</p>
            </div>
            <div className="flex-1 bg-[#1a2f5e] px-4 md:px-6 py-6 md:py-8 text-center">
              <p className="text-xs tracking-[0.2em] text-white/60 mb-4">月額</p>
              <p className="text-4xl md:text-6xl font-[family-name:var(--font-cormorant)] font-light text-white leading-none">¥9,800</p>
              <p className="text-xs text-white/40 mt-2">× 6ヶ月〜</p>
            </div>
            <div className="flex-1 bg-[#f8f8f8] px-4 md:px-6 py-6 md:py-8 text-center">
              <p className="text-xs tracking-[0.2em] text-[#999] mb-4">修正対応</p>
              <p className="text-5xl md:text-6xl font-[family-name:var(--font-cormorant)] font-light text-[#1a2f5e] leading-none">24h</p>
              <p className="text-xs text-[#999] mt-2">以内に対応</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <a href="/service" className="border border-black text-xs tracking-widest px-10 md:px-12 py-4 hover:bg-black hover:text-white transition-all duration-300 inline-block">
              プランの詳細を見る →
            </a>
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer className="py-8 bg-[#1a2f5e] text-center border-t border-[#222]">
        <a href="https://www.instagram.com/rumisense_official" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white/40 hover:text-white/80 transition-colors mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
          <span className="text-xs tracking-widest">@rumisense_official</span>
        </a>
        <p className="text-xs tracking-widest text-[#444] mb-1">RUMISENSE / ルミセンス</p>
        <p className="text-xs text-[#333]">© 2024 Keisuke Kimura</p>
      </footer>

    </main>
  );
}
