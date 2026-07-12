import { IRowInput } from '../../common/spreadsheet';
export declare const HEADER_NAME_BASE = "Name";
export declare const HEADER_REFERENCE = "Reference";
export declare const HEADER_TYPE = "Type";
export declare const HEADER_OPTIONAL = "Optional";
export declare const HEADER_UNIQUE = "Unique";
export declare const HEADER_TAG = "Tag";
export declare const HEADER_LIST: string[];
export declare type RowCol = [number, number];
export declare function appendInColumn(row: IRowInput, column: string, value: string): void;
//# sourceMappingURL=spreadsheet.d.ts.map