"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const logging_1 = require("../../utils/logging");
const TerminalNode_1 = require("antlr4ts/tree/TerminalNode");
const ASN_3gppParser_1 = require("../ASN_3gppParser");
const utils_1 = require("../utils");
const builtinType_1 = require("./builtinType");
/**
 * ANTLR4 grammar
 * ```
 * objIdComponents  :
 * 	    	NUMBER
 * 	|    	IDENTIFIER (L_PARAN (NUMBER | definedValue ) R_PARAN)?
 * 	|    	builtinType
 * 	|    	definedValue
 * ```
 */
class ObjIdComponentsVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    defaultResult() {
        return undefined;
    }
    visitChildren(objIdComponentsCtx) {
        const { children } = objIdComponentsCtx;
        let objIdComponents;
        const firstCtx = children[0];
        if (firstCtx instanceof ASN_3gppParser_1.BuiltinTypeContext) {
            objIdComponents = firstCtx.accept(new builtinType_1.BuiltinTypeVisitor());
        }
        else if (firstCtx instanceof ASN_3gppParser_1.DefinedValueContext) {
            logging_1.log.warn(new Error(utils_1.getLogWithAsn1(objIdComponentsCtx, 'DefinedValue not supported')));
        }
        else if (firstCtx instanceof TerminalNode_1.TerminalNode) {
            if (children.length > 1) {
                logging_1.log.warn(new Error('NameAndNumberForm not supported'));
            }
            objIdComponents = firstCtx.text;
            const objIdComponentsNum = Number(objIdComponents);
            objIdComponents = isNaN(objIdComponentsNum) ? objIdComponents : objIdComponentsNum;
        }
        else {
            logging_1.log.warn(new Error(utils_1.getLogWithAsn1(objIdComponentsCtx, 'Not supported ASN.1')));
        }
        return objIdComponents;
    }
}
exports.ObjIdComponentsVisitor = ObjIdComponentsVisitor;
