import { NextRequest } from 'next/server';
import { generateToken, hashPassword, comparePassword, sanitizeInput, isValidEmail, isValidString } from '@/lib/utils/security';

// In a real application, you would connect to a database to verify credentials
// For this demo, we'll use a simple hardcoded admin user with a hashed password
const ADMIN_USER = {
  id: 'admin-1',
  email: 'admin@example.com',
  name: 'Admin User',
  // This would be a real hashed password in production
  passwordHash: '$2b$10$8K1p/a0SI4TxT7o5iCbx.u0BX.MKuOliP6vL.eRJHgs.Z0.Y.r.fK' // bcrypt hash of 'admin123'
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password } = body;

    // Validate input
    if (!email || !password) {
      return Response.json(
        { error: 'Email and password are required' },
        { status: 400 }
      );
    }

    // Sanitize and validate inputs
    const sanitizedEmail = sanitizeInput(email);
    const sanitizedPassword = sanitizeInput(password);
    
    if (!isValidEmail(sanitizedEmail)) {
      return Response.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }
    
    if (!isValidString(sanitizedPassword, 1)) {
      return Response.json(
        { error: 'Password is required' },
        { status: 400 }
      );
    }
    
    // In a real application, you would:
    // 1. Look up user by email in database
    // 2. Compare the provided password with the stored hash using bcrypt
    if (sanitizedEmail === ADMIN_USER.email && await comparePassword(sanitizedPassword, ADMIN_USER.passwordHash)) {
      // Generate a JWT token
      const token = generateToken({
        userId: ADMIN_USER.id,
        email: ADMIN_USER.email,
        name: ADMIN_USER.name,
      });

      return Response.json({
        success: true,
        user: {
          id: ADMIN_USER.id,
          email: ADMIN_USER.email,
          name: ADMIN_USER.name,
        },
        token, // Return the JWT token for client-side handling
        message: 'Login successful!'
      }, { status: 200 });
    } else {
      return Response.json(
        { error: 'Invalid email or password' },
        { status: 401 }
      );
    }
  } catch (error) {
    console.error('Login error:', error);
    
    return Response.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

