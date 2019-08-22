"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const componentPresence_1 = require("../classes/componentPresence");
/**
 * ANTLR4 grammar
 * ```
 * componentPresence: IDENTIFIER (ABSENT_LITERAL | PRESENT_LITERAL)
 * ```
 */
class ComponentPresenceVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    defaultResult() {
        return undefined;
    }
    visitChildren(componentPresenceCtx) {
        const childCtxes = componentPresenceCtx.children;
        return new componentPresence_1.ComponentPresence(childCtxes[0].text, childCtxes[1].text);
    }
}
exports.ComponentPresenceVisitor = ComponentPresenceVisitor;
