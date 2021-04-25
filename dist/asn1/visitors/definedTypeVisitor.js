"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefinedTypeVisitor = void 0;
/* eslint-disable class-methods-use-this */
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const externalTypeReference_1 = require("../classes/externalTypeReference");
const parameterizedType_1 = require("../classes/parameterizedType");
const typeReference_1 = require("../classes/typeReference");
const actualParameterListVisitor_1 = require("./actualParameterListVisitor");
/**
 * # Grammar
 * ```
 * definedType: IDENTIFIER (DOT IDENTIFER)? actualParameterList?
 * ```
 */
class DefinedTypeVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    visitChildren(ctx) {
        switch (ctx.childCount) {
            case 1: {
                const typeReference = ctx.getChild(0).text;
                return new typeReference_1.TypeReference(typeReference);
            }
            case 2: {
                const typeReference = ctx.getChild(0).text;
                const actualParameterListCtx = ctx.getChild(1);
                const actualParameterList = actualParameterListCtx.accept(new actualParameterListVisitor_1.ActualParameterListVisitor());
                return new parameterizedType_1.ParameterizedType(new typeReference_1.TypeReference(typeReference), actualParameterList);
            }
            case 3: {
                const moduleReference = ctx.getChild(0).text;
                const typeReference = ctx.getChild(2).text;
                return new externalTypeReference_1.ExternalTypeReference(moduleReference, typeReference);
            }
            case 4: {
                throw Error('Not implemented');
            }
            default: {
                throw Error();
            }
        }
    }
    defaultResult() {
        return new typeReference_1.TypeReference('');
    }
}
exports.DefinedTypeVisitor = DefinedTypeVisitor;
//# sourceMappingURL=definedTypeVisitor.js.map