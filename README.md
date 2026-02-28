# 🤖 SyntaxIQ

### Intelligent Code Analysis Powered by Google Gemini AI

[![MERN Stack](https://img.shields.io/badge/Stack-MERN-green?style=for-the-badge)](https://github.com)
[![Gemini AI](https://img.shields.io/badge/AI-Gemini%201.5%20Pro-blue?style=for-the-badge&logo=google)](https://ai.google.dev/)
[![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](LICENSE)
[![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=for-the-badge&logo=node.js)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-8.3-47A248?style=for-the-badge&logo=mongodb)](https://www.mongodb.com/)

> A full-stack AI-powered code review platform that provides comprehensive code analysis including bug detection, security vulnerabilities, performance improvements, and refactored code suggestions.

---

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Installation](#-installation)
- [Project Structure](#-project-structure)
- [API Endpoints](#-api-endpoints)
- [Supported Languages](#-supported-languages)
- [Security Features](#-security-features)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)

---

## ✨ Features

### 🔐 Authentication & Security

- ✅ JWT-based authentication with secure token management
- ✅ Password hashing using bcrypt (10 salt rounds)
- ✅ Protected API routes with middleware
- ✅ Rate limiting (100 requests per 15 minutes)
- ✅ CORS protection with configurable origins
- ✅ Input sanitization and XSS prevention
- ✅ Helmet.js security headers

### 🤖 AI-Powered Code Analysis

- ✅ Google Gemini 1.5 Pro integration
- ✅ Bug detection with severity levels (low, medium, high)
- ✅ Security vulnerability scanning
- ✅ Performance optimization recommendations
- ✅ Code quality suggestions
- ✅ Refactored code examples
- ✅ Overall code score (0-100)

### 💻 Modern User Interface

- ✅ Monaco Editor integration (VS Code editor)
- ✅ Real-time code editing with syntax highlighting
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Dark mode code editor
- ✅ Professional dashboard with gradient backgrounds
- ✅ Review history with pagination
- ✅ Loading states and animations

### 📊 Review Management

- ✅ Submit code for AI review
- ✅ View detailed review results
- ✅ Review history tracking
- ✅ Support for 12+ programming languages
- ✅ Code length validation (max 10,000 characters)
- ✅ Structured feedback sections

---

## 🛠️ Tech Stack

### Frontend

- **React 18.2** - UI library
- **Vite 5.2** - Build tool and dev server
- **Tailwind CSS 3.4** - Utility-first CSS framework
- **Monaco Editor** - Code editor (VS Code)
- **Axios** - HTTP client
- **React Router** - Client-side routing

### Backend

- **Node.js 18+** - Runtime environment
- **Express.js 4.19** - Web framework
- **MongoDB 8.3** - NoSQL database
- **Mongoose** - MongoDB ODM
- **JWT** - Authentication tokens
- **bcryptjs** - Password hashing

### AI & Security

- **Google Gemini AI 1.5 Pro** - Code analysis
- **Helmet.js** - Security headers
- **express-rate-limit** - Rate limiting
- **validator** - Input validation

---

## 🚀 Installation

### Prerequisites

Before you begin, ensure you have:

- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **MongoDB** (Local or Atlas) - [Get Started](https://www.mongodb.com/cloud/atlas)
- **Google Gemini API Key** - [Get API Key](https://makersuite.google.com/app/apikey)

### Step 1: Clone the Repository

```bash
git clone https://github.com/yourusername/ai-code-review-platform.git
cd ai-code-review-platform
```

### Step 2: Backend Setup

```bash
cd backend
npm install
```

Create `.env` file from template:

```bash
# Windows
copy .env.example .env

# Mac/Linux
cp .env.example .env
```

Configure your `.env` file:

```env
PORT=5000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/ai-code-review
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production
JWT_EXPIRE=7d
GEMINI_API_KEY=your_gemini_api_key_here
NODE_ENV=development
MAX_CODE_LENGTH=10000
FRONTEND_URL=http://localhost:5173
```

Start the backend server:

```bash
npm run dev
```

✅ Backend running at: `http://localhost:5000`

### Step 3: Frontend Setup

Open a new terminal:

```bash
cd frontend
npm install
```

Create `.env` file:

```bash
# Windows
copy .env.example .env

# Mac/Linux
cp .env.example .env
```

Configure your `.env` file:

```env
VITE_API_URL=http://localhost:5000/api
```

Start the frontend:

```bash
npm run dev
```

✅ Frontend running at: `http://localhost:5173`

### Step 4: Access the Application

Open your browser and navigate to:

- **Frontend:** http://localhost:5173
- **Backend API:** http://localhost:5000/api/health

---

## 📁 Project Structure

```
ai-code-review-platform/
│
├── backend/
│   ├── config/
│   │   └── db.js                 # MongoDB connection
│   ├── controllers/
│   │   ├── authController.js     # Authentication logic
│   │   └── reviewController.js   # Review CRUD operations
│   ├── middleware/
│   │   ├── auth.js               # JWT verification
│   │   └── errorHandler.js       # Global error handling
│   ├── models/
│   │   ├── User.js               # User schema & methods
│   │   └── Review.js             # Review schema
│   ├── routes/
│   │   ├── authRoutes.js         # Auth endpoints
│   │   └── reviewRoutes.js       # Review endpoints
│   ├── services/
│   │   └── geminiService.js      # Gemini AI integration
│   ├── .env.example              # Environment template
│   ├── .gitignore
│   ├── package.json
│   └── server.js                 # Entry point
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx        # Navigation bar
│   │   │   └── PrivateRoute.jsx  # Protected route wrapper
│   │   ├── context/
│   │   │   └── AuthContext.jsx   # Auth state management
│   │   ├── pages/
│   │   │   ├── Dashboard.jsx     # Main dashboard
│   │   │   ├── Login.jsx         # Login page
│   │   │   ├── Register.jsx      # Registration page
│   │   │   └── ReviewDetail.jsx  # Review results page
│   │   ├── App.jsx               # Root component
│   │   ├── index.css             # Global styles
│   │   └── main.jsx              # Entry point
│   ├── public/
│   ├── .env.example
│   ├── .gitignore
│   ├── index.html
│   ├── package.json
│   ├── postcss.config.js
│   ├── tailwind.config.js
│   └── vite.config.js
│
├── .gitignore
└── README.md
```

---

## 🔌 API Endpoints

### Authentication

| Method | Endpoint             | Description       | Auth Required |
| ------ | -------------------- | ----------------- | ------------- |
| `POST` | `/api/auth/register` | Register new user | ❌            |
| `POST` | `/api/auth/login`    | Login user        | ❌            |

### Code Reviews

| Method | Endpoint           | Description               | Auth Required |
| ------ | ------------------ | ------------------------- | ------------- |
| `POST` | `/api/review`      | Submit code for review    | ✅            |
| `GET`  | `/api/review/:id`  | Get specific review       | ✅            |
| `GET`  | `/api/review/user` | Get user's review history | ✅            |

### Request Examples

#### Register User

```bash
POST /api/auth/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securepass123"
}
```

**Response:**

```json
{
  "success": true,
  "data": {
    "_id": "user_id",
    "name": "John Doe",
    "email": "john@example.com",
    "token": "jwt_token_here"
  }
}
```

#### Login User

```bash
POST /api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "securepass123"
}
```

#### Submit Code Review

```bash
POST /api/review
Authorization: Bearer YOUR_JWT_TOKEN
Content-Type: application/json

{
  "code": "function example() { console.log('Hello World'); }",
  "language": "javascript"
}
```

**Response:**

```json
{
  "success": true,
  "data": {
    "_id": "review_id",
    "userId": "user_id",
    "code": "function example() { ... }",
    "language": "javascript",
    "aiResponse": {
      "summary": "Code analysis summary",
      "bugs": [...],
      "securityIssues": [...],
      "performanceImprovements": [...],
      "codeQualitySuggestions": [...],
      "refactoredCode": "...",
      "overallScore": 85
    },
    "createdAt": "2024-01-01T00:00:00.000Z"
  }
}
```

---

## 🌐 Supported Languages

| Language   | Identifier   | Language   | Identifier   |
| ---------- | ------------ | ---------- | ------------ |
| JavaScript | `javascript` | TypeScript | `typescript` |
| Python     | `python`     | Java       | `java`       |
| C++        | `cpp`        | C#         | `csharp`     |
| Go         | `go`         | Rust       | `rust`       |
| PHP        | `php`        | Ruby       | `ruby`       |
| Swift      | `swift`      | Kotlin     | `kotlin`     |

---

## 🔒 Security Features

### Authentication

- ✅ JWT tokens with expiration (7 days default)
- ✅ Password hashing with bcrypt (10 salt rounds)
- ✅ Protected routes with middleware
- ✅ Token verification on each request

### API Security

- ✅ **Rate Limiting:** 100 requests per 15 minutes per IP
- ✅ **Helmet.js:** Security headers (XSS, clickjacking, etc.)
- ✅ **CORS:** Configured allowed origins
- ✅ **Input Validation:** Email validation, password length
- ✅ **Sanitization:** XSS script tag removal
- ✅ **Code Length Limit:** Maximum 10,000 characters

### Data Protection

- ✅ Environment variables for secrets
- ✅ `.gitignore` for sensitive files
- ✅ MongoDB connection encryption
- ✅ No sensitive data in responses

---

## 🎨 AI Response Format

The Gemini AI returns structured JSON:

```json
{
  "summary": "Brief overview of the code (2-3 sentences)",
  "bugs": [
    {
      "issue": "Description of the bug",
      "severity": "low|medium|high",
      "suggestion": "How to fix it"
    }
  ],
  "securityIssues": [
    {
      "issue": "Security vulnerability description",
      "risk": "Explanation of the risk",
      "fix": "How to mitigate"
    }
  ],
  "performanceImprovements": [
    {
      "issue": "Performance issue description",
      "improvement": "Optimization suggestion"
    }
  ],
  "codeQualitySuggestions": [
    {
      "issue": "Code quality issue",
      "recommendation": "Best practice suggestion"
    }
  ],
  "refactoredCode": "Complete refactored version of the code",
  "overallScore": 85
}
```

---

## 🚀 Deployment

### Backend Deployment (Render / Railway)

1. **Push to GitHub**

   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy on Render**
   - Go to [Render Dashboard](https://dashboard.render.com/)
   - Click "New +" → "Web Service"
   - Connect your GitHub repository
   - Configure:
     - **Build Command:** `cd backend && npm install`
     - **Start Command:** `cd backend && npm start`
   - Add environment variables from `.env`
   - Click "Create Web Service"

3. **Deploy on Railway** (Alternative)
   - Go to [Railway](https://railway.app/)
   - Click "New Project" → "Deploy from GitHub repo"
   - Select your repository
   - Add environment variables
   - Deploy

### Frontend Deployment (Vercel)

1. **Deploy on Vercel**
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click "Add New" → "Project"
   - Import your GitHub repository
   - Configure:
     - **Framework Preset:** Vite
     - **Root Directory:** `frontend`
     - **Build Command:** `npm run build`
     - **Output Directory:** `dist`
   - Add environment variable:
     - `VITE_API_URL` = Your backend URL
   - Click "Deploy"

### Database (MongoDB Atlas)

1. **Create Cluster**
   - Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
   - Create free M0 cluster
   - Create database user
   - Whitelist IP (0.0.0.0/0 for all IPs)

2. **Get Connection String**
   - Click "Connect" → "Connect your application"
   - Copy connection string
   - Replace `<password>` with your password
   - Update `MONGODB_URI` in production environment

---

## 🔑 Getting API Keys

### MongoDB Atlas

1. Visit [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register)
2. Create a free account
3. Create a new cluster (M0 Free tier)
4. Click "Connect" → "Connect your application"
5. Copy the connection string
6. Replace `<password>` with your database user password

**Example:**

```
mongodb+srv://username:password@cluster.mongodb.net/ai-code-review?retryWrites=true&w=majority
```

### Google Gemini API

1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Click "Create API Key"
4. Copy the API key (starts with `AIza...`)
5. Paste it in your `.env` file

**Note:** The API key is free with usage limits. Check [pricing](https://ai.google.dev/pricing) for details.

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the repository**

   ```bash
   # Click "Fork" button on GitHub
   ```

2. **Clone your fork**

   ```bash
   git clone https://github.com/yourusername/ai-code-review-platform.git
   cd ai-code-review-platform
   ```

3. **Create a feature branch**

   ```bash
   git checkout -b feature/AmazingFeature
   ```

4. **Make your changes**
   - Write clean, documented code
   - Follow existing code style
   - Test your changes

5. **Commit your changes**

   ```bash
   git add .
   git commit -m 'Add some AmazingFeature'
   ```

6. **Push to your fork**

   ```bash
   git push origin feature/AmazingFeature
   ```

7. **Open a Pull Request**
   - Go to the original repository
   - Click "New Pull Request"
   - Select your branch
   - Describe your changes

### Code Style Guidelines

- Use ES6+ features
- Follow Airbnb JavaScript Style Guide
- Write meaningful commit messages
- Add comments for complex logic
- Update documentation as needed

---

## 📝 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2024 Your Name

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction...
```

---

## 👨‍💻 Author

**Your Name**

- 🌐 Website: [yourwebsite.com](https://yourwebsite.com)
- 💼 LinkedIn: [Your Name](https://linkedin.com/in/yourprofile)
- 🐙 GitHub: [@yourusername](https://github.com/yourusername)
- 📧 Email: your.email@example.com

---

## 🙏 Acknowledgments

Special thanks to:

- [Google Gemini AI](https://ai.google.dev/) - For powerful AI code analysis
- [MongoDB](https://www.mongodb.com/) - For reliable database solutions
- [React Team](https://react.dev/) - For the amazing frontend framework
- [Tailwind CSS](https://tailwindcss.com/) - For beautiful utility-first CSS
- [Monaco Editor](https://microsoft.github.io/monaco-editor/) - For VS Code-like editing experience
- [Express.js](https://expressjs.com/) - For the robust backend framework

---

## 📊 Project Stats

![GitHub stars](https://img.shields.io/github/stars/yourusername/ai-code-review-platform?style=social)
![GitHub forks](https://img.shields.io/github/forks/yourusername/ai-code-review-platform?style=social)
![GitHub issues](https://img.shields.io/github/issues/yourusername/ai-code-review-platform)
![GitHub pull requests](https://img.shields.io/github/issues-pr/yourusername/ai-code-review-platform)

---

## 🐛 Known Issues

- None at the moment. Please report any issues [here](https://github.com/yourusername/ai-code-review-platform/issues).

---

## 🗺️ Roadmap

- [ ] Add support for more programming languages
- [ ] Implement code comparison feature
- [ ] Add GitHub repository integration
- [ ] Create admin dashboard
- [ ] Add dark/light mode toggle
- [ ] Implement code complexity analysis
- [ ] Add export review as PDF
- [ ] Create mobile app version

---

## ⭐ Star History

If you find this project helpful, please consider giving it a star!

[![Star History Chart](https://api.star-history.com/svg?repos=yourusername/ai-code-review-platform&type=Date)](https://star-history.com/#yourusername/ai-code-review-platform&Date)

---

**Made with ❤️ using MERN Stack and Google Gemini AI**

[⬆ Back to Top](#-ai-code-review-platform)
