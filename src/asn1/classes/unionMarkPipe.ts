import { UnionMark } from './unionMark';

export class UnionMarkPipe extends UnionMark {
  public toString(): string {
    return '|';
  }
}
