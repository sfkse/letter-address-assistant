# ✉️ Interactive Envelope Formatter

A Next.js 14 application that helps users correctly format and visualize USPS mailing addresses on an envelope with real-time preview and standards compliance.

## Features

### 🖥️ Core Features

- **Two input sections**: Sender's address (return address) and recipient's address
- **Real-time envelope preview**: Visual layout of a USPS #10 envelope showing proper address placement
- **USPS formatting standards**: Automatic formatting including ALL CAPS, abbreviated suffixes, and proper spacing
- **Interactive tooltips**: Helpful guidance on each input field
- **Responsive design**: Works seamlessly on desktop and mobile devices
- **USPS API validation**: Server-side address validation to avoid CORS issues

### 📋 USPS Formatting Applied

- ALL CAPS formatting
- Abbreviated street suffixes (Street → ST, Avenue → AVE)
- Abbreviated directionals (North → N, Southwest → SW)
- Abbreviated unit designators (Apartment → APT, Suite → STE)
- Removed punctuation marks
- Proper spacing and line breaks

### 🌐 SEO Optimized

- Static title: "How to Write an Address on an Envelope (USPS Format)"
- Comprehensive meta description and keywords
- Open Graph and Twitter Card support
- Next.js 14 Metadata API implementation

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **TailwindCSS**
- **React Hooks**

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- USPS API credentials (see Environment Setup below)

### Environment Setup

1. **Get USPS API Credentials:**

   - Visit the [USPS Developer Portal](https://developer.usps.com/)
   - Register for an account and create a new application
   - Obtain your Client ID and Client Secret

2. **Configure Environment Variables:**

   Create a `.env.local` file in the root directory:

   ```bash
   # USPS API Configuration
   USPS_TOKEN_URL=https://apis-tem.usps.com/oauth2/v3/token
   USPS_ADDRESS_VALIDATION_URL=https://apis-tem.usps.com/addresses/v3/address
   USPS_CLIENT_ID=your_client_id_here
   USPS_CLIENT_SECRET=your_client_secret_here
   ```

   **⚠️ Important Security Notes:**

   - Never commit `.env.local` to version control
   - Keep your Client Secret secure
   - Use different credentials for development and production

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd letteraddress
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables (see Environment Setup above)

4. Run the development server:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm start
```

## File Structure

```
/src
├── app/
│ ├── api/
│ │ └── validate-address/
│ │   └── route.ts # USPS validation API endpoint
│ ├── page.tsx # Main page component
│ ├── layout.tsx # Root layout with SEO metadata
│ └── globals.css # Global styles with Tailwind
├── components/
│ ├── AddressForm.tsx # Input forms for addresses
│ ├── EnvelopePreview.tsx # Real-time envelope visualization
│ └── Tooltip.tsx # Reusable tooltip component
└── utils/
└── formatAddress.ts # USPS formatting utilities
```

## Usage

1. **Enter sender information**: Fill in your return address details in the left form
2. **Enter recipient information**: Fill in the destination address in the right form
3. **Click "Validate with USPS"**: Server-side validation ensures CORS compliance
4. **View real-time preview**: See how your envelope will look with proper USPS formatting
5. **Use example data**: Click "Load Example Data" to see the formatter in action
6. **Clear fields**: Use "Clear All" to start over

## USPS API Integration

This application integrates with the USPS API for address validation:

### CORS Solution

- **Problem**: Direct browser calls to USPS API are blocked by CORS
- **Solution**: Server-side API route at `/api/validate-address`
- **Benefit**: Secure, reliable validation without browser limitations

### API Configuration

The USPS API credentials are configured via environment variables:

- **Environment Variables**: Stored in `.env.local` (not committed)
- **OAuth 2.0 authentication**: Automatic token management
- **Token caching**: For performance optimization
- **Error handling**: Comprehensive validation and user feedback

### Security Features

- ✅ **Server-side only credentials**: No sensitive data exposed to client
- ✅ **Environment variable configuration**: Secure credential management
- ✅ **Automatic token refresh**: Handles expired tokens gracefully
- ✅ **Input validation**: Prevents malformed requests
- ✅ **Error boundaries**: Graceful handling of API failures

### Environment Variables Required

| Variable                      | Description                      | Example                                          |
| ----------------------------- | -------------------------------- | ------------------------------------------------ |
| `USPS_CLIENT_ID`              | Your USPS API Client ID          | `woYrAHmA8ol2Il...`                              |
| `USPS_CLIENT_SECRET`          | Your USPS API Client Secret      | `QFo2M8jlLoqb3RJ...`                             |
| `USPS_TOKEN_URL`              | USPS OAuth token endpoint        | `https://apis-tem.usps.com/oauth2/v3/token`      |
| `USPS_ADDRESS_VALIDATION_URL` | USPS address validation endpoint | `https://apis-tem.usps.com/addresses/v3/address` |

## USPS Standards Compliance

This application follows USPS Publication 28 addressing standards:

- Proper address placement on USPS #10 envelope
- Standardized abbreviations for streets, directions, and units
- ALL CAPS formatting for machine readability
- No punctuation for optimal processing
- Correct spacing and line breaks

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

MIT License - see LICENSE file for details.

## Acknowledgments

- USPS Publication 28 for addressing standards
- Next.js team for the excellent framework
- TailwindCSS for utility-first styling
