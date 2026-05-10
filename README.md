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