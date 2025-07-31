// USPS address formatting utilities

export interface AddressData {
  name: string;
  line1: string;
  line2?: string;
  city: string;
  state: string;
  zipCode: string;
}

// USPS standard street suffix abbreviations
const streetSuffixes: Record<string, string> = {
  'ALLEY': 'ALY',
  'AVENUE': 'AVE',
  'BOULEVARD': 'BLVD',
  'CIRCLE': 'CIR',
  'COURT': 'CT',
  'DRIVE': 'DR',
  'EXPRESSWAY': 'EXPY',
  'HIGHWAY': 'HWY',
  'LANE': 'LN',
  'PARKWAY': 'PKWY',
  'PLACE': 'PL',
  'PLAZA': 'PLZ',
  'ROAD': 'RD',
  'SQUARE': 'SQ',
  'STREET': 'ST',
  'TERRACE': 'TER',
  'TRAIL': 'TRL',
  'WAY': 'WAY'
};

// USPS standard directional abbreviations
const directionals: Record<string, string> = {
  'NORTH': 'N',
  'SOUTH': 'S',
  'EAST': 'E',
  'WEST': 'W',
  'NORTHEAST': 'NE',
  'NORTHWEST': 'NW',
  'SOUTHEAST': 'SE',
  'SOUTHWEST': 'SW'
};

// USPS standard unit designators
const unitDesignators: Record<string, string> = {
  'APARTMENT': 'APT',
  'BUILDING': 'BLDG',
  'FLOOR': 'FL',
  'ROOM': 'RM',
  'SUITE': 'STE',
  'UNIT': 'UNIT'
};

/**
 * Formats a single address line according to USPS standards
 */
export function formatAddressLine(line: string): string {
  if (!line.trim()) return '';
  
  // Convert to uppercase and remove punctuation
  let formatted = line.toUpperCase().replace(/[.,;:!?]/g, '');
  
  // Replace common abbreviations
  Object.entries(streetSuffixes).forEach(([full, abbrev]) => {
    const regex = new RegExp(`\\b${full}\\b`, 'g');
    formatted = formatted.replace(regex, abbrev);
  });
  
  Object.entries(directionals).forEach(([full, abbrev]) => {
    const regex = new RegExp(`\\b${full}\\b`, 'g');
    formatted = formatted.replace(regex, abbrev);
  });
  
  Object.entries(unitDesignators).forEach(([full, abbrev]) => {
    const regex = new RegExp(`\\b${full}\\b`, 'g');
    formatted = formatted.replace(regex, abbrev);
  });
  
  // Clean up extra spaces
  formatted = formatted.replace(/\s+/g, ' ').trim();
  
  return formatted;
}

/**
 * Formats complete address according to USPS standards
 */
export function formatAddress(address: AddressData): {
  name: string;
  line1: string;
  line2: string;
  cityStateZip: string;
} {
  const name = address.name.toUpperCase().replace(/[.,;:!?]/g, '');
  const line1 = formatAddressLine(address.line1);
  const line2 = address.line2 ? formatAddressLine(address.line2) : '';
  const city = address.city.toUpperCase().replace(/[.,;:!?]/g, '');
  const state = address.state.toUpperCase().replace(/[.,;:!?]/g, '');
  const zipCode = address.zipCode.replace(/[^0-9-]/g, '');
  
  const cityStateZip = `${city} ${state} ${zipCode}`.trim();
  
  return {
    name,
    line1,
    line2,
    cityStateZip
  };
}

/**
 * Validates if address has required fields
 */
export function isValidAddress(address: AddressData): boolean {
  return !!(
    address.name.trim() &&
    address.line1.trim() &&
    address.city.trim() &&
    address.state.trim() &&
    address.zipCode.trim()
  );
} 