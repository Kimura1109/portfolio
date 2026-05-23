"use client";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";

const services = [
  {
    num: "01",
    title: "Basic",
    tag: "まずはここから",
    pages: "1ページ",
    desc: "シンプルな1ページ構成のLP。まずはWebに出たい方に。",
    price: "¥9,800",
    sub: "月額",
    items: ["1ページ構成", "PC・スマホ対応", "SSL対応", "Google Search Console登録", "月5回修正対応"],
  },
  {
    num: "02",
    title: "Standard",
    tag: "人気No.1",
    pages: "2〜6ページ",
    desc: "複数ページで会社・サービスをしっかり伝えたい方に。",
    price: "¥12,500",
    sub: "月額",
    items: ["2〜6ページ構成", "PC・スマホ対応", "SSL対応", "Google Search Console登録", "月5回修正対応"],
  },
  {
    num: "03",
    title: "Premium",
    tag: "本格サイト",
    pages: "7〜12ページ",
    desc: "複数ページでしっかり作り込みたい方に。12ページ以上は別途ご相談ください。",
    price: "¥18,500",
    sub: "月額",
    items: ["7〜12ページ構成", "PC・スマホ対応", "SSL対応", "Google Search Console登録", "月5回修正対応"],
  },
];

const options = [
  {
    title: "ドメイン取得サポート",
    price: "¥2,500",
    sub: "初回のみ",
    desc: "ドメインの選び方から取得まで丁寧にサポート。初めての方も安心してお任せください。",
  },
  {
    title: "DNS設定・Resend含む",
    price: "¥5,500",
    sub: "初回のみ",
    desc: "お名前.comなどのDNS設定からメール送信環境（Resend）の構築まで一括対応します。",
  },
  {
    title: "ブログ実装・入稿代行",
    price: "¥8,800",
    sub: "月額",
    desc: "microCMSを使ったブログ機能を実装。SEOを意識した記事をプロが執筆・入稿し、問い合わせ率を確実に高めます。",
    link: "/service/blog",
  },
];

