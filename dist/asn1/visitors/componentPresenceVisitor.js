"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComponentPresenceVisitor = void 0;
/* eslint-disable class-methods-use-this */
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const unimpl_1 = require("unimpl");
const componentPresence_1 = require("../classes/componentPresence");
/**
 * # Grammar
 * ```
 * componentPresence: IDENTIFIER (ABSENT_LITERAL | PRESENT_LITERAL)
 * ```
 */
class ComponentPresenceVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    visitChildren(ctx) {
        const nameCtx = ctx.getChild(0);
        const name = nameCtx.text;
        const presenceCtx = ctx.getChild(1);
        const presence = presenceCtx.text;
        if (presence !== 'ABSENT' && presence !== 'PRESENT') {
            throw Error();
        }
        return new componentPresence_1.ComponentPresence(name, presence);
    }
    defaultResult() {
        return unimpl_1.unimpl();
    }
}
exports.ComponentPresenceVisitor = ComponentPresenceVisitor;
//# sourceMappingURL=componentPresenceVisitor.js.map