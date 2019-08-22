"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const logging_1 = require("../../utils/logging");
const utils_1 = require("../utils");
const intersections_1 = require("./intersections");
/**
 * ANTLR4 grammar
 * ```
 * unions :   (intersections) (unionMark intersections)*
 * ```
 */
class UnionsVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    defaultResult() {
        return undefined;
    }
    visitChildren(unionsCtx) {
        const childCtxes = unionsCtx.children;
        let unions;
        if (childCtxes.length === 1) {
            unions = childCtxes[0].accept(new intersections_1.IntersectionsVisitor());
        }
        else {
            logging_1.log.warn(utils_1.getLogWithAsn1(unionsCtx, 'Multiple of Intersections\'s not supported:'));
        }
        return unions;
    }
}
exports.UnionsVisitor = UnionsVisitor;
