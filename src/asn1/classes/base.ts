export abstract class Base {
  protected abstract setConstraint(constraint: any): Base;
  protected abstract expand(): Base;
  protected abstract toString(depth: number): string;

  protected indent(depth: number): string {
    return '  '.repeat(depth);
  }
}
