import { Worksheet } from 'exceljs';
import { IRowInput } from '../formatter/spreadsheet';
import { PrimitiveFieldName } from './primitiveFieldName';
export declare class Syntax {
    literal: string;
    primitiveFieldName: PrimitiveFieldName;
    optional: boolean;
    private syntaxTag;
    constructor(literal: string, primitiveFieldName: PrimitiveFieldName, optional: boolean);
    getDepth(): number;
    toSpreadsheet(worksheet: Worksheet, row: IRowInput, depth: number): void;
    toString(): string;
}
//# sourceMappingURL=syntax.d.ts.map