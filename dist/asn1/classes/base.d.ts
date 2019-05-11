import { IFormatConfig, IIe } from '../format/xlsx';
export declare abstract class Base {
    abstract expand(): Base;
    abstract depthMax(): number;
    abstract toString(): string;
    abstract fillWorksheet(ieElem: IIe, ws: any, row: number, col: number, depthMax: number, constants: any[], formatConfig: IFormatConfig, depth?: number): [number, number];
    protected abstract setConstraint(constraint: any): Base;
    protected indent(text: string): string;
    protected addToConstants(obj: any, constants: any[]): void;
}
