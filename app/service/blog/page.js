"use client";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";

const canDo = [
  { title: "キーワード選定", desc: "検索意図を読み取り、問い合わせにつながるキーワードを選定します。" },
  { title: "記事構成・執筆", desc: "SEOを意識した見出し構成と、読み手に伝わる文章を執筆します。" },
  { title: "タイトル・メタディスクリプション設定", desc: "クリック率を高めるタイトルとメタ情報を設定します。" },
  { title: "microCMSへの入稿・公開", desc: "お客様のCMS環境に入稿し、公開まで一括対応します。" },
  { title: "Google Search Consoleへの送信", desc: "公開後、速やかにインデックス送信を行います。" },
];

const promises = [
  {
    num: "01",
    title: "すべてRumisenseが執筆します",
    desc: "AIに丸投げせず、Rumisenseが責任を持って執筆します。お客様のブランドトーンに合わせた文章をお届けします。",
  },
  {
    num: "02",
    title: "公開前にご確認いただけます",
    desc: "公開前に必ずお客様に記事をご確認いただきます。「思っていたものと違う」というご不満をなくす仕組みです。",
  },
  {
    num: "03",
    title: "修正は追加料金なし",
    desc: "納品前の修正は何度でも対応します。追加料金は一切いただきません。ご満足いただけるまで対応します。",
  },
];

