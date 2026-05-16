export default function Home() {
  const works = [
    {
      title: "KOTO COFFEE",
      category: "カフェ / LP",
      desc: "スペシャルティコーヒー専門店のLP制作",
      url: "https://koto-coffee.vercel.app",
      image: "/works/koto-coffee.png",
      bg: "#f0ebe4",
      dark: false,
    },
    {
      title: "HANA HAIR",
      category: "ヘアサロン / LP",
      desc: "ナチュラル系ヘアサロンのLP制作",
      url: "https://hana-hair-gamma.vercel.app",
      image: "/works/hana-hair.png",
      bg: "#ede8e0",
      dark: false,
    },
    {
      title: "居酒屋 夜",
      category: "居酒屋 / LP",
      desc: "こだわり居酒屋のLP制作",
      url: "#",
      image: "/works/izakaya-yoru.png",
      bg: "#1a1208",
      dark: true,
    },
  ];

  const services = [
    {
      num: "01",
      title: "LP・コーポレートサイト制作",
      desc: "飲食店・サロン向けのランディングページやコーポレートサイトを制作します。集客につながるデザインと構成にこだわります。",
      price: "¥50,000〜",
    },
    {
      num: "02",
      title: "既存サイトのリニューアル",
      desc: "古くなったサイトを現代的にリニューアル。スマホ対応・表示速度改善・デザイン刷新まで対応します。",
      price: "¥30,000〜",
    },
    {
      num: "03",
      title: "保守・運用サポート",
      desc: "制作後の更新作業や修正対応も承ります。継続的なサポートで安心してお任せいただけます。",
      price: "¥5,000〜/月",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-[#1a1a1a] font-[family-name:var(--font-noto-sans-jp)]">

      {/* ナビゲーション */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 px-8 py-5 flex justify-between items-center border-b border-[#e8e8e8]">
        <h1 className="text-sm tracking-widest font-medium">KEISUKE KIMURA</h1>
        <ul className="flex gap-10 text-xs tracking-widest text-[#666]">
          <li><a href="#works" className="hover:text-black transition-colors">WORKS</a></li>
          <li><a href="#service" className="hover:text-black transition-colors">SERVICE</a></li>
          <li><a href="#about" className="hover:text-black transition-colors">ABOUT</a></li>
          <li>
            <a href="#contact" className="bg-black text-white px-6 py-2 text-xs tracking-widest hover:bg-[#333] transition-colors">
              CONTACT
            </a>
          </li>
        </ul>
      </nav>

      {/* ヒーロー */}
      <section className="min-h-screen flex flex-col justify-between px-16 pt-20">
        <div className="max-w-5xl">
          <p className="text-xs tracking-[0.5em] text-[#999] mb-8">WEB CREATOR</p>
          <h2 className="text-7xl font-[family-name:var(--font-cormorant)] font-light leading-tight mb-8">
            Crafting Websites<br />
            <span className="italic">That Convert.</span>
          </h2>
          <div className="w-16 h-px bg-black mb-8" />
          <p className="text-base text-[#666] leading-8 max-w-lg mb-12">
            飲食店専門のWeb制作屋さん。<br />
            集客につながるWebサイトを、丁寧に作ります。
          </p>
          <div className="flex gap-6">
            <a href="#works" className="bg-black text-white text-xs tracking-widest px-10 py-4 hover:bg-[#333] transition-colors">
              WORKS を見る
            </a>
            <a href="#contact" className="border border-black text-xs tracking-widest px-10 py-4 hover:bg-black hover:text-white transition-all duration-300">
              お問い合わせ
            </a>
          </div>
        </div>
        <div id="works" className="max-w-5xl w-full pb-16">
          <div className="overflow-hidden">
            <div className="flex animate-scroll" style={{ width: "max-content" }}>
              {[...works, ...works].map((work, index) => (
                <a key={index} href={work.url} target="_blank" className="group block mx-4 flex-shrink-0 w-80">
                  <div className="h-56 mb-4 overflow-hidden rounded-xl group-hover:opacity-80 transition-opacity">
                    {work.image ? (
                      <img src={work.image} alt={work.title} className="h-full w-full object-cover" />
                    ) : (
                      <div
                        className="h-full flex items-center justify-center"
                        style={{ backgroundColor: work.bg }}
                      >
                        <span className={`text-xl font-[family-name:var(--font-cormorant)] font-light tracking-widest ${work.dark ? "text-white" : "text-[#3a3a3a]"}`}>
                          {work.title}
                        </span>
                      </div>
                    )}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE */}
      <section id="service" className="py-32 px-16">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <p className="text-xs tracking-[0.5em] text-[#999] mb-3">WHAT I DO</p>
            <h3 className="text-4xl font-[family-name:var(--font-cormorant)] font-light">Service</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {services.map((service) => (
              <div key={service.num} className="border-t border-[#e8e8e8] pt-8">
                <p className="text-xs text-[#ccc] tracking-widest mb-4">{service.num}</p>
                <h4 className="text-base font-medium mb-4 leading-relaxed">{service.title}</h4>
                <p className="text-sm text-[#666] leading-7 mb-6">{service.desc}</p>
                <p className="text-sm font-medium">{service.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-32 px-16 bg-[#f8f8f8]">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-20">
          <div className="md:w-1/2">
            <p className="text-xs tracking-[0.5em] text-[#999] mb-3">PROFILE</p>
            <h3 className="text-4xl font-[family-name:var(--font-cormorant)] font-light mb-8">About</h3>
            <div className="w-8 h-px bg-black mb-8" />
            <p className="text-sm text-[#666] leading-8 mb-8">
              はじめまして、木村圭介と申します。<br /><br />
              飲食店を中心に、集客につながるWebサイト制作を行っています。
              デザインの美しさだけでなく、お客様のビジネスに貢献できるサイト作りを心がけています。<br /><br />
              ZOOMでの無料相談も承っておりますので、お気軽にご連絡ください。
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex gap-8">
                <span className="text-[#999] w-20">SKILL</span>
                <span>Next.js / React / Tailwind CSS</span>
              </div>
              <div className="flex gap-8">
                <span className="text-[#999] w-20">得意業種</span>
                <span>飲食店・美容系・サロン</span>
              </div>
              <div className="flex gap-8">
                <span className="text-[#999] w-20">対応</span>
                <span>全国対応（オンライン）</span>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 flex items-center justify-center">
            <div className="w-64 h-64 bg-[#e8e8e8] flex items-center justify-center text-[#999] text-sm tracking-widest">
              PHOTO
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-32 px-16 bg-black text-white">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs tracking-[0.5em] text-[#666] mb-3">GET IN TOUCH</p>
          <h3 className="text-4xl font-[family-name:var(--font-cormorant)] font-light mb-6">Contact</h3>
          <div className="w-8 h-px bg-white mx-auto mb-10" />
          <p className="text-sm text-[#999] leading-8 mb-12">
            Webサイト制作のご相談・お見積りは無料です。<br />
            まずはお気軽にご連絡ください。ZOOMでのオンライン打ち合わせに対応しています。
          </p>
          <a
            href="mailto:your@email.com"
            className="inline-block border border-white text-white text-xs tracking-widest px-16 py-4 hover:bg-white hover:text-black transition-all duration-300"
          >
            メールで問い合わせる
          </a>
        </div>
      </section>

      {/* フッター */}
      <footer className="py-8 bg-black text-center text-xs tracking-widest text-[#444] border-t border-[#222]">
        © 2024 Keisuke Kimura
      </footer>

    </main>
  );
}
