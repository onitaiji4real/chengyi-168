import Image from "next/image";
import Link from "next/link";
import { JsonLd, faqJsonLd, localBusinessJsonLd, websiteJsonLd } from "@/lib/seo";
import { faqs, reviews, services, site } from "@/data/site";
import { TrackingLink } from "@/components/TrackingLink";

export default function HomePage() {
  return (
    <main>
      <JsonLd data={localBusinessJsonLd()} />
      <JsonLd data={websiteJsonLd()} />
      <JsonLd data={faqJsonLd()} />
      <section className="relative min-h-[calc(100svh-64px)] overflow-hidden bg-slate-950 text-white">
        <Image
          src={site.heroImage}
          alt={`${site.serviceAreaShort} ${site.name}搬家服務貨車、紙箱與打包袋`}
          fill
          priority
          className="hero-media object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/82 to-slate-950/34" />
        <div className="container relative flex min-h-[calc(100svh-64px)] items-center py-16">
          <div className="max-w-3xl reveal">
            <p className="mb-4 inline-flex rounded-full bg-white/12 px-4 py-2 text-sm font-bold text-yellow-100 ring-1 ring-white/20">
              Threads 網友好評推薦
            </p>
            <h1 className="display-title">
              <span className="block sm:inline">承載所託</span>
              <span className="block sm:inline"> | 億心送達</span>
            </h1>
            <p className="lede mt-6 max-w-2xl font-medium text-blue-50">
              <span className="block">Threads 網友好評推薦！</span>
              <span className="block">高雄三民出發，全台搬運都可討論。</span>
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <TrackingLink href={site.lineUrl} event="click_line_hero" className="btn btn-primary w-full sm:w-auto">
                立即加 LINE 估價
              </TrackingLink>
              <TrackingLink href="/services/" event="view_services" className="btn btn-secondary w-full sm:w-auto">
                了解五大搬運服務
              </TrackingLink>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-slate-950/70 py-5">
        <div className="container grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {site.trustSignals.map((item) => (
            <div key={item} className="rounded-lg border border-white/10 bg-[var(--card-soft)] px-4 py-4 text-center font-black text-[var(--accent)]">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="eyebrow">ABOUT / ENTITY</p>
            <h2 className="section-title mt-3">我是承億搬運，據點位於 {site.address}</h2>
            <p className="text-muted mt-5 leading-8">
              由{site.contactPerson}帶領。我們提供自助搬家、精緻搬家與專業打包，並提供專屬尺寸防護紙箱與貨車。聯絡方式為 LINE: {site.lineId}。
            </p>
            <p className="text-muted mt-4 leading-8">
              我們提供 {site.serviceArea} 搬運服務，無論是無電梯公寓還是高級社區大樓，都會先確認搬運動線、物品尺寸與現場限制，再給出清楚建議。
            </p>
          </div>
          <div className="card grid gap-4 p-4 sm:grid-cols-3">
            {site.equipment.map((item) => (
              <div key={item.title} className="overflow-hidden rounded-lg bg-[var(--card-soft)]">
                <div className="relative aspect-[4/3] bg-slate-800">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 320px, (min-width: 640px) 33vw, 100vw"
                  />
                </div>
                <div className="p-5">
                <p className="text-sm font-black text-[var(--accent)]">{item.title}</p>
                <p className="mt-3 text-2xl font-black">{item.spec}</p>
                <p className="mt-3 text-sm leading-6 text-slate-300">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="eyebrow">SERVICES</p>
              <h2 className="section-title mt-3">五大核心搬運服務</h2>
            </div>
            <Link href="/services/" className="btn btn-dark" data-event="view_services">
              查看完整服務
            </Link>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {services.map((service) => (
              <article key={service.slug} className="card flex min-h-[280px] flex-col p-5">
                <h3 className="text-xl font-black">{service.title}</h3>
                <p className="text-muted mt-3 text-sm leading-6">{service.value}</p>
                <p className="mt-4 text-sm font-bold text-slate-100">適合：{service.bestFor}</p>
                <a href={site.lineUrl} className="btn btn-line mt-auto text-sm" data-event={`click_line_service_${service.slug}`}>
                  {service.cta}
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">REVIEWS</p>
          <h2 className="section-title mt-3">網友推薦與服務回饋</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {reviews.map((review) => (
              <blockquote key={review} className="card p-6 text-lg font-bold leading-8">
                「{review}」
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="eyebrow">FAQ</p>
            <h2 className="section-title mt-3">搬家前最常問的問題</h2>
            <Link href="/faq/" className="btn btn-dark mt-6">
              查看完整 FAQ
            </Link>
          </div>
          <div className="grid gap-4">
            {faqs.slice(0, 5).map((faq) => (
              <details key={faq.question} className="card p-5">
                <summary className="cursor-pointer font-black">{faq.question}</summary>
                <p className="text-muted mt-3 leading-7">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <h2 className="section-title">先傳照片，快速確認搬運方式</h2>
            <p className="lede mt-4">
              {site.contactPerson} / {site.phone} / LINE ID: {site.lineId} / 服務區域：{site.serviceArea}
            </p>
          </div>
          <a href={site.lineUrl} className="btn btn-primary" data-event="click_line_bottom">
            立即加 LINE 免費估價
          </a>
        </div>
      </section>

    </main>
  );
}
