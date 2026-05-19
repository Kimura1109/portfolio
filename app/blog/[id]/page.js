import { client } from "@/lib/microcms";
import Link from "next/link";
import Nav from "../../components/Nav";

export const revalidate = 0;

export async function generateMetadata({ params }) {
  const { id } = await params;

  try {
    const post = await client.getListDetail({
      endpoint: "blogs",
      contentId: id,
    });

    return {
      title: post?.title ? `${post.title} | RUMISENSE Blog` : "RUMISENSE Blog",
      description: post?.content
        ? post.content.replace(/<[^>]+>/g, "").slice(0, 120)
        : "RUMISENSEのブログ記事",
    };
  } catch {
    return {
      title: "RUMISENSE Blog",
    };
  }
}

export default async function BlogDetailPage({ params }) {
  const { id } = await params;

  let post = null;

  try {
    post = await client.getListDetail({
      endpoint: "blogs",
      contentId: id,
    });
  } catch (error) {
    console.error("microCMS fetch error:", error);
  }

  if (!post) {
    return (
      <main className="min-h-screen bg-white text-[#1a1a1a] font-[family-name:var(--font-noto-sans-jp)] flex items-center justify-center">
        <div className="text-center">
          <p className="text-xs tracking-widest text-[#999] mb-6">404</p>
          <p className="text-lg mb-8">記事が見つかりません</p>
          <Link
            href="/blog"
            className="text-xs tracking-widest text-[#999] hover:text-black transition-colors underline underline-offset-4"
          >
            ← BLOGに戻る
          </Link>
        </div>
      </main>
    );
  }

  const title = post.title || "タイトルなし";
  const content = post.content || "";
  const date = post.publishedAt || post.createdAt || "";

  return (
    <main className="min-h-screen bg-white text-[#1a1a1a] font-[family-name:var(--font-noto-sans-jp)]">
      <Nav />

      <article className="pt-28 md:pt-40 pb-16 md:pb-32 px-6 md:px-16">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/blog"
            className="text-xs text-[#999] tracking-widest hover:text-black transition-colors mb-8 inline-block"
          >
            ← BLOGに戻る
          </Link>

          {post?.eyecatch?.url && (
            <img
              src={post.eyecatch.url}
              alt={title}
              className="w-full h-48 md:h-64 object-cover mb-8"
            />
          )}

          <p className="text-xs text-[#999] mb-4 tracking-widest">
            {date ? new Date(date).toLocaleDateString("ja-JP") : ""}
          </p>

          <h1 className="text-2xl md:text-3xl font-[family-name:var(--font-cormorant)] font-light mb-12 leading-tight">
            {title}
          </h1>

          <div
            className="prose prose-sm max-w-none text-[#333] leading-8"
            dangerouslySetInnerHTML={{ __html: content }}
          />

          <div className="mt-16 pt-8 border-t border-[#e8e8e8] text-center">
            <a
              href="/contact"
              className="bg-black text-white text-xs tracking-widest px-10 md:px-12 py-4 hover:bg-[#333] transition-colors inline-block"
            >
              無料相談を予約する →
            </a>
          </div>
        </div>
      </article>

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
