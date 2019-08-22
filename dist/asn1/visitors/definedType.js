"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const TerminalNode_1 = require("antlr4ts/tree/TerminalNode");
const logging_1 = require("../../utils/logging");
const utils_1 = require("../utils");
const ASN_3gppParser_1 = require("../ASN_3gppParser");
const definedType_1 = require("../classes/definedType");
const actualParameterList_1 = require("./actualParameterList");
/**
 * ANTLR4 grammar
 * ```
 * definedType :
 * IDENTIFIER (DOT IDENTIFIER)? actualParameterList?
 * ```
 */
class DefinedTypeVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    defaultResult() {
        return undefined;
    }
    visitChildren(definedTypeCtx) {
        const definedType = new definedType_1.DefinedType();
        const childCtxes = definedTypeCtx.children;
        childCtxes.forEach((childCtx) => {
            if (childCtx instanceof ASN_3gppParser_1.ActualParameterListContext) {
                definedType.actualParameterList = childCtx.accept(new actualParameterList_1.ActualParameterListVisitor());
            }
            else if (childCtx instanceof TerminalNode_1.TerminalNode) {
                const text = childCtx.text;
                if (text !== '.') {
                    if (!definedType.typeReference) {
                        definedType.typeReference = text;
                    }
                    else {
                        definedType.moduleReference = definedType.typeReference;
                        definedType.typeReference = text;
                    }
                }
            }
            else {
                logging_1.log.warn(utils_1.getLogWithAsn1(definedTypeCtx, 'Not supported ASN.1'));
            }
        });
        return definedType;
    }
}
exports.DefinedTypeVisitor = DefinedTypeVisitor;
