import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/data/site";

export const metadata: Metadata = pageMetadata({
  title: "隱私權政策 | 承億搬運",
  description: "承億搬運隱私權政策，說明估價、聯絡與服務安排時可能蒐集的基本資料與使用方式。",
  path: "/privacy/"
});

export default function PrivacyPage() {
  return (
    <main className="section">
      <div className="container max-w-3xl">
        <h1 className="page-title">隱私權政策</h1>
        <div className="text-muted mt-8 space-y-6 leading-8">
          <p>
            承億搬運為提供估價與搬運服務，可能透過電話、LINE 或表單蒐集姓名、聯絡方式、搬運地址條件、物品照片與期望服務日期。
          </p>
          <p>
            以上資料僅用於估價溝通、服務安排、客服聯繫與必要紀錄，不會任意出售或提供給無關第三方。
          </p>
          <p>
            若需查詢、修正或刪除聯絡資料，請透過電話 {site.phone} 或 LINE ID: {site.lineId} 聯繫承億搬運。
          </p>
        </div>
      </div>
    </main>
  );
}
