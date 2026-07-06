# 承億搬運網站

承億搬運的靜態官網，使用 Next.js App Router、TypeScript 與 Tailwind CSS 建置。專案以 SSG 為預設，並設定 `output: "export"`，可輸出純靜態檔部署到 Vercel、Netlify 或 GitHub Pages。

## 技術棧

- Next.js App Router
- TypeScript
- Tailwind CSS
- Static export: `output: "export"`
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

## 建置靜態檔

```bash
npm run build
```

靜態輸出會產生在：

```text
out/
```

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
    logo-mark.jpg          Header 與 schema logo
    brand-card.jpg         名片聯絡視覺
    services-overview.jpg  五大服務總覽圖
    truck-capacity.jpg     貨車容量與首頁 hero
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

- 目前所有未知在地資料都保留為 `{{PLACEHOLDER}}`，未捏造地址、服務區域、交通或地標。
- 替換正式網址後，需重新檢查 canonical、Open Graph URL、`sitemap.xml`。
- 替換地址、服務區域、營業時間後，需重新檢查 LocalBusiness JSON-LD 與頁尾 NAP 是否一致。

## 圖片與 Logo

目前主要使用專案內實拍 JPG：

- Header logo: `public/images/logo-mark.jpg`
- Footer 名片圖: `public/images/brand-card.jpg`
- 首頁 hero / 貨車容量: `public/images/truck-capacity.jpg`
- 紙箱展示: `public/images/packing-box.jpg`
- 打包袋展示: `public/images/moving-bag.jpg`
- 服務頁總覽: `public/images/services-overview.jpg`

原始 JPG 仍保留在專案根目錄：`71.jpg`, `72.jpg`, `1587.jpg`, `1588.jpg`, `4630.jpg`。

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

- P0 `{{DOMAIN_PLACEHOLDER}}`: 正式網址，影響 canonical、sitemap、OG URL
- P0 `{{FULL_ADDRESS_PLACEHOLDER}}`: 完整地址，影響 NAP 與 LocalBusiness schema
- P0 `{{SERVICE_AREA_LIST_PLACEHOLDER}} / {{SERVICE_AREA}}`: 服務區域與在地 SEO
- P0 `{{HOURS_PLACEHOLDER}}`: 營業時間，需註明是否 24H 與夜間服務
- P1 `{{GMAPS_DIRECTIONS_URL}}`: Google Maps 導航連結
- P1 `{{LAT}}, {{LNG}}`: 地理座標
- P1 `{{PLACE_ID_PLACEHOLDER}}`: Google Place ID
- P1 `{{PRICE_RANGE_PLACEHOLDER}}`: 價格區間，可補強 LocalBusiness schema
- P2 `{{THREADS_URL_PLACEHOLDER}}, {{FB_URL_PLACEHOLDER}}, {{IG_URL_PLACEHOLDER}}`: 社群 sameAs
- P2 `{{EMAIL_PLACEHOLDER}}`: Email，可選

## 目前已知未完成

- 尚未把 placeholder 換成真實商家資料。
- 已完成基本 headless 截圖驗收；尚未做實機手機瀏覽器 QA。
- `npm audit --omit=dev` 曾回報 Next.js 依賴的 PostCSS moderate advisory；npm 建議修復會降級到舊版 Next，未採用。

## 交付紀錄

完整的原始要求、已完成項目、未完成項目與驗證紀錄請看：

[docs/project-delivery.md](/Users/eric_chen/Documents/Code/chengyi-168/docs/project-delivery.md)

向客戶確認 placeholder 資料時，請使用：

[docs/client-questionnaire.md](/Users/eric_chen/Documents/Code/chengyi-168/docs/client-questionnaire.md)
