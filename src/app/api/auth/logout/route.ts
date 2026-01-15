import { NextRequest } from 'next/server';
import { extractTokenFromHeader } from '@/lib/utils/security';

export async function POST(request: NextRequest) {
  try {
    // Extract token from request
    const token = extractTokenFromHeader(request);
    
    if (token) {
      // In a real application, you might add the token to a blacklist/revoke list
      // For this demo, we just return a success response
      console.log('User logged out successfully');
    }
    
    return Response.json({
      success: true,
      message: 'Logout successful!'
    }, { status: 200 });
  } catch (error) {
    console.error('Logout error:', error);
    
    return Response.json({
      error: 'Internal server error'
    }, { status: 500 });
  }
}