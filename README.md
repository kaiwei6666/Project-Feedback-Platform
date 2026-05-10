# Side Project Feedback Platform

## 1. Product Vision

Side Project Feedback Platform 是一個讓個人開發者發布 side project，並收集一般使用者結構化回饋的平台。

這個平台的目標是補足 GitHub 在「一般使用者產品回饋」上的不足。GitHub 適合進行程式碼協作、Issue 討論與 Pull Request，但對於還在早期階段的個人專案來說，更需要的是來自真實使用者的試用感受、產品定位建議、功能需求與改善方向。

因此，本平台希望幫助開發者更有效地驗證自己的 side project 是否具有實際需求，並透過結構化回饋逐步改善產品。

## 2. Target Users

本平台第一階段主要服務兩種使用者：Project Makers 與 Feedback Givers。

### 2.1 Project Makers

Project Makers 是指正在開發 side project 的個人開發者、學生、獨立開發者或小型團隊。他們可能已經完成一個初步可展示的作品，例如網站、App、工具、AI 應用、開源工具或系統原型，但尚未確認這個專案是否真的符合使用者需求。

他們在早期階段最需要的不是大量流量，而是具體、清楚、可執行的回饋，例如：

- 使用者是否看得懂這個專案在解決什麼問題
- 使用者是否願意實際使用這個專案
- 哪些功能最有價值
- 哪些地方造成使用困難
- 這個專案的定位是否清楚

### 2.2 Feedback Givers

Feedback Givers 是指願意試用 side project 並提供意見的一般使用者、學生、開發者、產品愛好者或早期使用者。

他們不一定需要具備完整的技術背景，因為本平台重視的是「使用者角度」的回饋，而不只是程式碼層面的建議。透過簡單且結構化的回饋表單，Feedback Givers 可以快速表達他們對專案的理解、使用感受、需求程度與改善建議。

## 3. Core Problem

許多個人開發者在完成 side project 後，通常會將專案放到 GitHub、個人網站或社群平台上。然而，這些平台並不完全適合早期產品驗證。

GitHub 的核心功能偏向程式碼管理與開發者協作，例如 repository、issue、pull request、discussion 等。這些功能對於技術協作很有幫助，但對於一般使用者來說，進入門檻仍然偏高，也不一定知道該如何提供產品層面的回饋。

對於早期 side project 來說，開發者真正需要的不只是技術建議，而是以下幾種回饋：

- 使用者是否理解這個專案的價值
- 使用者是否真的有這個需求
- 使用者是否願意持續使用
- 目前的功能是否解決了正確的問題
- 專案的定位是否清楚
- 哪些功能應該優先改善或新增

因此，本平台希望解決的核心問題是：

> 如何讓個人開發者更容易從一般使用者身上收集清楚、結構化且可行動的產品回饋，進而驗證 side project 的需求與發展方向。

## 4. MVP Features

本平台第一版 MVP 的目標不是一次做出完整大型平台，而是先完成最小可行產品，驗證「開發者發布專案並收集結構化回饋」這個核心流程是否成立。

第一版功能會優先聚焦在三件事：

1. 讓 Project Makers 可以發布自己的 side project
2. 讓 Feedback Givers 可以瀏覽專案並提交回饋
3. 讓 Project Makers 可以查看收到的回饋並整理改善方向

### 4.1 Project Maker Features

Project Makers 在 MVP 階段可以使用以下功能：

- 註冊與登入帳號
- 建立專案頁面
- 編輯專案基本資訊
- 上傳專案封面或截圖
- 填寫 GitHub repository 連結
- 填寫 Demo 或產品試用連結
- 選擇專案分類
- 設定目前開發階段
- 指定希望收集的回饋類型
- 查看使用者提交的回饋

### 4.2 Feedback Giver Features

Feedback Givers 在 MVP 階段可以使用以下功能：

- 瀏覽所有公開專案
- 查看專案詳細介紹
- 依照分類尋找感興趣的專案
- 點擊 GitHub 或 Demo 連結進行試用
- 提交結構化回饋表單
- 針對專案給予基本評分
- 提供文字建議

