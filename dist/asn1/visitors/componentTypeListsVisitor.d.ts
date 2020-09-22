import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { RootSequenceComponents } from '../classes/sequenceType';
import { ComponentTypeListsContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
/**
 * # Grammar
 * ```
 * componentTypeLists :
 *     rootComponentTypeList (tag | (COMMA tag? extensionAndException  extensionAdditions tag?  (optionalExtensionMarker|(EXTENSTIONENDMARKER  COMMA  rootComponentTypeList tag?))))?
 *    |  extensionAndException  extensionAdditions  (optionalExtensionMarker | (EXTENSTIONENDMARKER  COMMA    rootComponentTypeList tag?))
 * ```
 */
export declare class ComponentTypeListsVisitor extends AbstractParseTreeVisitor<RootSequenceComponents[]> implements ASN_3gppVisitor<RootSequenceComponents[]> {
    visitChildren(ctx: ComponentTypeListsContext): RootSequenceComponents[];
    protected defaultResult(): RootSequenceComponents[];
}
//# sourceMappingURL=componentTypeListsVisitor.d.ts.map