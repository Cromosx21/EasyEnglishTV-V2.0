# EasyEnglishTV V2.0 🇬🇧🚀

Welcome to **EasyEnglishTV V2.0**, a modern, high-fidelity platform designed for learning English effectively. This project is a complete re-architecture of the original Easy English TV platform, built with **React**, **Vite**, and **Tailwind CSS** to ensure performance, scalability, and a premium user experience.

![Project Status](https://img.shields.io/badge/Status-Development-green)
![License](https://img.shields.io/badge/License-MIT-blue)

---

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Installation & Setup](#-installation--setup)
- [Available Scripts](#-available-scripts)
- [Key Components](#-key-components)
- [Contributing](#-contributing)

---

## ✨ Features

### 🔐 Authentication & Security
- **Modern Login & Register Pages**: High-fidelity UI with social login integration (Google, Facebook) and password recovery.
- **Role-Based Access**: Distinct flows for Students and Administrators.
- **Form Validation**: Robust input handling and error feedback.

### 🏠 Landing Page
- **Hero Section**: Engaging introduction with call-to-actions.
- **Course Showcase**: Categorized display of available English courses.
- **Interactive Quizzes**: Level placement tests directly on the landing page.
- **Testimonials & Benefits**: Social proof and value proposition sections.

### 🎓 Student Dashboard
- **Personalized Learning Path**: Track progress and continue where you left off.
- **Material Access**: Browse video lessons, PDFs, and exercises.
- **Quiz System**: Interactive assessments to test knowledge.

### 🛠 Admin Dashboard
- **Content Management**: Tools for managing courses, users, and quizzes (Demo).
- **Analytics Overview**: Insights into platform usage (Demo).

---

## 💻 Tech Stack

- **Frontend Framework**: [React 18](https://reactjs.org/)
- **Build Tool**: [Vite](https://vitejs.dev/) (Fast HMR & Optimized Builds)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (Utility-first CSS framework)
- **Icons**: [Lucide React](https://lucide.dev/) (Beautiful & consistent icons)
- **Routing**: [React Router DOM](https://reactrouter.com/)
- **State Management**: React Hooks (`useState`, `useEffect`, `useContext`)

---

## 📂 Project Structure

The project follows a **Feature-Based Architecture** to ensure scalability and maintainability.

```
src/
├── components/          # Shared UI components (Buttons, Inputs, Layouts)
│   ├── ui/
│   │   ├── common/      # Generic atoms (Button.jsx, Input.jsx)
│   │   └── layout/      # Layout components (Navbar.jsx, Footer.jsx)
├── features/            # Feature-specific modules
│   ├── auth/            # Authentication logic & pages (Login, Register)
│   ├── landing/         # Public landing page components & pages
│   ├── student/         # Student dashboard & features
│   ├── admin/           # Admin dashboard & features
│   └── payments/        # Payment processing pages
├── layouts/             # Global layout wrappers (AuthLayout, DashboardLayout)
├── utils/               # Helper functions and utilities (cn.js)
├── App.jsx              # Main application component & Routing
└── main.jsx             # Entry point
```

---

## 🚀 Installation & Setup

Follow these steps to get the project running locally:

1.  **Clone the repository**
    ```bash
    git clone https://github.com/Cromosx21/EasyEnglishTV-V2.0.git
    cd EasyEnglishTV-V2.0
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Start the development server**
    ```bash
    npm run dev
    ```
    The app will be available at `http://localhost:5173` (or the port shown in your terminal).

4.  **Build for production**
    ```bash
    npm run build
    ```

---

## 📜 Available Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the app for production to the `dist` folder.
- `npm run preview`: Locally preview the production build.
- `npm run lint`: Runs ESLint to check for code quality issues.

---

## 🔑 Key Components Overview

### **Authentication (`features/auth`)**
- `LoginPage.jsx`: Entry point for users. Includes "Forgot Password" and social login options.
- `RegisterPage.jsx`: Sign-up form with name, email, and password validation.

### **Landing (`features/landing`)**
- `MaterialsPage.jsx`: Library of learning resources with filtering (Level, Type) and search.
- `QuizzesPage.jsx`: Access point for level assessment tests.

### **Shared UI (`components/ui`)**
- `Button.jsx`: Reusable button component with variant support.
- `Input.jsx`: Standardized input field with icon support.
- `Navbar.jsx` & `Footer.jsx`: Global navigation and footer elements.

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1.  Fork the project
2.  Create your feature branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

---

**EasyEnglishTV V2.0** - Empowering English Learners Worldwide.
