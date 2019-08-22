"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const logging_1 = require("../../utils/logging");
const utils_1 = require("../utils");
const rootElementSetSpec_1 = require("./rootElementSetSpec");
/**
 * ANTLR4 grammar
 * ```
 * elementSetSpecs :
 *  rootElementSetSpec (COMMA ELLIPSIS (COMMA additionalElementSetSpec)?)?
 * ```
 */
class ElementSetSpecsVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    defaultResult() {
        return undefined;
    }
    visitChildren(elementSetSpecsCtx) {
        const childCtxes = elementSetSpecsCtx.children;
        const rootElementSetSpecCtx = childCtxes[0];
        const elementSetSpecs = rootElementSetSpecCtx.accept(new rootElementSetSpec_1.RootElementSetSpecVisitor());
        if (childCtxes.length > 3) {
            logging_1.log.warn(utils_1.getLogWithAsn1(elementSetSpecsCtx, 'AdditionalElementSetSpec not supported:'));
        }
        else if (childCtxes.length > 1) {
            logging_1.log.warn(utils_1.getLogWithAsn1(elementSetSpecsCtx, 'Extension marker not supported:'));
        }
        return elementSetSpecs;
    }
}
exports.ElementSetSpecsVisitor = ElementSetSpecsVisitor;
