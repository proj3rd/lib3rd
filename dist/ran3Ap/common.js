"use strict";
exports.__esModule = true;
// In case of section information is not contained in heading tag (h1-h6)
// Supports form of X.Y.Z and X.Y.Za
exports.reSection = /^\d+(\.\d+)*?\.\d+\w?\s+?.+$/;
exports.reReference = /\d+(\.\d+)*?\.\d+\w?/;
