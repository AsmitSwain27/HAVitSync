# <p align="center">🏋️‍♂️ HAVitSync 🥗💤</p>

**HAVitSync** is a modern, AI-powered health and activity tracker that helps you monitor your study, workout, meal, and sleep habits—all in one beautiful dashboard. Get personalized insights, set goals, and visualize your progress with ease.

<!-- ![HAVitSync Dashboard Screenshot](public/placeholder.svg) -->

## 🚀 Features

- 📊 **Unified Dashboard**: Track study, workout, meal, and sleep data in one place
- 🤖 **AI Insights**: Get personalized recommendations and trends powered by Gemini AI
- 📈 **Visualizations**: Beautiful charts and progress bars for all your activities
- 🎯 **Goal Setting**: Set and monitor weekly and daily goals
- 🔔 **Reminders & Notifications**: (Coming soon)
- 🌙 **Modern UI**: Built with shadcn-ui and Tailwind CSS for a delightful experience

## 🛠️ Tech Stack

- [Vite](https://vitejs.dev/) + [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [shadcn-ui](https://ui.shadcn.com/) components
- [Tailwind CSS](https://tailwindcss.com/)
- [Zustand](https://zustand-demo.pmnd.rs/) for state management
- [date-fns](https://date-fns.org/) for date utilities
- [Firebase](https://firebase.google.com/) integrations
- [Gemini AI](https://ai.google.dev/) for insights

## 📦 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository
```bash
git clone https://github.com/AsmitSwain27/HAVitSync.git
cd havitsync
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Start the development server

```bash
npm run dev
# or
yarn dev
```
4. Open http://localhost:8000 to view it in the browser.

## ⚙️ Project Structure

```
src/
├── components/      # Reusable UI and feature components
│   └── ui/          # Basic UI components
├── pages/           # Main page components (Index, NotFound, etc.)
├── store/           # Zustand store for tracker data
├──	integrations/    # API clients (Gemini, Firebase, Supabase)
├──	hooks/           # Custom React hooks
├──	contexts/        # React context providers
├──	assets/          # Images and media
└──	lib/             # Utility functions
public/              # Static assets
```

## 🧠 AI Insights

HAVitSync uses Gemini AI to analyze your activity data and provide:
- Smart recommendations (e.g., best study times)
- Progress trends (e.g., workout consistency)
- Goal suggestions (e.g., sleep improvements)

> **Note:** You may need to provide your own Gemini API key in `src/config/env.ts`.

## 📝 Contributing

Contributions are welcome! Please open an issue or submit a pull request for bug fixes, new features, or improvements.

- Fork the repository
- Create your feature branch
```bash
git checkout -b feature/your-feature
```
- Commit your changes:
```bash
git commit -m "Add new feature"
```
- Push to your branch:
```bash
git push origin feature-name
```
- Open a Pull Request!

## 📄 License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.

## 👨‍💻 Author

**ASMIT SWAIN**
- GitHub: [@AsmitSwain27](https://github.com/AsmitSwain27)
- LinkedIn: [Asmit Swain](https://linkedin.com/in/asmit-swain27a15/)
- Portfolio Website: [portfolio-asmit-swain.com](https://portfolio-asmit-swain.netlify.app/)
- Email: [@asmitswain](swain.asmit2006@gmail.com)  

## 🙏 Acknowledgements

- [shadcn-ui](https://ui.shadcn.com/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [date-fns](https://date-fns.org/)
- [Supabase](https://supabase.com/)
- [Firebase](https://firebase.google.com/)
- [Gemini AI](https://ai.google.dev/)
