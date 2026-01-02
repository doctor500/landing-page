# Next.js Personal Landing Page Portfolio

A modern, high-performance portfolio landing page built to showcase professional engineering experience. This project leverages **Next.js 14 (App Router)** and **Tailwind CSS** to deliver a responsive, dark-mode enabled user experience deployed statically to GitHub Pages.

🔗 **Live Demo:** [https://www.layardi.com](https://www.layardi.com)

---

## ✨ Key Features

- **Modern Stack:** Built with Next.js 14, React 18, and TypeScript for type-safe development.
- **Dynamic Theming:** Seamless Dark/Light mode toggle powered by `next-themes` and CSS variables.
- **Custom Design System:** Consumes a centralized design system (tokens) via CDN for consistent styling without local overhead.
- **Interactive UI:**
  - **Framer Motion** animations for smooth page transitions and scroll effects.
  - **Floating Navigation** that naturally appears on scroll.
  - **Testimonials Carousel** with auto-play and progress indicators.
- **Responsive Layout:** Mobile-first architecture with adaptive padding and component sizing.
- **Static Export:** Optimized for zero-cost hosting on GitHub Pages via GitHub Actions.

## � Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) + Custom Tokens
- **Language:** TypeScript
- **Deployment:** GitHub Actions (Static Export)
- **Assets:** Centralized CDN distribution

## 🚀 Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/doctor500/landing-page.git
   cd landing-page
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run local server:**
   ```bash
   npm run dev
   ```
   Visit [http://localhost:3000](http://localhost:3000).

## 📂 Project Structure

```
landing-page/
├── .context/           # Project documentation
├── app/                # Next.js App Router
├── components/         # UI Components (Hero, Stats, Timeline)
├── lib/
│   └── data.ts         # Content Data Source
└── public/             # Static Assets
```

## 📄 License

MIT License. See [LICENSE](LICENSE) for details.
