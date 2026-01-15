import { NextRequest } from 'next/server';
import { sanitizeInput, isValidEmail, isValidString, RateLimiter } from '@/lib/utils/security';
import { submitContactForm } from '@/services/contactService';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Rate limiting based on IP address
    const clientIP = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';
    const identifier = typeof clientIP === 'string' ? clientIP.split(',')[0].trim() : 'unknown';
    
    if (RateLimiter.isRateLimited(identifier)) {
      return Response.json(
        { error: 'Too many requests, please try again later' },
        { status: 429 }
      );
    }
    
    // Validate the incoming data
    const { name, email, subject, message } = body;
    
    if (!name || !email || !subject || !message) {
      return Response.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Sanitize inputs
    const sanitizedName = sanitizeInput(name);
    const sanitizedEmail = sanitizeInput(email);
    const sanitizedSubject = sanitizeInput(subject);
    const sanitizedMessage = sanitizeInput(message);

    // Basic validation
    if (!isValidString(sanitizedName, 2)) {
      return Response.json(
        { error: 'Name must be at least 2 characters long' },
        { status: 400 }
      );
    }

    if (!isValidEmail(sanitizedEmail)) {
      return Response.json(
        { error: 'Email is invalid' },
        { status: 400 }
      );
    }

    if (!isValidString(sanitizedSubject, 5)) {
      return Response.json(
        { error: 'Subject must be at least 5 characters long' },
        { status: 400 }
      );
    }

    if (!isValidString(sanitizedMessage, 10)) {
      return Response.json(
        { error: 'Message must be at least 10 characters long' },
        { status: 400 }
      );
    }

    // In a real implementation, you would:
    // 1. Save the contact form data to a database
    // 2. Send an email notification
    // 3. Perform any other necessary processing
    
    // Using the contact service to handle form submission
    const result = await submitContactForm({
      name: sanitizedName,
      email: sanitizedEmail,
      subject: sanitizedSubject,
      message: sanitizedMessage,
    });

    return Response.json(
      { 
        success: result.success, 
        message: result.message
      },
      { status: result.success ? 200 : 500 }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    
    return Response.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}