import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ElementSetSpecsContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { ExtensionMarker } from '../classes/extensionMarker';
import { IConstraint } from './elements';
export declare type ElementSetSpec = Array<IConstraint | ExtensionMarker>;
/**
 * ANTLR4 grammar
 * ```
 * elementSetSpecs :
 *  rootElementSetSpec (COMMA ELLIPSIS (COMMA additionalElementSetSpec)?)?
 * ```
 */
export declare class ElementSetSpecsVisitor extends AbstractParseTreeVisitor<ElementSetSpec> implements ASN_3gppVisitor<ElementSetSpec> {
    defaultResult(): ElementSetSpec;
    visitChildren(elementSetSpecsCtx: ElementSetSpecsContext): ElementSetSpec;
}
