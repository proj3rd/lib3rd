"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const logging_1 = require("../../utils/logging");
const ASN_3gppParser_1 = require("../ASN_3gppParser");
const utils_1 = require("../utils");
const asnType_1 = require("./asnType");
const definedObjectClass_1 = require("./definedObjectClass");
/**
 * ANTLR4 grammar
 * ```
 * governor : asnType | definedObjectClass
 * ```
 */
class GovernorVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    defaultResult() {
        return undefined;
    }
    visitChildren(governorCtx) {
        const childCtx = governorCtx.children[0];
        if (childCtx instanceof ASN_3gppParser_1.AsnTypeContext) {
            return childCtx.accept(new asnType_1.AsnTypeVisitor());
        }
        else if (childCtx instanceof ASN_3gppParser_1.DefinedObjectClassContext) {
            return childCtx.accept(new definedObjectClass_1.DefinedObjectClassVisitor());
        }
        else {
            logging_1.log.warn(new Error(utils_1.getLogWithAsn1(governorCtx, 'Unknown ASN.1')));
        }
    }
}
exports.GovernorVisitor = GovernorVisitor;
