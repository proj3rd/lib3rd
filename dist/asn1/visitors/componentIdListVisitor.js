"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComponentIdListVisitor = void 0;
/* eslint-disable class-methods-use-this */
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const unimpl_1 = require("unimpl");
/**
 * # Grammar
 * ```
 * componentIdList: IDENTIFIER (DOT IDENTIFIER)*
 * ```
 */
class ComponentIdListVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    visitChildren(ctx) {
        const componentIdList = [];
        const { childCount } = ctx;
        for (let i = 0; i < childCount; i += 2) {
            componentIdList.push(ctx.getChild(i).text);
        }
        return componentIdList;
    }
    defaultResult() {
        return unimpl_1.unimpl();
    }
}
exports.ComponentIdListVisitor = ComponentIdListVisitor;
//# sourceMappingURL=componentIdListVisitor.js.map