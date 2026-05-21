"use client";
import Nav from "../components/Nav";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-[#1a1a1a] font-[family-name:var(--font-noto-sans-jp)]">
      <Nav />

      {/* ヘッダー */}
      <section className="pt-28 md:pt-40 pb-16 md:pb-20 px-6 md:px-16 bg-[#f8f8f8]">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs tracking-[0.5em] text-[#999] mb-4">PROFILE</p>
          <h2 className="text-5xl md:text-7xl font-[family-name:var(--font-cormorant)] font-light mb-3">Keisuke Kimura</h2>
          <p className="text-sm text-[#999] tracking-widest">Rumisense / ルミセンス</p>
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
