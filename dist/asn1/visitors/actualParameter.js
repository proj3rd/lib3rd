"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const logging_1 = require("../../utils/logging");
const utils_1 = require("../utils");
const ASN_3gppParser_1 = require("../ASN_3gppParser");
const asnType_1 = require("./asnType");
const value_1 = require("./value");
/**
 * ANTLR4 grammar
 * ```
 * actualParameter : asnType | value
 * ```
 */
class ActualParameterVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    defaultResult() {
        return undefined;
    }
    visitChildren(actualParameterCtx) {
        const childCtx = actualParameterCtx.children[0];
        if (childCtx instanceof ASN_3gppParser_1.AsnTypeContext) {
            return childCtx.accept(new asnType_1.AsnTypeVisitor());
        }
        if (childCtx instanceof ASN_3gppParser_1.ValueContext) {
            return childCtx.accept(new value_1.ValueVisitor());
        }
        logging_1.log.warn(utils_1.getLogWithAsn1(actualParameterCtx, 'Not supported ASN.1'));
    }
}
exports.ActualParameterVisitor = ActualParameterVisitor;
