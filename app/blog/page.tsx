import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { blogPosts } from "@/data/site";

export const metadata: Metadata = pageMetadata({
  title: "搬家知識與在地搬家案例 | 承億搬運",
  description:
    "承億搬運整理打包技巧、搬家當天注意事項、紙箱裝法、便宜搬家與夜間搬家等文章模板，協助搬家前快速準備。",
  path: "/blog/"
});

export default function BlogPage() {
  return (
    <main>
      <section className="section">
        <div className="container">
          <p className="eyebrow">BLOG</p>
          <h1 className="page-title mt-3">搬家知識、打包技巧、客戶案例</h1>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}/`} className="card block">
                <div className="relative aspect-[4/3] bg-slate-200">
                  <Image
                    src={post.image}
                    alt={post.alt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  />
                </div>
                <div className="p-6">
                  <p className="text-sm font-bold text-slate-500">{post.date}</p>
                  <h2 className="mt-3 text-2xl font-black">{post.title}</h2>
                  <p className="text-muted mt-3 leading-7">{post.excerpt}</p>
                  <span className="mt-5 inline-flex font-black text-[var(--primary)]">閱讀完整文章</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
