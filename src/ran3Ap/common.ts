// In case of section information is not contained in heading tag (h1-h6)
// Supports form of X.Y.Z and X.Y.Za
export const reSection = /^\b[1-9A-Z]\d*(\.[1-9]\d*)*\.[1-9]\d*\w*\b\s+?.+$/;
export const reReference = /\b[1-9A-Z]\d*(\.[1-9]\d*)*\.[1-9]\d*\w*\b/;
