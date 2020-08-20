"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const enumeratedType_1 = require("../classes/enumeratedType");
const enumerationsVisitor_1 = require("./enumerationsVisitor");
/**
 * # Grammar
 * ```
 * enumeratedType: ENUMERATED_LITERAL L_BRACE enumerations R_BRACE
 * ```
 */
class EnumeratedTypeVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    visitChildren(ctx) {
        const enumerationsCtx = ctx.enumerations();
        const enumerations = enumerationsCtx.accept(new enumerationsVisitor_1.EnumerationsVisitor());
        return new enumeratedType_1.EnumeratedType(enumerations);
    }
    defaultResult() {
        return new enumeratedType_1.EnumeratedType([]);
    }
}
exports.EnumeratedTypeVisitor = EnumeratedTypeVisitor;
//# sourceMappingURL=enumeratedTypeVisitor.js.map