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

      <section className="pt-28 md:pt-40 pb-16 md:pb-32 px-6 md:px-16">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 md:mb-16">
            <p className="text-xs tracking-[0.5em] text-[#999] mb-3">BLOG</p>
            <h2 className="text-5xl font-[family-name:var(--font-cormorant)] font-light">Blog</h2>
            <p className="text-sm text-[#666] mt-4 leading-8">Web制作に関する情報を発信しています。</p>
          </div>
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
        <p className="text-xs tracking-widest text-[#444] mb-1">RUMISENSE / ルミセンス</p>
        <p className="text-xs text-[#333]">© 2024 Keisuke Kimura</p>
      </footer>
    </main>
  );
}
