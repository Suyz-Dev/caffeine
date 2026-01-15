# Backend Implementation Guide

This document explains the backend functionality implemented for the Caffeine Coders Studio website, specifically for the contact form and authentication system.

## Table of Contents
1. [Overview](#overview)
2. [Contact Form Backend](#contact-form-backend)
3. [Authentication System](#authentication-system)
4. [API Endpoints](#api-endpoints)
5. [Security Considerations](#security-considerations)
6. [Future Improvements](#future-improvements)

## Overview

The original application had frontend forms that only showed mock responses. This implementation adds real backend functionality for:

- Processing contact form submissions
- Handling user authentication (login/logout)
- Managing user sessions

All backend routes are implemented using Next.js App Router API routes.

## Contact Form Backend

### API Endpoint
- **Route**: `POST /api/contact`
- **Purpose**: Process and validate contact form submissions

### Functionality
- Validates all required fields (name, email, subject, message)
- Performs format validation (email format, minimum lengths)
- Logs submissions to server console (would save to DB in production)
- Returns appropriate success/error responses

### Validation Rules
- Name: Minimum 2 characters
- Email: Valid email format
- Subject: Minimum 5 characters
- Message: Minimum 10 characters

### Response Format
Successful submission:
```json
{
  "success": true,
  "message": "Contact form submitted successfully!"
}
```

Error response:
```json
{
  "error": "Error message",
  "status": 400/401/500
}
```

## Authentication System

### API Endpoints
1. **Login**: `POST /api/auth/login`
2. **Logout**: `POST /api/auth/logout`
3. **User Session**: `GET /api/auth/me`

### Login Functionality
- Validates email and password inputs
- Authenticates against hardcoded admin credentials
- Generates a simple token upon successful login
- Returns user information and authentication token

### Demo Credentials
- Email: `admin@example.com`
- Password: `admin123`

### Token Management
- Simple base64-encoded token (demo implementation)
- Contains user ID, email, and expiration time
- Client stores token in localStorage (would use HttpOnly cookies in production)

### Session Management
- `/api/auth/me` endpoint checks if user is authenticated
- Verifies token validity and expiration
- Returns user information if valid

## API Endpoints

### Contact Form
- **Method**: POST
- **Endpoint**: `/api/contact`
- **Body**: `{ name, email, subject, message }`
- **Response**: Success/error message

### Authentication
- **Login**: `POST /api/auth/login`
  - **Body**: `{ email, password }`
  - **Response**: User info and token
  
- **Logout**: `POST /api/auth/logout`
  - **Response**: Logout confirmation
  
- **Session Check**: `GET /api/auth/me`
  - **Headers**: `Authorization: Bearer <token>`
  - **Response**: User info if authenticated

## Security Considerations

### Current Implementation
⚠️ **Important**: This is a demonstration implementation with the following security limitations:

- Uses hardcoded admin credentials
- Stores password in plain text (should be hashed)
- Uses simple base64 token (should use JWT with signing)
- Stores token in localStorage (vulnerable to XSS)

### Production Recommendations
✅ For production deployment, implement:

- Database for user accounts with proper password hashing (bcrypt)
- JWT with proper signing and encryption
- HttpOnly cookies for token storage
- Rate limiting for authentication endpoints
- Input sanitization to prevent injection attacks
- HTTPS enforcement
- CSRF protection
- Proper session management

## Future Improvements

### Contact Form
- Store submissions in a database
- Send email notifications
- Add spam protection (CAPTCHA)
- Implement contact form management UI

### Authentication
- User registration functionality
- Password reset capability
- Multi-factor authentication
- OAuth providers (Google, GitHub, etc.)
- Role-based access control
- Session management with refresh tokens

### General
- Comprehensive logging and monitoring
- Better error handling and user feedback
- Input validation using schemas
- API documentation with OpenAPI/Swagger