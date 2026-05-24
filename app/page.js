"use client";
import { useEffect } from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function useScrollAnimation() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.08 }
    );
    document.querySelectorAll(".animate-fadeUp").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}


export default function Home() {
  useScrollAnimation();


  const tickerItems = ["HP・LP制作", "制作費¥0", "修正24時間以内", "ブログ入稿代行", "担当者1名固定", "無料相談受付中", "全国対応", "丁寧なヒアリング"];

  const works = [
    { title: "KOTO COFFEE", category: "カフェ / LP", url: "https://koto-coffee.vercel.app", pc: "/works/koto-coffee-pc.png" },
    { title: "HANA HAIR", category: "ヘアサロン / LP", url: "https://hana-hair-gamma.vercel.app", pc: "/works/hana-hair-pc.png" },
    { title: "居酒屋 夜", category: "居酒屋 / LP", url: "#", pc: "/works/izakaya-yoru-pc.png" },
  ];

  return (
    <main className="min-h-screen bg-white text-[#1a1a1a] font-[family-name:var(--font-noto-sans-jp)] overflow-x-hidden">
      <Nav />

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          01 HERO
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative min-h-[75vh] md:min-h-screen flex flex-col overflow-hidden">
        {/* PC background */}
        <div className="absolute inset-0 hidden md:block" style={{ backgroundImage: "url(/hero-image.png)", backgroundSize: "cover", backgroundPosition: "center right", backgroundAttachment: "fixed" }} />
        <div className="absolute inset-0 hidden md:block bg-gradient-to-r from-white via-white/85 to-transparent" />
        {/* SP background */}
        <div className="absolute inset-0 md:hidden" style={{ backgroundImage: "url(/hero-image.png)", backgroundSize: "cover", backgroundPosition: "75% center" }} />
        <div className="absolute inset-0 md:hidden" style={{ background: "linear-gradient(to right, white 32%, rgba(255,255,255,0.75) 50%, rgba(255,255,255,0.1) 70%, transparent 100%)" }} />

        <div className="relative z-10 flex-1 flex flex-col px-6 md:px-16 pt-28 md:pt-36">
          <div className="flex-1 flex flex-col justify-between">
            <div className="w-[78%] md:w-auto md:max-w-4xl">
              <div className="flex items-center gap-3 mb-14 md:mb-14">
                <div className="w-10 h-px bg-[#1a2f5e]" />
                <p className="text-[9px] tracking-[0.7em] text-[#aaa]">WEB CREATION / RUMISENSE</p>
              </div>
              <h1 className="text-[2.1rem] md:text-[7.2vw] font-[family-name:var(--font-cormorant)] font-light leading-[1.3] md:leading-[1.05] tracking-tight mb-10 md:mb-10">
                <span className="whitespace-nowrap">あなたの想いを</span><br />
                <em className="not-italic italic text-[#1a2f5e]">"Webで形に"</em>
              </h1>
              <p className="hidden md:block text-sm text-[#777] leading-9 max-w-xs mb-12">
                大手にはできない、一人一人への<br />
                丁寧な向き合い方がRumisenseの強みです。
              </p>
              <div className="flex items-center gap-6 md:gap-10">
                <a href="/contact" className="bg-[#1a2f5e] text-white text-[10px] tracking-[0.35em] px-7 py-4 hover:bg-[#0f1e3d] transition-colors duration-300">
                  無料相談を予約する
                </a>
                <a href="/service" className="hidden md:flex items-center gap-3 text-[10px] tracking-[0.3em] text-[#bbb] hover:text-[#1a1a1a] transition-colors group">
                  SERVICE
                  <span className="w-8 h-px bg-current block transition-all duration-500 group-hover:w-16" />
                </a>
              </div>
            </div>

            <div className="mt-16 md:mt-0">
              <div className="hidden md:flex items-stretch border-t border-[#ebebeb] pt-8 mb-10 gap-0">
                {[{ num: "¥0", label: "制作費" }, { num: "24h", label: "修正対応" }, { num: "1名", label: "専任担当" }].map((item, i) => (
                  <div key={item.label} className={`pr-12 ${i > 0 ? "pl-12 border-l border-[#ebebeb]" : ""}`}>
                    <p className="text-5xl font-[family-name:var(--font-cormorant)] font-light text-[#1a2f5e] leading-none mb-2">{item.num}</p>
                    <p className="text-[9px] tracking-[0.35em] text-[#ccc]">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━ TICKER ━━━ */}
      <div className="bg-[#1a2f5e] py-3.5 overflow-hidden border-t border-white/5">
        <div className="flex animate-scroll whitespace-nowrap" style={{ width: "max-content" }}>
          {[...Array(3)].flatMap((_, gi) =>
            tickerItems.map((item, i) => (
              <span key={`${gi}-${i}`} className="text-[9px] tracking-[0.45em] text-white/30 mx-10">
                {item}
              </span>
            ))
          )}
        </div>
      </div>

      {/* ━━━ CAMPAIGN ━━━ */}
      <section className="px-6 md:px-16 py-12 md:py-16 bg-[#1a2f5e]">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <span className="bg-amber-400 text-[#1a2f5e] text-[9px] tracking-[0.45em] font-bold px-3 py-1.5">GRAND OPEN</span>
            <span className="text-[9px] tracking-[0.3em] text-white/30">先着10名様限定</span>
          </div>
          <div className="md:flex md:items-end md:justify-between md:gap-12">
            <div>
              <h2 className="text-[1.9rem] md:text-[3rem] font-[family-name:var(--font-cormorant)] font-light leading-snug mb-6 text-white">
                開業を記念して、<br /><em className="not-italic italic">特別価格でご提供。</em>
              </h2>
              <div className="flex items-end gap-3 mb-4">
                <span className="text-[3.5rem] md:text-[4.5rem] font-[family-name:var(--font-cormorant)] font-light text-white leading-none">¥6,500</span>
                <span className="text-sm text-white/30 mb-2">/月</span>
                <span className="text-sm text-white/20 line-through mb-2">通常 ¥9,800</span>
              </div>
              <p className="text-xs text-white/55 leading-7 mb-6">6ヶ月間契約 / 初期費用¥5,000 / 修正月5回対応</p>
              <a href="/contact" className="inline-flex items-center gap-3 text-[9px] tracking-[0.4em] text-white/50 hover:text-white/80 transition-colors">
                <span className="w-6 h-px bg-white/30 block" />この価格で相談する
              </a>
            </div>
            <p className="hidden md:block text-[9px] tracking-[0.3em] text-white/20 leading-8 max-w-[180px] text-right shrink-0">
              残りわずか。<br />お早めにどうぞ。
            </p>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          02 PROBLEMS
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="animate-fadeUp">
        {/* Header */}
        <div className="px-6 md:px-16 py-16 md:py-20 bg-white border-b border-[#ebebeb]">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <p className="text-[9px] tracking-[0.6em] text-[#ccc] mb-5">02 — PROBLEMS</p>
              <h2 className="text-3xl md:text-[3.2rem] font-[family-name:var(--font-cormorant)] font-light leading-snug">
                こんなお悩み、<br className="md:hidden" /><span className="italic">ありませんか？</span>
              </h2>
            </div>
            <p className="text-[9px] tracking-[0.35em] text-[#ddd]">ひとつでも当てはまる方へ</p>
          </div>
        </div>

        {/* Alternating rows */}
        {[
          { en: "Too expensive.", ja: "Web制作会社に頼んだら、見積もりが高すぎた。", desc: "大手制作会社への依頼は数十万〜数百万円が当たり前。初期費用の高さがWeb制作をあきらめる理由になっています。", reverse: false, img: "/Gemini_Generated_Image_urw6qsurw6qsurw6.png" },
          { en: "Too slow.",      ja: "修正を頼んだら、何日も待たされた。",           desc: "担当者のスケジュールに左右され、急ぎの修正でも数日待ちに。ビジネスチャンスを逃してしまうこともあります。",       reverse: true, img: "/Gemini_Generated_Image_o7y171o7y171o7y1.png"  },
          { en: "Too cold.",      ja: "担当者が変わるたびに、また一から説明しなければならなかった。", desc: "大手会社では担当者が頻繁に交代します。ヒアリング内容が引き継がれず、毎回一から説明する手間が生じます。",  reverse: false, img: "/Gemini_Generated_Image_ey7yqney7yqney7y.png" },
        ].map((item, i) => (
          <div key={i} className={`flex flex-col ${item.reverse ? "md:flex-row-reverse" : "md:flex-row"} border-b border-[#ebebeb]`}>
            {/* Photo */}
            <div className="md:w-1/2 min-h-[260px] md:min-h-[420px] bg-[#ebebeb] relative overflow-hidden flex items-center justify-center">
              {item.img ? (
                <img src={item.img} alt="" className="absolute inset-0 w-full h-full object-cover" />
              ) : (
                <>
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,#e4e4e4_25%,transparent_25%,transparent_50%,#e4e4e4_50%,#e4e4e4_75%,transparent_75%)] bg-[size:8px_8px]" />
                  <div className="relative flex flex-col items-center gap-2">
                    <div className="w-9 h-9 border border-[#c8c8c8] flex items-center justify-center">
                      <div className="w-3.5 h-3.5 border border-[#c8c8c8] rounded-full" />
                    </div>
                    <p className="text-[9px] tracking-[0.5em] text-[#c0c0c0]">PHOTO</p>
                  </div>
                </>
              )}
            </div>
            {/* Text */}
            <div className="md:w-1/2 px-8 md:px-16 py-14 md:py-20 flex flex-col justify-center bg-white">
              <p className="text-[9px] tracking-[0.4em] text-[#ccc] italic font-[family-name:var(--font-cormorant)] mb-5">{item.en}</p>
              <h3 className="text-xl md:text-[1.9rem] font-[family-name:var(--font-cormorant)] font-light leading-relaxed text-[#1a1a1a] mb-6">
                {item.ja.split('、')[0]}、<br className="md:hidden" />{item.ja.split('、').slice(1).join('、')}
              </h3>
              <div className="w-6 h-px bg-[#e0e0e0] mb-6" />
              <p className="text-xs text-[#444] leading-8 max-w-xs">{item.desc}</p>
            </div>
          </div>
        ))}

        {/* Resolution */}
        <div className="px-6 md:px-16 py-12 md:py-16 bg-[#f8f8f8] relative overflow-hidden">
          <div className="max-w-5xl mx-auto relative z-10">
            <div className="w-8 h-px bg-[#ccc] mb-10" />
            <p className="text-[9px] tracking-[0.6em] text-[#ccc] mb-8">— SOLUTION</p>
            <p className="text-3xl md:text-[4rem] font-[family-name:var(--font-cormorant)] font-light text-[#1a1a1a] leading-tight mb-10">
              Rumisenseなら、<br />
              <em className="not-italic italic text-[#1a2f5e]">すべて解決できます。</em>
            </p>
            <a href="/about" className="text-[9px] tracking-[0.4em] text-[#1a2f5e] hover:opacity-50 transition-opacity flex items-center gap-3">
              <span className="w-8 h-px bg-[#1a2f5e] block" /> ABOUT
            </a>
          </div>
          <p className="absolute right-0 bottom-0 text-[16rem] md:text-[20rem] font-[family-name:var(--font-cormorant)] font-light text-[#ececec] leading-none select-none pointer-events-none">○</p>
        </div>
      </section>


      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          04 STATEMENT
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-24 md:py-36 px-6 md:px-16 bg-[#1a2f5e] animate-fadeUp relative overflow-hidden">
        <div className="max-w-5xl mx-auto relative z-10">
          <p className="text-[9px] tracking-[0.6em] text-white/15 mb-12">04 — A PROMISE</p>
          <blockquote className="text-[1.65rem] md:text-[4.8rem] font-[family-name:var(--font-cormorant)] font-light leading-[1.35] text-white">
            「また説明し直しか」<br />
            <span className="text-white/25">そんなストレス</span><br />
            <em className="not-italic italic">"Rumisenseには<br className="md:hidden" />ありません"</em>
          </blockquote>
          <div className="mt-14 flex items-center gap-6">
            <div className="w-10 h-px bg-white/15" />
            <a href="/about" className="text-[9px] tracking-[0.45em] text-white/30 hover:text-white/70 transition-colors">
              なぜ一人なのか、その理由 →
            </a>
          </div>
        </div>
        <p className="absolute -right-8 bottom-0 text-[16rem] md:text-[22rem] font-[family-name:var(--font-cormorant)] font-light text-white/[0.04] leading-none select-none pointer-events-none">
          R
        </p>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          05 COMPARISON
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-28 md:py-44 px-6 md:px-16 bg-white animate-fadeUp">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 md:mb-28 gap-4">
            <div>
              <p className="text-[9px] tracking-[0.6em] text-[#ccc] mb-5">05 — COMPARISON</p>
              <h2 className="text-3xl md:text-[3.2rem] font-[family-name:var(--font-cormorant)] font-light leading-snug">
                大手との<span className="italic">"違い"</span>
              </h2>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[420px] border-collapse">
              <thead>
                <tr>
                  <th className="text-left pb-6 pr-4 font-normal w-[36%]" />
                  <th className="pb-6 px-5 text-center text-[9px] tracking-[0.4em] text-[#ccc] font-normal">A社</th>
                  <th className="pb-6 px-5 text-center text-[9px] tracking-[0.4em] text-[#ccc] font-normal">B社</th>
                  <th className="pb-6 px-5 text-center text-[9px] tracking-[0.4em] text-[#ccc] font-normal">C社</th>
                  <th className="pb-6 px-6 text-center text-[9px] tracking-[0.4em] text-white font-normal bg-[#1a2f5e] rounded-t-sm">Rumisense</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { label: "制作費0円",       a: false, b: false, c: false },
                  { label: "修正24時間対応",   a: false, b: false, c: false },
                  { label: "担当者の一貫性",   a: false, b: false, c: false },
                  { label: "相談・見積り無料", a: true,  b: false, c: true  },
                  { label: "個別ヒアリング",   a: false, b: false, c: false },
                ].map((row, i, arr) => (
                  <tr key={i} className="border-t border-[#ebebeb]">
                    <td className={`py-6 pr-4 text-sm text-[#555] ${i === arr.length - 1 ? "border-b border-[#ebebeb]" : ""}`}>{row.label}</td>
                    {[row.a, row.b, row.c].map((val, j) => (
                      <td key={j} className={`py-6 px-5 text-center text-2xl font-[family-name:var(--font-cormorant)] ${i === arr.length - 1 ? "border-b border-[#ebebeb]" : ""} ${val ? "text-[#aaa]" : "text-[#e2e2e2]"}`}>
                        {val ? "○" : "×"}
                      </td>
                    ))}
                    <td className={`py-6 px-6 text-center text-2xl font-[family-name:var(--font-cormorant)] text-white bg-[#1a2f5e] ${i === arr.length - 1 ? "rounded-b-sm" : ""}`}>
                      ○
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[10px] text-[#999] mt-6 leading-7">※ A社・B社・C社はRumisenseが業界調査をもとに分類した大手Web制作会社の一例です。</p>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          06 WHY — sticky left layout
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-16 md:py-24 px-6 md:px-16 bg-[#f8f8f8] animate-fadeUp">
        <div className="max-w-5xl mx-auto">
          <div className="md:flex md:gap-20 items-start">
            <div className="md:w-[38%] mb-16 md:mb-0 md:sticky md:top-32">
              <p className="text-[9px] tracking-[0.6em] text-[#ccc] mb-5">06 — WHY RUMISENSE</p>
              <h2 className="text-3xl md:text-[3.2rem] font-[family-name:var(--font-cormorant)] font-light leading-snug">
                大手とは<br /><span className="italic">"違う"</span>
              </h2>
              <div className="w-8 h-px bg-[#1a2f5e] mt-10 hidden md:block" />
            </div>
            <div className="md:w-[62%] border-t border-[#e0e0e0]">
              {[
                { num: "01", en: "Speed.", title: "修正は最短24時間", desc: "依頼から最短24時間で対応。大手が数日かけることを、Rumisenseなら翌日には対応します。スピード感が根本的に違います。" },
                { num: "02", en: "Consistency.", title: "担当者は常に同じ", desc: "最初から最後まで私・木村恵輔一人が担当します。毎回説明し直す手間は、Rumisenseではありません。" },
                { num: "03", en: "Care.", title: "丁寧なヒアリング", desc: "一人一人のビジネスと向き合い、本当に必要なサイトを一緒に考えます。画一的な提案はしません。" },
              ].map((s) => (
                <div key={s.num} className="py-10 md:py-14 border-b border-[#e0e0e0] flex gap-8 md:gap-10 items-start">
                  <div className="shrink-0 pt-1">
                    <p className="text-[9px] font-[family-name:var(--font-cormorant)] italic text-[#ccc]">{s.en}</p>
                    <p className="text-xs font-[family-name:var(--font-cormorant)] text-[#d5d5d5]">{s.num}</p>
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-[family-name:var(--font-cormorant)] font-light mb-3 leading-snug">{s.title}</h3>
                    <p className="text-xs text-[#444] leading-8">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>



      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          08 WORKS
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-16 md:py-24 px-6 md:px-16 bg-[#f8f8f8] animate-fadeUp">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 md:mb-14 gap-4">
            <div>
              <p className="text-[9px] tracking-[0.6em] text-[#ccc] mb-5">08 — WORKS</p>
              <h2 className="text-3xl md:text-[3.2rem] font-[family-name:var(--font-cormorant)] font-light leading-snug">
                実績  <span className="italic">"募集中"</span>
              </h2>
            </div>
            <a href="/contact" className="text-[9px] tracking-[0.4em] text-[#1a2f5e] hover:opacity-50 transition-opacity flex items-center gap-3 self-start md:self-end">
              <span className="w-5 h-px bg-[#1a2f5e] block" /> 実績にご協力いただける方へ
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#e2e2e2]">
            {works.map((work) => (
              <div key={work.title} className="bg-white block overflow-hidden">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={work.pc} alt={work.title} className="w-full h-full object-cover object-top" />
                </div>
                <div className="px-6 py-5 border-t border-[#e2e2e2]">
                  <p className="text-[9px] tracking-[0.4em] text-[#c0c0c0] mb-1">{work.category}</p>
                  <p className="text-sm font-[family-name:var(--font-cormorant)] font-light">{work.title}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-14 md:mt-20 border-t border-[#e2e2e2] pt-12">
            <p className="text-sm text-[#555] leading-9 max-w-lg">
              Rumisenseはまだ始まったばかりです。だからこそ、最初のお客様に全力を注げます。「安くていいサイトが欲しい」——そんな方のご協力をお待ちしています。
            </p>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          09 PRICING
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-28 md:py-44 px-6 md:px-16 bg-[#1a2f5e] animate-fadeUp relative overflow-hidden">
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 md:mb-24 gap-4">
            <div>
              <p className="text-[9px] tracking-[0.6em] text-white/15 mb-5">09 — PRICING</p>
              <h2 className="text-4xl md:text-[5rem] font-[family-name:var(--font-cormorant)] font-light text-white leading-tight">
                制作費  <span className="italic">"¥0。"</span>
              </h2>
            </div>
            <p className="text-xs text-white/50 leading-8 max-w-xs">月額だけで、プロのサイトが持てます。</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 border border-white/10 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {[
              { plan: "BASIC",    price: "¥9,800",  note: "6ヶ月〜", features: ["制作費¥0", "修正月5回まで", "最短24h対応", "ページ数5枚"] },
              { plan: "STANDARD", price: "¥12,500", note: "6ヶ月〜", highlight: true, features: ["制作費¥0", "修正月10回まで", "最短12h対応", "ページ数10枚", "SEO対策込み"] },
              { plan: "PREMIUM",  price: "¥18,500", note: "6ヶ月〜", features: ["制作費¥0", "修正無制限", "最短6h対応", "ページ数無制限", "SEO・ブログ込み"] },
            ].map((plan) => (
              <div key={plan.plan} className={`p-8 md:p-12 flex flex-col gap-10 ${plan.highlight ? "bg-white/8" : ""}`}>
                <div>
                  <p className="text-[9px] tracking-[0.5em] text-white/20 mb-7">{plan.plan}</p>
                  <div className="flex items-end gap-2 mb-2">
                    <span className="text-5xl md:text-[3.5rem] font-[family-name:var(--font-cormorant)] font-light text-white leading-none">{plan.price}</span>
                    <span className="text-xs text-white/20 mb-1">/月</span>
                  </div>
                  <p className="text-[9px] tracking-[0.3em] text-white/15">{plan.note}</p>
                </div>
                <ul className="space-y-4 border-t border-white/10 pt-8 mt-auto">
                  {plan.features.map((f, j) => (
                    <li key={j} className="text-xs text-white/55 flex items-center gap-3">
                      <span className="w-3 h-px bg-white/15 shrink-0" />{f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <a href="/service" className="border border-white/10 text-white/40 text-[9px] tracking-[0.45em] px-14 py-4 hover:border-white/30 hover:text-white/70 transition-all duration-300 inline-block">
              プランの詳細を見る →
            </a>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          10 FINAL CTA
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative py-20 md:py-32 px-6 md:px-16 bg-white animate-fadeUp text-center overflow-hidden">
        <p className="text-[9px] tracking-[0.7em] text-[#ddd] mb-12">10 — FREE CONSULTATION</p>
        <h2 className="text-[1.9rem] md:text-[6.5vw] font-[family-name:var(--font-cormorant)] font-light mb-10 leading-tight relative z-10">
          <span className="md:hidden">まず、<span className="italic text-[#1a2f5e]">話しましょう。</span></span>
          <span className="hidden md:inline">まず、<span className="italic text-[#1a2f5e]">話してみてください。</span></span>
        </h2>
        <div className="w-8 h-px bg-[#e8e8e8] mx-auto mb-12" />
        <p className="text-sm text-[#555] leading-10 mb-16 max-w-xs mx-auto relative z-10">
          どんなサイトを作りたいか。<br />
          今どんな悩みがあるか。<br />
          それだけ教えていただければ十分です。
        </p>
        <a href="/contact" className="relative z-10 bg-[#1a2f5e] text-white text-[10px] tracking-[0.2em] md:tracking-[0.45em] px-8 md:px-20 py-5 hover:bg-[#0f1e3d] transition-colors duration-300 inline-block">
          無料相談を予約する →
        </a>
        <p className="absolute left-1/2 -translate-x-1/2 bottom-0 text-[18rem] md:text-[26rem] font-[family-name:var(--font-cormorant)] font-light text-[#f5f5f5] leading-none select-none pointer-events-none">
          R
        </p>
      </section>

      <Footer />
    </main>
  );
}
