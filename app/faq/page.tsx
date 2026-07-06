import type { Metadata } from "next";
import { JsonLd, faqJsonLd, localBusinessJsonLd, pageMetadata } from "@/lib/seo";
import { faqs } from "@/data/site";

export const metadata: Metadata = pageMetadata({
  title: "搬家常見問答與計費方式 | 承億搬運",
  description:
    "整理搬家計費、紙箱提供、無電梯樓層、大型廢棄物、夜間搬家與預約估價常見問題。答案短句清楚，方便快速判斷。",
  path: "/faq/"
});

export default function FaqPage() {
  return (
    <main>
      <JsonLd data={localBusinessJsonLd()} />
      <JsonLd data={faqJsonLd()} />
      <section className="section bg-white">
        <div className="container max-w-4xl">
          <p className="eyebrow">FAQ</p>
          <h1 className="page-title mt-3">搬家常見問答與計費方式</h1>
          <div className="mt-10 grid gap-4">
            {faqs.map((faq) => (
              <article key={faq.question} className="card p-6">
                <h2 className="text-xl font-black">{faq.question}</h2>
                <p className="text-muted mt-3 leading-7">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
