import { client } from "@/lib/microcms";
import Link from "next/link";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";

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
  dangerouslySetInnerHTML={{ __html: post.html_content || content }}
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

      <Footer />
    </main>
  );
}
