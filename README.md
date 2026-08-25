# 🚀 Veloop Rewards Platform

A premium, state-of-the-art Web Application built with **React.js, Vite, and Tailwind CSS**. Designed for the Veloop Rewards ecosystem, featuring a modern fintech-inspired wallet interface, a gamified level progression journey, responsive navigation layouts, and custom interactive components.

---

## 🔗 Project Links & Info

- 🌐 **Live URL Preview:** [https://veloops-rewards.netlify.app/](https://veloops-rewards.netlify.app/)
- 💻 **GitHub Repository:** [https://github.com/deirazx/veloop-rewards-dashboard](https://github.com/deirazx/veloop-rewards-dashboard)
- 📝 **License:** MIT
- 🛠️ **Author:** deirazx / Veloop Developers

---

## 📖 Table of Contents
1. [Key Features Overview](#-key-features-overview)
2. [Upcoming Features (7-Card Suite)](#-upcoming-features-7-card-suite)
3. [Design & Styling Approach](#-design--styling-approach)
4. [Responsive Behavior](#-responsive-behavior)
5. [Animation & Micro-Interaction Details](#-animation--micro-interaction-details)
6. [Folder & Directory Structure](#-folder--directory-structure)
7. [Installation & Setup Guide](#-installation--setup-guide)

---

## ✨ Key Features Overview

### 1. App Layout Shell & Core Header
- **Dynamic Navigation:** Left Sidebar with instant view routing between Dashboard, Wallet & Vault, Level Up, and Referrals.
- **Glassmorphic Header:** Integrated with live VEs balance chip, a 5-day streak indicator, notifications popover, and an interactive Profile Dropdown menu.
- **Streak Chest Collect:** A daily claim button giving users an instant +50 VEs booster with an animated feedback state.

### 2. Fintech Wallet & Payout Hub
- **Estimated Valuation:** Real-time conversion displaying combined VEs + SVEs in INR.
- **Reward Conversion Protocol:** A visual explanation of the 1:1 auto-conversion logic from Vesting SVEs to Liquid VEs with instant simulate-conversion actions.
- **Dynamic Redeem Options:** Visual payout cards for **UPI Direct Transfer**, **Amazon Pay Gift Card**, and **Google Play Recharge Code**.
- **Checkout Modal:** Denomination input selectors, validation forms (UPI ID, Email), and deduction simulations.

### 3. Gamification & Level Milestones
- **Rank Progress:** XP progress meter showing current tier (Level 4 Platinum Vanguard) and previewing next milestone (Level 5 Diamond Master).
- **Roadmap Timeline:** Horizontal timeline displaying journey roadmap tiers from Beginner to Legend with stage rewards.
- **Quest Activity Panel:** Interactive quest cards for Daily Challenges, Watch & Earn videos (with a 5s countdown timer), and a Lucky Mystery Wheel spin simulation.

### 4. Standalone 404 Error Page
- **Isolated Layout:** Hidden sidebar and navigation container to maximize immersion.
- **Easter Egg Claim:** Clickable reward box granting +25 VEs, communicating with global header state instantly.

---

## 🔮 Upcoming Features (7-Card Suite)

Designed with the **"Coming Soon"** lock overlay and visual badges, these features outline the roadmap progression of the gamified hub:

1. ⚔️ **Team Battle Arena:** Join guilds or participate in community-wide co-op matches to share massive collective VEs pools.
2. 🎟️ **Weekly Lucky Draw:** Stake a tiny fraction of earned VEs to participate in high-tier booster or merchandise giveaways.
3. 🔐 **Veloops Crypto Exchange:** Directly off-ramp VEs to Solana (SOL) or Ethereum (ETH) with automated smart contract settlement.
4. 🎭 **NFT Avatar Customization Shop:** Customize profile card frames, hover glows, and avatar tiers using earned rewards.
5. 📺 **Sponsor Spotlight Multiplier:** Watch premium sponsored streams to unlock temporary 2.0x boost multipliers.
6. 🧠 **Trivia Quest Showdown:** Face other online users in fast-paced Web3 and gaming trivia contests for direct cashbacks.
7. 🔮 **Predict & Earn Tournament Guild:** Predict esport and tournament matchups using a zero-risk staking protocol.

---

## 🎨 Design & Styling Approach

The interface uses a **Premium Modern Light Mode with Glassmorphism** instead of typical dark neon themes, emphasizing legibility and high-contrast boundaries:

- **Colors:** Harmonious pearl white panels, frosted overlays (`backdrop-blur-xl bg-white/80`), deep purple accents (`text-purple-950`, `bg-purple-600`), and gold/amber highlights (`text-amber-800`, `bg-amber-400`).
- **Typography:** Built using the clean, premium geometric sans-serif fonts **Plus Jakarta Sans** and **Outfit** imported from Google Fonts.
- **SEO Elements:** Formatted markup with semantic HTML5 elements (`<aside>`, `<header>`, `<main>`, `<footer>`), unique IDs for interactive inputs, and meta tags in the document head.

---

## 📱 Responsive Behavior

Designed with Tailwind grid layout and responsive classes to ensure standard layout flow across all devices:

- **Desktop (>=1024px):** Dual column view layout with a fixed, persistent sidebar navigation and broad metrics panel.
- **Mobile/Tablet (<1024px):** Collapsed sidebar behind a responsive sliding drawer. Header handles compact view states, showing icon-only action rows.
- **Inputs & Dropdowns:** Dropdowns utilize click-outside handlers (`useEffect`) to automatically clean up overlay overlays on smaller screen sizes.

---

## 🎬 Animation & Micro-Interaction Details

To deliver an engaging, rewarding feel, the UI implements subtle CSS/Tailwind animations:
- **Glow Pulse Indicator:** Active indicators (like the live streak fire icon) use custom pulsing effects.
- **Rank Ascension modal:** Unlocking Level 5 launches a scaling zoom transition overlay with particles.
- **Spin Wheel Motion:** The Lucky Wheel triggers a randomized rotation timer with a loader wheel indicator.
- **Transitions:** Buttons and navigation rows use hover translation adjustments (`hover:scale-[1.02] active:scale-[0.98] transition-all`).

---

## 📁 Folder & Directory Structure

```text
veloop-rewards-dashboard/
├── .gitignore
├── README.md                 <-- Main Project Documentation (Root)
└── Frontend/
    ├── package.json          <-- Library & Scripts Configuration
    ├── vite.config.js
    ├── index.html            <-- Document Entrypoint & Fonts Configuration
    ├── public/
    │   └── _redirects        <-- Netlify SPA Redirect Rules
    └── src/
        ├── App.jsx           <-- Routing Integrator & Global Balance State
        ├── main.jsx
        ├── index.css         <-- Global CSS, Glassmorphic Rules & Custom Scrollbar
        ├── assets/
        │   └── logo.png      <-- Brand Logo Image
        └── components/
            ├── layout/
            │   ├── AppLayout.jsx  <-- Main Frame (Isolates 404 Layout)
            │   ├── Header.jsx     <-- Search, Balance collections, Notifs & Profile dropdown
            │   └── Sidebar.jsx    <-- Desktop/Mobile Sidebar Navigation
            ├── wallet/
            │   ├── PrimaryBalanceCard.jsx
            │   ├── RewardComposition.jsx
            │   ├── QuickActions.jsx
            │   ├── RedeemSection.jsx
            │   ├── RedeemModal.jsx
            │   └── WalletHistoryTable.jsx
            ├── gamification/
            │   ├── CurrentLevelCard.jsx
            │   ├── LevelJourneyTimeline.jsx
            │   └── GamificationTasks.jsx
            └── views/
                ├── DashboardView.jsx
                ├── WalletView.jsx
                ├── LevelUpView.jsx
                ├── ReferralsView.jsx
                ├── ProfileView.jsx
                └── NotFoundView.jsx
```

---

## 🛠️ Installation & Setup Guide

Ensure you have **Node.js (v18 or higher)** installed on your machine.

### Step 1: Clone the Repository
```bash
git clone https://github.com/deirazx/veloop-rewards-dashboard.git
cd veloop-rewards-dashboard
```

### Step 2: Install Dependencies
Navigate to the frontend folder and run installation:
```bash
cd Frontend
npm install
```

### Step 3: Start Local Development Server
Launch the Vite local preview server:
```bash
npm run dev
```
Open [http://localhost:5173/](http://localhost:5173/) in your web browser to test the local workspace.

### Step 4: Build for Production
To test production compilation:
```bash
npm run build
```
The optimized compiled build outputs to the `Frontend/dist` folder.
