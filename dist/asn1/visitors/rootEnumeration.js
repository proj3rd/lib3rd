"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var enumeration_1 = require("./enumeration");
/**
 * ANTLR4 grammar
 * ```
 * rootEnumeration : enumeration
 * ```
 */
var RootEnumerationVisitor = /** @class */ (function () {
    function RootEnumerationVisitor() {
    }
    RootEnumerationVisitor.prototype.visitChildren = function (rootEnumerationCtx) {
        var enumerationCtx = rootEnumerationCtx.children[0];
        return enumerationCtx.accept(new enumeration_1.EnumerationVisitor());
    };
    return RootEnumerationVisitor;
}());
exports.RootEnumerationVisitor = RootEnumerationVisitor;
