import { IFormatConfig, IIe } from '../format/xlsx';

export abstract class Base {
  public abstract expand(): Base;
  public abstract depthMax(): number;
  public abstract toString(): string;
  public abstract fillWorksheet(ieElem: IIe, ws: any, row: number, col: number, depthMax: number,
                                constants: any[], formatConfig: IFormatConfig, depth?: number): [number, number];

  protected abstract setConstraint(constraint: any): Base;
  protected indent(text: string): string {
    return text.replace(/^/gm, '  ');
  }
}
