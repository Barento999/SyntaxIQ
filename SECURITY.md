# Security Policy

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| 1.0.x   | :white_check_mark: |
| < 1.0   | :x:                |

## Reporting a Vulnerability

We take security seriously at SyntaxIQ. If you discover a security vulnerability, please follow these steps:

### 1. Do Not Disclose Publicly

Please do not create a public GitHub issue for security vulnerabilities.

### 2. Report Privately

Email us at: **security@codereview.ai**

Include:

- Description of the vulnerability
- Steps to reproduce
- Potential impact
- Suggested fix (if any)

### 3. Response Time

- We will acknowledge your email within 48 hours
- We will provide a detailed response within 7 days
- We will keep you updated on the fix progress

### 4. Disclosure Policy

- We will work with you to understand and fix the issue
- Once fixed, we will publicly disclose the vulnerability
- You will be credited (unless you prefer to remain anonymous)

## Security Measures

### Authentication

- JWT tokens with expiration
- Password hashing with bcrypt (10 rounds)
- Secure session management

### API Security

- Rate limiting (100 req/15min)
- Input validation and sanitization
- XSS prevention
- CORS configuration
- Helmet.js security headers

### Data Protection

- Environment variables for secrets
- MongoDB connection encryption
- No sensitive data in logs
- Secure password reset flow

## Best Practices

### For Users

- Use strong, unique passwords
- Enable two-factor authentication (coming soon)
- Keep your API keys secure
- Log out from shared devices

### For Developers

- Never commit `.env` files
- Use environment variables
- Keep dependencies updated
- Follow secure coding practices

## Contact

For security concerns: security@codereview.ai
For general support: support@syntaxiq.ai

Thank you for helping keep SyntaxIQ secure!