export default function WebServicePage() {
  return (
    <main className="min-h-screen bg-white text-[#1a1a1a] font-[family-name:var(--font-noto-sans-jp)]">
      <Nav />

      {/* Hero */}
      <section className="relative h-[320px] md:h-[380px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/Gemini_Generated_Image_5q6xg65q6xg65q6x.png"
            alt=""
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a2f5e] via-[#1a2f5e]/80 to-transparent" />
        </div>
        <div className="relative z-10 px-6 md:px-16 w-full">
          <div className="max-w-5xl mx-auto">
            <p className="text-xs tracking-[0.5em] text-white/30 mb-4">WEB PRODUCTION</p>
            <h1 className="text-5xl md:text-7xl font-[family-name:var(--font-cormorant)] font-light text-white mb-4">
              HP・LP制作
            </h1>
            <p className="text-sm text-white/60 leading-8">制作費0円。月額だけで、<br className="md:hidden" />集客できるホームページ・LPを持てます。</p>
          </div>
        </div>
      </section>

      {/* Campaign */}
      <section className="px-6 md:px-16 py-14 md:py-16 bg-[#f8f8f8] border-b border-[#ececec]">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="border-l-2 border-amber-400 pl-6 py-1">
              <p className="text-[10px] tracking-[0.5em] text-amber-600 mb-3">GRAND OPENING CAMPAIGN — 先着10名様限定</p>
              <p className="text-lg md:text-xl font-[family-name:var(--font-cormorant)] font-light text-[#1a1a1a] leading-relaxed">
                開業記念として、<br className="md:hidden" />Basicプランを特別価格でご提供しています
              </p>
            </div>
            <div className="pl-6 md:pl-0 shrink-0">
              <div className="flex items-end gap-3 mb-1">
                <span className="text-6xl font-[family-name:var(--font-cormorant)] text-amber-600">¥6,500</span>
                <span className="text-sm text-[#bbb] line-through mb-1">¥9,800</span>
                <span className="text-sm text-[#999] mb-1">/月</span>
              </div>
              <p className="text-xs text-[#bbb]">6ヶ月間 · 計 ¥39,000 · 初期費用¥5,000</p>
            </div>
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="py-20 md:py-28 px-6 md:px-16 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="mb-14">
            <p className="text-[10px] tracking-[0.6em] text-[#bbb] mb-4">PLAN</p>
            <h2 className="text-4xl font-[family-name:var(--font-cormorant)] font-light">料金プラン</h2>
            <p className="text-xs text-[#999] mt-3 leading-7">全プラン・初期費用¥5,000 / 6ヶ月継続<br className="md:hidden" /> / 修正は月5回まで</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 border border-[#e8e8e8]">
            {services.map((s) => (
              <div
                key={s.num}
                className={`p-8 md:p-10 flex flex-col border-b md:border-b-0 md:border-r border-[#e8e8e8] last:border-0 ${
                  s.num === "02" ? "bg-[#1a2f5e] text-white" : "bg-white"
                }`}
              >
                <div className="flex justify-between items-start mb-8">
                  <p className={`text-xs tracking-widest font-[family-name:var(--font-cormorant)] ${s.num === "02" ? "text-white/25" : "text-[#ddd]"}`}>
                    {s.num}
                  </p>
                  <span className={`text-[10px] tracking-widest px-2 py-1 ${s.num === "02" ? "bg-white/10 text-white/70" : "bg-[#1a2f5e] text-white"}`}>
                    {s.tag}
                  </span>
                </div>
                <h3 className="text-3xl font-[family-name:var(--font-cormorant)] font-light mb-2">{s.title}</h3>
                <p className={`text-[11px] tracking-widest mb-5 ${s.num === "02" ? "text-white/40" : "text-[#bbb]"}`}>{s.pages}</p>
                <p className={`text-sm leading-7 mb-8 ${s.num === "02" ? "text-white/60" : "text-[#666]"}`}>{s.desc}</p>
                <div className="mt-auto">
                  <p className={`text-6xl font-[family-name:var(--font-cormorant)] mb-1 ${s.num === "02" ? "text-white" : "text-[#1a2f5e]"}`}>
                    {s.price}
                  </p>
                  <p className={`text-xs mb-8 ${s.num === "02" ? "text-white/35" : "text-[#bbb]"}`}>{s.sub}</p>
                  <ul className={`space-y-3 border-t pt-7 ${s.num === "02" ? "border-white/10" : "border-[#ececec]"}`}>
                    {s.items.map((item) => (
                      <li key={item} className={`text-xs flex items-center gap-3 ${s.num === "02" ? "text-white/55" : "text-[#666]"}`}>
                        <span className={`text-[8px] ${s.num === "02" ? "text-white/30" : "text-[#1a2f5e]"}`}>●</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Options */}
      <section className="py-20 md:py-28 px-6 md:px-16 bg-[#f8f8f8]">
        <div className="max-w-5xl mx-auto">
          <div className="mb-14">
            <p className="text-[10px] tracking-[0.6em] text-[#bbb] mb-4">OPTION</p>
            <h2 className="text-4xl font-[family-name:var(--font-cormorant)] font-light">オプション</h2>
            <p className="text-xs text-[#999] mt-3 leading-7">必要に応じて追加できます。</p>
          </div>
          <div className="border border-[#e8e8e8] bg-white">
            {options.map((opt, i) => (
              <div key={opt.title} className={`p-8 md:p-10 flex flex-col md:flex-row md:items-start md:gap-16 ${i < options.length - 1 ? "border-b border-[#ececec]" : ""}`}>
                <div className="md:w-48 shrink-0 mb-4 md:mb-0">
                  <h3 className="text-sm font-medium mb-2">{opt.title}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-[family-name:var(--font-cormorant)] font-light text-[#1a2f5e]">{opt.price}</span>
                    <span className="text-xs text-[#bbb]">{opt.sub}</span>
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-[#666] leading-7">{opt.desc}</p>
                  {opt.link && (
                    <a href={opt.link} className="mt-4 text-xs tracking-widest text-[#1a2f5e] hover:text-black transition-colors inline-block">
                      詳しく見る →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Note */}
      <section className="py-12 md:py-16 px-6 md:px-16 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="border-l border-[#e8e8e8] pl-6 md:pl-10">
            <p className="text-[10px] tracking-[0.4em] text-[#bbb] mb-5">NOTE</p>
            <ul className="space-y-4">
              {[
                "全プラン、制作費無料・6ヶ月継続が条件です",
                "修正は月5回まで。内容をまとめてご提出いただければ1回のカウントです",
                "ドメイン取得費用・サーバー費用は別途お客様負担となります",
                "詳細はお気軽にご相談ください",
              ].map((note, i) => (
                <li key={i} className="text-xs text-[#999] leading-7">
                  — {note}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-36 text-center px-6 bg-[#f8f8f8]">
        <p className="text-[10px] tracking-[0.6em] text-[#bbb] mb-8">FREE CONSULTATION</p>
        <h3 className="text-3xl md:text-4xl font-[family-name:var(--font-cormorant)] font-light mb-5 leading-snug">
          まずは無料でご相談ください
        </h3>
        <p className="text-sm text-[#888] mb-12 leading-9">
          どのプランが合っているか、どんなサイトが必要か。<br />
          一緒に考えるところから始めます。
        </p>
        <a href="/contact" className="bg-[#1a2f5e] text-white text-xs tracking-widest px-12 md:px-16 py-4 hover:bg-[#0f1e3d] transition-colors inline-block">
          無料相談を予約する →
        </a>
      </section>

      <Footer />
    </main>
  );
}
