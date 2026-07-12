import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { SubtypeElementsContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
import { SubtypeElements } from '../types/subtypeElements';
/**
 * subtypeElements :
 *   ((value | MIN_LITERAL) LESS_THAN?  DOUBLE_DOT LESS_THAN? (value | MAX_LITERAL))
 *   | sizeConstraint
 *   | (PATTERN_LITERAL value)
 *   | value
 */
export declare class SubtypeElementsVisitor extends AbstractParseTreeVisitor<SubtypeElements> implements grammar3rdVisitor<SubtypeElements> {
    visitChildren(ctx: SubtypeElementsContext): SubtypeElements;
    protected defaultResult(): SubtypeElements;
}
//# sourceMappingURL=subtypeElementsVisitor.d.ts.map