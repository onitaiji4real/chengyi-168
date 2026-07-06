# 承億搬運網站交付紀錄

最後更新：2026-07-07

## 最新狀態摘要

- 網站已可靜態建置，`npm run build` 成功。
- 已改用專案內 JPG 實拍素材，降低 AI 圖片感。
- Header 已改用從名片圖裁切出的承億搬運 logo。
- Blog 文章已從大綱擴充成 6 篇完整可閱讀文章。
- SEO/GEO 已保留 Metadata API、canonical、sitemap、robots、LocalBusiness、FAQPage，並新增 BlogPosting schema。
- RWD/可讀性已完成第一輪 CSS 調整，並已用 Chrome headless 截圖抽查手機與桌面版。

## 原始要求摘要

### 硬規則

- 建立 Next.js App Router 專案，預設採 SSG。
- 使用 `output: "export"` 靜態輸出，可部署到 Vercel、Netlify、GitHub Pages。
- 每個頁面必須輸出搜尋引擎可直接抓取的 HTML，不依賴 client-side `react-helmet`。
- 使用 Next.js Metadata API 產生 title、meta、Open Graph、canonical。
- 產出 `sitemap.xml` 與 `robots.txt`。
- 插入 JSON-LD。
- 因 `output: "export"` 限制，不使用 Server Actions 或動態 API routes。
- 表單改用第三方服務或 LINE 跳轉：`https://line.me/ti/p/{{LINE_ID}}`。
- 資料不足時使用 `{{PLACEHOLDER}}`，不可捏造在地資訊。
- 結尾列出待回填清單與優先級。

### 商家資料

- Name: 承億搬運
- English name: Cheng-Yi Relocation Services
- Category: 搬家公司
- Address: `{{FULL_ADDRESS_PLACEHOLDER}}`
- Phone: `0965-819-629`
- Contact: 汪承漢
- Email: `{{EMAIL_PLACEHOLDER}}`
- LINE: `chengyi-168`
- Hours: `{{HOURS_PLACEHOLDER}}`
- Service area: `{{SERVICE_AREA_LIST_PLACEHOLDER}}`
- Geo: `{{LAT}}, {{LNG}}`
- Google Place ID: `{{PLACE_ID_PLACEHOLDER}}`
- Social sameAs: `{{THREADS_URL_PLACEHOLDER}}`, `{{FB_URL_PLACEHOLDER}}`, `{{IG_URL_PLACEHOLDER}}`
- Google Maps: `{{GMAPS_DIRECTIONS_URL}}`
- Review copy:
  - 老闆人不錯、價格不貴、服務好
  - Threads 網友熱推搬家神隊友
- Trust signals:
  - 50x65cm 專用袋
  - 50x35x35cm 專業紙箱
  - 升降尾門貨車：長 285 x 寬 169 x 高 115cm

### 視覺與技術

- Theme: Trust-Blue-Modern
- Primary: `#1E3A8A`
- Background: `#F8FAFC`
- Accent: `#FACC15`
- Text: `#1E293B`
- Typography:
  - Heading: Noto Sans TC
  - Body: Inter
- RWD、行動端優先。
- CTA 必須明顯，右下角固定懸浮 LINE 按鈕。
- Hero 使用 photo-fullbleed，實景風貨車與搬家情境。
- 使用 Next.js App Router + TypeScript + Tailwind CSS。
- 內容使用本地資料檔管理。
- 圖片放在 `public/`。

### 必要路由

- `/`
- `/services`
- `/blog`
- `/blog/[slug]`
- `/faq`
- `/privacy`
- `/terms`

### 必要區塊

- Hero：
  - 主標：承載所託 | 億心送達
  - 副標：Threads 網友好評推薦！大高雄地區最安心的搬家神隊友。
  - 主 CTA：立即加 LINE 估價
  - 次 CTA：了解五大搬運服務
- Trust Bar：
  - 價格透明不亂加價
  - 專人細心防護
  - 提供專業包裝耗材
  - 升降尾門安全上車
- 五大核心服務：
  - 家庭精緻搬家
  - 自助搬家
  - 夜間運輸
  - 精密儀器護送
  - 專業打包
- 透明裝備展示：
  - 貨車容量
  - 紙箱
  - 大型打包袋
- Reviews
- FAQ 至少 8 題
- 名片式快取區 / Footer
- 固定懸浮 LINE 免費估價按鈕

