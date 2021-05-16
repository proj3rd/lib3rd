import { Worksheet } from 'exceljs';
import { IRowInput } from '../../common/spreadsheet';
import { PrimitiveFieldName } from './primitiveFieldName';
export declare class Syntax {
    literal: string;
    primitiveFieldName: PrimitiveFieldName;
    optional: boolean;
    syntaxTag: boolean;
    constructor(literal: string, primitiveFieldName: PrimitiveFieldName, optional: boolean);
    static fromObject(obj: unknown): Syntax;
    getDepth(): number;
    toSpreadsheet(worksheet: Worksheet, row: IRowInput, depth: number): void;
    toString(): string;
}
//# sourceMappingURL=syntax.d.ts.map