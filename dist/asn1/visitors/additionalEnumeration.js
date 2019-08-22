"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const enumeration_1 = require("./enumeration");
/**
 * ANTLR4 grammar
 * ```
 * additionalEnumeration : enumeration
 * ```
 */
class AdditionalEnumerationVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    defaultResult() {
        return [];
    }
    visitChildren(additionalEnumerationCtx) {
        const enumerationCtx = additionalEnumerationCtx.children[0];
        return enumerationCtx.accept(new enumeration_1.EnumerationVisitor());
    }
}
exports.AdditionalEnumerationVisitor = AdditionalEnumerationVisitor;
