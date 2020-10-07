import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { RootSequenceComponents } from '../classes/sequenceType';
import { ComponentTypeListsContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
/**
 * # Grammar
 * ```
 * componentTypeLists :
 *     // RootComponentTypeList
 *     rootComponentTypeList tag?
 *     // | RootComponentTypeList "," ExtensionAndException ExtensionAdditions
 *            OptionalExtensionMarker
 *     // | RootComponentTypeList "," ExtensionAndException ExtensionAdditions
 *            ExtensionEndMarker "," RootComponentTypeList
 *   | rootComponentTypeList COMMA tag? extensionAndException extensionAdditions tag?
 *   | rootComponentTypeList COMMA tag? extensionAndException extensionAdditions
 *       (COMMA tag? ELLIPSIS (COMMA rootComponentTypeList tag?)?)?
 *     // | ExtensionAndException ExtensionAdditions ExtensionEndMarker "," RootComponentTypeList
 *     // | ExtensionAndException ExtensionAdditions OptionalExtensionMarker
 *   | extensionAndException extensionAdditions tag?
 *   | extensionAndException extensionAdditions
 *       (COMMA tag? ELLIPSIS (COMMA rootComponentTypeList tag?))?
 * ```
 */
export declare class ComponentTypeListsVisitor extends AbstractParseTreeVisitor<RootSequenceComponents[]> implements grammar3rdVisitor<RootSequenceComponents[]> {
    visitChildren(ctx: ComponentTypeListsContext): RootSequenceComponents[];
    protected defaultResult(): RootSequenceComponents[];
}
//# sourceMappingURL=componentTypeListsVisitor.d.ts.map