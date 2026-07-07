# 承億搬運網站

承億搬運的網站，使用 Next.js App Router、TypeScript 與 Tailwind CSS 建置。專案以 Vercel 零設定部署（Zero-Config）為目標，所有頁面皆會由 Next.js 自動靜態優化 (SSG) 並快取於邊緣節點。

## 技術棧

- Next.js App Router
- TypeScript
- Tailwind CSS
- 本地內容資料：`data/site.ts`
- SEO：Next.js Metadata API
- 結構化資料：JSON-LD

## 快速開始

```bash
npm install
npm run dev
```

本機預覽：

```text
http://localhost:3000
```

## Production Build

```bash
npm run build
```

此專案目前採 Vercel 原生 Next.js 部署模式，不使用 `output: "export"`，因此 production build 會產生 `.next/`，由 Vercel 自動處理靜態優化、快取與部署。

## Vercel 部署

本專案支援 Vercel 零設定部署（Zero-Config Deployment）：
Vercel 會自動偵測 Next.js 並將沒有動態伺服器渲染的頁面做靜態優化 (SSG)。不需額外的 `vercel.json` 或設定 `output: "export"`，這可以避免 Vercel 在某些情況下卡在 `Finalizing page optimization`。

目前 `data/site.ts` 的 `site.url` 暫設為：

```text
https://chengyi-168.vercel.app
```

如果 Vercel 實際產生不同專案網址，或之後綁定正式網域，請先更新 `site.url`，再重新部署，避免 canonical、Open Graph URL、sitemap 使用錯誤網址。

## 專案結構

```text
app/
  page.tsx              首頁
  services/page.tsx     五大服務頁
  blog/page.tsx         Blog 列表
  blog/[slug]/page.tsx  Blog 文章模板
  faq/page.tsx          FAQ
  privacy/page.tsx      隱私權政策
  terms/page.tsx        服務條款
  sitemap.ts            sitemap.xml
  robots.ts             robots.txt
components/
  FloatingLineButton.tsx
  SiteFooter.tsx
  SiteHeader.tsx
  TrackingLink.tsx
data/
  site.ts               商家資料、服務、FAQ、Blog、placeholder 清單
lib/
  seo.tsx               metadata helper 與 JSON-LD helper
public/
  images/
    brand-logo.jpg         新版完整品牌 logo，Hero / schema 使用
    brand-logo-mark.jpg    新版方形品牌標誌，Header 使用
    logo-mark.jpg          舊版裁切 logo，保留備用
    brand-card.jpg         名片聯絡視覺
    services-overview.jpg  五大服務總覽圖
    truck-capacity.jpg     貨車容量與 Blog / 裝備展示
    packing-box.jpg        紙箱實拍
    moving-bag.jpg         大型打包袋實拍
    hero-moving-truck.png  早期生成圖，目前未作為主要 hero
docs/
  project-delivery.md   原始要求、已完成、未完成與驗證紀錄
  client-questionnaire.md 客戶資料回填問卷
```

## 內容維護

主要內容集中在 [data/site.ts](/Users/eric_chen/Documents/Code/chengyi-168/data/site.ts)：

- 商家基本資料
- LINE、電話、地址、營業時間
- 服務區域
- 五大服務
- FAQ
- Blog 種子文章
- Blog 完整文章段落
- Reviews
- 待回填 placeholder

修改商家資料後，請重新執行：

```bash
npm run build
```

## SEO 與結構化資料

已完成：

- 各頁 metadata
- canonical
- Open Graph
- `sitemap.xml`
- `robots.txt`
- `MovingCompany` JSON-LD
- `FAQPage` JSON-LD
- `WebSite` JSON-LD
- `BlogPosting` JSON-LD

JSON-LD 來源在 [lib/seo.tsx](/Users/eric_chen/Documents/Code/chengyi-168/lib/seo.tsx)。

SEO/GEO 注意事項：

