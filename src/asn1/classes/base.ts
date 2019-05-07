export abstract class Base {
  public abstract expand(): Base;
  public abstract depthMax(): number;
  public abstract toString(): string;

  protected abstract setConstraint(constraint: any): Base;
  protected indent(text: string): string {
    return text.replace(/^/gm, '  ');
  }
}
