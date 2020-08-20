"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const unimpl_1 = require("unimpl");
const governorVisitor_1 = require("./governorVisitor");
/**
 * # Grammar
 * ```
 * paramGovernor: governor | IDENTIFIER
 * ```
 */
class ParamGovernorVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    visitChildren(ctx) {
        const governorCtx = ctx.governor();
        if (governorCtx === undefined) {
            return ctx.text;
        }
        return governorCtx.accept(new governorVisitor_1.GovernorVisitor());
    }
    defaultResult() {
        return unimpl_1.unimpl();
    }
}
exports.ParamGovernorVisitor = ParamGovernorVisitor;
//# sourceMappingURL=paramGovernorVisitor.js.map