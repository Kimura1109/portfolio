"use client";
import { useState } from "react";
import Nav from "../components/Nav";

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

  const rowClass = "border-b border-white/10";
  const labelClass = "flex items-center gap-2 px-5 py-3 border-b border-white/10 sm:border-b-0 sm:border-r sm:w-44 sm:flex-shrink-0 sm:justify-center sm:py-0";

  return (
    <form onSubmit={handleSubmit} className="mt-8 w-full max-w-[560px] mx-auto">
      <div className="border border-white/[0.15] bg-white/[0.04]">
        {/* お名前 */}
        <div className={rowClass}>
          <div className="flex flex-col sm:flex-row">
            <div className={labelClass}>
              <span className="text-[11px] tracking-[0.15em] text-[#7a9cc8]">お名前</span>
              <span className="text-[9px] text-[#c06060]">必須</span>
            </div>
            <div className="flex items-center flex-1">
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-transparent border-0 outline-none px-5 py-4 text-[13px] text-white placeholder-white/30"
                style={{ fontFamily: "inherit" }}
                placeholder="山田 太郎"
              />
            </div>
          </div>
        </div>

        {/* メールアドレス */}
        <div className={rowClass}>
          <div className="flex flex-col sm:flex-row">
            <div className={labelClass}>
              <span className="text-[11px] tracking-[0.15em] text-[#7a9cc8]">メールアドレス</span>
              <span className="text-[9px] text-[#c06060]">必須</span>
            </div>
            <div className="flex items-center flex-1">
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-transparent border-0 outline-none px-5 py-4 text-[13px] text-white placeholder-white/30"
                style={{ fontFamily: "inherit" }}
                placeholder="example@email.com"
              />
            </div>
          </div>
        </div>

        {/* メッセージ */}
        <div className="flex flex-col sm:flex-row">
          <div className={labelClass} style={{ alignItems: "flex-start", paddingTop: "14px" }}>
            <span className="text-[11px] tracking-[0.15em] text-[#7a9cc8]">メッセージ</span>
            <span className="text-[9px] text-[#c06060]">必須</span>
          </div>
          <div className="flex-1">
            <textarea
              required
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              rows={5}
              className="w-full bg-transparent border-0 outline-none px-5 py-4 text-[13px] text-white placeholder-white/30 resize-none"
              style={{ fontFamily: "inherit" }}
              placeholder="お気軽にご相談ください"
            />
          </div>
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full mt-px bg-white text-[#1a2f5e] border-0 py-[18px] text-[11px] tracking-[0.3em] cursor-pointer transition-opacity"
        style={{ fontFamily: "inherit", opacity: status === "sending" ? 0.5 : 1 }}
      >
        {status === "sending" ? "送信中..." : "送信する →"}
      </button>

      <p className="text-[11px] text-[#4a6fa5] mt-5 tracking-[0.1em] text-center">
        通常24時間以内にご返信します
      </p>

      {status === "success" && (
        <p className="text-center text-[13px] text-[#6fcf97] mt-4">
          ✓ 送信完了しました！近日中にご連絡します。
        </p>
      )}
      {status === "error" && (
        <p className="text-center text-[13px] text-[#eb5757] mt-4">
          送信に失敗しました。時間をおいて再度お試しください。
        </p>
      )}
    </form>
  );
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#1a2f5e] text-white font-[family-name:var(--font-noto-sans-jp)]">
      <Nav dark />

      <section className="pt-28 md:pt-40 pb-16 md:pb-32 px-6 md:px-16">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs tracking-[0.5em] text-[#4a6fa5] mb-3">FREE CONSULTATION</p>
          <h2 className="text-3xl md:text-5xl font-[family-name:var(--font-cormorant)] font-light mb-6 whitespace-nowrap">まず、話しましょう。</h2>
          <div className="w-8 h-px bg-white mx-auto mb-10" />
          <p className="text-sm text-[#999] leading-8 mb-4">
            相談・お見積りは<span className="text-white font-bold">完全無料</span>です。<br />
            ZOOMで30分、お気軽にお話ししましょう！
          </p>
          <p className="text-xs text-[#4a6fa5] mb-12">※ 営業・勧誘は一切行いません</p>
          <ContactForm />
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
