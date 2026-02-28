# Contributing to CodeReview AI

Thank you for your interest in contributing to CodeReview AI! This document provides guidelines and instructions for contributing.

## Code of Conduct

By participating in this project, you agree to maintain a respectful and inclusive environment for everyone.

## How to Contribute

### Reporting Bugs

1. Check if the bug has already been reported in Issues
2. If not, create a new issue with:
   - Clear title and description
   - Steps to reproduce
   - Expected vs actual behavior
   - Screenshots if applicable
   - Environment details (OS, browser, Node version)

### Suggesting Features

1. Check existing feature requests
2. Create a new issue with:
   - Clear description of the feature
   - Use cases and benefits
   - Possible implementation approach

### Pull Requests

1. **Fork the repository**
2. **Create a feature branch**

   ```bash
   git checkout -b feature/amazing-feature
   ```

3. **Make your changes**
   - Follow the existing code style
   - Add tests if applicable
   - Update documentation

4. **Commit your changes**

   ```bash
   git commit -m 'Add amazing feature'
   ```

5. **Push to your fork**

   ```bash
   git push origin feature/amazing-feature
   ```

6. **Open a Pull Request**
   - Provide a clear description
   - Reference any related issues
   - Include screenshots for UI changes

## Development Setup

### Prerequisites

- Node.js 18+
- MongoDB
- Google Gemini API key

### Installation

1. Clone the repository

   ```bash
   git clone https://github.com/yourusername/codereview-ai.git
   cd codereview-ai
   ```

2. Install backend dependencies

   ```bash
   cd backend
   npm install
   cp .env.example .env
   # Configure your .env file
   ```

3. Install frontend dependencies

   ```bash
   cd frontend
   npm install
   cp .env.example .env
   ```

4. Start development servers

   ```bash
   # Backend (in backend directory)
   npm run dev

   # Frontend (in frontend directory)
   npm run dev
   ```

## Code Style

### JavaScript/React

- Use ES6+ features
- Follow Airbnb style guide
- Use functional components with hooks
- Meaningful variable and function names
- Add comments for complex logic

### CSS/Tailwind

- Use Tailwind utility classes
- Follow mobile-first approach
- Maintain consistent spacing
- Use semantic color names

### Git Commits

- Use present tense ("Add feature" not "Added feature")
- Use imperative mood ("Move cursor to..." not "Moves cursor to...")
- Limit first line to 72 characters
- Reference issues and pull requests

## Testing

- Write tests for new features
- Ensure all tests pass before submitting PR
- Maintain or improve code coverage

## Documentation

- Update README.md for significant changes
- Add JSDoc comments for functions
- Update API documentation
- Include examples for new features

## Review Process

1. Maintainers will review your PR
2. Address any requested changes
3. Once approved, your PR will be merged
4. Your contribution will be credited

## Questions?

Feel free to:

- Open an issue for questions
- Join our community discussions
- Email: support@codereview.ai

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing to CodeReview AI! 🚀