- 已回填：地址為高雄市三民區，服務區域為全台灣，營業時間為 24 小時可詢問，實際接單與出車依老闆回覆及排程確認。
- 已回填：LINE 連結為 `https://line.me/ti/p/vvCZY-FZAM`，Threads 為 `https://www.threads.com/@chengyi773190`。
- 已回填：價格說明為市區跑市區一車 NT$4,000 起，2 樓以上樓層費每層 NT$500 起，實際仍依線上或現場估價。
- 替換正式網址後，需重新檢查 canonical、Open Graph URL、`sitemap.xml`。
- Google 商家資料尚未申請，因此 Google Maps、Place ID、座標目前不輸出到 JSON-LD。

## 圖片與 Logo

目前主要使用專案內 JPG：

- Header 方形 logo: `public/images/brand-logo-mark.jpg`
- 首頁 Hero / schema logo: `public/images/brand-logo.jpg`
- Footer 名片圖: `public/images/brand-card.jpg`
- 貨車容量展示: `public/images/truck-capacity.jpg`
- 紙箱展示: `public/images/packing-box.jpg`
- 打包袋展示: `public/images/moving-bag.jpg`
- 服務頁總覽: `public/images/services-overview.jpg`

原始 JPG 仍保留在專案根目錄：`71.jpg`, `72.jpg`, `1587.jpg`, `1588.jpg`, `4630.jpg`, `56146.jpg`。

## Blog 內容

`/blog` 與 `/blog/[slug]` 已更新為完整內容頁，不再只有大綱。文章資料在 `data/site.ts` 的 `blogPosts`，每篇包含：

- title
- excerpt
- image / alt
- outline
- sections

手機版已針對文章長標題做過一輪調整；新增文章時，請避免小節標題過長，並在窄螢幕確認不會裁切。

新增文章後要同步確認：

- `generateStaticParams()` 會自動讀取 `blogPosts`
- `sitemap.ts` 會自動加入文章 URL
- `BlogPosting` JSON-LD 會在文章頁輸出

## 事件追蹤

按鈕已預埋 `data-event` 屬性，方便後續接 GA4/GTM：

- `click_line_floating`
- `click_line_hero`
- `click_call_footer`
- `view_services`

## RWD 與視覺檢查

已完成基本 Chrome headless 截圖抽查：

- `tmp/screenshots/final-home-mobile.png`
- `tmp/screenshots/final-blog-mobile-short.png`
- `tmp/screenshots/home-desktop-v2.png`

目前已修正的重點：

- 暗色背景搭配暗文字的對比問題。
- 首頁 hero 手機版標題與副標換行。
- Blog 文章手機版長標題裁切。
- Header 手機版擠壓問題。
- 手機版固定 LINE CTA 改為底部滿版顯示。

正式上線前仍建議用實機 Safari / Chrome 各抽查一次首頁、服務頁、FAQ 與 1 篇 Blog 文章。

## 待回填清單

- P0 正式網址確認：目前暫用 `https://chengyi-168.vercel.app`，若 Vercel 實際網址或自訂網域不同需更新
- P1 `{{GMAPS_DIRECTIONS_URL}}`: Google Maps 導航連結
- P1 `{{LAT}}, {{LNG}}`: 地理座標
- P1 `{{PLACE_ID_PLACEHOLDER}}`: Google Place ID
- P2 `{{FB_URL_PLACEHOLDER}}, {{IG_URL_PLACEHOLDER}}`: 社群 sameAs
- P2 `{{EMAIL_PLACEHOLDER}}`: Email，可選

## 目前已知未完成

- 已回填第一批客戶資料；仍缺正式網址、Google 商家資料、FB/IG 與 Email。
- 已完成基本 headless 截圖驗收；尚未做實機手機瀏覽器 QA。
- `npm audit --omit=dev` 曾回報 Next.js 依賴的 PostCSS moderate advisory；npm 建議修復會降級到舊版 Next，未採用。

## 交付紀錄

完整的原始要求、已完成項目、未完成項目與驗證紀錄請看：

[docs/project-delivery.md](/Users/eric_chen/Documents/Code/chengyi-168/docs/project-delivery.md)

向客戶確認 placeholder 資料時，請使用：

[docs/client-questionnaire.md](/Users/eric_chen/Documents/Code/chengyi-168/docs/client-questionnaire.md)
