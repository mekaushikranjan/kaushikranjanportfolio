import type { VercelRequest, VercelResponse } from '@vercel/node';

// Import dependencies - these need to be available in the bundle
// For Vercel, we'll use a simpler approach without the full server setup
export default async function handler(
  req: VercelRequest,
  res: VercelResponse,
) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // Basic validation
    const { name, email, service, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Name, email, and message are required',
      });
    }

    // For now, just return success
    // TODO: Add database integration using Vercel's environment variables
    // You can set up a serverless database like Vercel Postgres or use your existing Neon database
    
    res.status(201).json({
      success: true,
      message: 'Contact message received successfully',
    });
  } catch (error: any) {
    console.error('Error processing contact message:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
    });
  }
}

