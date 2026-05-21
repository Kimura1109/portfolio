"use client";
import Nav from "../components/Nav";

const services = [
  {
    num: "01",
    title: "Basic",
    tag: "まずはここから",
    pages: "1ページ",
    desc: "シンプルな1ページ構成のLP。まずはWebに出たい方に。",
    price: "¥9,800",
    sub: "初期費用¥5,000 / 月額 × 6ヶ月〜",
    items: ["1ページ構成", "PC・スマホ対応", "SSL対応", "Google Search Console登録", "月5回修正対応"],
  },
  {
    num: "02",
    title: "Standard",
    tag: "人気No.1",
    pages: "2〜6ページ",
    desc: "複数ページで会社・サービスをしっかり伝えたい方に。",
    price: "¥12,500",
    sub: "初期費用¥5,000 / 月額 × 6ヶ月〜",
    items: ["2〜6ページ構成", "PC・スマホ対応", "SSL対応", "Google Search Console登録", "月5回修正対応"],
  },
  {
    num: "03",
    title: "Premium",
    tag: "本格サイト",
    pages: "7〜12ページ",
    desc: "複数ページで会社・サービスをしっかり作り込みたい方に。12ページ以上は別途ご相談ください。",
    price: "¥18,500",
    sub: "初期費用¥5,000 / 月額 × 6ヶ月〜",
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
    title: "ブログ実装・投稿代行",
    price: "¥11,000",
    sub: "月額",
    desc: "microCMSを使ったブログ機能を実装。記事の投稿・更新もお任せいただけます（月2回まで）。",
  },
];

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-white text-[#1a1a1a] font-[family-name:var(--font-noto-sans-jp)]">
      <Nav />

      {/* プラン */}
      <section className="bg-[#f8f8f8]">
        {/* ヘッダー画像エリア */}
        <div className="relative pt-28 md:pt-40 pb-16 md:pb-20 overflow-hidden h-[320px] md:h-[380px] flex items-center">
          <div className="absolute inset-0">
            <img
              src="/Gemini_Generated_Image_d9cuxed9cuxed9cu.png"
              alt=""
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#f8f8f8] via-[#f8f8f8]/90 to-transparent" />
          </div>
          <div className="relative z-10 px-6 md:px-16 w-full">
            <div className="max-w-5xl mx-auto">
              <p className="text-xs tracking-[0.5em] text-[#999] mb-3">PRICING</p>
              <h2 className="text-5xl md:text-7xl font-[family-name:var(--font-cormorant)] font-light">Service</h2>
              <p className="text-sm text-[#666] mt-4 leading-8">
                制作費無料。月額だけでプロのサイトが持てます。<br />
                全プラン6ヶ月継続。修正は月5回まで、まとめて出しても1回カウント。
              </p>
            </div>
          </div>
        </div>
        <div className="px-6 md:px-16 pb-16 md:pb-24">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 md:mb-16">

          {/* 開業記念キャンペーン */}
          <div className="mb-8 relative overflow-hidden bg-[#1a2f5e] text-white px-6 md:px-10 py-6 md:py-8">
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {services.map((service) => (
              <div key={service.num} className={`p-6 md:p-8 flex flex-col ${service.num === "02" ? "bg-[#1a2f5e] text-white" : "bg-white"}`}>
                <div className="flex justify-between items-start mb-6">
                  <p className={`text-xs tracking-widest ${service.num === "02" ? "text-white/40" : "text-[#ccc]"}`}>{service.num}</p>
                  <span className={`text-[10px] tracking-widest px-2 py-1 ${service.num === "02" ? "bg-white text-[#1a2f5e]" : "bg-[#1a2f5e] text-white"}`}>
                    {service.tag}
                  </span>
                </div>
                <h4 className="text-2xl font-[family-name:var(--font-cormorant)] font-light mb-1">{service.title}</h4>
                <p className={`text-[11px] tracking-widest mb-4 ${service.num === "02" ? "text-white/50" : "text-[#999]"}`}>{service.pages}</p>
                <p className={`text-sm leading-7 mb-6 ${service.num === "02" ? "text-white/70" : "text-[#666]"}`}>{service.desc}</p>
                <div className="mt-auto">
                  <p className={`text-4xl font-[family-name:var(--font-cormorant)] font-light mb-1 ${service.num === "02" ? "text-white" : "text-[#1a2f5e]"}`}>
                    {service.price}
                    <span className={`text-sm font-sans ml-1 ${service.num === "02" ? "text-white/50" : "text-[#999]"}`}>/月</span>
                  </p>
                  <p className={`text-xs mb-6 ${service.num === "02" ? "text-white/40" : "text-[#999]"}`}>{service.sub}</p>
                  <ul className={`space-y-2 border-t pt-6 ${service.num === "02" ? "border-white/10" : "border-[#e8e8e8]"}`}>
                    {service.items.map((item) => (
                      <li key={item} className={`text-xs flex items-center gap-2 ${service.num === "02" ? "text-white/60" : "text-[#666]"}`}>
                        <span className={service.num === "02" ? "text-white/40" : "text-[#1a2f5e]"}>✓</span>{item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
        </div>
        </div>
      </section>

      {/* オプション */}
      <section className="py-16 md:py-24 px-6 md:px-16 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <p className="text-xs tracking-[0.5em] text-[#999] mb-3">OPTION</p>
            <h3 className="text-3xl font-[family-name:var(--font-cormorant)] font-light">オプション</h3>
            <p className="text-sm text-[#666] mt-3 leading-8">必要に応じて追加できます。</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#e8e8e8]">
            {options.map((opt) => (
              <div key={opt.title} className="bg-white p-6 md:p-8">
                <h4 className="text-sm font-medium mb-2 whitespace-nowrap">{opt.title}</h4>
                <div className="mb-4">
                  <span className="text-2xl font-[family-name:var(--font-cormorant)] font-light text-[#1a2f5e]">{opt.price}</span>
                  <span className="text-xs text-[#999] ml-1">{opt.sub}</span>
                </div>
                <p className="text-sm text-[#666] leading-7">{opt.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 注意事項 */}
      <section className="pb-16 md:pb-24 px-6 md:px-16 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="bg-[#f8f8f8] px-5 md:px-10 py-6 md:py-8">
            <p className="text-xs tracking-[0.3em] text-[#999] mb-4">NOTE</p>
            <ul className="space-y-3">
              {[
                "全プラン、制作費無料・6ヶ月継続が条件です",
                "修正は月5回まで。内容をまとめてご提出いただければ1回のカウントです",
                "ドメイン取得費用・サーバー費用は別途お客様負担となります",
                "詳細はお気軽にご相談ください",
              ].map((note, i) => (
                <li key={i} className="text-xs text-[#666] flex items-start gap-3 leading-6">
                  <span className="text-[#1a2f5e] mt-0.5">—</span>{note}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <div className="pb-16 md:pb-24 text-center px-6">
        <a href="/contact" className="bg-black text-white text-xs tracking-widest px-12 md:px-16 py-4 hover:bg-[#333] transition-colors inline-block">
          無料相談を予約する →
        </a>
      </div>

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
    </main>
  );
}
