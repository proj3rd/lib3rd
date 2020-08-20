"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const unimpl_1 = require("unimpl");
const componentPresenceVisitor_1 = require("./componentPresenceVisitor");
/**
 * # Grammar
 * ```
 * componentPresenceList: (componentPresence) (COMMA componentPresence)*
 * ```
 */
class ComponentPresenceListVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    visitChildren(ctx) {
        const componentPresenceCtxes = ctx.componentPresence();
        return componentPresenceCtxes.map((componentPresenceCtx) => componentPresenceCtx.accept(new componentPresenceVisitor_1.ComponentPresenceVisitor()));
    }
    defaultResult() {
        return unimpl_1.unimpl();
    }
}
exports.ComponentPresenceListVisitor = ComponentPresenceListVisitor;
//# sourceMappingURL=componentPresenceListVisitor.js.map