### 4.3 Feedback Form Structure

為了讓回饋更容易整理，本平台會使用結構化回饋表單，而不是單純開放式留言。

MVP 階段的回饋表單可以包含以下欄位：

- 我是否看得懂這個專案在解決什麼問題
- 我是否覺得這個專案有實際需求
- 我是否願意嘗試或持續使用這個專案
- 我覺得最有價值的功能是什麼
- 我覺得最需要改善的地方是什麼
- 我遇到哪些使用上的困難
- 我會給這個專案幾分
- 我想補充的其他建議

## 5. Development Roadmap

本專案會採取漸進式開發方式，先完成核心流程，再逐步擴充成完整平台。整體開發會分成以下幾個階段。

### Phase 1: Product Planning

此階段目標是明確定義產品方向與 MVP 範圍，避免一開始就開發過多功能。

主要工作包括：

- 定義產品願景
- 定義目標使用者
- 分析核心問題
- 規劃 MVP 功能
- 設計基本使用者流程
- 規劃資料表結構
- 決定初期技術架構

### Phase 2: MVP Development

此階段目標是完成可以實際運作的第一版平台。

主要工作包括：

- 建立前端專案
- 建立後端 API
- 建立資料庫
- 實作註冊與登入
- 實作專案發布功能
- 實作專案列表與詳情頁
- 實作回饋表單
- 實作回饋查看功能
- 完成基本部署

### Phase 3: Feedback Management

此階段目標是讓開發者更容易整理與分析收到的回饋。

主要工作包括：

- 回饋分類
- 回饋狀態管理
- 回饋重要程度標記
- 回饋摘要
- 回饋統計圖表
- 專案改善紀錄

### Phase 4: Community & Growth

此階段目標是讓平台逐漸形成社群，而不只是單純的表單工具。

主要工作包括：

- 使用者個人頁面
- 專案收藏
- 專案追蹤
- 評論互動
- 推薦系統
- 排行榜
- 通知系統

### Phase 5: Advanced Features

此階段目標是加入更具技術亮點與長期價值的功能。

主要工作包括：

- AI 回饋摘要
- AI 回饋分類
- 使用者需求趨勢分析
- 專案成長指標
- 開發者儀表板
- GitHub API 整合
- Demo 使用行為分析
- 團隊協作功能

## 6. Tech Stack

本專案會以全端 Web 平台的方式進行開發，並採用適合長期維護與功能擴充的技術架構。

### 6.1 Frontend

前端主要負責使用者介面與互動流程，包括專案列表、專案詳情頁、發布專案頁面、回饋表單與開發者後台。

預計使用技術：

- React
- TypeScript
- Tailwind CSS
- React Router
- Axios 或 Fetch API

### 6.2 Backend

後端主要負責 API、使用者驗證、專案資料管理、回饋資料管理與權限控制。

預計使用技術：

- Node.js
- Express.js
- TypeScript
- RESTful API
- JWT Authentication

### 6.3 Database

資料庫主要用來儲存使用者、專案、回饋、分類與未來的互動資料。

預計使用技術：

- PostgreSQL

初期主要資料表可能包括：

- users
- projects
- feedbacks
- categories
- feedback_types

### 6.4 Deployment

部署階段會先以簡單、穩定、容易管理為主，讓 MVP 可以盡快上線測試。

可能使用的部署工具：

- Vercel：前端部署
- Render 或 Railway：後端部署
- Supabase 或 Neon：PostgreSQL 資料庫
- GitHub：版本控制與專案紀錄

## 7. User Flow

本平台 MVP 階段的使用者流程會分成兩條主線：Project Maker 發布專案流程，以及 Feedback Giver 提供回饋流程。

### 7.1 Project Maker Flow

Project Maker 的主要流程如下：

