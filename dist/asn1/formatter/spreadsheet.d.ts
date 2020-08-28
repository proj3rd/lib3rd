import { Borders, Row, Workbook, Worksheet } from 'exceljs';
export declare const HEADER_NAME_BASE = "Name";
export declare const HEADER_REFERENCE = "Reference";
export declare const HEADER_TYPE = "Type";
export declare const HEADER_OPTIONAL = "Optional";
export declare const HEADER_UNIQUE = "Unique";
export declare const HEADER_TAG = "Tag";
export interface IRowInput {
    [key: string]: string | undefined;
}
export declare type RowCol = [number, number];
export declare function addHeader(worksheet: Worksheet, depth: number): void;
export declare function addTitle(worksheet: Worksheet, title: string): void;
export declare function addWorksheet(workbook: Workbook, name: string): Worksheet;
export declare function drawBorder(worksheet: Worksheet, row: Row, depth: number, border?: Partial<Borders>): void;
export declare function getWorkbook(workbook?: Workbook): Workbook;
export declare function headerIndexed(header: string, index: number): string;
export declare function uniqueSheetname(workbook: Workbook, name: string): string;
//# sourceMappingURL=spreadsheet.d.ts.map