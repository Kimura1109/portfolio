import Link from "next/link";
import { client } from "@/lib/microcms";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

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

      <Footer />
    </main>
  );
}