1. 註冊或登入帳號
2. 進入開發者後台
3. 建立新的 side project
4. 填寫專案基本資訊
   - 專案名稱
   - 專案簡介
   - 專案分類
   - 開發階段
   - GitHub repository 連結
   - Demo 或產品試用連結
5. 選擇想收集的回饋類型
   - UI/UX 回饋
   - 功能建議
   - Bug 回報
   - 產品定位建議
   - 需求驗證
6. 發布專案
7. 查看使用者提交的回饋
8. 根據回饋整理改善方向

### 7.2 Feedback Giver Flow

Feedback Giver 的主要流程如下：

1. 進入平台首頁
2. 瀏覽公開的 side projects
3. 依照分類或興趣選擇專案
4. 查看專案詳細介紹
5. 點擊 GitHub 或 Demo 連結試用專案
6. 回到平台提交結構化回饋
7. 填寫評分與文字建議
8. 送出回饋

### 7.3 Core Loop

本平台的核心循環如下：

1. 開發者發布專案
2. 使用者瀏覽並試用專案
3. 使用者提交結構化回饋
4. 開發者查看並整理回饋
5. 開發者根據回饋改善專案
6. 專案更新後再次收集回饋

這個循環是本平台最重要的產品價值。平台不是只讓開發者展示作品，而是幫助開發者持續驗證、改善與成長。

## 8. Initial Data Model

本平台 MVP 階段會先設計最基本的資料模型，確保可以支援「使用者註冊、專案發布、回饋提交、回饋查看」這幾個核心功能。

### 8.1 users

`users` 資料表用來儲存平台使用者資料。

主要欄位包括：

- id
- name
- email
- password_hash
- role
- bio
- avatar_url
- created_at
- updated_at

其中 `role` 可以用來區分不同使用者身份，例如：

- project_maker
- feedback_giver
- admin

### 8.2 projects

`projects` 資料表用來儲存 side project 的基本資訊。

主要欄位包括：

- id
- user_id
- title
- short_description
- full_description
- category_id
- stage
- github_url
- demo_url
- cover_image_url
- status
- created_at
- updated_at

其中 `user_id` 代表這個專案是由哪一位 Project Maker 建立。

### 8.3 feedbacks

`feedbacks` 資料表用來儲存使用者對專案提交的回饋。

主要欄位包括：

- id
- project_id
- user_id
- clarity_score
- usefulness_score
- willingness_to_use_score
- most_valuable_feature
- improvement_suggestion
- difficulty
- overall_rating
- additional_comment
- created_at
- updated_at

### 8.4 categories

`categories` 資料表用來管理專案分類。

主要欄位包括：

- id
- name
- description
- created_at
- updated_at

範例分類包括：

- Web App
- Mobile App
- AI Tool
- Developer Tool
- Productivity
- Education
- Data Analysis
- Open Source

### 8.5 feedback_types

`feedback_types` 資料表用來管理開發者想收集的回饋類型。

主要欄位包括：

- id
- name
- description
- created_at
- updated_at

範例回饋類型包括：

- UI/UX Feedback
- Feature Suggestion
- Bug Report
- Product Positioning
- Market Need Validation

## 9. Initial API Design

本平台 MVP 階段會採用 RESTful API 架構，讓前端可以透過 API 與後端進行資料交換。初期 API 會圍繞四個核心資源設計：users、projects、feedbacks、categories。

### 9.1 Auth APIs

Auth APIs 負責處理使用者註冊、登入與身份驗證。

| Method | Endpoint | Description |
| --- | --- | --- |
| POST | /api/auth/register | 註冊新使用者 |
| POST | /api/auth/login | 使用者登入 |
| GET | /api/auth/me | 取得目前登入使用者資料 |
| POST | /api/auth/logout | 使用者登出 |

### 9.2 Project APIs

Project APIs 負責處理 side project 的建立、讀取、更新與刪除。

| Method | Endpoint | Description |
| --- | --- | --- |
| GET | /api/projects | 取得公開專案列表 |
| GET | /api/projects/:id | 取得單一專案詳細資料 |
| POST | /api/projects | 建立新專案 |
| PUT | /api/projects/:id | 更新專案資料 |
| DELETE | /api/projects/:id | 刪除專案 |

