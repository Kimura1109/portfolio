"use client";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-[#1a1a1a] font-[family-name:var(--font-noto-sans-jp)]">
      <Nav />

      {/* ヘッダー */}
      <section className="relative h-[320px] md:h-[380px] flex items-center overflow-hidden bg-[#f8f8f8]">
        <div className="absolute left-0 top-1/2 -translate-y-[45%]">
          <img
            src="/about-hero.png"
            alt=""
            className="h-[480px] md:h-[560px] w-auto"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-l from-[#f8f8f8] from-40% via-[#f8f8f8]/80 to-transparent" />
        <div className="relative z-10 px-6 md:px-16 w-full">
          <div className="max-w-5xl mx-auto flex">
            <div className="ml-[40%]">
              <p className="text-xs tracking-[0.5em] text-[#999] mb-4">PROFILE</p>
              <h2 className="text-5xl md:text-7xl font-[family-name:var(--font-cormorant)] font-light mb-3">Keisuke Kimura</h2>
              <p className="text-sm text-[#999] tracking-widest">Rumisense / ルミセンス</p>
            </div>
          </div>
        </div>
      </section>

      {/* 第一章：大手での疑問 */}
      <section className="py-16 md:py-24 px-6 md:px-16 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="md:flex md:gap-20 items-start">
            <div className="md:w-1/3 mb-8 md:mb-0 md:sticky md:top-24">
              <p className="text-[10px] tracking-[0.4em] text-[#999] mb-3">CHAPTER 01</p>
              <h3 className="text-2xl md:text-3xl font-[family-name:var(--font-cormorant)] font-light leading-snug">大手で感じた、<br /><span className="italic">疑問。</span></h3>
            </div>
            <div className="md:w-2/3 space-y-6 text-sm text-[#555] leading-8">
              <p>私はかつて、大手のWeb制作会社で働いていました。そこで感じたのは、<span className="font-bold text-black">「本当にお客様のためになっているのか」</span>という疑問です。</p>
              <p>大手の制作会社では、<span className="font-bold text-black">担当者が修正のたびに変わる</span>ことが珍しくありません。前回の担当者がお客様から聞いていたこと、デザインへの想い、こだわりのポイント——そういった大切な情報が<span className="font-bold text-black">次の担当者に引き継がれないまま</span>、修正作業が進んでしまうのです。</p>
              <p>その結果、<span className="text-[#c0392b] font-bold">「思っていたものと違う」「また一から説明しなければならない」</span>というお客様の声が後を絶ちませんでした。修正のたびにすれ違いが生まれ、サイトの公開が遅れ、<span className="text-[#c0392b] font-bold">クレームへと発展</span>してしまうこともありました。</p>
            </div>
          </div>
        </div>
      </section>

      {/* 転換点：大きな引用 */}
      <section className="py-16 md:py-24 px-6 md:px-16 bg-[#1a2f5e]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[10px] tracking-[0.4em] text-white/40 mb-8">TURNING POINT</p>
          <p className="text-3xl md:text-5xl font-[family-name:var(--font-cormorant)] font-light text-white leading-relaxed italic">
            「これは、変えなければいけない。」
          </p>
          <div className="w-12 h-px bg-white/30 mx-auto mt-10" />
          <p className="text-sm text-white/50 mt-8 leading-7">
            そう思ったとき、私は個人事業主としてRumisenseを<br className="hidden md:block" />立ち上げることを決意しました。
          </p>
        </div>
      </section>

      {/* 第二章：Rumisenseという選択 */}
      <section className="py-16 md:py-24 px-6 md:px-16 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="md:flex md:gap-20 items-start">
            <div className="md:w-1/3 mb-8 md:mb-0 md:sticky md:top-24">
              <p className="text-[10px] tracking-[0.4em] text-[#999] mb-3">CHAPTER 02</p>
              <h3 className="text-2xl md:text-3xl font-[family-name:var(--font-cormorant)] font-light leading-snug">Rumisenseという、<br /><span className="italic">選択。</span></h3>
            </div>
            <div className="md:w-2/3 space-y-6 text-sm text-[#555] leading-8">
              <p>Rumisenseでは、<span className="font-bold text-black">最初から最後まで私・木村 恵輔が一人で担当</span>します。初回のヒアリングで伺ったお客様の想い、デザインへのこだわり、ビジネスの背景——<span className="font-bold text-black">そのすべてを把握した状態で</span>、修正にも本公開にも臨みます。</p>
              <p><span className="text-[#c0392b] font-bold">「担当者が変わって話が伝わっていない」</span>——そんなストレスを、Rumisenseでは<span className="font-bold text-black">感じさせません。</span></p>
              <div className="border-l-2 border-[#1a2f5e] pl-6 py-1">
                <p className="text-[#1a2f5e] font-bold">個人事業主だからこそできる、一貫した寄り添いで、お客様が本当に求めている最高のサイトをお届けします。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* プロフィールデータ */}
      <section className="py-16 md:py-20 px-6 md:px-16 bg-[#f8f8f8]">
        <div className="max-w-4xl mx-auto">
          <div className="md:flex md:gap-20 items-start">
            <div className="md:w-1/3 mb-8 md:mb-0">
              <p className="text-[10px] tracking-[0.4em] text-[#999] mb-3">ABOUT</p>
              <h3 className="text-2xl md:text-3xl font-[family-name:var(--font-cormorant)] font-light">木村 恵輔</h3>
            </div>
            <div className="md:w-2/3 space-y-4 text-sm">
              <div className="flex gap-8 border-b border-[#e8e8e8] pb-4">
                <span className="text-[#999] w-24 flex-shrink-0 tracking-wider">SKILL</span>
                <span className="text-[#444]">Next.js / React / Tailwind CSS</span>
              </div>
              <div className="flex gap-8 border-b border-[#e8e8e8] pb-4">
                <span className="text-[#999] w-24 flex-shrink-0 tracking-wider">対応エリア</span>
                <span className="text-[#444]">全国対応（オンライン）</span>
              </div>
              <div className="flex gap-8 border-b border-[#e8e8e8] pb-4">
                <span className="text-[#999] w-24 flex-shrink-0 tracking-wider">修正対応</span>
                <span className="text-[#444]">最短24時間</span>
              </div>
              <div className="flex gap-8">
                <span className="text-[#999] w-24 flex-shrink-0 tracking-wider">担当体制</span>
                <span className="text-[#444]">木村 恵輔 一名が専任</span>
              </div>
            </div>
          </div>
          <div className="mt-12 md:ml-[calc(33.333%+5rem)]">
            <a href="/contact" className="bg-[#1a2f5e] text-white text-xs tracking-widest px-10 py-4 hover:bg-[#0f1e3d] transition-colors inline-block">
              無料相談を予約する →
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
