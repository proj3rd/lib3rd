import {AbstractParseTreeVisitor} from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { todo, unimpl } from 'unimpl';
import { Definitions } from '../classes/definitions';
import { DefinitionsContext } from '../grammar/csn3rdParser';
import { csn3rdVisitor } from '../grammar/csn3rdVisitor';
import { DefinitionVisitor } from './definitionVisitor';

/**
 * # Grammar
 * ```
 * definitions: definition+;
 * ```
 */
export class DefinitionsVisitor extends AbstractParseTreeVisitor<Definitions> implements csn3rdVisitor<Definitions> {
  public visitChildren(ctx: DefinitionsContext): Definitions {
    const children = ctx.definition();
    const definitions = children.map((child) => child.accept(new DefinitionVisitor()));
    return new Definitions(definitions);
  }

  protected defaultResult(): Definitions {
    return unimpl();
  }
}