### 9.3 Feedback APIs

Feedback APIs 負責處理使用者提交的結構化回饋。

| Method | Endpoint | Description |
| --- | --- | --- |
| GET | /api/projects/:id/feedbacks | 取得某專案的所有回饋 |
| POST | /api/projects/:id/feedbacks | 對某專案提交回饋 |
| GET | /api/feedbacks/:id | 取得單一回饋詳細資料 |
| DELETE | /api/feedbacks/:id | 刪除回饋 |

### 9.4 Category APIs

Category APIs 負責提供專案分類資料，讓使用者可以依照分類瀏覽專案。

| Method | Endpoint | Description |
| --- | --- | --- |
| GET | /api/categories | 取得所有專案分類 |
| POST | /api/categories | 建立新分類 |
| PUT | /api/categories/:id | 更新分類 |
| DELETE | /api/categories/:id | 刪除分類 |

### 9.5 API Design Principles

本專案 API 設計會遵守以下原則：

- 使用清楚且一致的 endpoint 命名
- 使用 HTTP methods 表達操作語意
- 回傳統一格式的 JSON response
- 將身份驗證與權限檢查放在後端處理
- 將錯誤訊息標準化，方便前端顯示

## 10. Project Structure

本專案會採用前後端分離的結構，讓前端、後端與文件可以清楚分開，方便後續維護、擴充與部署。

初步專案結構規劃如下：

