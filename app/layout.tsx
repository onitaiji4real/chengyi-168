import type { Metadata } from "next";
import { Inter, Noto_Sans_TC } from "next/font/google";
import "./globals.css";
import { FloatingLineButton } from "@/components/FloatingLineButton";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { site } from "@/data/site";

const notoSansTc = Noto_Sans_TC({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-heading"
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body"
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "承億搬運 | 專業在地搬家推薦，透明計價、細心打包",
    template: "%s"
  },
  description:
    "網友好評推薦搬家公司！提供家庭精緻搬家、自助搬家、夜間運輸、專業打包等服務。汪承漢老闆親自把關，價格透明不亂加價。立刻加 LINE 免費估價。",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    locale: "zh_TW",
    siteName: site.name,
    title: "承億搬運 | 專業在地搬家推薦，透明計價、細心打包",
    description:
      "Threads 網友好評推薦。提供精緻搬家、自助搬家、夜間運輸、專業打包與精密儀器護送。",
    url: site.url,
    images: [
      {
        url: site.heroImage,
        width: 1200,
        height: 675,
        alt: "{{SERVICE_AREA}} 承億搬運升降尾門貨車搬家服務"
      }
    ]
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant-TW">
      <body className={`${notoSansTc.variable} ${inter.variable}`}>
        <SiteHeader />
        {children}
        <SiteFooter />
        <FloatingLineButton />
      </body>
    </html>
  );
}