export default function BlogServicePage() {
  return (
    <main className="min-h-screen bg-white text-[#1a1a1a] font-[family-name:var(--font-noto-sans-jp)]">
      <Nav />

      {/* Hero */}
      <section className="relative h-[320px] md:h-[380px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/blog-hero.png"
            alt=""
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a2f5e] via-[#1a2f5e]/80 to-transparent" />
        </div>
        <div className="relative z-10 px-6 md:px-16 w-full">
          <div className="max-w-5xl mx-auto">
            <p className="text-xs tracking-[0.5em] text-white/30 mb-4">BLOG WRITING</p>
            <h1 className="text-5xl md:text-7xl font-[family-name:var(--font-cormorant)] font-light text-white mb-4">
              ブログ入稿代行
            </h1>
            <p className="text-sm text-white/60 leading-8">プロが確実に問い合わせ率を上げる、<br className="md:hidden" />ブログ運用を代行します。</p>
          </div>
        </div>
      </section>

      {/* こんな方へ */}
      <section className="py-20 md:py-28 px-6 md:px-16 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="mb-14">
            <p className="text-[10px] tracking-[0.6em] text-[#bbb] mb-4">FOR WHO</p>
            <h2 className="text-4xl font-[family-name:var(--font-cormorant)] font-light">こんな方へ</h2>
          </div>
          <div className="border-t border-[#ececec]">
            {[
              "ブログを書きたいが、まとまった時間がとれない",
              "何をテーマに書けば集客につながるか分からない",
              "SEOの知識がなく、検索に引っかかるか不安だ",
            ].map((text, i) => (
              <div key={i} className="py-8 border-b border-[#ececec] flex items-start gap-8 md:gap-12">
                <span className="text-xs font-[family-name:var(--font-cormorant)] text-[#d0d0d0] shrink-0 mt-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-lg md:text-xl font-[family-name:var(--font-cormorant)] font-light text-[#1a1a1a] leading-relaxed">
                  {text}
                </p>
              </div>
            ))}
          </div>
          <p className="text-xs text-[#777] mt-8 leading-7">
            ひとつでも当てはまる方は、Rumisenseのブログ代行がお役に立てます。
          </p>
        </div>
      </section>

      {/* できること */}
      <section className="py-20 md:py-28 px-6 md:px-16 bg-[#f8f8f8]">
        <div className="max-w-5xl mx-auto">
          <div className="mb-14">
            <p className="text-[10px] tracking-[0.6em] text-[#bbb] mb-4">WHAT WE DO</p>
            <h2 className="text-4xl font-[family-name:var(--font-cormorant)] font-light">できること</h2>
            <p className="text-sm text-[#444] mt-3 leading-7">
              キーワード選定から入稿・送信まで、<br className="md:hidden" />ブログ運用をまるごとお任せいただけます。
            </p>
          </div>
          <div className="border border-[#e8e8e8] bg-white">
            {canDo.map((item, i) => (
              <div key={i} className={`px-8 md:px-10 py-7 md:py-8 flex gap-8 md:gap-12 ${i < canDo.length - 1 ? "border-b border-[#ececec]" : ""}`}>
                <span className="text-xs font-[family-name:var(--font-cormorant)] text-[#d0d0d0] shrink-0 mt-0.5">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="text-sm font-medium text-[#1a1a1a] mb-1">{item.title}</p>
                  <p className="text-xs text-[#444] leading-6">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3つの約束 */}
      <section className="py-20 md:py-28 px-6 md:px-16 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="mb-14">
            <p className="text-[10px] tracking-[0.6em] text-[#bbb] mb-4">PROMISE</p>
            <h2 className="text-4xl font-[family-name:var(--font-cormorant)] font-light">3つの約束</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 border border-[#e8e8e8]">
            {promises.map((p, i) => (
              <div
                key={p.num}
                className={`p-8 md:p-10 flex flex-col border-b md:border-b-0 md:border-r border-[#e8e8e8] last:border-0`}
              >
                <p className="text-xs font-[family-name:var(--font-cormorant)] text-[#d0d0d0] mb-8">{p.num}</p>
                <h3 className="text-base font-medium mb-4 leading-7">{p.title}</h3>
                <p className="text-sm text-[#777] leading-7 mt-auto">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 料金 */}
      <section className="py-20 md:py-28 px-6 md:px-16 bg-[#1a2f5e]">
        <div className="max-w-5xl mx-auto">
          <div className="mb-14">
            <p className="text-[10px] tracking-[0.6em] text-white/25 mb-4">PRICING</p>
            <h2 className="text-4xl font-[family-name:var(--font-cormorant)] font-light text-white">料金</h2>
          </div>
          <div className="border border-white/10">
            <div className="p-10 md:p-14 flex flex-col md:flex-row md:items-end md:justify-between gap-10">
              <div>
                <p className="text-[10px] tracking-[0.5em] text-white/30 mb-4">STANDARD PLAN</p>
                <p className="text-base text-white/60 mb-4">月2記事</p>
                <div className="flex items-end gap-3">
                  <span className="text-7xl md:text-8xl font-[family-name:var(--font-cormorant)] text-white">¥8,800</span>
                  <span className="text-sm text-white/40 mb-2">/月</span>
                </div>
              </div>
              <ul className="space-y-3 border-t border-white/10 pt-8 md:border-t-0 md:pt-0 md:border-l md:border-white/10 md:pl-14">
                {[
                  "キーワード選定込み",
                  "SEO最適化済み",
                  "microCMS入稿・公開対応",
                  "修正は追加料金なし",
                ].map((item, i) => (
                  <li key={i} className="text-xs text-white/50 flex items-center gap-3">
                    <span className="text-[8px] text-white/20">●</span>{item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-36 text-center px-6 bg-white">
        <p className="text-[10px] tracking-[0.6em] text-[#bbb] mb-8">FREE CONSULTATION</p>
        <h3 className="text-3xl md:text-4xl font-[family-name:var(--font-cormorant)] font-light mb-5 leading-snug">
          まずはお気軽にご相談ください
        </h3>
        <p className="text-sm text-[#888] mb-12 leading-9">
          どんな記事を書けばいいか、SEOはどうすればいいか。<br />
          疑問はすべて無料相談でお答えします。
        </p>
        <a href="/contact" className="bg-[#1a2f5e] text-white text-xs tracking-widest px-12 md:px-16 py-4 hover:bg-[#0f1e3d] transition-colors inline-block">
          無料相談を予約する →
        </a>
      </section>

      <Footer />
    </main>
  );
}