```text
side-project-feedback-platform/
├── README.md
├── docs/
│   ├── product-planning.md
│   ├── user-flow.md
│   ├── api-design.md
│   └── database-design.md
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
├── backend/
│   ├── src/
│   ├── package.json
│   └── .env.example
└── database/
    ├── schema.sql
    └── seed.sql

    ## 11. MVP Success Criteria

本平台 MVP 階段的目標不是追求完整功能，而是驗證核心流程是否真的成立。因此，第一版會以「是否能完成有效回饋循環」作為主要成功標準。

### 11.1 Functional Criteria

MVP 完成時，至少需要達成以下功能標準：

- 使用者可以註冊與登入
- Project Maker 可以建立並發布 side project
- Feedback Giver 可以瀏覽公開專案
- Feedback Giver 可以查看專案詳情
- Feedback Giver 可以提交結構化回饋
- Project Maker 可以查看自己專案收到的回饋
- 平台可以正常儲存使用者、專案與回饋資料

### 11.2 Product Validation Criteria

除了功能完成之外，本平台也需要驗證產品本身是否有價值。

MVP 階段可以觀察以下指標：

- 是否有開發者願意發布自己的 side project
- 是否有使用者願意試用專案並留下回饋
- 回饋內容是否足夠具體，能幫助開發者改善專案
- 開發者是否認為平台比一般留言或 GitHub issue 更適合收集產品回饋
- 使用者是否覺得回饋表單容易填寫

### 11.3 Initial Metrics

第一階段可以先設定以下初步目標：

- 至少 5 個 side projects 被發布
- 至少 20 筆結構化回饋被提交
- 每個專案平均至少收到 3 筆回饋
- 至少 3 位 Project Makers 願意根據回饋修改專案
- 至少 5 位 Feedback Givers 願意再次使用平台

### 11.4 Learning Goals

MVP 階段最重要的不是數字本身，而是透過實際使用來回答以下問題：

- 開發者是否真的需要這種回饋平台？
- 使用者是否願意花時間提供結構化回饋？
- 哪一種回饋欄位最有價值？
- 哪些流程會造成使用者中途放棄？
- 平台未來應該優先強化哪一個功能？

## 12. Core Pages

本平台 MVP 階段會先設計幾個核心頁面，確保使用者可以完成「瀏覽專案、發布專案、提交回饋、查看回饋」這個主要流程。

### 12.1 Home Page

首頁是使用者進入平台後看到的第一個頁面，主要目標是讓使用者快速理解平台價值。

首頁內容包括：

- 平台簡介
- 平台核心價值
- 最新發布的 side projects
- 熱門專案分類
- 發布專案按鈕
- 瀏覽專案按鈕

### 12.2 Project List Page

專案列表頁用來展示所有公開的 side projects。

主要功能包括：

- 顯示專案卡片
- 顯示專案名稱與簡短描述
- 顯示專案分類
- 顯示開發階段
- 顯示回饋數量
- 支援依分類篩選
- 支援關鍵字搜尋

### 12.3 Project Detail Page

專案詳情頁是 Feedback Giver 了解專案並提供回饋的主要頁面。

內容包括：

- 專案名稱
- 專案完整介紹
- 專案封面或截圖
- 專案分類
- 目前開發階段
- GitHub repository 連結
- Demo 或產品試用連結
- 開發者想收集的回饋類型
- 前往提交回饋按鈕

### 12.4 Submit Feedback Page

回饋提交頁用來讓 Feedback Giver 填寫結構化回饋。

表單內容包括：

- 是否理解專案解決的問題
- 是否覺得專案有實際需求
- 是否願意使用這個專案
- 最有價值的功能
- 最需要改善的地方
- 使用上的困難
- 整體評分
- 其他補充建議

### 12.5 Project Maker Dashboard

Project Maker Dashboard 是開發者管理自己專案與回饋的地方。

主要功能包括：

- 查看自己發布的專案
- 建立新專案
- 編輯專案資訊
- 查看各專案收到的回饋數量
- 查看最新回饋
- 管理專案狀態

### 12.6 Feedback Management Page

Feedback Management Page 用來讓 Project Maker 查看單一專案收到的所有回饋。

主要功能包括：

- 顯示回饋列表
- 顯示評分結果
- 顯示文字建議
- 依回饋類型分類
- 標記重要回饋
- 整理改善方向

---

## 13. UI/UX Design Direction

本平台的 UI/UX 設計會以簡潔、清楚、低操作負擔為核心原則。

因為平台的主要使用者包含一般使用者與個人開發者，所以介面不應該過於複雜。Feedback Giver 應該能夠快速看懂專案內容並完成回饋；Project Maker 則應該能夠快速發布專案並查看回饋。

### 13.1 Design Principles

本平台的設計原則包括：

- 清楚呈現專案價值
- 降低使用者填寫回饋的負擔
- 讓專案列表容易瀏覽
- 讓開發者容易理解回饋內容
- 使用一致的按鈕、卡片與表單設計
- 避免過度複雜的視覺效果

### 13.2 Visual Style

初期視覺風格會採用乾淨、現代、偏 SaaS 平台的設計方向。

可能的設計特色包括：

- 白色或淺色背景
- 卡片式專案展示
- 清楚的標題層級
- 柔和的邊框與陰影
- 明確的主要行動按鈕
- 簡潔的表單設計

### 13.3 User Experience Focus

MVP 階段最重要的使用者體驗是讓流程順暢，而不是追求華麗動畫。

優先改善的體驗包括：

- 使用者能否快速理解平台用途
- 開發者能否在短時間內發布專案
- 使用者能否順利完成回饋表單
- 開發者能否快速找到有價值的回饋
- 平台是否讓人願意再次使用

---

## 14. Authentication and Authorization

本平台會加入基本的身份驗證與權限控制，確保不同角色只能操作自己有權限的資料。

### 14.1 Authentication

MVP 階段會使用帳號密碼登入，並透過 JWT 進行身份驗證。

基本流程如下：

1. 使用者註冊帳號
2. 後端將密碼加密後儲存
3. 使用者登入
4. 後端驗證帳號密碼
5. 登入成功後回傳 JWT
6. 前端在後續 API request 中帶上 token
7. 後端根據 token 判斷使用者身份

### 14.2 Authorization

不同使用者會有不同操作權限。

基本權限規則如下：

- 未登入使用者可以瀏覽公開專案
- 未登入使用者可以查看專案詳情
- 登入使用者可以提交回饋
- Project Maker 可以建立與管理自己的專案
- Project Maker 只能查看自己專案收到的完整回饋
- Admin 可以管理平台資料與不當內容

### 14.3 Security Considerations

初期會注意以下安全事項：

- 密碼不得以明文儲存
- API 需要檢查使用者身份
- 使用者只能修改自己的資料
- 專案擁有者才能編輯專案
- 表單輸入需要進行基本驗證
- 錯誤訊息不應暴露敏感資訊

---

## 15. Future Feature Ideas

在 MVP 完成並驗證核心流程後，本平台可以逐步擴充更多功能，讓平台從單純的回饋工具成長為完整的 side project 社群與產品驗證平台。

### 15.1 Feedback Analysis

未來可以加入回饋分析功能，幫助開發者更快理解大量使用者意見。

可能功能包括：

- 回饋自動分類
- AI 回饋摘要
- 常見問題整理
- 使用者需求關鍵字分析
- 正面與負面回饋比例
- 回饋趨勢分析

### 15.2 Project Growth Tracking

平台可以幫助開發者追蹤專案成長狀況。

可能功能包括：

- 專案瀏覽數
- Demo 點擊數
- GitHub 點擊數
- 回饋數量變化
- 使用者願意使用比例
- 專案版本更新紀錄

### 15.3 Community Features

未來可以讓平台更具有社群互動性。

可能功能包括：

- 使用者個人頁面
- 收藏專案
- 追蹤專案
- 追蹤開發者
- 評論與討論串
- 專案推薦
- 熱門專案排行

### 15.4 GitHub Integration

由於本平台與 side project 高度相關，未來可以整合 GitHub API。

可能功能包括：

- 讀取 GitHub repository 基本資訊
- 顯示 stars、forks、issues 數量
- 自動匯入 README
- 顯示最近 commit
- 顯示專案技術語言
- 連結 GitHub issue 與平台回饋

### 15.5 Team Collaboration

如果專案規模逐漸擴大，可以支援多人協作。

可能功能包括：

- 專案成員管理
- 團隊共同查看回饋
- 指派回饋處理負責人
- 回饋狀態追蹤
- 內部備註
- 團隊儀表板

---

## 16. Development Principles

本專案會以長期維護與逐步擴充為目標，因此在開發過程中會遵守一定的開發原則。

### 16.1 Build Small, Iterate Fast

初期不追求一次完成所有功能，而是先完成最核心的使用流程，再根據實際使用情況逐步改善。

開發順序會優先考慮：

1. 核心功能
2. 使用流程完整性
3. 資料正確性
4. 使用體驗
5. 進階功能
6. 技術優化

### 16.2 Product First, Technology Second

本專案雖然會加入許多技術亮點，但技術選擇必須服務產品目標。

也就是說，技術不是為了炫技，而是為了讓平台更好用、更穩定、更容易擴充。

### 16.3 Document the Process

本專案會持續保留規劃文件、系統設計、API 文件與開發紀錄。

這樣做的目的包括：

- 方便未來維護
- 展示完整開發思考
- 累積作品集價值
- 讓其他人更容易理解專案
- 幫助自己回顧決策原因

### 16.4 Version Control Discipline

所有重要進度都會透過 Git 進行版本控制。

開發時會盡量遵守以下習慣：

- 每完成一個小段落就 commit
- commit message 清楚描述本次修改
- 重要功能使用分支開發
- 合併前檢查程式是否正常
- README 與文件同步更新

---

## 17. Repository Commit Strategy

本專案會採用清楚的小步提交方式，讓 GitHub 紀錄能夠呈現完整的開發歷程。

### 17.1 Commit Message Style

Commit message 會盡量使用清楚的中文描述，例如：

```bash
git commit -m "完成：產品願景段落"
git commit -m "完成：目標使用者段落"
git commit -m "完成：核心問題段落"
git commit -m "完成：MVP功能段落"
git commit -m "完成：使用者流程段落"