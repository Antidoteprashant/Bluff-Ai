<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white&style=for-the-badge" />
  <img src="https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white&style=for-the-badge" />
  <img src="https://img.shields.io/badge/Groq-LLaMA_3.3-FF6B35?style=for-the-badge" />
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" />
</p>

<h1 align="center">
  <img src="https://raw.githubusercontent.com/marella/material-design-icons/main/svg/outlined/smart_toy.svg" width="32" alt="robot icon" />
  Bluff AI
</h1>

<p align="center">
  A sleek, modern AI chatbot powered by <strong>Groq's LLaMA 3.3 70B</strong> model — built with React and Vite for blazing-fast performance.
</p>

---

## <img src="https://raw.githubusercontent.com/marella/material-design-icons/main/svg/outlined/auto_awesome.svg" width="22" alt="features icon" /> Features

| | Feature | Description |
|---|---------|-------------|
| <img src="https://raw.githubusercontent.com/marella/material-design-icons/main/svg/outlined/psychology.svg" width="18" alt="ai icon" /> | **AI-Powered Chat** | Get intelligent responses powered by Groq's LLaMA 3.3 70B Versatile model |
| <img src="https://raw.githubusercontent.com/marella/material-design-icons/main/svg/outlined/dark_mode.svg" width="18" alt="theme icon" /> | **Dark / Light Mode** | Toggle between themes with smooth transitions |
| <img src="https://raw.githubusercontent.com/marella/material-design-icons/main/svg/outlined/history.svg" width="18" alt="history icon" /> | **Chat History** | Access your previous conversations from the sidebar |
| <img src="https://raw.githubusercontent.com/marella/material-design-icons/main/svg/outlined/edit_note.svg" width="18" alt="typing icon" /> | **Typing Animation** | Word-by-word reveal effect for a natural chat feel |
| <img src="https://raw.githubusercontent.com/marella/material-design-icons/main/svg/outlined/tips_and_updates.svg" width="18" alt="suggestion icon" /> | **Smart Suggestions** | Pre-built prompt cards to get you started quickly |
| <img src="https://raw.githubusercontent.com/marella/material-design-icons/main/svg/outlined/waving_hand.svg" width="18" alt="welcome icon" /> | **Welcome Modal** | Personalized greeting that remembers your name |
| <img src="https://raw.githubusercontent.com/marella/material-design-icons/main/svg/outlined/devices.svg" width="18" alt="responsive icon" /> | **Responsive Design** | Works great on desktop and mobile |

---

## <img src="https://raw.githubusercontent.com/marella/material-design-icons/main/svg/outlined/rocket_launch.svg" width="22" alt="start icon" /> Quick Start

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- A free [Groq API key](https://console.groq.com/keys)

### 1. Clone the repository

```bash
git clone https://github.com/Antidoteprashant/Bluff-Ai.git
cd Bluff-Ai
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env` file in the root directory:

```env
VITE_GROQ_API_KEY=your_groq_api_key_here
```

> <img src="https://raw.githubusercontent.com/marella/material-design-icons/main/svg/outlined/lightbulb.svg" width="16" alt="tip icon" /> **Get your free API key** at [console.groq.com/keys](https://console.groq.com/keys)

### 4. Start the development server

```bash
npm run dev
```

The app will be running at **`http://localhost:5173`**

---

## <img src="https://raw.githubusercontent.com/marella/material-design-icons/main/svg/outlined/folder.svg" width="22" alt="folder icon" /> Project Structure

```
bluff-ai/
├── public/                  # Static assets
├── src/
│   ├── components/
│   │   ├── HeroSection.jsx  # Welcome hero with user greeting
│   │   ├── InputBar.jsx     # Chat input with file upload support
│   │   ├── Result.jsx       # AI response display
│   │   ├── Sidebar.jsx      # Chat history & theme toggle
│   │   ├── SuggestionGrid.jsx # Quick prompt suggestion cards
│   │   ├── TopNav.jsx       # Top navigation bar
│   │   └── WelcomeModal.jsx # First-visit welcome screen
│   ├── config/
│   │   └── gemini.js        # Groq API integration
│   ├── context/
│   │   └── Context.jsx      # Global state management
│   ├── App.jsx              # Main application layout
│   ├── main.jsx             # App entry point
│   └── index.css            # Global styles & CSS variables
├── .env                     # Environment variables (not committed)
├── index.html               # HTML entry point
├── package.json             # Dependencies & scripts
└── vite.config.js           # Vite configuration
```

---

## <img src="https://raw.githubusercontent.com/marella/material-design-icons/main/svg/outlined/build.svg" width="22" alt="tools icon" /> Tech Stack

| Technology | Purpose |
|-----------|---------|
| [React 19](https://react.dev/) | UI framework |
| [Vite 7](https://vite.dev/) | Build tool & dev server |
| [Groq API](https://groq.com/) | AI inference (LLaMA 3.3 70B) |
| [Lucide React](https://lucide.dev/) | Beautiful icons |

---

## <img src="https://raw.githubusercontent.com/marella/material-design-icons/main/svg/outlined/terminal.svg" width="22" alt="terminal icon" /> Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Create optimized production build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint to check code quality |

---

## <img src="https://raw.githubusercontent.com/marella/material-design-icons/main/svg/outlined/vpn_key.svg" width="22" alt="key icon" /> Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_GROQ_API_KEY` | Your Groq API key for AI responses | Yes |

---

## <img src="https://raw.githubusercontent.com/marella/material-design-icons/main/svg/outlined/group.svg" width="22" alt="group icon" /> Contributing

Contributions are welcome! Here's how:

1. **Fork** the repository
2. **Create** a feature branch — `git checkout -b feature/amazing-feature`
3. **Commit** your changes — `git commit -m "Add amazing feature"`
4. **Push** to the branch — `git push origin feature/amazing-feature`
5. **Open** a Pull Request

---

## <img src="https://raw.githubusercontent.com/marella/material-design-icons/main/svg/outlined/description.svg" width="22" alt="license icon" /> License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">
  Made with <img src="https://raw.githubusercontent.com/marella/material-design-icons/main/svg/filled/favorite.svg" width="16" alt="heart icon" /> by <a href="https://github.com/Antidoteprashant">Prashant</a>
</p>
