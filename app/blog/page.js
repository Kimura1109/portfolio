import Link from "next/link";
import { client } from "@/lib/microcms";
import Nav from "../components/Nav";

export const revalidate = 0;

export default async function BlogPage() {
  const data = await client.getList({
    endpoint: "blogs",
  });

  return (
    <main className="min-h-screen bg-white text-[#1a1a1a] font-[family-name:var(--font-noto-sans-jp)]">
      <Nav />

      {/* ヘッダー */}
      <section className="relative pt-28 md:pt-40 pb-16 md:pb-20 bg-[#f8f8f8] overflow-hidden h-[320px] md:h-[380px] flex items-center">
        <div className="absolute inset-0">
          <img src="/Gemini_Generated_Image_gg9f34gg9f34gg9f.png" alt="" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#f8f8f8] via-[#f8f8f8]/90 to-transparent" />
        </div>
        <div className="relative z-10 px-6 md:px-16 w-full">
          <div className="max-w-5xl mx-auto">
            <p className="text-xs tracking-[0.5em] text-[#999] mb-3">BLOG</p>
            <h2 className="text-5xl md:text-7xl font-[family-name:var(--font-cormorant)] font-light">Blog</h2>
            <p className="text-sm text-[#666] mt-4 leading-8">Web制作に関する情報を発信しています。</p>
          </div>
        </div>
      </section>

      <section className="pt-16 pb-16 md:pb-32 px-6 md:px-16">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {data.contents.map((post) => {
              const title = post.title || post.text || post.name || "タイトルなし";
              const date = post.publishedAt || post.createdAt || "";
              return (
                <Link key={post.id} href={`/blog/${post.id}`} className="group block">
                  {post?.eyecatch?.url && (
                    <div className="overflow-hidden mb-4">
                      <img
                        src={post.eyecatch.url}
                        alt={title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <p className="text-xs text-[#999] mb-2 tracking-widest">
                    {date ? new Date(date).toLocaleDateString("ja-JP") : ""}
                  </p>
                  <h3 className="text-base font-medium leading-7 group-hover:text-[#1a2f5e] transition-colors">
                    {title}
                  </h3>
                </Link>
              );
            })}
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