### SEO 與 AI Search

- Home SEO：
  - title: 承億搬運 | 專業在地搬家推薦，透明計價、細心打包
  - description: 網友好評推薦搬家公司！提供家庭精緻搬家、自助搬家、夜間運輸、專業打包等服務。汪承漢老闆親自把關，價格透明不亂加價。立刻加 LINE 免費估價。
- Services SEO：
  - title: 五大專業搬家服務 | 承億搬運
- FAQ SEO：
  - title: 搬家常見問答與計費方式 | 承億搬運
- 其餘頁面需建立 SEO metadata 模板。
- 在地內容需自然帶入 `{{SERVICE_AREA}}`。
- FAQ 與 Blog 預留「`{{SERVICE_AREA}} 便宜搬家`」、「`{{SERVICE_AREA}} 夜間搬家`」。
- Entity 摘要區塊需清楚描述承億搬運、服務、包材與 LINE。
- FAQ 答案需短問短答，答案 2-4 句內。
- JSON-LD：
  - `MovingCompany`
  - `FAQPage`

### 事件追蹤

預埋以下事件屬性：

- `click_line_floating`
- `click_line_hero`
- `click_call_footer`
- `view_services`

## 已完成項目

- 已建立 Next.js App Router + TypeScript 專案。
- 已設定 `next.config.ts` 的 `output: "export"`。
- 已設定 `images.unoptimized: true` 以符合靜態輸出。
- 已使用 Tailwind CSS。
- 已將內容集中於 `data/site.ts`。
- 已建立全部必要 routes：
  - `/`
  - `/services`
  - `/blog`
  - `/blog/[slug]`
  - `/faq`
  - `/privacy`
  - `/terms`
- 已建立首頁高轉換 Landing Page：
  - photo-fullbleed hero
  - Trust Bar
  - Entity / About 摘要
  - 五大服務卡片
  - 透明裝備展示
  - Reviews
  - FAQ 摘要
  - Footer NAP
  - 固定 LINE CTA
- 已產出 hero 圖片並放入 `public/images/hero-moving-truck.png`。
- 已改用實拍貨車容量圖作為首頁 hero：`public/images/truck-capacity.jpg`。
- 已新增並使用實拍素材：
  - `public/images/logo-mark.jpg`
  - `public/images/brand-card.jpg`
  - `public/images/services-overview.jpg`
  - `public/images/truck-capacity.jpg`
  - `public/images/packing-box.jpg`
  - `public/images/moving-bag.jpg`
- 已將 header logo 從文字圓章改成實際品牌 logo 圖。
- 已將裝備展示區改成實拍圖卡：
  - 升降尾門貨車容量
  - 專業紙箱
  - 大型打包袋
- 已在服務頁加入服務總覽實拍/設計圖。
- 已建立五大服務文案，每項包含：
  - 一句價值
  - 適合誰
  - CTA
- 已建立 8 題 FAQ，並包含：
  - 如何計費
  - 是否提供紙箱
  - 無電梯樓層
  - 大型廢棄物
  - 夜間搬家加價
  - `{{SERVICE_AREA}} 便宜搬家`
  - `{{SERVICE_AREA}} 夜間搬家`
  - 估價前準備資訊
- 已建立 6 篇 Blog 完整文章，不再只有大綱：
  - `{{SERVICE_AREA}} 搬家前斷捨離打包心法`
  - `搬家當天要注意的 5 件事`
  - `搬家紙箱怎麼裝最穩？`
  - `{{SERVICE_AREA}} 便宜搬家怎麼省預算？`
  - `{{SERVICE_AREA}} 夜間搬家預約注意事項`
  - `搬家袋和紙箱怎麼分配最有效率？`
- 已更新 Blog 列表頁，加入文章主圖與完整文章入口。
- 已更新 Blog 文章頁，加入主圖、完整段落、文章大綱、估價 CTA。
- 已使用 Metadata API 建立各頁 SEO metadata。
- 已建立 canonical、Open Graph、description。
- 已建立 `app/sitemap.ts` 與 `app/robots.ts`。
- 已建立 `MovingCompany` JSON-LD。
- 已建立 `FAQPage` JSON-LD。
- 已新增 `WebSite` JSON-LD。
- 已新增每篇文章的 `BlogPosting` JSON-LD。
- 已補強 LocalBusiness GEO/AI Search 欄位：
  - `description`
  - `knowsAbout`
  - `makesOffer`
  - `priceRange` placeholder
