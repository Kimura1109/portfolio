import { client } from "@/lib/microcms";
import Link from "next/link";

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
      {/* ナビゲーション */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 px-8 py-5 flex justify-between items-center border-b border-[#e8e8e8]">
        <a href="/">
          <h1 className="text-sm tracking-widest font-medium">RUMISENSE</h1>
          <p className="text-[10px] tracking-widest text-[#999]">ルミセンス</p>
        </a>
        <ul className="flex gap-10 text-xs tracking-widest text-[#666]">
          <li>
            <a href="/" className="hover:text-black transition-colors">
              TOP
            </a>
          </li>
          <li>
            <a href="/service" className="hover:text-black transition-colors">
              SERVICE
            </a>
          </li>
          <li>
            <a href="/flow" className="hover:text-black transition-colors">
              FLOW
            </a>
          </li>
          <li>
            <a href="/about" className="hover:text-black transition-colors">
              ABOUT
            </a>
          </li>
          <li>
            <a href="/blog" className="text-black font-medium">
              BLOG
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className="bg-[#1a2f5e] text-white px-6 py-2 text-xs tracking-widest hover:bg-[#333] transition-colors"
            >
              無料相談
            </a>
          </li>
        </ul>
      </nav>

      {/* 記事本文 */}
      <article className="pt-40 pb-32 px-16">
        <div className="max-w-3xl mx-auto">
          {/* 戻るリンク */}
          <Link
            href="/blog"
            className="text-xs text-[#999] tracking-widest hover:text-black transition-colors mb-8 inline-block"
          >
            ← BLOGに戻る
          </Link>

          {/* アイキャッチ画像 */}
          {post?.eyecatch?.url && (
            <img
              src={post.eyecatch.url}
              alt={title}
              className="w-full h-64 object-cover mb-8"
            />
          )}

          {/* 日付 */}
          <p className="text-xs text-[#999] mb-4 tracking-widest">
            {date ? new Date(date).toLocaleDateString("ja-JP") : ""}
          </p>

          {/* タイトル */}
          <h1 className="text-3xl font-[family-name:var(--font-cormorant)] font-light mb-12 leading-tight">
            {title}
          </h1>

          {/* 本文 */}
          <div
            className="prose prose-sm max-w-none text-[#333] leading-8"
            dangerouslySetInnerHTML={{ __html: content }}
          />

          {/* CTAボタン */}
          <div className="mt-16 pt-8 border-t border-[#e8e8e8] text-center">
            <a
              href="/contact"
              className="bg-black text-white text-xs tracking-widest px-12 py-4 hover:bg-[#333] transition-colors inline-block"
            >
              無料相談を予約する →
            </a>
          </div>
        </div>
      </article>

      {/* フッター */}
      <footer className="py-8 bg-[#1a2f5e] text-center border-t border-[#222]">
        <p className="text-xs tracking-widest text-[#444] mb-1">
          RUMISENSE / ルミセンス
        </p>
        <p className="text-xs text-[#333]">© 2024 Keisuke Kimura</p>
      </footer>
    </main>
  );
}