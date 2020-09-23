import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { RootSequenceComponents } from '../classes/sequenceType';
import { ComponentTypeListsContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
/**
 * # Grammar
 * ```
 * componentTypeLists :
 *     // RootComponentTypeList
 *     rootComponentTypeList tag?
 *     // | RootComponentTypeList "," ExtensionAndException ExtensionAdditions OptionalExtensionMarker
 *     // | RootComponentTypeList "," ExtensionAndException ExtensionAdditions ExtensionEndMarker "," RootComponentTypeList
 *   | rootComponentTypeList COMMA tag? extensionAndException extensionAdditions tag?
 *   | rootComponentTypeList COMMA tag? extensionAndException extensionAdditions (COMMA tag? ELLIPSIS (COMMA rootComponentTypeList tag?)?)?
 *     // | ExtensionAndException ExtensionAdditions ExtensionEndMarker "," RootComponentTypeList
 *     // | ExtensionAndException ExtensionAdditions OptionalExtensionMarker
 *   | extensionAndException extensionAdditions tag?
 *   | extensionAndException extensionAdditions (COMMA tag? ELLIPSIS (COMMA rootComponentTypeList tag?))?
 * ```
 */
export declare class ComponentTypeListsVisitor extends AbstractParseTreeVisitor<RootSequenceComponents[]> implements ASN_3gppVisitor<RootSequenceComponents[]> {
    visitChildren(ctx: ComponentTypeListsContext): RootSequenceComponents[];
    protected defaultResult(): RootSequenceComponents[];
}
//# sourceMappingURL=componentTypeListsVisitor.d.ts.map