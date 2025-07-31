✉️ How to Write an Address – Interactive Envelope Formatter
Create a Next.js 14 app that helps users correctly format and visualize a USPS mailing address on an envelope. The app should allow users to enter sender and recipient information and show a real-time visual preview of how it would appear on a standard envelope.

✅ Requirements
🖥️ Core Features
Two input sections:

Sender’s address (top left)

Recipient’s address (center)

Real-time preview of a USPS #10 envelope:

Visual layout showing:

Return address in top left

Recipient address in center

Empty box in top right for stamp

Live rendering using HTML/CSS or SVG

Follows USPS formatting standards:

ALL CAPS

Abbreviated street suffixes (e.g., STREET → ST)

Correct placement and line spacing

🔤 USPS Formatting Rules to Apply
No punctuation

Proper spacing:

css
Copy
Edit
JOHN DOE  
123 MAIN ST APT 4B  
SPRINGFIELD IL 62704
📱 Responsive Layout
Looks great on both desktop and mobile

Uses TailwindCSS

🌐 SEO Goals
Static title: "How to Write an Address on an Envelope (USPS Format)"

Meta description: clear, helpful content summary

Use Next.js Metadata API (Next 13+ App Router) to inject proper SEO tags

🔌 Optional Features (if time allows)
Google Places Autocomplete API to help autofill addresses

Download/print preview as PDF (html2canvas, jsPDF)

Tooltips on input fields (e.g., “Type city in all caps”)

Blog or educational content (markdown pages under /how-to route)

🧱 Tech Stack
Next.js 14+ (App Router)

TailwindCSS

React hooks

Optionally:

html2canvas or jsPDF (for print/export)

@react-google-maps/api or react-places-autocomplete for address suggestions

📂 Suggested File Structure
bash
Copy
Edit
/app
└── page.tsx → main layout
└── components/
├── AddressForm.tsx
├── EnvelopePreview.tsx
└── Tooltip.tsx
└── utils/
└── formatAddress.ts
/public
└── envelope-bg.svg → background if needed
/styles
└── globals.css
📝 Deliverables
Functional Next.js app with 2-way data binding between form and preview

Clean, accessible, semantic HTML

Well-commented, modular code

SEO-optimized page title + meta
