export declare abstract class Base {
    abstract expand(): Base;
    abstract toString(): string;
    protected abstract setConstraint(constraint: any): Base;
    protected indent(text: string): string;
}
