"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const unimpl_1 = require("unimpl");
const componentType_1 = require("../classes/componentType");
const optionality_1 = require("../classes/optionality");
const namedTypeVisitor_1 = require("./namedTypeVisitor");
const valueVisitor_1 = require("./valueVisitor");
/**
 * # Grammar
 * ```
 * componentType:
 *   namedType (OPTIONAL_LITERAL | DEFAULT_LITERAL value)? |
 *   COMPONENTS_LITERAL OF_LITERAL asnType
 * ```
 */
class ComponentTypeVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    visitChildren(ctx) {
        const namedTypeCtx = ctx.namedType();
        let namedType;
        let optionality;
        if (namedTypeCtx !== undefined) {
            namedType = namedTypeCtx.accept(new namedTypeVisitor_1.NamedTypeVisitor());
            if (ctx.childCount > 1) {
                const secondCtx = ctx.getChild(1);
                switch (secondCtx.text) {
                    case 'OPTIONAL': {
                        optionality = new optionality_1.Optionality();
                        break;
                    }
                    case 'DEFAULT': {
                        const valueCtx = ctx.value();
                        if (valueCtx === undefined) {
                            throw Error();
                        }
                        const value = valueCtx.accept(new valueVisitor_1.ValueVisitor());
                        optionality = new optionality_1.Optionality(value);
                        break;
                    }
                    default: {
                        throw Error(secondCtx.text);
                    }
                }
            }
        }
        if (namedType === undefined) {
            throw Error('Not implemented');
        }
        return new componentType_1.ComponentType(namedType, optionality, '');
    }
    defaultResult() {
        return unimpl_1.unimpl();
    }
}
exports.ComponentTypeVisitor = ComponentTypeVisitor;
//# sourceMappingURL=componentTypeVisitor.js.map