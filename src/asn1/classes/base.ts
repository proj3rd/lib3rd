import { IFormatConfig, IIe } from '../format/xlsx';

export abstract class Base {
  public moduleName: string;

  public abstract expand(): Base;
  public abstract depthMax(): number;
  public abstract toString(): string;
  public abstract fillWorksheet(ieElem: IIe, ws: any, row: number, col: number, depthMax: number,
                                constants: any[], formatConfig: IFormatConfig, depth?: number): [number, number];

  protected abstract setConstraint(constraint: any): Base;
  protected indent(text: string): string {
    return text.replace(/^/gm, '  ');
  }
  protected addToConstants(obj: any, constants: any[]): void {
    if (obj !== undefined && isNaN(Number(obj))) {
      constants.push({constant: obj});
    }
  }
}
