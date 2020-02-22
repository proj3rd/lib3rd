import { UnionMark } from './unionMark';

export class UnionMarkLiteral extends UnionMark {
  public toString(): string {
    return 'UNION';
  }
}
