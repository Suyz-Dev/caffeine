import { NextRequest } from 'next/server';
import { extractTokenFromHeader, verifyToken } from '@/lib/utils/security';

// Verify the JWT token and return user information
export async function GET(request: NextRequest) {
  try {
    // Extract and verify token
    const token = extractTokenFromHeader(request);
    
    if (!token) {
      return Response.json(
        { error: 'Authentication token required' },
        { status: 401 }
      );
    }
    
    try {
      // Verify the JWT token
      const decoded = verifyToken(token);
      
      // Return user info
      return Response.json({
        user: {
          id: decoded.userId,
          email: decoded.email,
          name: decoded.name,
        },
        success: true
      });
    } catch (verificationError) {
      return Response.json(
        { error: 'Invalid or expired token' },
        { status: 401 }
      );
    }
  } catch (error) {
    console.error('Session check error:', error);
    
    return Response.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}