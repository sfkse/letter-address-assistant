"use client";

import React, { useState } from "react";
import Link from "next/link";
import AddressForm from "@/components/AddressForm";
import EnvelopePreview from "@/components/EnvelopePreview";
import { AddressData } from "@/utils/formatAddress";

export default function Home() {
  const [senderAddress, setSenderAddress] = useState<AddressData>({
    name: "",
    line1: "",
    line2: "",
    city: "",
    state: "",
    zipCode: "",
  });

  const [recipientAddress, setRecipientAddress] = useState<AddressData>({
    name: "",
    line1: "",
    line2: "",
    city: "",
    state: "",
    zipCode: "",
  });

  const [isCleared, setIsCleared] = useState(false);

  // Example data for demonstration
  const loadExampleData = () => {
    setSenderAddress({
      name: "JOHN DOE",
      line1: "123 MAIN STREET",
      line2: "APT 4B",
      city: "SPRINGFIELD",
      state: "IL",
      zipCode: "62704",
    });

    setRecipientAddress({
      name: "JANE SMITH",
      line1: "456 OAK AVENUE",
      line2: "SUITE 200",
      city: "CHICAGO",
      state: "IL",
      zipCode: "60601",
    });
    setIsCleared(false);
  };

  const clearAllData = () => {
    setSenderAddress({
      name: "",
      line1: "",
      line2: "",
      city: "",
      state: "",
      zipCode: "",
    });

    setRecipientAddress({
      name: "",
      line1: "",
      line2: "",
      city: "",
      state: "",
      zipCode: "",
    });
    setIsCleared(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              ✉️ How to Write an Address on an Envelope
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Interactive envelope formatter that helps you correctly format and
              visualize USPS mailing addresses with real-time preview and
              standards compliance.
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <button
            onClick={loadExampleData}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md flex items-center"
          >
            <span className="mr-2">📝</span>
            Load Example Data
          </button>
          <button
            onClick={clearAllData}
            className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors shadow-md flex items-center"
          >
            <span className="mr-2">🗑️</span>
            Clear All
          </button>
        </div>

        {/* Address Forms */}
        <AddressForm
          senderAddress={senderAddress}
          recipientAddress={recipientAddress}
          onSenderChange={setSenderAddress}
          onRecipientChange={setRecipientAddress}
        />

        {/* Envelope Preview */}
        <EnvelopePreview
          senderAddress={senderAddress}
          recipientAddress={recipientAddress}
          isCleared={isCleared}
        />

        {/* Blog Card */}
        <div className="mt-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg shadow-lg overflow-hidden">
          <div className="px-8 py-6 sm:px-10 sm:py-8">
            <div className="flex items-center justify-between flex-wrap gap-6">
              <div className="flex-1 min-w-0">
                <h2 className="text-2xl font-bold text-white mb-2">
                  📚 Complete Guide to Envelope Writing
                </h2>
                <p className="text-indigo-100 mb-4">
                  Learn everything about proper envelope addressing, USPS
                  standards, formatting rules, and professional presentation
                  tips in our comprehensive guide.
                </p>
                <div className="flex flex-wrap gap-2 text-sm text-indigo-200">
                  <span className="px-2 py-1 bg-indigo-500 rounded">
                    ✓ USPS Standards
                  </span>
                  <span className="px-2 py-1 bg-indigo-500 rounded">
                    ✓ Professional Tips
                  </span>
                  <span className="px-2 py-1 bg-indigo-500 rounded">
                    ✓ Common Mistakes
                  </span>
                  <span className="px-2 py-1 bg-indigo-500 rounded">
                    ✓ Creative Ideas
                  </span>
                </div>
              </div>
              <div className="flex-shrink-0">
                <Link
                  href="/how-to-write-an-envelope"
                  className="inline-block px-6 py-3 bg-white text-indigo-600 rounded-lg font-bold hover:bg-gray-100 transition-colors shadow-md"
                >
                  Read Complete Guide →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Educational Content */}
        <div className="mt-12 bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            📚 USPS Address Formatting Guidelines
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-3">
                Essential Rules
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  Use ALL CAPITAL LETTERS
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  No punctuation marks (periods, commas)
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  Use approved abbreviations
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  Left-align all address lines
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  Include ZIP+4 when possible
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-3">
                Common Abbreviations
              </h3>
              <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                <div>
                  <div className="font-medium mb-2">Street Types:</div>
                  <div>STREET → ST</div>
                  <div>AVENUE → AVE</div>
                  <div>BOULEVARD → BLVD</div>
                  <div>DRIVE → DR</div>
                </div>
                <div>
                  <div className="font-medium mb-2">Unit Types:</div>
                  <div>APARTMENT → APT</div>
                  <div>SUITE → STE</div>
                  <div>BUILDING → BLDG</div>
                  <div>FLOOR → FL</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <h4 className="font-semibold text-blue-800 mb-2">💡 Pro Tip</h4>
            <p className="text-blue-700 text-sm">
              The return address should be placed in the upper left corner,
              while the recipient address should be centered both horizontally
              and vertically on the envelope for optimal processing by USPS
              automated sorting equipment.
            </p>
          </div>

          <div className="mt-6 text-center">
            <Link
              href="/how-to-write-an-envelope"
              className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium"
            >
              📖 Read Our Complete Envelope Writing Guide
            </Link>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-12 bg-white p-6 rounded-lg shadow-md text-center">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            Need Help or Have Questions?
          </h3>
          <p className="text-gray-600 mb-4">
            Get in touch with us for assistance with envelope formatting or any
            other questions.
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400 text-sm mb-4">
              Compliant with USPS Publication 28 addressing standards
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/how-to-write-an-envelope"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                Complete Envelope Writing Guide
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
