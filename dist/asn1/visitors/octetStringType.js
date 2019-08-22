"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const octetString_1 = require("../classes/octetString");
/**
 * ANTLR4 grammar
 * ```
 * octetStringType  :  OCTET_LITERAL STRING_LITERAL
 * ```
 */
class OctetStringTypeVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    defaultResult() {
        return undefined;
    }
    visitChildren(octetStringTypeCtx) {
        return new octetString_1.OctetString();
    }
}
exports.OctetStringTypeVisitor = OctetStringTypeVisitor;
