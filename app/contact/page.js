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
        <p className="text-xs tracking-widest text-[#444] mb-1">RUMISENSE / ルミセンス</p>
        <p className="text-xs text-[#333]">© 2024 Keisuke Kimura</p>
      </footer>
    </main>
  );
}