- 已調整 RWD 與可讀性 CSS：
  - 標題使用 `clamp()` 降低手機破版風險。
  - 增加暗色區塊高對比 utility。
  - 增加長字串與 placeholder 換行規則。
  - 限制圖片、卡片與按鈕不超出容器。
  - 修正暗底文字對比不足的主要區塊。
- 已針對手機版修正 Blog 長標題與文章段落：
  - 首頁 hero 主標與副標改為可控換行。
  - Blog 文章小節標題縮短，降低窄螢幕裁切風險。
  - Header 手機版隱藏次要 LINE CTA，避免擠壓 logo 與品牌名稱。
  - 手機版固定 LINE CTA 改為底部滿版按鈕。
- 已預埋指定事件追蹤屬性。
- 已避免 Server Actions 與動態 API routes。
- 已將未知資料保留為 `{{PLACEHOLDER}}`。
- 已執行 `npm run build`，確認靜態建置成功。
- 已使用靜態輸出目錄 `out/` 啟動本機預覽並完成截圖抽查。
- 已新增客戶資料回填問卷：`docs/client-questionnaire.md`。

## 未完成項目

以下項目未完成是因為原始資料未提供，已依要求保留 placeholder，未自行捏造：

- P0 正式網址確認：目前暫用 `https://chengyi-168.vercel.app`，若 Vercel 實際網址或自訂網域不同需更新 `data/site.ts` 的 `site.url`。
- P1 `{{GMAPS_DIRECTIONS_URL}}`: Google Maps 導航連結。
- P1 `{{LAT}}`, `{{LNG}}`: 地理座標。
- P1 `{{PLACE_ID_PLACEHOLDER}}`: Google Place ID。
- P2 `{{FB_URL_PLACEHOLDER}}`: Facebook 連結。
- P2 `{{IG_URL_PLACEHOLDER}}`: Instagram 連結。
- P2 `{{EMAIL_PLACEHOLDER}}`: Email，可選。
- 已完成：Chrome headless 基本截圖驗收。正式上線前仍建議用真機 Safari/Chrome 再抽查一次。
- 尚未完成：替換 placeholder 為真實商家資料後，需再次跑 build 並抽查 sitemap、canonical、JSON-LD。
- 已回填第一批客戶資料：地址、服務區域、營業時間、LINE 連結、Threads、計價說明、樓層費、包材防護說明。
- Google 商家資料尚未申請，因此 Google Maps、Place ID、座標目前仍缺，且不輸出到 JSON-LD。
- 後續回填前請先使用 `docs/client-questionnaire.md` 向客戶確認正式網址、Google Maps、FB/IG、Email 與評價資料。

## 驗證紀錄

已執行：

```bash
npm run build
```

結果：

- Build 成功。
- 共 16 個靜態頁面完成 prerender。
- `/blog/[slug]` 使用 `generateStaticParams` 產生 SSG 靜態文章頁。
- `sitemap.xml` 與 `robots.txt` 成功輸出。

RWD / 可讀性抽查：

- 使用 `out/` 靜態輸出搭配本機 HTTP server 預覽。
- 已用 Chrome headless 擷取並檢查：
  - `tmp/screenshots/final-home-mobile.png`
  - `tmp/screenshots/final-blog-mobile-short.png`
  - `tmp/screenshots/home-desktop-v2.png`
- 檢查結果：
  - 手機版首頁 hero 標題、圖片、CTA 未見明顯破版。
  - 手機版文章頁標題、主圖、文章大綱與內文未見明顯裁切。
  - 固定 LINE CTA 在手機版正常貼底顯示。
  - 桌面版首頁主要區塊可正常呈現。

安全檢查：

```bash
npm audit --omit=dev
```

結果：

- npm audit 回報 Next.js 目前依賴的 PostCSS 有 moderate advisory。
- npm 建議的 `audit fix --force` 會降級到非常舊的 Next.js 版本，屬破壞性修復，未採用。
- 專案目前保留 `next@^16.2.10`。

## 變更紀錄

### 2026-07-07 第二輪

