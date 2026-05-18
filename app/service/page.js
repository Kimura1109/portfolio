"use client";

const services = [
  {
    num: "01",
    title: "ライトプラン",
    tag: "おすすめ",
    desc: "月3回まで修正対応。まとめて提出すれば1回のカウントなので、効率よく使えます。",
    price: "¥9,800",
    sub: "制作費無料 / 月額¥9,800×6ヶ月",
    items: ["PC・スマホ対応", "Google Search Console登録", "SSL対応", "月3回修正対応"],
  },
  {
    num: "02",
    title: "スタンダードプラン",
    tag: "人気",
    desc: "月5回まで修正対応。更新頻度が高めの方に。まとめて提出すれば1回のカウント。",
    price: "¥14,500",
    sub: "制作費無料 / 月額¥14,500×6ヶ月",
    items: ["PC・スマホ対応", "Google Search Console登録", "SSL対応", "月5回修正対応"],
  },
  {
    num: "03",
    title: "無制限プラン",
    tag: "安心",
    desc: "修正回数無制限。何度でもお気軽に。まとめて提出すれば1回のカウント。",
    price: "¥24,500",
    sub: "制作費無料 / 月額¥24,500×6ヶ月",
    items: ["PC・スマホ対応", "Google Search Console登録", "SSL対応", "修正回数無制限"],
  },
];

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-white text-[#1a1a1a] font-[family-name:var(--font-noto-sans-jp)]">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 px-8 py-5 flex justify-between items-center border-b border-[#e8e8e8]">
        <a href="/">
          <h1 className="text-sm tracking-widest font-medium">RUMISENSE</h1>
          <p className="text-[10px] tracking-widest text-[#999]">ルミセンス</p>
        </a>
        <ul className="flex gap-10 text-xs tracking-widest text-[#666]">
          <li><a href="/service" className="text-black font-medium">SERVICE</a></li>
          <li><a href="/flow" className="hover:text-black transition-colors">FLOW</a></li>
          <li><a href="/about" className="hover:text-black transition-colors">ABOUT</a></li>
          <li>
            <a href="/contact" className="bg-[#1a2f5e] text-white px-6 py-2 text-xs tracking-widest hover:bg-[#333] transition-colors">
              無料相談
            </a>
          </li>
        </ul>
      </nav>

      <section className="pt-40 pb-32 px-16 bg-[#f8f8f8]">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <p className="text-xs tracking-[0.5em] text-[#999] mb-3">PRICING</p>
            <h2 className="text-5xl font-[family-name:var(--font-cormorant)] font-light">Service</h2>
            <p className="text-sm text-[#666] mt-4 leading-8">制作費無料。月額だけでプロのサイトが持てます。<br />修正はまとめて提出すれば1回のカウントです。</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.num} className={`p-8 ${service.num === "01" ? "bg-black text-white" : "bg-white"}`}>
                <div className="flex justify-between items-start mb-6">
                  <p className="text-xs tracking-widest opacity-50">{service.num}</p>
                  <span className={`text-[10px] tracking-widest px-2 py-1 ${service.num === "01" ? "bg-white text-black" : "bg-black text-white"}`}>
                    {service.tag}
                  </span>
                </div>
                <h4 className="text-lg font-medium mb-3">{service.title}</h4>
                <p className={`text-sm leading-7 mb-6 ${service.num === "01" ? "text-[#999]" : "text-[#666]"}`}>{service.desc}</p>
                <p className="text-3xl font-[family-name:var(--font-cormorant)] font-light mb-1">{service.price}</p>
                <p className={`text-xs mb-6 ${service.num === "01" ? "text-[#666]" : "text-[#999]"}`}>{service.sub}</p>
                <ul className="space-y-2">
                  {service.items.map((item) => (
                    <li key={item} className={`text-xs flex items-center gap-2 ${service.num === "01" ? "text-[#ccc]" : "text-[#666]"}`}>
                      <span>✓</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <a href="/contact" className="bg-black text-white text-xs tracking-widest px-16 py-4 hover:bg-[#333] transition-colors inline-block">
              無料相談を予約する →
            </a>
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