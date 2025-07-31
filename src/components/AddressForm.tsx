"use client";

import React from "react";
import { AddressData } from "@/utils/formatAddress";
import Tooltip from "./Tooltip";

interface AddressFormProps {
  senderAddress: AddressData;
  recipientAddress: AddressData;
  onSenderChange: (address: AddressData) => void;
  onRecipientChange: (address: AddressData) => void;
}

export default function AddressForm({
  senderAddress,
  recipientAddress,
  onSenderChange,
  onRecipientChange,
}: AddressFormProps) {
  const handleSenderChange = (field: keyof AddressData, value: string) => {
    onSenderChange({
      ...senderAddress,
      [field]: value,
    });
  };

  const handleRecipientChange = (field: keyof AddressData, value: string) => {
    onRecipientChange({
      ...recipientAddress,
      [field]: value,
    });
  };

  const inputClasses =
    "form-input w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-black";

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
      {/* Sender Address Form */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
          <span className="mr-2">↩️</span>
          Return Address (Sender)
        </h2>
        <div className="space-y-4">
          <div>
            <Tooltip content="Enter your full name as it should appear on the envelope">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name *
              </label>
            </Tooltip>
            <input
              type="text"
              value={senderAddress.name}
              onChange={(e) =>
                handleSenderChange("name", e.target.value.toUpperCase())
              }
              placeholder="John Doe"
              className={inputClasses}
              required
            />
          </div>

          <div>
            <Tooltip content="Street number and name (e.g., 123 Main Street)">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Address Line 1 *
              </label>
            </Tooltip>
            <input
              type="text"
              value={senderAddress.line1}
              onChange={(e) => handleSenderChange("line1", e.target.value)}
              placeholder="123 Main Street"
              className={inputClasses}
              required
            />
          </div>

          <div>
            <Tooltip content="Apartment, suite, or unit number (optional)">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Address Line 2
              </label>
            </Tooltip>
            <input
              type="text"
              value={senderAddress.line2 || ""}
              onChange={(e) => handleSenderChange("line2", e.target.value)}
              placeholder="Apt 4B"
              className={inputClasses}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Tooltip content="City name (will be converted to ALL CAPS)">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  City *
                </label>
              </Tooltip>
              <input
                type="text"
                value={senderAddress.city}
                onChange={(e) => handleSenderChange("city", e.target.value)}
                placeholder="Springfield"
                className={inputClasses}
                required
              />
            </div>

            <div>
              <Tooltip content="Two-letter state abbreviation (e.g., IL, CA, NY)">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  State *
                </label>
              </Tooltip>
              <input
                type="text"
                value={senderAddress.state}
                onChange={(e) => handleSenderChange("state", e.target.value)}
                placeholder="IL"
                maxLength={2}
                className={inputClasses}
                required
              />
            </div>
          </div>

          <div>
            <Tooltip content="5-digit ZIP code or ZIP+4 format (12345 or 12345-6789)">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                ZIP Code *
              </label>
            </Tooltip>
            <input
              type="text"
              value={senderAddress.zipCode}
              onChange={(e) => handleSenderChange("zipCode", e.target.value)}
              placeholder="62704"
              className={inputClasses}
              required
            />
          </div>
        </div>
      </div>

      {/* Recipient Address Form */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
          <span className="mr-2">📮</span>
          Recipient Address
        </h2>
        <div className="space-y-4">
          <div>
            <Tooltip content="Full name of the recipient">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name *
              </label>
            </Tooltip>
            <input
              type="text"
              value={recipientAddress.name}
              onChange={(e) => handleRecipientChange("name", e.target.value)}
              placeholder="Jane Smith"
              className={inputClasses}
              required
            />
          </div>

          <div>
            <Tooltip content="Street number and name (e.g., 456 Oak Avenue)">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Address Line 1 *
              </label>
            </Tooltip>
            <input
              type="text"
              value={recipientAddress.line1}
              onChange={(e) => handleRecipientChange("line1", e.target.value)}
              placeholder="456 Oak Avenue"
              className={inputClasses}
              required
            />
          </div>

          <div>
            <Tooltip content="Apartment, suite, or unit number (optional)">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Address Line 2
              </label>
            </Tooltip>
            <input
              type="text"
              value={recipientAddress.line2 || ""}
              onChange={(e) => handleRecipientChange("line2", e.target.value)}
              placeholder="Suite 200"
              className={inputClasses}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Tooltip content="City name (will be converted to ALL CAPS)">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  City *
                </label>
              </Tooltip>
              <input
                type="text"
                value={recipientAddress.city}
                onChange={(e) => handleRecipientChange("city", e.target.value)}
                placeholder="Chicago"
                className={inputClasses}
                required
              />
            </div>

            <div>
              <Tooltip content="Two-letter state abbreviation (e.g., IL, CA, NY)">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  State *
                </label>
              </Tooltip>
              <input
                type="text"
                value={recipientAddress.state}
                onChange={(e) => handleRecipientChange("state", e.target.value)}
                placeholder="IL"
                maxLength={2}
                className={inputClasses}
                required
              />
            </div>
          </div>

          <div>
            <Tooltip content="5-digit ZIP code or ZIP+4 format (12345 or 12345-6789)">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                ZIP Code *
              </label>
            </Tooltip>
            <input
              type="text"
              value={recipientAddress.zipCode}
              onChange={(e) => handleRecipientChange("zipCode", e.target.value)}
              placeholder="60601"
              className={inputClasses}
              required
            />
          </div>
        </div>
      </div>
    </div>
  );
}
