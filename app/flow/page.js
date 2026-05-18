"use client";

const flow = [
  { num: "01", title: "無料相談", desc: "ZOOMにてヒアリング。どんな些細なことでもお気軽に。" },
  { num: "02", title: "プランご提案", desc: "お客様のビジネスに合わせた最適なプランをご提案。" },
  { num: "03", title: "制作開始", desc: "着手後、最短2週間で初稿をご確認いただけます。" },
  { num: "04", title: "確認・修正", desc: "ご要望をもとに細部まで丁寧に調整します。" },
  { num: "05", title: "公開・運用", desc: "公開後もプランに応じた修正対応で安心してお任せください。まとめて提出すれば1回のカウントです。" },
];

export default function FlowPage() {
  return (
    <main className="min-h-screen bg-white text-[#1a1a1a] font-[family-name:var(--font-noto-sans-jp)]">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 px-8 py-5 flex justify-between items-center border-b border-[#e8e8e8]">
        <a href="/">
          <h1 className="text-sm tracking-widest font-medium">RUMISENSE</h1>
          <p className="text-[10px] tracking-widest text-[#999]">ルミセンス</p>
        </a>
        <ul className="flex gap-10 text-xs tracking-widest text-[#666]">
          <li><a href="/service" className="hover:text-black transition-colors">SERVICE</a></li>
          <li><a href="/flow" className="text-black font-medium">FLOW</a></li>
          <li><a href="/about" className="hover:text-black transition-colors">ABOUT</a></li>
          <li>
            <a href="/contact" className="bg-[#1a2f5e] text-white px-6 py-2 text-xs tracking-widest hover:bg-[#333] transition-colors">
              無料相談
            </a>
          </li>
        </ul>
      </nav>

      <section className="pt-40 pb-32 px-16">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <p className="text-xs tracking-[0.5em] text-[#999] mb-3">HOW IT WORKS</p>
            <h2 className="text-5xl font-[family-name:var(--font-cormorant)] font-light">Flow</h2>
            <p className="text-sm text-[#666] mt-4 leading-8">ご相談から公開まで、すべて私一人が対応します。</p>
          </div>
          <div className="space-y-0">
            {flow.map((step, index) => (
              <div key={step.num} className="flex gap-12 items-start py-8 border-t border-[#e8e8e8]">
                <p className="text-5xl font-[family-name:var(--font-cormorant)] font-light text-[#e8e8e8] w-16 flex-shrink-0">{step.num}</p>
                <div className="flex-1">
                  <h4 className="text-base font-medium mb-2">{step.title}</h4>
                  <p className="text-sm text-[#666] leading-7">{step.desc}</p>
                </div>
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