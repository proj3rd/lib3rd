import { ElementSetSpecVisitor } from './elementSetSpec';

/**
 * ANTLR4 grammar
 * rootElementSetSpec : elementSetSpec
 */
export class RootElementSetSpecVisitor {
  public visitChildren(rootElementSetSpecCtx: any): any /* TODO */ {
    const elementSetSpec = rootElementSetSpecCtx.children[0];
    return elementSetSpec.accept(new ElementSetSpecVisitor());
  }
}
