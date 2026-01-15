import jwt from 'jsonwebtoken';
import { NextRequest } from 'next/server';

// Secret key for JWT signing (in production, use environment variables)
const JWT_SECRET = process.env.JWT_SECRET || 'your-super-secret-jwt-key-change-in-production';

// Salt for password hashing (in production, use environment variables)
const SALT_ROUNDS = 10;

// Import bcrypt if available, otherwise use a mock implementation
let bcrypt: any;
try {
  bcrypt = require('bcrypt');
} catch (err) {
  // Mock bcrypt implementation for demo purposes
  console.warn('Bcrypt not found. Using mock implementation.');
  bcrypt = {
    hash: async (password: string) => `mock_hash_${password}`,
    compare: async (password: string, hash: string) => hash === `mock_hash_${password}`
  };
}

/**
 * Generate a JWT token
 */
export function generateToken(payload: any): string {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '24h' });
}

/**
 * Verify a JWT token
 */
export function verifyToken(token: string): any {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (error) {
    throw new Error('Invalid or expired token');
  }
}

/**
 * Hash a password
 */
export async function hashPassword(password: string): Promise<string> {
  if (typeof bcrypt.hash !== 'function') {
    // If bcrypt is not available, return a simple mock
    return `mock_hash_${password}`;
  }
  return await bcrypt.hash(password, SALT_ROUNDS);
}

/**
 * Compare a password with its hash
 */
export async function comparePassword(password: string, hash: string): Promise<boolean> {
  if (typeof bcrypt.compare !== 'function') {
    // If bcrypt is not available, use mock comparison
    return hash === `mock_hash_${password}`;
  }
  return await bcrypt.compare(password, hash);
}

/**
 * Sanitize user input to prevent XSS
 */
export function sanitizeInput(input: string): string {
  if (typeof input !== 'string') {
    return '';
  }
  
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
}

/**
 * Validate email format
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validate that a string is not empty and has minimum length
 */
export function isValidString(str: string, minLength: number = 1): boolean {
  if (typeof str !== 'string') {
    return false;
  }
  
  return str.trim().length >= minLength;
}

/**
 * Extract token from authorization header
 */
export function extractTokenFromHeader(request: NextRequest): string | null {
  const authHeader = request.headers.get('authorization');
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return null;
  }
  
  return authHeader.substring(7); // Remove 'Bearer ' prefix
}

/**
 * Rate limiting helper (basic implementation)
 */
export class RateLimiter {
  private static requests = new Map<string, { count: number; timestamp: number }>();
  private static readonly WINDOW_MS = 15 * 60 * 1000; // 15 minutes
  private static readonly MAX_REQUESTS = 100; // Max requests per window

  static isRateLimited(identifier: string): boolean {
    const now = Date.now();
    const record = this.requests.get(identifier);

    if (!record) {
      // First request from this identifier
      this.requests.set(identifier, { count: 1, timestamp: now });
      return false;
    }

    // Check if window has passed
    if (now - record.timestamp > this.WINDOW_MS) {
      // Reset the counter
      this.requests.set(identifier, { count: 1, timestamp: now });
      return false;
    }

    // Increment count if within window
    if (record.count < this.MAX_REQUESTS) {
      this.requests.set(identifier, { count: record.count + 1, timestamp: record.timestamp });
      return false;
    }

    // Rate limit exceeded
    return true;
  }
}