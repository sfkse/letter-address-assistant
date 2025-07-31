import React from "react";
import Link from "next/link";

export default function HowToWriteEnvelope() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center text-blue-600 hover:text-blue-700 transition-colors"
            >
              <span className="mr-2">←</span>
              Back to Envelope Formatter
            </Link>
            <Link
              href="/"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
            >
              Try Our Formatter
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            How to Write an Envelope: Complete Guide for Proper Addressing and
            Formatting
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Writing an envelope correctly ensures mail reaches its destination
            while presenting a professional appearance. Many people struggle
            with proper addressing formats, placement of information, and
            selecting appropriate materials for different occasions.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
            <p className="text-blue-800 font-medium">
              <strong>Key Principle:</strong> The key to addressing an envelope
              lies in placing the return address in the top left corner and the
              recipient&apos;s address in the center, using clear handwriting
              and proper formatting.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-green-500 to-blue-600 rounded-lg shadow-md p-6 mb-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-2">
            Ready to Format Your Envelope?
          </h2>
          <p className="mb-4">
            Use our interactive USPS-compliant envelope formatter with real-time
            validation!
          </p>
          <Link
            href="/"
            className="inline-block px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Try Our Interactive Formatter →
          </Link>
        </div>

        {/* Table of Contents */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            📋 Table of Contents
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ul className="space-y-2 text-blue-600">
              <li>
                <a href="#basics" className="hover:underline">
                  Understanding Envelope Basics
                </a>
              </li>
              <li>
                <a href="#materials" className="hover:underline">
                  Essential Materials and Tools
                </a>
              </li>
              <li>
                <a href="#addressing" className="hover:underline">
                  How to Address an Envelope
                </a>
              </li>
              <li>
                <a href="#purposes" className="hover:underline">
                  Guidelines for Different Purposes
                </a>
              </li>
            </ul>
            <ul className="space-y-2 text-blue-600">
              <li>
                <a href="#postage" className="hover:underline">
                  Mailing and Postage Details
                </a>
              </li>
              <li>
                <a href="#etiquette" className="hover:underline">
                  Envelope Presentation and Etiquette
                </a>
              </li>
              <li>
                <a href="#creative" className="hover:underline">
                  Creative and Decorative Approaches
                </a>
              </li>
              <li>
                <a href="#sustainable" className="hover:underline">
                  Sustainable Envelope Practices
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Section 1: Understanding Envelope Basics */}
        <section id="basics" className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            📮 Understanding Envelope Basics
          </h2>

          <p className="text-gray-700 mb-6">
            Envelopes consist of four main components: the face, flap, seal, and
            sometimes an address window. Standard envelope sizes follow specific
            postal regulations, with business #10 and A4 sizes being most common
            for correspondence.
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Types of Envelopes
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="border rounded-lg p-4">
              <h4 className="font-semibold text-lg text-blue-600 mb-2">
                Business Envelopes
              </h4>
              <p className="text-gray-600 text-sm">
                Feature clean lines and professional appearance. The #10
                envelope measures 4.125 x 9.5 inches and accommodates standard
                letterhead folded in thirds.
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <h4 className="font-semibold text-lg text-blue-600 mb-2">
                Window Envelopes
              </h4>
              <p className="text-gray-600 text-sm">
                Contain transparent panels that display addresses printed on
                internal documents. These eliminate the need for separate
                address writing.
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <h4 className="font-semibold text-lg text-blue-600 mb-2">
                Security Envelopes
              </h4>
              <p className="text-gray-600 text-sm">
                Include interior patterns or tinting to prevent contents from
                showing through. Banks and financial institutions commonly use
                these.
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <h4 className="font-semibold text-lg text-blue-600 mb-2">
                Padded Envelopes
              </h4>
              <p className="text-gray-600 text-sm">
                Provide cushioning for fragile items. The bubble lining or paper
                padding protects contents during shipping and handling.
              </p>
            </div>
          </div>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Envelope Sizes and Standards
          </h3>

          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-300 px-4 py-2 text-left text-gray-900 font-semibold">
                    Size
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left text-gray-900 font-semibold">
                    Dimensions
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left text-gray-900 font-semibold">
                    Common Use
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 text-gray-800">
                    #10 Business
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-gray-800">
                    4.125&quot; x 9.5&quot;
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-gray-800">
                    Letters, invoices
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 text-gray-800">
                    #9 Business
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-gray-800">
                    3.875&quot; x 8.875&quot;
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-gray-800">
                    Statements, notices
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 text-gray-800">
                    A4
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-gray-800">
                    4.25&quot; x 6.25&quot;
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-gray-800">
                    Greeting cards
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 text-gray-800">
                    6x9
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-gray-800">
                    6&quot; x 9&quot;
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-gray-800">
                    Photos, certificates
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
            <p className="text-yellow-800">
              <strong>Important:</strong> Postal services require minimum
              dimensions of 3.5 x 5 inches for standard processing. Maximum
              standard size reaches 6.125 x 11.5 inches.
            </p>
          </div>
        </section>

        {/* Section 2: How to Address an Envelope */}
        <section
          id="addressing"
          className="bg-white rounded-lg shadow-md p-8 mb-8"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            ✍️ How to Address an Envelope
          </h2>

          <p className="text-gray-700 mb-6">
            Proper envelope addressing requires three essential components: the
            recipient&apos;s address in the center, the return address in the
            upper left corner, and correct stamp placement in the upper right
            corner.
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Writing the Recipient&apos;s Address
          </h3>

          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <h4 className="font-semibold mb-3 text-gray-900">Basic Format:</h4>
            <div className="bg-white p-4 rounded border font-mono text-sm text-gray-900">
              <div>John Smith</div>
              <div>123 Main Street</div>
              <div>Chicago, IL 60601</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="font-semibold text-lg mb-3">✅ Do This:</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Write the full name on the first line</li>
                <li>• Include house number and street name</li>
                <li>• Use official state abbreviations</li>
                <li>• Add apartment numbers after street address</li>
                <li>• Use &quot;Apt&quot; followed by the number</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-3">❌ Avoid This:</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Using nicknames or incomplete names</li>
                <li>• Abbreviating street names incorrectly</li>
                <li>• Forgetting apartment or unit numbers</li>
                <li>• Using incorrect ZIP codes</li>
                <li>• Writing in light or faded ink</li>
              </ul>
            </div>
          </div>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Formatting the Return Address
          </h3>

          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 mb-6">
            <p className="text-blue-800">
              <strong>Pro Tip:</strong> The return address occupies the upper
              left corner of the envelope&apos;s front side. This placement
              allows postal services to return undeliverable mail efficiently.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <h4 className="font-semibold mb-3 text-gray-900">
              Return Address Format:
            </h4>
            <div className="bg-white p-4 rounded border font-mono text-sm text-gray-900">
              <div>Jane Doe</div>
              <div>456 Oak Avenue</div>
              <div>Denver, CO 80202</div>
            </div>
          </div>
        </section>

        {/* CTA Section - Middle */}
        <div className="bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg shadow-md p-6 mb-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-2">Need Perfect Formatting?</h2>
          <p className="mb-4">
            Our interactive tool follows all USPS guidelines and validates
            addresses in real-time!
          </p>
          <Link
            href="/"
            className="inline-block px-6 py-3 bg-white text-purple-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Format Your Envelope Now →
          </Link>
        </div>

        {/* Section 3: Guidelines for Different Purposes */}
        <section
          id="purposes"
          className="bg-white rounded-lg shadow-md p-8 mb-8"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            🎯 Guidelines for Different Purposes
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-semibold text-blue-600 mb-3">
                💌 Personal Correspondence
              </h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Relaxed formatting standards</li>
                <li>• First names or nicknames OK</li>
                <li>• Handwritten addresses preferred</li>
                <li>• Creative envelope designs allowed</li>
                <li>
                  • Use &quot;Mr.&quot; or &quot;Ms.&quot; for acquaintances
                </li>
              </ul>
            </div>

            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-semibold text-green-600 mb-3">
                💼 Business and Formal
              </h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Professional formatting required</li>
                <li>• Complete formal titles mandatory</li>
                <li>• Company names on separate lines</li>
                <li>• Typed addresses when possible</li>
                <li>• Standard white/cream envelopes</li>
              </ul>
            </div>

            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-semibold text-purple-600 mb-3">
                💒 Special Occasions
              </h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Strict etiquette rules apply</li>
                <li>• Spell out all names completely</li>
                <li>• No abbreviations allowed</li>
                <li>• Formal titles consistently used</li>
                <li>• Calligraphy preferred</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 4: Mailing and Postage Details */}
        <section
          id="postage"
          className="bg-white rounded-lg shadow-md p-8 mb-8"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            📬 Mailing and Postage Details
          </h2>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Current Postage Rates
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">
                Standard Letters
              </h4>
              <p className="text-green-700 text-sm mb-2">
                Up to 1 ounce: <strong>$0.78</strong>
              </p>
              <p className="text-green-700 text-sm">
                Each additional ounce: <strong>$0.24</strong>
              </p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">
                Large Envelopes
              </h4>
              <p className="text-blue-700 text-sm mb-2">
                Starting at: <strong>$1.50</strong>
              </p>
              <p className="text-blue-700 text-sm">
                For sizes over 6⅛&quot; x 11½&quot; x ¼&quot;
              </p>
            </div>
          </div>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Size Requirements
          </h3>

          <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500 mb-6">
            <h4 className="font-semibold text-yellow-800 mb-2">
              Minimum & Maximum Dimensions
            </h4>
            <p className="text-yellow-800 text-sm mb-2">
              <strong>Minimum:</strong> 3½ inches high by 5 inches long
            </p>
            <p className="text-yellow-800 text-sm">
              <strong>Maximum (Standard):</strong> 6⅛ inches high by 11½ inches
              long by ¼ inch thick
            </p>
          </div>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            International Mail
          </h3>

          <p className="text-gray-700 mb-4">
            International mail requires additional forms and higher postage
            rates. First-Class Mail International starts at $1.55 for letters up
            to 1 ounce to most countries.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-2">Processing Times:</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Canada and Mexico: 7-21 business days</li>
                <li>• Europe and Asia: 7-21 business days</li>
                <li>• Other destinations: 7-28 business days</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Required Forms:</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• PS Form 2976 (under $400)</li>
                <li>• PS Form 2976-A (over $400)</li>
                <li>• Commercial invoices (business)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 5: Common Mistakes to Avoid */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            ⚠️ Common Mistakes to Avoid
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
              <h3 className="font-semibold text-red-800 mb-3">
                Critical Errors
              </h3>
              <ul className="space-y-2 text-red-700 text-sm">
                <li>• Missing return addresses</li>
                <li>• Incorrect ZIP codes</li>
                <li>• Insufficient postage</li>
                <li>• Unreadable handwriting</li>
                <li>• Wrong address placement</li>
              </ul>
            </div>

            <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
              <h3 className="font-semibold text-orange-800 mb-3">
                Formatting Issues
              </h3>
              <ul className="space-y-2 text-orange-700 text-sm">
                <li>• Creative fonts that machines can&apos;t read</li>
                <li>• Stickers over address areas</li>
                <li>• Smudged or water-damaged ink</li>
                <li>• Decorations interfering with processing</li>
                <li>• Inconsistent addressing styles</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <div className="bg-gradient-to-r from-green-600 to-blue-700 rounded-lg shadow-md p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Perfect Your Envelope?
          </h2>
          <p className="text-xl mb-6">
            Skip the guesswork! Our interactive formatter ensures USPS
            compliance with real-time validation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-block px-8 py-4 bg-white text-blue-600 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              🚀 Try Our Formatter
            </Link>
            <Link
              href="#basics"
              className="inline-block px-8 py-4 border-2 border-white text-white rounded-lg font-bold text-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              📚 Re-read Guide
            </Link>
          </div>
        </div>

        {/* Quick Tips Box */}
        <div className="bg-white rounded-lg shadow-md p-6 mt-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            💡 Quick Reference Tips
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="text-center p-3 bg-blue-50 rounded">
              <div className="text-2xl mb-2">📍</div>
              <div className="text-gray-900">
                <strong>Return Address</strong>
                <br />
                Upper left corner
              </div>
            </div>
            <div className="text-center p-3 bg-green-50 rounded">
              <div className="text-2xl mb-2">🎯</div>
              <div className="text-gray-900">
                <strong>Recipient Address</strong>
                <br />
                Center of envelope
              </div>
            </div>
            <div className="text-center p-3 bg-purple-50 rounded">
              <div className="text-2xl mb-2">📮</div>
              <div className="text-gray-900">
                <strong>Stamp Placement</strong>
                <br />
                Upper right corner
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mt-8 text-center">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            Questions About Envelope Formatting?
          </h3>
          <p className="text-gray-600 mb-4">
            Need additional help with addressing guidelines or have specific
            questions about USPS standards?
          </p>
          <a
            href="mailto:contact@howtoaddress.pro"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            <span className="mr-2">📧</span>
            contact@howtoaddress.pro
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-300 mb-2">
              Complete Guide to Envelope Addressing • USPS Compliant Formatting
            </p>
            <p className="text-gray-400 text-sm mb-4">
              Professional envelope writing guidance and interactive tools
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                Try Interactive Envelope Formatter
              </Link>
              <span className="hidden sm:block text-gray-500">•</span>
              <a
                href="mailto:contact@howtoaddress.pro"
                className="text-blue-400 hover:text-blue-300 transition-colors flex items-center"
              >
                <span className="mr-1">📧</span>
                contact@howtoaddress.pro
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
