"use client";
import Nav from "../components/Nav";

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
      <Nav />

      <section className="pt-28 md:pt-40 pb-16 md:pb-32 px-6 md:px-16">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 md:mb-16">
            <p className="text-xs tracking-[0.5em] text-[#999] mb-3">HOW IT WORKS</p>
            <h2 className="text-5xl font-[family-name:var(--font-cormorant)] font-light">Flow</h2>
            <p className="text-sm text-[#666] mt-4 leading-8">ご相談から公開まで、すべて私一人が対応します。</p>
          </div>
          <div className="space-y-0">
            {flow.map((step) => (
              <div key={step.num} className="flex gap-6 md:gap-12 items-start py-7 md:py-8 border-t border-[#e8e8e8]">
                <p className="text-4xl md:text-5xl font-[family-name:var(--font-cormorant)] font-light text-[#e8e8e8] w-12 md:w-16 flex-shrink-0">{step.num}</p>
                <div className="flex-1">
                  <h4 className="text-base font-medium mb-2">{step.title}</h4>
                  <p className="text-sm text-[#666] leading-7">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 md:mt-16 text-center">
            <a href="/contact" className="bg-black text-white text-xs tracking-widest px-12 md:px-16 py-4 hover:bg-[#333] transition-colors inline-block">
              無料相談を予約する →
            </a>
          </div>
        </div>
      </section>

      <footer className="py-8 bg-[#1a2f5e] text-center border-t border-[#222]">
        <a href="https://www.instagram.com/remisense_official" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white/40 hover:text-white/80 transition-colors mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
          <span className="text-xs tracking-widest">@remisense_official</span>
        </a>
        <p className="text-xs tracking-widest text-[#444] mb-1">RUMISENSE / ルミセンス</p>
        <p className="text-xs text-[#333]">© 2024 Keisuke Kimura</p>
      </footer>
    </main>
  );
}
