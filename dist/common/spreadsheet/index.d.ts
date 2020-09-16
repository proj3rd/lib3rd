import { Borders, Row, Workbook, Worksheet } from 'exceljs';
export interface IRowInput {
    [key: string]: string | undefined;
}
export declare function addHeader(worksheet: Worksheet, headerList: string[], depth: number): void;
export declare function addTitle(worksheet: Worksheet, title: string): void;
export declare function addWorksheet(workbook: Workbook, name: string, ySplit: number): Worksheet;
export declare function drawBorder(worksheet: Worksheet, row: Row, depth: number, border?: Partial<Borders>): void;
export declare function getWorkbook(workbook?: Workbook): Workbook;
export declare function headerIndexed(header: string, index: number): string;
export declare function setOutlineLevel(row: Row, depth: number): void;
export declare function uniqueSheetname(workbook: Workbook, name: string): string;
//# sourceMappingURL=index.d.ts.map