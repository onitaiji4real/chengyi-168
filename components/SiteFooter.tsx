import Link from "next/link";
import Image from "next/image";
import { site } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="bg-[var(--primary-strong)] py-12 text-white">
      <div className="container grid gap-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="text-2xl font-black">{site.name}</p>
          <p className="mt-3 max-w-xl text-sm leading-7 text-blue-100">
            負責人 {site.contactPerson} 親自把關，提供精緻搬家、自助搬家、夜間運輸、精密儀器護送與專業打包服務。
          </p>
          <p className="mt-4 text-sm text-blue-100">服務區域：{site.serviceArea}</p>
          <p className="mt-2 text-sm text-blue-100">地址：{site.address}</p>
        </div>
        <div className="space-y-2 text-sm">
          <p className="font-black text-[var(--accent)]">聯絡資訊</p>
          <a href={`tel:${site.phone}`} data-event="click_call_footer" className="block">
            {site.phone}
          </a>
          <p>LINE ID: {site.lineId}</p>
          <p>營業時間：{site.hours}</p>
          <div className="relative mt-4 aspect-[648/1080] w-full max-w-[150px] overflow-hidden rounded-lg">
            <Image
              src="/images/brand-card.jpg"
              alt={`${site.serviceAreaShort} ${site.name}聯絡名片`}
              fill
              className="object-contain"
              sizes="150px"
            />
          </div>
        </div>
        <div className="space-y-2 text-sm">
          <p className="font-black text-[var(--accent)]">頁面</p>
          <Link className="block" href="/services/">五大搬家服務</Link>
          <Link className="block" href="/blog/">搬家知識</Link>
          <Link className="block" href="/faq/">常見問答</Link>
          <Link className="block" href="/privacy/">隱私權政策</Link>
          <Link className="block" href="/terms/">服務條款</Link>
        </div>
      </div>
    </footer>
  );
}
