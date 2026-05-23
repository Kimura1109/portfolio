"use client";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

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

      <Footer />
    </main>
  );
}
