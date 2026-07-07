import Link from "next/link";
import Image from "next/image";
import { site } from "@/data/site";

const nav = [
  { href: "/services/", label: "服務" },
  { href: "/blog/", label: "知識" },
  { href: "/faq/", label: "FAQ" }
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 max-w-[100vw] overflow-hidden border-b border-white/10 bg-slate-950/92 text-white backdrop-blur">
      <div className="container flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex min-w-0 items-center gap-2 font-black text-white" aria-label={`${site.name}首頁`}>
          <span className="relative h-10 w-20 shrink-0 overflow-hidden rounded bg-white sm:h-11 sm:w-24">
            <Image
              src={site.logo}
              alt={`${site.name} logo`}
              fill
              className="object-contain"
              sizes="96px"
              priority
            />
          </span>
          <span className="leading-tight">
            {site.name}
            <span className="hidden text-xs font-bold text-slate-300 sm:block">{site.englishName}</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-bold text-slate-200 sm:flex">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-[var(--accent)]">
              {item.label}
            </Link>
          ))}
        </nav>
        <a className="btn btn-line ml-auto hidden shrink-0 px-4 text-sm sm:inline-flex" href={site.lineUrl} data-event="click_line_header">
          <span className="sm:hidden">LINE</span>
          <span className="hidden sm:inline">LINE 估價</span>
        </a>
      </div>
    </header>
  );
}
