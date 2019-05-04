export abstract class Base {
  protected abstract setConstraint(constraint: any): Base;
  protected abstract expand(): Base;
  protected abstract toString(): string;

  protected indent(text: string): string {
    return text.replace(/^/gm, '  ');
  }
}
