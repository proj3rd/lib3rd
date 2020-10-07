"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable class-methods-use-this */
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const octetStringType_1 = require("../classes/octetStringType");
/**
 * # Grammar
 * ```
 * octetStringType: OCTET_LITERAL STRING_LITERAL
 * ```
 */
class OctetStringTypeVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    // eslint-disable-next-line no-unused-vars
    visitChildren(ctx) {
        return new octetStringType_1.OctetStringType();
    }
    defaultResult() {
        return new octetStringType_1.OctetStringType();
    }
}
exports.OctetStringTypeVisitor = OctetStringTypeVisitor;
//# sourceMappingURL=octetStringTypeVisitor.js.map