"use client";
import { useState } from "react";

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    if (res.ok) {
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } else {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="text-left space-y-6 mt-8">
      <div>
        <label className="text-xs tracking-widest text-[#999] block mb-2">お名前</label>
        <input
          type="text"
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full bg-transparent border border-[#333] text-white px-4 py-3 text-sm focus:outline-none focus:border-white transition-colors"
          placeholder="山田 太郎"
        />
      </div>
      <div>
        <label className="text-xs tracking-widest text-[#999] block mb-2">メールアドレス</label>
        <input
          type="email"
          required
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full bg-transparent border border-[#333] text-white px-4 py-3 text-sm focus:outline-none focus:border-white transition-colors"
          placeholder="example@email.com"
        />
      </div>
      <div>
        <label className="text-xs tracking-widest text-[#999] block mb-2">メッセージ</label>
        <textarea
          required
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          rows={5}
          className="w-full bg-transparent border border-[#333] text-white px-4 py-3 text-sm focus:outline-none focus:border-white transition-colors resize-none"
          placeholder="お気軽にご相談ください"
        />
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full bg-white text-black text-xs tracking-widest py-4 hover:bg-[#e8e8e8] transition-all duration-300 disabled:opacity-50"
      >
        {status === "sending" ? "送信中..." : "無料相談を予約する →"}
      </button>
      {status === "success" && (
        <p className="text-center text-sm text-green-400">✓ 送信完了しました！近日中にご連絡します。</p>
      )}
      {status === "error" && (
        <p className="text-center text-sm text-red-400">送信に失敗しました。時間をおいて再度お試しください。</p>
      )}
    </form>
  );
}
export default function Home() {
  const works = [
    {
      title: "KOTO COFFEE",
      category: "カフェ / LP",
      desc: "スペシャルティコーヒー専門店のLP制作",
      url: "https://koto-coffee.vercel.app",
      pc: "/works/koto-coffee-pc.png",
      sp: "/works/koto-coffee-sp.png",
    },
    {
      title: "HANA HAIR",
      category: "ヘアサロン / LP",
      desc: "ナチュラル系ヘアサロンのLP制作",
      url: "https://hana-hair-gamma.vercel.app",
      pc: "/works/hana-hair-pc.png",
      sp: "/works/hana-hair-sp.png",
    },
    {
      title: "居酒屋 夜",
      category: "居酒屋 / LP",
      desc: "こだわり居酒屋のLP制作",
      url: "#",
      pc: "/works/izakaya-yoru-pc.png",
      sp: "/works/izakaya-yoru-sp.png",
    },
  ];

  const services = [
    {
      num: "01",
      title: "基本プラン",
      tag: "最も人気",
      desc: "制作費無料・月額9,800円で本格的なWebサイトを。修正は月3回まで、1回で何件でもまとめてOK。",
      price: "¥0",
      sub: "制作費無料 / 月額¥9,800×6ヶ月",
      items: ["PC・スマホ対応", "Google Search Console登録", "SSL対応", "月3回修正対応"],
    },
    {
      num: "02",
      title: "ドメイン接続",
      tag: "オプション",
      desc: "お持ちのドメインをサイトに接続します。独自ドメインで信頼感とブランド力を高めましょう。",
      price: "¥5,500",
      sub: "初回のみ・買い切り",
      items: ["独自ドメイン接続", "DNS設定代行", "SSL証明書設定"],
    },
    {
      num: "03",
      title: "ブログ実装",
      tag: "オプション",
      desc: "SEO対策に効果的なブログ機能を追加。記事の投稿・管理も簡単に行えます。",
      price: "¥15,000",
      sub: "月額追加料金",
      items: ["ブログ機能実装", "記事投稿システム", "SEO最適化"],
    },
  ];

  const flow = [
    { num: "01", title: "無料相談", desc: "ZOOMにてヒアリング。どんな些細なことでもお気軽に。" },
    { num: "02", title: "プランご提案", desc: "お客様のビジネスに合わせた最適なプランをご提案。" },
    { num: "03", title: "制作開始", desc: "着手後、最短2週間で初稿をご確認いただけます。" },
    { num: "04", title: "確認・修正", desc: "ご要望をもとに細部まで丁寧に調整します。" },
    { num: "05", title: "公開・運用", desc: "公開後も月3回の修正対応で安心してお任せください。" },
  ];

  const strengths = [
    { icon: "⚡", title: "修正は24時間以内", desc: "依頼から24時間以内に対応。スピード感が違います。" },
    { icon: "🤝", title: "担当者は常に同じ", desc: "大手と違い、最初から最後まで私一人が対応。毎回説明し直す手間がありません。" },
    { icon: "👂", title: "丁寧なヒアリング", desc: "一人一人のビジネスと向き合い、本当に必要なサイトを一緒に考えます。" },
  ];

  return (
    <main className="min-h-screen bg-white text-[#1a1a1a] font-[family-name:var(--font-noto-sans-jp)]">

      {/* ナビゲーション */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 px-8 py-5 flex justify-between items-center border-b border-[#e8e8e8]">
        <div>
          <h1 className="text-sm tracking-widest font-medium">RUMISENSE</h1>
          <p className="text-[10px] tracking-widest text-[#999]">ルミセンス</p>
        </div>
        <ul className="flex gap-10 text-xs tracking-widest text-[#666]">
          <li><a href="#works" className="hover:text-black transition-colors">WORKS</a></li>
          <li><a href="#service" className="hover:text-black transition-colors">SERVICE</a></li>
          <li><a href="#flow" className="hover:text-black transition-colors">FLOW</a></li>
          <li><a href="#about" className="hover:text-black transition-colors">ABOUT</a></li>
          <li>
            <a href="#contact" className="bg-[#1a2f5e] text-white px-6 py-2 text-xs tracking-widest hover:bg-[#333] transition-colors">
              無料相談
            </a>
          </li>
        </ul>
      </nav>

      {/* ヒーロー */}
      <section className="min-h-screen flex flex-col justify-between px-16 pt-20">
        <div className="max-w-5xl mt-20">
          <p className="text-xs tracking-[0.5em] text-[#999] mb-8">WEB CREATION</p>
          <h2 className="text-7xl font-[family-name:var(--font-cormorant)] font-light leading-tight mb-8">
            あなたの想いを、<br />
            <span className="italic">Webで形に。</span>
          </h2>
          <div className="w-16 h-px bg-black mb-8" />
          <p className="text-base text-[#666] leading-8 max-w-lg mb-4">
            制作費<span className="font-bold text-black text-lg">¥0</span>、月額<span className="font-bold text-black text-lg">¥9,800</span>から。
          </p>
          <p className="text-sm text-[#666] leading-8 max-w-lg mb-12">
            修正依頼から<span className="font-bold text-black">24時間以内</span>に対応。<br />
            大手にはできない、一人一人への丁寧な向き合い方がRumisenseの強みです。
          </p>
          <div className="flex gap-6">
            <a href="#contact" className="bg-black text-white text-xs tracking-widest px-10 py-4 hover:bg-[#333] transition-colors">
              無料相談を予約する
            </a>
            <a href="#works" className="border border-black text-xs tracking-widest px-10 py-4 hover:bg-black hover:text-white transition-all duration-300">
              実績を見る
            </a>
          </div>
        </div>

        {/* 無限スクロール */}
        <div id="works" className="w-full pb-16 overflow-hidden">
          <div className="flex animate-scroll" style={{ width: "max-content" }}>
            {[...works, ...works].map((work, index) => (
              <a key={index} href={work.url} target="_blank" className="group block mx-6 flex-shrink-0">
                <div className="relative w-72 h-36">
                  <div className="absolute left-0 top-0 w-3/4">
                    <img src={work.pc} alt={`${work.title} PC`} className="w-full drop-shadow-xl group-hover:opacity-90 transition-opacity" />
                  </div>
                  <div className="absolute right-6 bottom-4 w-1/5 z-10">
                    <img src={work.sp} alt={`${work.title} SP`} className="w-full drop-shadow-xl group-hover:opacity-90 transition-opacity" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 強み */}
      <section className="py-24 px-16 bg-[#1a2f5e] text-white">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <p className="text-xs tracking-[0.5em] text-[#666] mb-3">WHY RUMISENSE</p>
            <h3 className="text-4xl font-[family-name:var(--font-cormorant)] font-light">大手とは、<span className="italic">違う。</span></h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {strengths.map((s) => (
              <div key={s.title} className="border-t border-[#333] pt-8">
                <p className="text-3xl mb-4">{s.icon}</p>
                <h4 className="text-base font-medium mb-4 text-white">{s.title}</h4>
                <p className="text-sm text-[#999] leading-7">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE */}
      <section id="service" className="py-32 px-16 bg-[#f8f8f8]">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <p className="text-xs tracking-[0.5em] text-[#999] mb-3">PRICING</p>
            <h3 className="text-4xl font-[family-name:var(--font-cormorant)] font-light">Service</h3>
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
        </div>
      </section>

      {/* FLOW */}
      <section id="flow" className="py-32 px-16">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <p className="text-xs tracking-[0.5em] text-[#999] mb-3">HOW IT WORKS</p>
            <h3 className="text-4xl font-[family-name:var(--font-cormorant)] font-light">Flow</h3>
          </div>
          <div className="space-y-0">
            {flow.map((step, index) => (
              <div key={step.num} className="flex gap-12 items-start py-8 border-t border-[#e8e8e8]">
                <p className="text-5xl font-[family-name:var(--font-cormorant)] font-light text-[#e8e8e8] w-16 flex-shrink-0">{step.num}</p>
                <div className="flex-1">
                  <h4 className="text-base font-medium mb-2">{step.title}</h4>
                  <p className="text-sm text-[#666] leading-7">{step.desc}</p>
                </div>
                {index < flow.length - 1 && (
                  <div className="w-px h-full" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-32 px-16 bg-[#f8f8f8]">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-20">
          <div className="md:w-1/2 flex items-center justify-center">
            <div className="w-64 h-64 bg-[#e8e8e8] flex items-center justify-center text-[#999] text-sm tracking-widest">
              PHOTO
            </div>
          </div>
          <div className="md:w-1/2">
            <p className="text-xs tracking-[0.5em] text-[#999] mb-3">PROFILE</p>
            <h3 className="text-4xl font-[family-name:var(--font-cormorant)] font-light mb-2">Keisuke Kimura</h3>
            <p className="text-sm text-[#999] tracking-widest mb-8">Rumisense / ルミセンス</p>
            <div className="w-8 h-px bg-black mb-8" />
            <p className="text-sm text-[#666] leading-8 mb-8">
              はじめまして、木村恵輔と申します。<br /><br />
              Rumisenseは、<span className="font-bold text-black">「一人だからこそできること」</span>を大切にしたWeb制作屋です。
              大手制作会社のように担当者が変わったり、修正に何日もかかったりすることはありません。<br /><br />
              修正依頼から<span className="font-bold text-black">24時間以内</span>に対応。
              ヒアリングから公開まで、すべて私一人が責任を持って対応します。<br /><br />
              まずはZOOMで気軽にお話しましょう。相談は無料です。
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex gap-8">
                <span className="text-[#999] w-24">SKILL</span>
                <span>Next.js / React / Tailwind CSS</span>
              </div>
              <div className="flex gap-8">
                <span className="text-[#999] w-24">対応エリア</span>
                <span>全国対応（オンライン）</span>
              </div>
              <div className="flex gap-8">
                <span className="text-[#999] w-24">修正対応</span>
                <span>24時間以内</span>
              </div>
            </div>
          </div>
        </div>
      </section>

     {/* CONTACT */}
<section id="contact" className="py-32 px-16 bg-[#1a2f5e] text-white">
  <div className="max-w-3xl mx-auto text-center">
    <p className="text-xs tracking-[0.5em] text-[#666] mb-3">FREE CONSULTATION</p>
    <h3 className="text-4xl font-[family-name:var(--font-cormorant)] font-light mb-6">まず、話しましょう。</h3>
    <div className="w-8 h-px bg-white mx-auto mb-10" />
    <p className="text-sm text-[#999] leading-8 mb-4">
      相談・お見積りは<span className="text-white font-bold">完全無料</span>です。<br />
      「まだ検討中」でも大歓迎。ZOOMで30分、気軽にお話しましょう。
    </p>
    <p className="text-xs text-[#666] mb-12">※ 営業・勧誘は一切行いません</p>

    <ContactForm />
  </div>
</section>

      {/* フッター */}
      <footer className="py-8 bg-[#1a2f5e] text-center border-t border-[#222]">
        <p className="text-xs tracking-widest text-[#444] mb-1">RUMISENSE / ルミセンス</p>
        <p className="text-xs text-[#333]">© 2024 Keisuke Kimura</p>
      </footer>

    </main>
  );
}