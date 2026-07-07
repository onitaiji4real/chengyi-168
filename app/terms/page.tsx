import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/data/site";

export const metadata: Metadata = pageMetadata({
  title: "服務條款 | 承億搬運",
  description: "承億搬運服務條款，說明搬家估價、預約、現場條件確認、夜間運輸與特殊物品搬運注意事項。",
  path: "/terms/"
});

export default function TermsPage() {
  return (
    <main className="section">
      <div className="container max-w-3xl">
        <h1 className="page-title">服務條款</h1>
        <div className="text-muted mt-8 space-y-6 leading-8">
          <p>
            搬運費用會依物品量、搬運距離、樓層、有無電梯、特殊大型物件、搬運時段與現場限制評估。預約前請盡量提供完整照片與地址條件。
          </p>
          <p>
            若現場物品量、樓層、動線或等待時間與估價資訊明顯不同，承億搬運會先與客戶確認調整方式後再執行。
          </p>
          <p>
            夜間運輸需配合社區規範與所在地相關限制。若有大型廢棄物、精密儀器或特殊高價物品，請在預約前主動告知。
          </p>
          <p>
            聯絡窗口：{site.contactPerson} / {site.phone} / LINE ID: {site.lineId}
          </p>
        </div>
      </div>
    </main>
  );
}
