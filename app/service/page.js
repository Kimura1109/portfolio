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
    sub: "制作費無料 / 月額 × 6ヶ月〜",
    items: ["1ページ構成", "PC・スマホ対応", "SSL対応", "Google Search Console登録", "月5回修正対応"],
  },
  {
    num: "02",
    title: "Standard",
    tag: "人気No.1",
    pages: "2〜6ページ",
    desc: "複数ページで会社・サービスをしっかり伝えたい方に。",
    price: "¥12,500",
    sub: "制作費無料 / 月額 × 6ヶ月〜",
    items: ["2〜6ページ構成", "PC・スマホ対応", "SSL対応", "Google Search Console登録", "月5回修正対応"],
  },
  {
    num: "03",
    title: "Premium",
    tag: "本格サイト",
    pages: "8ページ〜無制限",
    desc: "大規模サイトや多機能なWebサイトを構築したい方に。",
    price: "¥24,500",
    sub: "制作費無料 / 月額 × 6ヶ月〜",
    items: ["8ページ〜無制限", "PC・スマホ対応", "SSL対応", "Google Search Console登録", "月5回修正対応"],
  },
];

const options = [
  {
    title: "ドメイン接続代行",
    price: "¥5,500",
    sub: "初回のみ",
    desc: "お持ちのドメインをサイトに接続。難しい設定はすべてお任せください。",
  },
  {
    title: "ブログ機能実装",
    price: "¥11,000",
    sub: "月額",
    desc: "microCMSを使ったブログ機能を実装。記事の投稿・更新が簡単に行えます。",
  },
];

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-white text-[#1a1a1a] font-[family-name:var(--font-noto-sans-jp)]">
      <Nav />

      {/* プラン */}
      <section className="pt-28 md:pt-40 pb-16 md:pb-24 px-6 md:px-16 bg-[#f8f8f8]">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 md:mb-16">
            <p className="text-xs tracking-[0.5em] text-[#999] mb-3">PRICING</p>
            <h2 className="text-5xl font-[family-name:var(--font-cormorant)] font-light">Service</h2>
            <p className="text-sm text-[#666] mt-4 leading-8">
              制作費無料。月額だけでプロのサイトが持てます。<br />
              全プラン6ヶ月継続。修正は月5回まで、まとめて出しても1回カウント。
            </p>
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
      </section>

      {/* オプション */}
      <section className="py-16 md:py-24 px-6 md:px-16 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <p className="text-xs tracking-[0.5em] text-[#999] mb-3">OPTION</p>
            <h3 className="text-3xl font-[family-name:var(--font-cormorant)] font-light">オプション</h3>
            <p className="text-sm text-[#666] mt-3 leading-8">必要に応じて追加できます。</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#e8e8e8]">
            {options.map((opt) => (
              <div key={opt.title} className="bg-white p-6 md:p-10">
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 mb-4">
                  <h4 className="text-base font-medium">{opt.title}</h4>
                  <div className="text-left sm:text-right">
                    <span className="text-2xl font-[family-name:var(--font-cormorant)] font-light text-[#1a2f5e]">{opt.price}</span>
                    <span className="text-xs text-[#999] ml-1">{opt.sub}</span>
                  </div>
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
        <p className="text-xs tracking-widest text-[#444] mb-1">RUMISENSE / ルミセンス</p>
        <p className="text-xs text-[#333]">© 2024 Keisuke Kimura</p>
      </footer>
    </main>
  );
}
