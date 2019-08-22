"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const TerminalNode_1 = require("antlr4ts/tree/TerminalNode");
const logging_1 = require("../../utils/logging");
const utils_1 = require("../utils");
const ASN_3gppParser_1 = require("../ASN_3gppParser");
const namedType_1 = require("./namedType");
const value_1 = require("./value");
/**
 * ANTLR4 grammar
 * ```
 * componentType  :
 *  namedType (OPTIONAL_LITERAL | DEFAULT_LITERAL value )?
 *  |  COMPONENTS_LITERAL OF_LITERAL  asnType
 * ```
 */
class ComponentTypeVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    defaultResult() {
        return undefined;
    }
    visitChildren(componentTypeCtx) {
        const childCtxes = componentTypeCtx.children;
        let componentType;
        if (childCtxes[0] instanceof ASN_3gppParser_1.NamedTypeContext) {
            const namedTypeCtx = childCtxes[0];
            componentType = namedTypeCtx.accept(new namedType_1.NamedTypeVisitor());
            switch (childCtxes.length) {
                case 1: {
                    break;
                }
                case 2: {
                    componentType.optional = true;
                    break;
                }
                case 3: {
                    const valueCtx = childCtxes[2];
                    const value = valueCtx.accept(new value_1.ValueVisitor());
                    componentType.default = value;
                    break;
                }
                default: {
                    logging_1.log.warn(utils_1.getLogWithAsn1(componentTypeCtx, 'Not suported ASN1:'));
                    break;
                }
            }
        }
        else if (childCtxes[0] instanceof TerminalNode_1.TerminalNode) {
            logging_1.log.warn(utils_1.getLogWithAsn1(componentTypeCtx, 'COMPONENTS OF not supported:'));
        }
        else {
            logging_1.log.warn(utils_1.getLogWithAsn1(componentTypeCtx, 'Not suported ASN1:'));
        }
        return componentType;
    }
}
exports.ComponentTypeVisitor = ComponentTypeVisitor;
