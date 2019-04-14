"use strict";
exports.__esModule = true;
/**
 * Regular expression for section number and title. Support formats as supported by [[reReference]].
 *
 * *This is defined to determine whther section number and title are not contained in heading tag (`h1`-`h6`)*
 */
exports.reSection = /^\b[1-9A-Z]\d*(\.[1-9]\d*)*\.[1-9]\d*\w*\b\s+?.+$/;
/**
 * Regular expression for reference represented by section number. Support following formats:
 * - 9.1.2.3
 * - 9.1.2.3a
 * - A.1.2.3
 * - A.1.2.3a
 */
exports.reReference = /\b[1-9A-Z]\d*(\.[1-9]\d*)*\.[1-9]\d*\w*\b/;
