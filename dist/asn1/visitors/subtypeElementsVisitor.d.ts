import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { _SubtypeElements } from '../types';
import { SubtypeElementsContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
/**
 * subtypeElements :
 *   ((value | MIN_LITERAL) LESS_THAN?  DOUBLE_DOT LESS_THAN? (value | MAX_LITERAL))
 *   | sizeConstraint
 *   | (PATTERN_LITERAL value)
 *   | value
 */
export declare class SubtypeElementsVisitor extends AbstractParseTreeVisitor<_SubtypeElements> implements grammar3rdVisitor<_SubtypeElements> {
    visitChildren(ctx: SubtypeElementsContext): _SubtypeElements;
    protected defaultResult(): _SubtypeElements;
}
//# sourceMappingURL=subtypeElementsVisitor.d.ts.map