import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { blogPosts, site } from "@/data/site";
import { JsonLd, blogPostingJsonLd, localBusinessJsonLd, pageMetadata } from "@/lib/seo";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return {};
  }

  const metadata = pageMetadata({
    title: `${post.title} | 承億搬運`,
    description: post.excerpt,
    path: `/blog/${post.slug}/`
  });

  return {
    ...metadata,
    openGraph: {
      ...metadata.openGraph,
      images: [
        {
          url: post.image,
          width: 1200,
          height: 900,
          alt: post.alt
        }
      ]
    }
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main>
      <JsonLd data={localBusinessJsonLd()} />
      <JsonLd data={blogPostingJsonLd(post)} />
      <article className="section bg-white">
        <div className="container max-w-3xl">
          <p className="eyebrow">{post.date}</p>
          <h1 className="page-title mt-3 break-all whitespace-normal">{post.title}</h1>
          <p className="lede text-muted mt-5">{post.excerpt}</p>
          <div className="relative mt-8 aspect-[16/10] overflow-hidden rounded-lg bg-slate-200 shadow-2xl shadow-slate-900/10">
            <Image
              src={post.image}
              alt={post.alt}
              fill
              priority
              className="object-cover"
              sizes="(min-width: 768px) 768px, 100vw"
            />
          </div>
          <div className="card mt-10 p-6">
            <h2 className="card-title">文章大綱</h2>
            <ol className="mt-5 grid gap-4">
              {post.outline.map((item, index) => (
                <li key={item} className="rounded-lg bg-slate-50 p-4 font-bold">
                  {index + 1}. {item}
                </li>
              ))}
            </ol>
          </div>
          <section className="mt-10 space-y-10">
            {post.sections.map((section) => (
              <div key={section.heading}>
                <h2 className="card-title break-all whitespace-normal">{section.heading}</h2>
                <div className="text-muted mt-4 space-y-4 leading-8">
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
            ))}
          </section>
          <section className="card mt-12 bg-slate-50 p-6">
            <h2 className="card-title break-all whitespace-normal">需要估價時，先準備這些資訊</h2>
            <ul className="text-muted mt-5 grid gap-3 leading-7">
              <li>起點與終點地址條件、樓層、有無電梯。</li>
              <li>大型家具、家電、精密物品與易碎物的照片。</li>
              <li>希望搬運日期、是否需要夜間運輸、是否需要紙箱或打包袋。</li>
            </ul>
            <a href={site.lineUrl} className="btn btn-line mt-6" data-event="click_line_blog_post">
              加 LINE 傳照片估價
            </a>
          </section>
        </div>
      </article>
    </main>
  );
}
