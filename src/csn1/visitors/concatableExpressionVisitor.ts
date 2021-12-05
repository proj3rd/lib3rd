import {AbstractParseTreeVisitor} from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { todo, unimpl } from 'unimpl';
import { ConcatableExpression } from '../classes/concatableExpression';
import { RawExpression } from '../classes/rawExpression';
import { Concatable_expressionContext } from '../grammar/csn3rdParser';
import { csn3rdVisitor } from '../grammar/csn3rdVisitor';
import { ChoiceWithBracesVisitor } from './choiceWithBracesVisitor';
import { ConcatenationVisitor } from './concatenationVisitor';
import { ExponentStarVisitor } from './exponentStarVisitor';
import { ExponentVisitor } from './exponentVisitor';
import { IntegerSubclassingVisitor } from './integerSubclassingVisitor';
import { IntersectionVisitor } from './intersectionVisitor';
import { LabelVisitor } from './labelVisitor';
import { ReferenceVisitor } from './referenceVisitor';
import { SendConstructionVisitor } from './sendConstructionVisitor';
import { TruncationVisitor } from './truncationVisitor';

/**
 * # Grammar
 * ```
 * concatable_expression:
  (
    label
    | reference
    | IDENTIFIER exponent? (integer_subclassing | send_construction)?
    | choice_with_braces
    | '{' concatenation '}' truncation?
  )
  intersection? exponent_star?
 * ```
 */
export class ConcatableExpressionVisitor extends AbstractParseTreeVisitor<ConcatableExpression> implements csn3rdVisitor<ConcatableExpression> {
  public visitChildren(ctx: Concatable_expressionContext): ConcatableExpression {
    const labelCtx = ctx.label();
    const referenceCtx = ctx.reference();
    const choiceWithBracesCtx = ctx.choice_with_braces();
    const concatenationCtx = ctx.concatenation();
    const intersectionCtx = ctx.intersection();
    const exponentStarCtx = ctx.exponent_star();
    // Intersection and exponent star
    const intersection = intersectionCtx?.accept(new IntersectionVisitor());
    const exponentStar = exponentStarCtx?.accept(new ExponentStarVisitor());
    if (labelCtx) {
      const label = labelCtx.accept(new LabelVisitor());
      return new ConcatableExpression(label, { intersection, exponentStar });
    } else if (referenceCtx) {
      const reference = referenceCtx.accept(new ReferenceVisitor());
      return new ConcatableExpression(reference, { intersection, exponentStar });
    } else if (choiceWithBracesCtx) {
      const choiceWithBraces = choiceWithBracesCtx.accept(new ChoiceWithBracesVisitor());
      return new ConcatableExpression(choiceWithBraces, { intersection, exponentStar });
    } else if (concatenationCtx) {
      const concatenation = concatenationCtx?.accept(new ConcatenationVisitor());
      const truncationCtx = ctx.truncation();
      const truncation = truncationCtx?.accept(new TruncationVisitor());
      concatenation.truncation = truncation;
      return new ConcatableExpression(concatenation, { intersection, exponentStar });
    } else {
      // Assume IDENTIFIER
      const identifier = ctx.getChild(0).text;
      const exponentCtx = ctx.exponent();
      const integerSubclassingCtx = ctx.integer_subclassing();
      const sendConstructionCtx = ctx.send_construction();
      const exponent = exponentCtx?.accept(new ExponentVisitor());
      const integerSubclassing = integerSubclassingCtx?.accept(new IntegerSubclassingVisitor());
      const sendConstruction = sendConstructionCtx?.accept(new SendConstructionVisitor());
      const rawExpression = new RawExpression(identifier, {
        exponent, integerSubclassing, sendConstruction,
      });
      return new ConcatableExpression(rawExpression, { intersection, exponentStar });
    }
    unimpl();
  }

  protected defaultResult(): ConcatableExpression {
    return unimpl();
  }
}
