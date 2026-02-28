<div align="center">

# 🤖 AI Code Review Platform

### Intelligent Code Analysis Powered by Google Gemini AI

[![MERN Stack](https://img.shields.io/badge/Stack-MERN-green?style=for-the-badge)](https://github.com)
[![Gemini AI](https://img.shields.io/badge/AI-Gemini%201.5%20Pro-blue?style=for-the-badge&logo=google)](https://ai.google.dev/)
[![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](LICENSE)

**A full-stack AI-powered code review platform that provides comprehensive code analysis including bug detection, security vulnerabilities, performance improvements, and refactored code suggestions.**

[Features](#-features) • [Demo](#-demo) • [Installation](#-installation) • [Tech Stack](#-tech-stack) • [API](#-api-endpoints) • [Contributing](#-contributing)

</div>

---

## ✨ Features

<table>
<tr>
<td width="50%">

### 🔐 **Authentication & Security**

- JWT-based authentication
- Secure password hashing with bcrypt
- Protected API routes
- Rate limiting & CORS protection
- Input sanitization & XSS prevention

</td>
<td width="50%">

### 🤖 **AI-Powered Analysis**

- Google Gemini 1.5 Pro integration
- Bug detection with severity levels
- Security vulnerability scanning
- Performance optimization tips
- Code quality recommendations

</td>
</tr>
<tr>
<td width="50%">

### 💻 **Modern UI/UX**

- Monaco Editor integration
- Real-time code editing
- Responsive design
- Dark mode code editor
- Professional dashboard

</td>
<td width="50%">

### 📊 **Review Management**

- Review history with pagination
- Overall code score (0-100)
- Detailed feedback sections
- Refactored code examples
- 12+ programming languages

</td>
</tr>
</table>

---

## 🎯 Demo

<div align="center">

### Dashboard

![Dashboard](https://via.placeholder.com/800x400/1e40af/ffffff?text=Dashboard+Screenshot)

### Review Results

![Review Results](https://via.placeholder.com/800x400/059669/ffffff?text=Review+Results+Screenshot)

</div>

---

## 🚀 Installation

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **MongoDB** (Local or Atlas) - [Get Started](https://www.mongodb.com/cloud/atlas)
- **Google Gemini API Key** - [Get API Key](https://makersuite.google.com/app/apikey)

### Quick Start

#### 1️⃣ Clone the Repository

```bash
git clone https://github.com/yourusername/ai-code-review-platform.git
cd ai-code-review-platform
```

#### 2️⃣ Backend Setup

```bash
cd backend
npm install
```

Create `.env` file:

```bash
copy .env.example .env
```

Configure your `.env` file:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_super_secret_jwt_key
JWT_EXPIRE=7d
GEMINI_API_KEY=your_gemini_api_key
NODE_ENV=development
MAX_CODE_LENGTH=10000
```

Start the backend server:

```bash
npm run dev
```

#### 3️⃣ Frontend Setup

```bash
cd frontend
npm install
```

Create `.env` file:

```bash
copy .env.example .env
```

Configure your `.env` file:

```env
VITE_API_URL=http://localhost:5000/api
```

Start the frontend:

```bash
npm run dev
```

#### 4️⃣ Access the Application

- **Frontend:** http://localhost:5173
- **Backend:** http://localhost:5000

---

## 🛠️ Tech Stack

<div align="center">

### Frontend

![React](https://img.shields.io/badge/React-18.2-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.2-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Monaco Editor](https://img.shields.io/badge/Monaco-Editor-0078D4?style=for-the-badge&logo=visual-studio-code&logoColor=white)

### Backend

![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-4.19-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-8.3-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-Auth-000000?style=for-the-badge&logo=json-web-tokens&logoColor=white)

### AI & Security

![Gemini AI](https://img.shields.io/badge/Gemini-1.5%20Pro-4285F4?style=for-the-badge&logo=google&logoColor=white)
![Helmet](https://img.shields.io/badge/Helmet-Security-000000?style=for-the-badge&logo=helmet&logoColor=white)

</div>

---

## 📁 Project Structure

```
ai-code-review-platform/
├── 📂 backend/
│   ├── 📂 config/
│   │   └── db.js                 # MongoDB connection
│   ├── 📂 controllers/
│   │   ├── authController.js     # Authentication logic
│   │   └── reviewController.js   # Review CRUD operations
│   ├── 📂 middleware/
│   │   ├── auth.js               # JWT verification
│   │   └── errorHandler.js       # Error handling
│   ├── 📂 models/
│   │   ├── User.js               # User schema
│   │   └── Review.js             # Review schema
│   ├── 📂 routes/
│   │   ├── authRoutes.js         # Auth endpoints
│   │   └── reviewRoutes.js       # Review endpoints
│   ├── 📂 services/
│   │   └── geminiService.js      # Gemini AI integration
│   ├── .env.example              # Environment template
│   ├── package.json
│   └── server.js                 # Entry point
│
├── 📂 frontend/
│   ├── 📂 src/
│   │   ├── 📂 components/
│   │   │   ├── Navbar.jsx
│   │   │   └── PrivateRoute.jsx
│   │   ├── 📂 context/
│   │   │   └── AuthContext.jsx   # Auth state management
│   │   ├── 📂 pages/
│   │   │   ├── Dashboard.jsx     # Main dashboard
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   └── ReviewDetail.jsx  # Review results
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── .env.example
│   ├── index.html
│   ├── package.json
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

#### Submit Code Review

```bash
POST /api/review
Authorization: Bearer YOUR_JWT_TOKEN
Content-Type: application/json

{
  "code": "function example() { console.log('Hello'); }",
  "language": "javascript"
}
```

---

## 🌐 Supported Languages

<div align="center">

| Language   | Icon | Language   | Icon |
| ---------- | ---- | ---------- | ---- |
| JavaScript | 🟨   | TypeScript | 🔷   |
| Python     | 🐍   | Java       | ☕   |
| C++        | ⚙️   | C#         | 💜   |
| Go         | 🐹   | Rust       | 🦀   |
| PHP        | 🐘   | Ruby       | 💎   |
| Swift      | 🍎   | Kotlin     | 🟣   |

</div>

---

## 🔒 Security Features

- ✅ **Password Hashing** - bcrypt with salt rounds
- ✅ **JWT Authentication** - Secure token-based auth
- ✅ **Rate Limiting** - 100 requests per 15 minutes
- ✅ **Helmet.js** - Security headers
- ✅ **CORS Protection** - Configured origins
- ✅ **Input Validation** - Sanitization & validation
- ✅ **XSS Prevention** - Script tag filtering
- ✅ **Code Length Limits** - Max 10,000 characters
- ✅ **Environment Variables** - Secrets protection

---

## 🎨 AI Response Format

The Gemini AI returns structured JSON with the following format:

```json
{
  "summary": "Brief overview of the code",
  "bugs": [
    {
      "issue": "Bug description",
      "severity": "low|medium|high",
      "suggestion": "How to fix"
    }
  ],
  "securityIssues": [
    {
      "issue": "Security vulnerability",
      "risk": "Risk explanation",
      "fix": "Mitigation steps"
    }
  ],
  "performanceImprovements": [
    {
      "issue": "Performance issue",
      "improvement": "Optimization suggestion"
    }
  ],
  "codeQualitySuggestions": [
    {
      "issue": "Quality issue",
      "recommendation": "Best practice"
    }
  ],
  "refactoredCode": "Improved code example",
  "overallScore": 85
}
```

---

## 🚀 Deployment

### Backend (Render / Railway)

1. Push code to GitHub
2. Connect repository to Render/Railway
3. Set environment variables
4. Deploy

### Frontend (Vercel)

1. Push code to GitHub
2. Import project to Vercel
3. Set `VITE_API_URL` environment variable
4. Deploy

### MongoDB (Atlas)

Already cloud-hosted. Update `MONGODB_URI` in production environment.

---

## 🔑 Getting API Keys

### MongoDB Atlas

1. Visit [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create free account & cluster
3. Click "Connect" → "Connect your application"
4. Copy connection string

### Google Gemini API

1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with Google account
3. Click "Create API Key"
4. Copy API key

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Your Name**

- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your Name](https://linkedin.com/in/yourprofile)
- Email: your.email@example.com

---

## 🙏 Acknowledgments

- [Google Gemini AI](https://ai.google.dev/) for powerful code analysis
- [MongoDB](https://www.mongodb.com/) for database solutions
- [React](https://react.dev/) for the amazing frontend framework
- [Tailwind CSS](https://tailwindcss.com/) for beautiful styling
- [Monaco Editor](https://microsoft.github.io/monaco-editor/) for code editing

---

<div align="center">

### ⭐ Star this repository if you find it helpful!

**Made with ❤️ using MERN Stack and Google Gemini AI**

[Report Bug](https://github.com/yourusername/ai-code-review-platform/issues) • [Request Feature](https://github.com/yourusername/ai-code-review-platform/issues)

</div>
#   A I - c o d e - r e v i e w  
 