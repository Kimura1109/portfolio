import Link from "next/link";
import { client } from "@/lib/microcms";

export const revalidate = 0;

export default async function BlogPage() {
  const data = await client.getList({
    endpoint: "blogs",
  });

  return (
    <main className="min-h-screen bg-white text-[#1a1a1a] font-[family-name:var(--font-noto-sans-jp)]">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 px-8 py-5 flex justify-between items-center border-b border-[#e8e8e8]">
        <a href="/">
          <h1 className="text-sm tracking-widest font-medium">RUMISENSE</h1>
          <p className="text-[10px] tracking-widest text-[#999]">ルミセンス</p>
        </a>
        <ul className="flex gap-10 text-xs tracking-widest text-[#666]">
          <li><a href="/" className="hover:text-black transition-colors">TOP</a></li>
          <li><a href="/service" className="hover:text-black transition-colors">SERVICE</a></li>
          <li><a href="/flow" className="hover:text-black transition-colors">FLOW</a></li>
          <li><a href="/about" className="hover:text-black transition-colors">ABOUT</a></li>
          <li><a href="/blog" className="text-black font-medium">BLOG</a></li>
          <li>
            <a href="/contact" className="bg-[#1a2f5e] text-white px-6 py-2 text-xs tracking-widest hover:bg-[#333] transition-colors">
              無料相談
            </a>
          </li>
        </ul>
      </nav>

      <section className="pt-40 pb-32 px-16">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <p className="text-xs tracking-[0.5em] text-[#999] mb-3">BLOG</p>
            <h2 className="text-5xl font-[family-name:var(--font-cormorant)] font-light">Blog</h2>
            <p className="text-sm text-[#666] mt-4 leading-8">Web制作に関する情報を発信しています。</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
        <p className="text-xs tracking-widest text-[#444] mb-1">RUMISENSE / ルミセンス</p>
        <p className="text-xs text-[#333]">© 2024 Keisuke Kimura</p>
      </footer>
    </main>
  );
}