- 依使用者要求調整 RWD 與可讀性：
  - 避免暗背景搭配暗文字。
  - 加入全站標題與文字換行規則。
  - 調整手機版 hero 標題與按鈕寬度。
  - 降低卡片、圖片與 CTA 在小螢幕破版風險。
- 使用專案內 JPG 實拍素材：
  - `4630.jpg` 複製為 `public/images/truck-capacity.jpg`，作為 hero 與貨車容量圖。
  - `1588.jpg` 複製為 `public/images/packing-box.jpg`，作為紙箱圖。
  - `1587.jpg` 複製為 `public/images/moving-bag.jpg`，作為大型打包袋圖。
  - `71.jpg` 複製為 `public/images/brand-card.jpg`，並裁切出 `public/images/logo-mark.jpg`。
  - `72.jpg` 複製為 `public/images/services-overview.jpg`，作為服務總覽圖。
- 更新 logo：
  - Header 改用 `logo-mark.jpg`。
  - LocalBusiness 與 BlogPosting publisher logo 改用 `logo-mark.jpg`。
- 更新 Blog：
  - 6 篇文章從大綱擴充為完整文章。
  - Blog list 改成圖文卡片。
  - Blog post template 加入主圖、完整段落與 CTA。
  - 每篇文章新增 BlogPosting JSON-LD。
- 更新 SEO/GEO：
  - LocalBusiness JSON-LD 加入 `description`、`knowsAbout`、`makesOffer`、`priceRange`。
  - 首頁加入 WebSite JSON-LD。
- 驗證：
  - 已執行 `npm run build`，成功。
  - 已抽查 `out/blog/.../index.html`，確認文章內容、canonical、OG image、BlogPosting JSON-LD 有輸出。

### 2026-07-07 第三輪

- 依使用者要求持續更新交接文件與 README。
- 新增 `docs/client-questionnaire.md`，整理可直接詢問客戶的 placeholder 回填問題。
- 回填第一批客戶資料：
  - 網站網址暫設：`https://chengyi-168.vercel.app`，用於 Vercel 部署前的 canonical、OG URL 與 sitemap。
  - 地址：高雄市三民區。
  - 服務區域：全台灣。
  - 營業時間：24 小時可 LINE 或電話詢問，實際接單與出車依老闆回覆及排程確認。
  - LINE 連結：`https://line.me/ti/p/vvCZY-FZAM`。
  - Threads：`https://www.threads.com/@chengyi773190`。
  - 價格：市區跑市區一車 NT$4,000 起；2 樓以上樓層費每層 NT$500 起；大型家具另估。
  - 包材：需要保護的物品可視情況提供氣泡紙、專業搬家保護毯、膠膜與保護材料。
- 調整 JSON-LD 輸出：
  - Email、Google Maps、Place ID、座標沒有資料時不輸出空欄位。
  - `priceRange` 改用客戶提供的價格說明。
- 新增 `vercel.json`：
  - `buildCommand`: `npm run build`
  - `outputDirectory`: `out`
- 修正首頁深藍 CTA 對比不足問題：
  - 新增 `.btn-dark` 共用樣式，明確指定深藍底與白色文字。
  - 將「查看完整服務」與「查看完整 FAQ」改用 `.btn-dark`，避免深色文字壓在深色背景上。
- 移除首頁公開顯示的「待回填清單（含優先級）」區塊：
  - placeholder 回填清單保留在 `docs/project-delivery.md` 與 `docs/client-questionnaire.md`。
  - 正式網站前台不應顯示內部待辦或 placeholder 清單。
- 修正手機版文章頁長標題裁切問題：
  - CSS 增加 `word-break`、`overflow-wrap`、`text-wrap` 與手機版字級限制。
  - Blog 文章小節標題改為較短、更適合手機閱讀的版本。
- 完成 Chrome headless 截圖抽查：
  - 首頁手機版：`tmp/screenshots/final-home-mobile.png`
  - Blog 手機版：`tmp/screenshots/final-blog-mobile-short.png`
  - 首頁桌面版：`tmp/screenshots/home-desktop-v2.png`
- 驗證：
  - 已執行 `npm run build`，成功。
  - 截圖確認主要文字、圖片、CTA 沒有明顯破版或低對比問題。
  - 修正 CTA 對比後再次執行 `npm run build`，成功。
  - 回填第一批客戶資料後再次執行 `npm run build`，成功。
