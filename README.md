# Shresth Varshney - Portfolio

A premium, high-performance portfolio website built with Next.js 16, TypeScript, Tailwind CSS v4, and Shadcn UI.

## 🛠 Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Components**: [Shadcn UI](https://ui.shadcn.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Theme**: [Next-Themes](https://github.com/pacocoursey/next-themes)

## 🚀 Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📂 Project Structure

```
/src
  /app          # Pages and Layouts
  /components   # Reusable Components
    /sections   # Hero, About, Projects, etc.
    /ui         # Shadcn Primitives
  /lib          # Utilities and Data
  /hooks        # Custom Hooks
```

## 🎨 Design System & Features

- **Dark Mode**: Enabled by default, togglable.
- **Glassmorphism**: Custom utilities in `globals.css`.
- **Gradients**: Blue to Violet premium gradient used for accents.
- **Visual Enhancements**: Fluid animated wave patterns and floating geometric shapes mapped to the background geometry.
- **Gamification**:
  - **Custom Animated Cursor**: A reactive, modern cursor element with interaction states.
  - **Achievement System**: Unlockable toast notifications as users explore the portfolio (e.g., "Project Hunter", "Skill Master").
  - **Easter Egg**: Includes a hidden Konami Code listener.

## 🚢 Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## 📝 Environment Variables

Create a `.env.local` file for Supabase integration (optional context):

```env
NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
