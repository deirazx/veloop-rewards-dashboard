# 🚀 VELOOP Rewards – Upcoming Features Redesign (Task 10)

A high-performance, interactive **Upcoming Features Section & Rewards Dashboard** built with **React.js (Vite)** and **Tailwind CSS**. Designed specifically for the **VELOP Rewards** ecosystem following the official Task 10 specification: a premium dark fintech interface (`#161827`), rich interactive upcoming product cards, feature-specific artwork, and real-time state synchronization.

---

## 🔗 Live Demo & Repository

- 🌐 **Live Demo URL:** [https://veloops-rewards.netlify.app/](https://veloops-rewards.netlify.app/)
- 💻 **GitHub Repository:** [https://github.com/deirazx/veloop-rewards-dashboard](https://github.com/deirazx/veloop-rewards-dashboard)
- 👨‍💻 **Author:** deirazx / VELOOP Frontend Team
- 📜 **License:** MIT

---

## 📖 Table of Contents
1. [Project Overview & Task 10 Objectives](#-project-overview--task-10-objectives)
2. [Upcoming Features Suite (The 7 Cards)](#-upcoming-features-suite-the-7-cards)
3. [Design & Styling Approach](#-design--styling-approach)
4. [Illustration & Animation Details](#-illustration--animation-details)
5. [Responsive Behavior](#-responsive-behavior)
6. [Folder & Directory Structure](#-folder--directory-structure)
7. [Installation & Setup Guide](#-installation--setup-guide)
8. [Screenshots](#-screenshots)

---

## 🎯 Project Overview & Task 10 Objectives

For **Task 10 (Upcoming Features Section Redesign)**, the objective is to build a modern, excitement-generating Upcoming Features experience on the VELOOP Rewards dashboard that communicates:
$$\text{Coming Soon} \longrightarrow \text{Excitement} \longrightarrow \text{Curiosity} \longrightarrow \text{Trust} \longrightarrow \text{Future Reward Opportunities}$$

Instead of treating upcoming features as inactive or disabled buttons, each feature is crafted as a **real, upcoming product preview** with:
- Feature-specific custom illustrations and badges (`Coming Soon`, `Launching Soon`, `Under Development`, `Stay Tuned`).
- Explicit reward potential indicators (e.g., `Up to 25,000 VEs Shared Pool`, `₹50,000 INR Jackpot`).
- Interactive **Sneak Peek Modals** with early-access email notifications.

---

## 🔮 Upcoming Features Suite (The 7 Cards)

Every one of the **7 required features** is developed with dedicated artwork, reward indicators, release timelines, and sneak peek previews:

| # | Feature Name | Category | Status Badge | Reward Opportunity | Key Description |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **01** | **Team Battle** | Competitions & Squads | `Coming Soon` (Q4 2026) | `Up to 25,000 VEs Shared Pool` | Form 4-member squads, climb weekly tier divisions, and split massive pooled rewards. |
| **02** | **Lucky Draw** | Draws & Sweepstakes | `Launching Soon` (Nov 2026) | `₹50,000 INR Jackpot + Badges` | Stake daily tickets into weekly provably-fair lottery draws with guaranteed consolation yields. |
| **03** | **Milestone Rewards** | Progression & Loyalty | `Under Development` (Dec 2026) | `Permanent Multiplier Boosts` | Surpass cumulative lifetime earnings thresholds to permanently waive withdrawal fees down to 0%. |
| **04** | **Collect Cards** | Digital Collectibles | `Stay Tuned` (Q1 2027) | `Full Set Bonus (+10,000 VEs)` | Collect thematic card sets through quests and trade duplicates to forge completed albums for instant vouchers. |
| **05** | **Surprise Rewards** | Real-Time Drops | `Coming Soon` (Oct 2026) | `Random Flash VEs Airdrops` | Spontaneous mystery parcels that appear live on the dashboard for active streak holders. |
| **06** | **Mystery Rewards** | Enigma Crates | `Under Development` (Q4 2026) | `Secret Vault Multipliers` | Decipher seasonal community ciphers and riddles to unlock high-tier 3.0x multiplier perks. |
| **07** | **Referral Milestone** | Affiliate Network | `Launching Soon` (Nov 2026) | `Up to 25% Lifetime Rev Share` | Expand active invited creator networks to unlock monthly stipends and ambassador tech hardware. |

---

## 🎨 Design & Styling Approach

The UI strictly complies with the **Task 10 Color and Surface Guidelines**:
- **Application Background:** Strictly maintained at `#161827` (Dark Navy/Slate).
- **Surface Elevation:** Deep navy and midnight slate surfaces (`#1c2035`, `#181c2f`, `#141624`) with subtle borders (`border-slate-700/60`, `border-purple-500/20`) providing clear separation.
- **Refined Palette:** Soft blue, gold (`#F59E0B`, `#FDE047`), muted purple (`#A855F7`), emerald, and silver text tones.
- **Zero Cheap Clutter:** Avoids washed-out light glassmorphism, aggressive neon clashing, rainbow gradients, and arcade gaming tropes to preserve a **trustworthy, premium fintech identity**.
- **Typography:** Google Fonts pairing of **Outfit** (headings) and **Plus Jakarta Sans** (body).

---

## 🎬 Illustration & Animation Details

- **Feature Artwork:** Each card renders a custom SVG vector visual (e.g., 3D Crossed Shields for Team Battle, Golden Ticket Wheel for Lucky Draw, Holographic Card Stack for Collect Cards, Enigma Cube for Mystery Rewards).
- **Micro-Interactions:**
  - Dynamic card hover elevation (`hover:-translate-y-1.5`) with ambient glow transitions.
  - Floating coin and particle rotations on interactive cards.
  - Rotating wheel animations and responsive countdown timer simulations.
  - Toast confirmation and interactive email waitlist subscription logic.

---

## 📱 Responsive Behavior

- **Desktop ($\ge$ 1024px):** Comprehensive dual-column layout with fixed left sidebar navigation and 4-column card grids.
- **Tablet / Mobile (< 1024px):** Auto-collapsing sidebar behind a responsive slide-out drawer, 1-to-2 column adaptive card grids, and touch-optimized touch targets.
- **Isolated 404 Experience:** When navigating to an invalid URL, the layout removes the dashboard sidebar for a distraction-free, full-screen standalone error recovery experience.

---

## 📁 Folder & Directory Structure

```text
veloop-rewards-dashboard/
├── .gitignore
├── README.md                          <-- Root Documentation
└── Frontend/
    ├── package.json
    ├── vite.config.js
    ├── index.html                     <-- #161827 Dark Body & Fonts Setup
    ├── public/
    │   └── _redirects                 <-- Netlify SPA Production Rules
    └── src/
        ├── App.jsx                    <-- Routing Integrator & Live Global State
        ├── main.jsx
        ├── index.css                  <-- #161827 Design Tokens & Keyframe Animations
        ├── assets/
        │   └── logo.png               <-- Brand Logo Asset
        └── components/
            ├── upcoming/              <-- TASK 10 UPCOMING FEATURES SUITE
            │   ├── UpcomingFeatures.jsx      <-- Section Header, Category Filters & 7-Card Grid
            │   ├── UpcomingCard.jsx          <-- Custom SVG Artwork, Badges & CTA Triggers
            │   └── FeatureSneakPeekModal.jsx <-- Sneak Peek Modal & Early Access Waitlist
            ├── layout/
            │   ├── AppLayout.jsx             <-- Layout Frame (404 Isolation Support)
            │   ├── Header.jsx                <-- Live Balance Chip, Search, Notifications, Profile
            │   └── Sidebar.jsx               <-- Responsive Dark Sidebar & VIP Multiplier Card
            ├── wallet/
            │   ├── PrimaryBalanceCard.jsx    <-- INR Valuation & Liquid VEs vs SVEs
            │   ├── RewardComposition.jsx     <-- 1:1 Auto-Conversion Protocol Explainer
            │   ├── QuickActions.jsx          <-- Instant Withdraw, History, Earn More
            │   ├── RedeemSection.jsx         <-- UPI, Amazon Pay & Google Play Vouchers
            │   ├── RedeemModal.jsx           <-- Interactive Checkout Modal
            │   └── WalletHistoryTable.jsx    <-- Searchable Ledger History
            ├── gamification/
            │   ├── CurrentLevelCard.jsx      <-- Level 4 XP Progress & Rank Perks
            │   ├── LevelJourneyTimeline.jsx  <-- Horizontal Beginner-to-Legend Timeline
            │   └── GamificationTasks.jsx     <-- Daily Quests, Video Spotlight, Lucky Spin
            └── views/
                ├── DashboardView.jsx         <-- /home Dashboard with UpcomingFeatures Centerpiece
                ├── WalletView.jsx            <-- Payouts & Balance Hub
                ├── LevelUpView.jsx           <-- Gamification & XP Level-Up View
                ├── ReferralsView.jsx         <-- Affiliate Network & 1-Click Sharing
                ├── ProfileView.jsx           <-- 2FA Security & Notification Preferences
                └── NotFoundView.jsx          <-- Standalone 404 View with Easter Egg
```

---

## 🛠️ Installation & Setup Guide

### Prerequisites
- Node.js (v18.0.0 or higher)
- npm (v9.0.0 or higher)

### 1. Clone the repository:
```bash
git clone https://github.com/deirazx/veloop-rewards-dashboard.git
cd veloop-rewards-dashboard
```

### 2. Navigate to Frontend & Install Dependencies:
```bash
cd Frontend
npm install
```

### 3. Launch Development Server:
```bash
npm run dev
```
Open your browser at **`http://localhost:5173/`** to explore the live dashboard.

### 4. Build for Production:
```bash
npm run build
```
Optimized assets will compile into `Frontend/dist/`.

---

## 📸 Screenshots

| Feature View | Description |
| :--- | :--- |
| **Upcoming Features (7 Cards)** | The centerpiece Task 10 section featuring Team Battle, Lucky Draw, Milestone Rewards, Collect Cards, Surprise Rewards, Mystery Rewards, and Referral Milestone. |
| **Fintech Wallet & Payouts** | Real-time INR portfolio valuation, 1:1 SVE conversion protocol, and instant UPI / Amazon Pay / Google Play redemption modals. |
| **Gamification & Level Milestones** | Interactive Level 4 XP progress bar, milestone timeline journey, and daily quests with instant rewards. |
| **Standalone 404 Page** | Full-screen error recovery experience with a hidden secret stash Easter egg (+25 VEs). |
