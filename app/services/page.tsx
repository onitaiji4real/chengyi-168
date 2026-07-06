import type { Metadata } from "next";
import Image from "next/image";
import { JsonLd, localBusinessJsonLd, pageMetadata } from "@/lib/seo";
import { services, site } from "@/data/site";

export const metadata: Metadata = pageMetadata({
  title: "五大專業搬家服務 | 承億搬運",
  description:
    "承億搬運提供家庭精緻搬家、自助搬家、夜間運輸、精密儀器護送與專業打包。依物品、樓層、距離與時段透明評估。",
  path: "/services/"
});

export default function ServicesPage() {
  return (
    <main>
      <JsonLd data={localBusinessJsonLd()} />
      <section className="section section-dark">
        <div className="container grid gap-8 lg:grid-cols-[1fr_360px] lg:items-center">
          <div>
            <p className="eyebrow">SERVICES</p>
            <h1 className="page-title mt-3">五大專業搬家服務</h1>
            <p className="lede mt-5 max-w-3xl">
              從小量自助搬運到完整精緻搬家，承億搬運會依照現場條件、物品尺寸、搬運距離與服務時段，先溝通再安排。
            </p>
            <p className="lede mt-4 max-w-3xl">
              我們以高雄市三民區為服務據點，基本不限制縣市，全台搬運需求都可先透過 LINE 傳照片討論。
            </p>
          </div>
          <div className="relative mx-auto aspect-[655/1074] w-full max-w-[320px] overflow-hidden rounded-lg bg-white/10 shadow-2xl shadow-slate-950/30 ring-1 ring-white/15">
            <Image
              src="/images/services-overview.jpg"
              alt={`${site.serviceAreaShort} ${site.name}五大搬家服務總覽`}
              fill
              className="object-cover"
              sizes="320px"
              priority
            />
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container grid gap-6">
          {services.map((service, index) => (
            <article key={service.slug} className="card grid gap-5 p-6 md:grid-cols-[88px_1fr_auto] md:items-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-yellow-100 text-2xl font-black text-[var(--primary)]">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div className="min-w-0">
                <h2 className="card-title">{service.title}</h2>
                <p className="mt-3 font-bold text-slate-800">價值：{service.value}</p>
                <p className="text-muted mt-2 leading-7">適合誰：{service.bestFor}</p>
                <p className="text-muted mt-2 leading-7">{service.description}</p>
              </div>
              <a href={site.lineUrl} className="btn btn-line" data-event={`click_line_services_${service.slug}`}>
                {service.cta}
              </a>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
