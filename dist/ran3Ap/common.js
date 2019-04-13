"use strict";
exports.__esModule = true;
// In case of section information is not contained in heading tag (h1-h6)
// Supports form of X.Y.Z and X.Y.Za
exports.reSection = /^\b[1-9A-Z]\d*(\.[1-9]\d*)*\.[1-9]\d*\w*\b\s+?.+$/;
exports.reReference = /\b[1-9A-Z]\d*(\.[1-9]\d*)*\.[1-9]\d*\w*\b/;
