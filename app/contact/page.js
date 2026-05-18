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
    <form onSubmit={handleSubmit} className="text-left mt-8" style={{maxWidth: '560px', margin: '32px auto 0'}}>
      <div style={{border: '0.5px solid rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.04)'}}>
        <div style={{display: 'flex', borderBottom: '0.5px solid rgba(255,255,255,0.1)'}}>
          <div style={{width: '180px', flexShrink: 0, padding: '18px 24px', borderRight: '0.5px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px'}}>
            <span style={{fontSize: '11px', letterSpacing: '0.15em', color: '#7a9cc8'}}>お名前</span>
            <span style={{fontSize: '9px', color: '#c06060'}}>必須</span>
          </div>
          <div style={{flex: 1, display: 'flex', alignItems: 'center'}}>
            <input type="text" required value={form.name} onChange={(e) => setForm({...form, name: e.target.value})}
              style={{width: '100%', background: 'transparent', border: 'none', outline: 'none', padding: '18px 24px', fontSize: '13px', color: '#fff', fontFamily: 'inherit'}}
              placeholder="山田 太郎" />
          </div>
        </div>
        <div style={{display: 'flex', borderBottom: '0.5px solid rgba(255,255,255,0.1)'}}>
          <div style={{width: '180px', flexShrink: 0, padding: '18px 24px', borderRight: '0.5px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px'}}>
            <span style={{fontSize: '11px', letterSpacing: '0.15em', color: '#7a9cc8'}}>メールアドレス</span>
            <span style={{fontSize: '9px', color: '#c06060'}}>必須</span>
          </div>
          <div style={{flex: 1, display: 'flex', alignItems: 'center'}}>
            <input type="email" required value={form.email} onChange={(e) => setForm({...form, email: e.target.value})}
              style={{width: '100%', background: 'transparent', border: 'none', outline: 'none', padding: '18px 24px', fontSize: '13px', color: '#fff', fontFamily: 'inherit'}}
              placeholder="example@email.com" />
          </div>
        </div>
        <div style={{display: 'flex'}}>
          <div style={{width: '180px', flexShrink: 0, padding: '18px 24px', borderRight: '0.5px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px'}}>
            <span style={{fontSize: '11px', letterSpacing: '0.15em', color: '#7a9cc8'}}>メッセージ</span>
            <span style={{fontSize: '9px', color: '#c06060'}}>必須</span>
          </div>
          <div style={{flex: 1}}>
            <textarea required value={form.message} onChange={(e) => setForm({...form, message: e.target.value})} rows={5}
              style={{width: '100%', background: 'transparent', border: 'none', outline: 'none', padding: '18px 24px', fontSize: '13px', color: '#fff', fontFamily: 'inherit', resize: 'none'}}
              placeholder="お気軽にご相談ください" />
          </div>
        </div>
      </div>

      <button type="submit" disabled={status === 'sending'}
        style={{width: '100%', marginTop: '1px', background: '#fff', color: '#1a2f5e', border: 'none', padding: '18px', fontSize: '11px', letterSpacing: '0.3em', cursor: 'pointer', fontFamily: 'inherit', opacity: status === 'sending' ? 0.5 : 1}}>
        {status === 'sending' ? '送信中...' : '送信する →'}
      </button>

      <p style={{fontSize: '11px', color: '#4a6fa5', marginTop: '20px', letterSpacing: '0.1em', textAlign: 'center'}}>通常24時間以内にご返信します</p>

      {status === 'success' && (
        <p style={{textAlign: 'center', fontSize: '13px', color: '#6fcf97', marginTop: '16px'}}>✓ 送信完了しました！近日中にご連絡します。</p>
      )}
      {status === 'error' && (
        <p style={{textAlign: 'center', fontSize: '13px', color: '#eb5757', marginTop: '16px'}}>送信に失敗しました。時間をおいて再度お試しください。</p>
      )}
    </form>
  );
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#1a2f5e] text-white font-[family-name:var(--font-noto-sans-jp)]">
      <nav className="fixed top-0 w-full bg-[#1a2f5e]/95 backdrop-blur-sm z-50 px-8 py-5 flex justify-between items-center border-b border-white/10">
        <a href="/">
          <h1 className="text-sm tracking-widest font-medium text-white">RUMISENSE</h1>
          <p className="text-[10px] tracking-widest text-white/40">ルミセンス</p>
        </a>
        <ul className="flex gap-10 text-xs tracking-widest text-white/50">
          <li><a href="/service" className="hover:text-white transition-colors">SERVICE</a></li>
          <li><a href="/flow" className="hover:text-white transition-colors">FLOW</a></li>
          <li><a href="/about" className="hover:text-white transition-colors">ABOUT</a></li>
          <li>
            <a href="/contact" className="bg-white text-[#1a2f5e] px-6 py-2 text-xs tracking-widest hover:bg-[#e8e8e8] transition-colors">
              無料相談
            </a>
          </li>
        </ul>
      </nav>

      <section className="pt-40 pb-32 px-16">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs tracking-[0.5em] text-[#4a6fa5] mb-3">FREE CONSULTATION</p>
          <h2 className="text-5xl font-[family-name:var(--font-cormorant)] font-light mb-6">まず、話しましょう。</h2>
          <div className="w-8 h-px bg-white mx-auto mb-10" />
          <p className="text-sm text-[#999] leading-8 mb-4">
            相談・お見積りは<span className="text-white font-bold">完全無料</span>です。<br />
            「まだ検討中」でも大歓迎。ZOOMで30分、気軽にお話しましょう。
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