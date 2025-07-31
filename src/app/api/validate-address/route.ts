import { NextRequest, NextResponse } from 'next/server';

// USPS API configuration from environment variables
const USPS_CONFIG = {
  tokenUrl: process.env.USPS_TOKEN_URL || 'https://apis-tem.usps.com/oauth2/v3/token',
  clientId: process.env.USPS_CLIENT_ID,
  clientSecret: process.env.USPS_CLIENT_SECRET,
  addressValidationUrl: process.env.USPS_ADDRESS_VALIDATION_URL || 'https://apis-tem.usps.com/addresses/v3/address'
};

// Validate that required environment variables are present
if (!USPS_CONFIG.clientId || !USPS_CONFIG.clientSecret) {
  console.error('Missing required USPS API credentials in environment variables');
}

interface USPSTokenResponse {
  access_token: string;
  token_type: string;
  issued_at: number;
  expires_in: number;
  status: string;
  scope: string;
}

interface USPSAddressValidationRequest {
  streetAddress: string;
  secondaryAddress?: string;
  cityName: string;
  state: string;
  ZIPCode: string;
}

// Cache token in memory (for development - in production, use Redis or similar)
let cachedToken: { token: string; expiresAt: number } | null = null;

async function getUSPSToken(): Promise<string> {
  // Check if we have a valid cached token
  if (cachedToken && Date.now() < cachedToken.expiresAt) {
    return cachedToken.token;
  }

  // Validate credentials before making request
  if (!USPS_CONFIG.clientId || !USPS_CONFIG.clientSecret) {
    throw new Error('USPS API credentials not configured. Please check environment variables.');
  }

  try {
    const response = await fetch(USPS_CONFIG.tokenUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        grant_type: 'client_credentials',
        client_id: USPS_CONFIG.clientId,
        client_secret: USPS_CONFIG.clientSecret,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Failed to get USPS token: ${response.status} ${response.statusText} - ${errorText}`);
    }

    const tokenData: USPSTokenResponse = await response.json();
    
    // Cache the token with expiration (subtract 5 minutes for safety)
    const expiresAt = Date.now() + (tokenData.expires_in - 300) * 1000;
    cachedToken = {
      token: tokenData.access_token,
      expiresAt,
    };

    return tokenData.access_token;
  } catch (error) {
    console.error('Error getting USPS token:', error);
    throw new Error('Failed to authenticate with USPS API');
  }
}

async function validateUSPSAddress(address: USPSAddressValidationRequest) {
  try {
    const token = await getUSPSToken();
    console.log("requestFormattedUrl", `${USPS_CONFIG.addressValidationUrl}?streetAddress=${address.streetAddress}&secondaryAddress=${address.secondaryAddress}&city=${address.cityName}&state=${address.state}&ZIPCode=${address.ZIPCode}`);
    const response = await fetch(`${USPS_CONFIG.addressValidationUrl}?streetAddress=${address.streetAddress}&secondaryAddress=${address.secondaryAddress}&city=${address.cityName}&state=${address.state}&ZIPCode=${address.ZIPCode}`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`USPS validation failed: ${response.status} ${response.statusText} - ${errorText}`);
    }

    const validationResult = await response.json();
    return validationResult;
  } catch (error) {
    console.error('Error validating address with USPS:', error);
    throw new Error('Failed to validate address with USPS');
  }
}

export async function POST(request: NextRequest) {
  try {
    // Check if USPS credentials are configured
    if (!USPS_CONFIG.clientId || !USPS_CONFIG.clientSecret) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'USPS API is not configured. Please contact administrator.' 
        },
        { status: 500 }
      );
    }

    const body = await request.json();
    const { senderAddress, recipientAddress } = body;

    if (!senderAddress || !recipientAddress) {
      return NextResponse.json(
        { error: 'Both sender and recipient addresses are required' },
        { status: 400 }
      );
    }

    // Validate both addresses
    const [senderValidation, recipientValidation] = await Promise.all([
      validateUSPSAddress({
        streetAddress: senderAddress.line1,
        secondaryAddress: senderAddress.line2 ,
        cityName: senderAddress.city,
        state: senderAddress.state,
        ZIPCode: senderAddress.zipCode,
      }),
      validateUSPSAddress({
        streetAddress: recipientAddress.line1,
        secondaryAddress: recipientAddress.line2 ,
        cityName: recipientAddress.city,
        state: recipientAddress.state,
        ZIPCode: recipientAddress.zipCode,
      }),
    ]);

    return NextResponse.json({
      success: true,
      senderValidation,
      recipientValidation,
    });
  } catch (error) {
    console.error('Validation API error:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: error instanceof Error ? error.message : 'Validation failed' 
      },
      { status: 500 }
    );
  }
} 