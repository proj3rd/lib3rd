import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ObjectSetSpecContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
import { ElementSetSpecs } from '../types/elementSetSpecs';
/**
 * # Grammar
 * ```
 * objectSetSpec :
 *     rootElementSetSpec (COMMA ELLIPSIS (COMMA additionalElementSetSpec )?)?
 *   | ELLIPSIS (COMMA additionalElementSetSpec )?
 * ```
 */
export declare class ObjectSetSpecVisitor extends AbstractParseTreeVisitor<ElementSetSpecs> implements grammar3rdVisitor<ElementSetSpecs> {
    visitChildren(ctx: ObjectSetSpecContext): ElementSetSpecs;
    protected defaultResult(): ElementSetSpecs;
}
//# sourceMappingURL=objectSetSpecVisitor.d.ts.map