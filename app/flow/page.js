"use client";
import Nav from "../components/Nav";

const flow = [
  {
    num: "01",
    title: "お問い合わせ",
    tag: "CONTACT",
    desc: "サイトのフォームからお気軽にご連絡ください。24時間以内にご返信します。",
    accent: false,
  },
  {
    num: "02",
    title: "ヒアリングシートのご記入",
    tag: "HEARING SHEET",
    desc: "ZOOMでの打ち合わせ前に、ヒアリングシートをお送りします。できる範囲でご記入ください。",
    accent: false,
  },
  {
    num: "03",
    title: "ZOOMで無料相談",
    tag: "FREE CONSULTATION",
    desc: "約30〜60分、ビジネスの背景やサイトへの想いをじっくりお聞きします。",
    accent: true,
  },
  {
    num: "04",
    title: "見積書・契約書のご確認",
    tag: "ESTIMATE & CONTRACT",
    desc: "内容をご確認いただき、メールにてご同意をお願いします。",
    accent: false,
  },
  {
    num: "05",
    title: "ご入金確認後、制作開始",
    tag: "PRODUCTION START",
    desc: "1ヶ月目の月額をお支払いいただいた後、制作をスタートします。",
    accent: false,
  },
  {
    num: "06",
    title: "テスト公開・確認",
    tag: "TEST PUBLISH",
    desc: "完成したサイトをテスト環境でご確認いただきます。修正があればお知らせください。",
    accent: false,
  },
  {
    num: "07",
    title: "本公開",
    tag: "LAUNCH",
    desc: "確認完了後、本番環境に公開します。",
    accent: true,
  },
];

export default function FlowPage() {
  return (
    <main className="min-h-screen bg-white text-[#1a1a1a] font-[family-name:var(--font-noto-sans-jp)]">
      <Nav />

      {/* ヘッダー */}
      <section className="relative pt-28 md:pt-40 pb-16 md:pb-20 bg-[#f8f8f8] overflow-hidden h-[320px] md:h-[380px] flex items-center">
        {/* 画像（右側からフェードイン） */}
        <div className="absolute inset-0">
          <img
            src="/flow-hero.png"
            alt=""
            className="w-full h-full object-cover object-center"
          />
          {/* 左側グラデーションで文字エリアを確保 */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#f8f8f8] via-[#f8f8f8]/90 to-transparent" />
        </div>
        {/* テキスト */}
        <div className="relative z-10 px-6 md:px-16 w-full">
          <div className="max-w-4xl mx-auto">
            <p className="text-xs tracking-[0.5em] text-[#999] mb-4">HOW IT WORKS</p>
            <h2 className="text-5xl md:text-7xl font-[family-name:var(--font-cormorant)] font-light mb-4">Flow</h2>
            <p className="text-sm text-[#666] leading-8">ご相談から公開まで、すべて私一人が対応します。</p>
          </div>
        </div>
      </section>

      {/* ステップ */}
      <section className="py-16 md:py-24 px-6 md:px-16 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* 縦線 */}
            <div className="absolute left-[2.35rem] md:left-[2.85rem] top-0 bottom-0 w-px bg-[#e8e8e8]" />

            <div className="space-y-0">
              {flow.map((step) => (
                <div key={step.num} className="relative flex gap-6 md:gap-10 pb-10 md:pb-12 last:pb-0">
                  {/* サークル */}
                  <div className={`relative z-10 flex-shrink-0 w-[4.7rem] md:w-[5.7rem] flex flex-col items-center`}>
                    <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center border-2 text-xs font-bold tracking-wider
                      ${step.accent
                        ? "bg-[#1a2f5e] border-[#1a2f5e] text-white"
                        : "bg-white border-[#1a2f5e] text-[#1a2f5e]"
                      }`}>
                      {step.num}
                    </div>
                  </div>

                  {/* コンテンツ */}
                  <div className={`flex-1 pb-2 ${step.accent ? "bg-[#f8f8f8] -mx-2 px-4 py-4 md:py-5 rounded-sm" : ""}`}>
                    <p className="text-[9px] tracking-[0.35em] text-[#999] mb-1">{step.tag}</p>
                    <h4 className={`text-base md:text-lg font-medium mb-2 ${step.accent ? "text-[#1a2f5e]" : ""}`}>
                      {step.title}
                    </h4>
                    <p className="text-sm text-[#666] leading-7">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-14 md:mt-16 text-center">
            <p className="text-xs text-[#999] tracking-widest mb-6">まずはお気軽にどうぞ。相談は無料です。</p>
            <a href="/contact" className="bg-[#1a2f5e] text-white text-xs tracking-widest px-12 md:px-16 py-4 hover:bg-[#0f1e3d] transition-colors inline-block">
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
