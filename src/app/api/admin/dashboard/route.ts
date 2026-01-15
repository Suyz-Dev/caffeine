import { NextRequest } from 'next/server';
import { extractTokenFromHeader, verifyToken } from '@/lib/utils/security';

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
      
      // At this point, the user is authenticated
      // In a real app, you might check roles/permissions here
      
      return Response.json({
        success: true,
        user: {
          id: decoded.userId,
          email: decoded.email,
          name: decoded.name
        },
        data: {
          stats: {
            totalContacts: 42,
            newMessages: 5,
            activeUsers: 12
          },
          recentActivity: [
            { id: 1, action: 'Contact form submission', timestamp: new Date().toISOString(), user: 'John Doe' },
            { id: 2, action: 'New registration', timestamp: new Date(Date.now() - 3600000).toISOString(), user: 'Jane Smith' }
          ]
        },
        message: 'Dashboard data retrieved successfully'
      });
    } catch (verificationError) {
      return Response.json(
        { error: 'Invalid or expired token' },
        { status: 401 }
      );
    }
  } catch (error) {
    console.error('Admin dashboard error:', error);
    
    return Response.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Example of a protected POST endpoint
export async function POST(request: NextRequest) {
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
      
      // At this point, the user is authenticated
      // Process the request
      const body = await request.json();
      
      // Example: Process admin action
      console.log(`Admin action by ${decoded.email}:`, body.action);
      
      return Response.json({
        success: true,
        message: 'Action completed successfully'
      });
    } catch (verificationError) {
      return Response.json(
        { error: 'Invalid or expired token' },
        { status: 401 }
      );
    }
  } catch (error) {
    console.error('Admin POST error:', error);
    
    return Response.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}