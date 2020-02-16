import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ObjectSetSpecContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { ExtensionMarker } from '../classes/extensionMarker';
import { ElementsTypes } from './elements';
declare type ObjectSetSpec = Array<ElementsTypes | ExtensionMarker>;
/**
 * ANTLR4 grammar
 * ```
 * objectSetSpec :
 *   rootElementSetSpec (COMMA ELLIPSIS (COMMA additionalElementSetSpec )?)?
 *  | ELLIPSIS (COMMA additionalElementSetSpec )?
 * ```
 */
export declare class ObjectSetSpecVisitor extends AbstractParseTreeVisitor<ObjectSetSpec> implements ASN_3gppVisitor<ObjectSetSpec> {
    defaultResult(): ObjectSetSpec;
    visitChildren(objectSetSpecCtx: ObjectSetSpecContext): ObjectSetSpec;
}
export {};
