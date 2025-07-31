"use client";

import React, { useEffect, useState } from "react";
import {
  AddressData,
  formatAddress,
  isValidAddress,
} from "@/utils/formatAddress";

interface EnvelopePreviewProps {
  senderAddress: AddressData;
  recipientAddress: AddressData;
  isCleared: boolean;
}

interface Correction {
  text: string;
  type: string;
}

interface ValidationState {
  isValidating: boolean;
  isValidated: boolean;
  error: string | null;
  validatedSender?: AddressData;
  validatedRecipient?: AddressData;
  hasCorrections: boolean;
  corrections: Correction[];
}

export default function EnvelopePreview({
  senderAddress,
  recipientAddress,
  isCleared,
}: EnvelopePreviewProps) {
  const [validationState, setValidationState] = useState<ValidationState>({
    isValidating: false,
    isValidated: false,
    error: null,
    hasCorrections: false,
    corrections: [],
  });

  const senderValid = isValidAddress(senderAddress);
  const recipientValid = isValidAddress(recipientAddress);
  const canValidate = senderValid && recipientValid;

  useEffect(() => {
    if (isCleared) {
      setValidationState({
        isValidating: false,
        isValidated: false,
        error: null,
        hasCorrections: false,
        corrections: [],
      });
    }
  }, [isCleared]);

  const handleValidateAddresses = async () => {
    if (!canValidate) return;

    setValidationState({
      isValidating: true,
      isValidated: false,
      error: null,
      hasCorrections: false,
      corrections: [],
    });

    try {
      // Call our Next.js API route instead of USPS directly
      const response = await fetch("/api/validate-address", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          senderAddress,
          recipientAddress,
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || "Validation failed");
      }

      const { senderValidation, recipientValidation } = result;
      console.log(
        "senderValidation",
        senderValidation,
        "recipientValidation",
        recipientValidation
      );
      // Check for validation errors
      if (senderValidation.addressValidateResponse?.address?.error) {
        throw new Error(
          `Sender address error: ${senderValidation.addressValidateResponse.address.error.description}`
        );
      }
      if (recipientValidation.addressValidateResponse?.address?.error) {
        throw new Error(
          `Recipient address error: ${recipientValidation.addressValidateResponse.address.error.description}`
        );
      }

      // Update addresses with validated data if available
      const validatedSender = { ...senderAddress };
      const validatedRecipient = { ...recipientAddress };
      const hasCorrections =
        senderValidation.corrections.length > 0 ||
        recipientValidation.corrections.length > 0;

      if (senderValidation.address) {
        validatedSender.line1 =
          senderValidation.address.streetAddress || senderAddress.line1;
        validatedSender.line2 =
          senderValidation.address.secondaryAddress ||
          senderAddress.line2 ||
          "";
        validatedSender.city =
          senderValidation.address.cityName || senderAddress.city;
        validatedSender.state =
          senderValidation.address.state || senderAddress.state;
        validatedSender.zipCode =
          senderValidation.address.ZIPCode || senderAddress.zipCode;
      }

      if (recipientValidation.address) {
        validatedRecipient.line1 =
          recipientValidation.address.streetAddress || recipientAddress.line1;
        validatedRecipient.line2 =
          recipientValidation.address.secondaryAddress ||
          recipientAddress.line2 ||
          "";
        validatedRecipient.city =
          recipientValidation.address.cityName || recipientAddress.city;
        validatedRecipient.state =
          recipientValidation.address.state || recipientAddress.state;
        validatedRecipient.zipCode =
          recipientValidation.address.ZIPCode || recipientAddress.zipCode;
      }

      const corrections = [
        ...(senderValidation.corrections[0].text
          ? [
              {
                text: `${senderValidation.corrections[0].text}(or information might be incorrect)`,
                type: "Improve Sender Address",
              },
            ]
          : []),
        ...(recipientValidation.corrections[0].text
          ? [
              {
                text: `${recipientValidation.corrections[0].text}(or information might be incorrect)`,
                type: "Improve Recipient Address",
              },
            ]
          : []),
      ];

      setValidationState({
        isValidating: false,
        isValidated: true,
        error: null,
        validatedSender,
        validatedRecipient,
        hasCorrections,
        corrections,
      });
    } catch (error) {
      console.error("Validation error:", error);
      setValidationState({
        isValidating: false,
        isValidated: true,
        error:
          error instanceof Error
            ? error.message
            : "Failed to validate addresses with USPS. You will see the addresses as they are entered.",
        hasCorrections: false,
        corrections: [],
      });
    }
  };

  const displaySender = validationState.validatedSender || senderAddress;
  const displayRecipient =
    validationState.validatedRecipient || recipientAddress;
  const formattedSender = formatAddress(displaySender);
  const formattedRecipient = formatAddress(displayRecipient);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800 flex items-center">
          <span className="mr-2">✉️</span>
          Envelope Preview
        </h2>

        {/* Validation Button */}
        <button
          onClick={handleValidateAddresses}
          disabled={!canValidate || validationState.isValidating}
          className={`px-6 py-2 rounded-lg font-medium transition-colors flex items-center ${
            canValidate && !validationState.isValidating
              ? "bg-green-600 hover:bg-green-700 text-white shadow-md"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          {validationState.isValidating ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
              Validating...
            </>
          ) : (
            <>
              <span className="mr-2">🔍</span>
              Validate with USPS
            </>
          )}
        </button>
      </div>

      {/* Validation Requirements */}
      {!canValidate && (
        <div className="mb-4 bg-yellow-50 p-4 rounded-lg">
          <h3 className="text-sm font-semibold text-yellow-800 mb-2">
            ⚠️ Complete Required Information:
          </h3>
          <ul className="text-xs text-yellow-700 space-y-1">
            {!senderValid && (
              <li>• Complete sender address required for validation</li>
            )}
            {!recipientValid && (
              <li>• Complete recipient address required for validation</li>
            )}
          </ul>
        </div>
      )}

      {/* Validation Error */}
      {validationState.error && (
        <div className="mb-4 bg-red-50 p-4 rounded-lg">
          <h3 className="text-sm font-semibold text-red-800 mb-2">
            ❌ Validation Error:
          </h3>
          <p className="text-xs text-red-700">{validationState.error}</p>
        </div>
      )}

      {/* Corrections */}
      {validationState.hasCorrections && (
        <div className="mb-4 bg-yellow-50 p-4 rounded-lg">
          <h3 className="text-sm font-semibold text-yellow-800 mb-2">
            📝 Improve Addresses:
          </h3>
          <ul className="text-xs text-yellow-700 space-y-1">
            {validationState.corrections.map((correction) => (
              <li key={correction.type}>
                {correction.type}: {correction.text.split(":")[1]}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Success Message */}
      {validationState.isValidated && !validationState.error && (
        <div className="mb-4 bg-green-50 p-4 rounded-lg">
          <div className="text-sm font-semibold text-green-800 flex items-center">
            <span className="mr-2">✅</span>
            Addresses validated successfully with USPS!
          </div>
        </div>
      )}

      {/* Show envelope preview only after validation */}
      {validationState.isValidated ? (
        <>
          {/* USPS #10 Envelope Preview */}
          <div
            className="relative mx-auto bg-white border-2 border-gray-300 envelope-shadow"
            style={{
              width: "100%",
              maxWidth: "640px",
              height: "280px",
              aspectRatio: "9.5 / 4.125",
            }}
          >
            {/* Return Address (Top Left) */}
            <div className="absolute top-4 left-4 w-48">
              <div className="usps-text text-xs leading-tight text-gray-800">
                <div className="font-medium">{formattedSender.name}</div>
                <div>{formattedSender.line1}</div>
                {formattedSender.line2 && <div>{formattedSender.line2}</div>}
                <div>{formattedSender.cityStateZip}</div>
              </div>
            </div>

            {/* Stamp Area (Top Right) */}
            <div className="absolute top-4 right-4 w-16 h-20 border-2 border-dashed border-gray-300 flex items-center justify-center">
              <div className="text-xs text-gray-400 text-center leading-tight">
                STAMP
                <br />
                HERE
              </div>
            </div>

            {/* Recipient Address (Center) */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-72 text-center">
                <div className="usps-text text-sm leading-relaxed text-gray-900 font-medium">
                  <div className="text-lg mb-1">{formattedRecipient.name}</div>
                  <div className="mb-1">{formattedRecipient.line1}</div>
                  {formattedRecipient.line2 && (
                    <div className="mb-1">{formattedRecipient.line2}</div>
                  )}
                  <div className="text-base">
                    {formattedRecipient.cityStateZip}
                  </div>
                </div>
              </div>
            </div>

            {/* USPS Processing Area (Bottom) */}
            <div className="absolute bottom-4 left-4 right-4 h-8 border-t border-dashed border-gray-200">
              <div className="text-xs text-gray-400 mt-1">
                USPS Processing Area
              </div>
            </div>
          </div>

          {/* Format Guidelines */}
          <div className="mt-6 bg-blue-50 p-4 rounded-lg">
            <h3 className="text-sm font-semibold text-blue-800 mb-2">
              📋 USPS Formatting Applied:
            </h3>
            <ul className="text-xs text-blue-700 space-y-1">
              <li>• Addresses validated with USPS API</li>
              <li>• ALL CAPS formatting</li>
              <li>• Abbreviated street suffixes (Street → ST, Avenue → AVE)</li>
              <li>• Abbreviated directionals (North → N, Southwest → SW)</li>
              <li>
                • Abbreviated unit designators (Apartment → APT, Suite → STE)
              </li>
              <li>• Removed punctuation marks</li>
              <li>• Proper spacing and line breaks</li>
            </ul>
          </div>
        </>
      ) : (
        <div className="text-center py-12 text-gray-500">
          <div className="text-6xl mb-4">📮</div>
          <h3 className="text-lg font-medium mb-2">
            Ready to Preview Your Envelope
          </h3>
          <p className="text-sm">
            Complete both addresses and click &quot;Validate with USPS&quot; to
            see your formatted envelope
          </p>
        </div>
      )}
    </div>
  );
}
