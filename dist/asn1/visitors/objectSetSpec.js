"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const logging_1 = require("../../utils/logging");
const TerminalNode_1 = require("antlr4ts/tree/TerminalNode");
const ASN_3gppParser_1 = require("../ASN_3gppParser");
const extensionMarker_1 = require("../classes/extensionMarker");
const objectSetSpec_1 = require("../classes/objectSetSpec");
const utils_1 = require("../utils");
const additionalElementSetSpec_1 = require("./additionalElementSetSpec");
const rootElementSetSpec_1 = require("./rootElementSetSpec");
/**
 * ANTLR4 grammar
 * ```
 * objectSetSpec :
 *   rootElementSetSpec (COMMA ELLIPSIS (COMMA additionalElementSetSpec )?)?
 *  | ELLIPSIS (COMMA additionalElementSetSpec )?
 * ```
 */
class ObjectSetSpecVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    defaultResult() {
        return new objectSetSpec_1.ObjectSetSpec([]);
    }
    visitChildren(objectSetSpecCtx) {
        const objectSetSpec = [];
        const { children } = objectSetSpecCtx;
        children.forEach((childCtx) => {
            if (childCtx instanceof ASN_3gppParser_1.RootElementSetSpecContext) {
                const rootElementSetSpec = childCtx.accept(new rootElementSetSpec_1.RootElementSetSpecVisitor());
                objectSetSpec.splice(objectSetSpec.length, 0, ...rootElementSetSpec);
            }
            else if (childCtx instanceof ASN_3gppParser_1.AdditionalElementSetSpecContext) {
                const additionalElementSetSpec = childCtx.accept(new additionalElementSetSpec_1.AdditionalElementSetSpecVisitor());
                objectSetSpec.splice(objectSetSpec.length, 0, ...additionalElementSetSpec);
            }
            else if (childCtx instanceof TerminalNode_1.TerminalNode) {
                if (childCtx.text === '...') {
                    objectSetSpec.push(new extensionMarker_1.ExtensionMarker());
                }
            }
            else {
                logging_1.log.warn(new Error(utils_1.getLogWithAsn1(childCtx, 'Not supported ASN.1')));
            }
        });
        return new objectSetSpec_1.ObjectSetSpec(objectSetSpec);
    }
}
exports.ObjectSetSpecVisitor = ObjectSetSpecVisitor;
