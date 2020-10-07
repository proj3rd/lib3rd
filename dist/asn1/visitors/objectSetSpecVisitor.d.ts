import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { _ElementSetSpecs } from '../types';
import { ObjectSetSpecContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
/**
 * # Grammar
 * ```
 * objectSetSpec :
 *     rootElementSetSpec (COMMA ELLIPSIS (COMMA additionalElementSetSpec )?)?
 *   | ELLIPSIS (COMMA additionalElementSetSpec )?
 * ```
 */
export declare class ObjectSetSpecVisitor extends AbstractParseTreeVisitor<_ElementSetSpecs> implements grammar3rdVisitor<_ElementSetSpecs> {
    visitChildren(ctx: ObjectSetSpecContext): _ElementSetSpecs;
    protected defaultResult(): _ElementSetSpecs;
}
//# sourceMappingURL=objectSetSpecVisitor.d.ts.map