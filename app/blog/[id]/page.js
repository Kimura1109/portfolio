import { createClient } from "microcms-js-sdk";

const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});

export default async function BlogDetailPage({ params }) {
  const post = await client.getListDetail({
    endpoint: "blogs",
    contentId: params.id,
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

      <article className="pt-40 pb-32 px-16">
        <div className="max-w-3xl mx-auto">
          <a href="/blog" className="text-xs text-[#999] tracking-widest hover:text-black transition-colors mb-8 inline-block">
            ← BLOGに戻る
          </a>
          {post.eyecatch && (
            <img
              src={post.eyecatch.url}
              alt={post.title}
              className="w-full h-64 object-cover mb-8"
            />
          )}
          <p className="text-xs text-[#999] mb-4 tracking-widest">
            {post?.createdAt
  ? new Date(post.createdAt).toLocaleDateString("ja-JP")
  : ""}
          </p>
          <h1 className="text-3xl font-[family-name:var(--font-cormorant)] font-light mb-12 leading-tight">
            {post.title}
          </h1>
          <div
  className="prose prose-sm max-w-none text-[#333] leading-8"
  dangerouslySetInnerHTML={{ __html: post.content ?? "" }}
/>
          <div className="mt-16 pt-8 border-t border-[#e8e8e8] text-center">
            <a href="/contact" className="bg-black text-white text-xs tracking-widest px-12 py-4 hover:bg-[#333] transition-colors inline-block">
              無料相談を予約する →
            </a>
          </div>
        </div>
      </article>

      <footer className="py-8 bg-[#1a2f5e] text-center border-t border-[#222]">
        <p className="text-xs tracking-widest text-[#444] mb-1">RUMISENSE / ルミセンス</p>
        <p className="text-xs text-[#333]">© 2024 Keisuke Kimura</p>
      </footer>
    </main>
  );
}