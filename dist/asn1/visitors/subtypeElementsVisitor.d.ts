import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { _SubtypeElements } from '../types';
import { SubtypeElementsContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
/**
 * subtypeElements :
 *   ((value | MIN_LITERAL) LESS_THAN?  DOUBLE_DOT LESS_THAN? (value | MAX_LITERAL))
 *   | sizeConstraint
 *   | (PATTERN_LITERAL value)
 *   | value
 */
export declare class SubtypeElementsVisitor extends AbstractParseTreeVisitor<_SubtypeElements> implements ASN_3gppVisitor<_SubtypeElements> {
    visitChildren(ctx: SubtypeElementsContext): _SubtypeElements;
    protected defaultResult(): _SubtypeElements;
}
//# sourceMappingURL=subtypeElementsVisitor.d.ts.map