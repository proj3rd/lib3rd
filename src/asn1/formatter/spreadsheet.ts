import { Borders, Row, Workbook, Worksheet } from 'exceljs';
import {
  BorderBottom,
  BorderLeft,
  BorderLeftTop,
  BorderRightTop,
  BorderTop,
  FontBold,
} from './style';

export const HEADER_NAME_BASE = 'Name';
export const HEADER_REFERENCE = 'Reference';
export const HEADER_TYPE = 'Type';
export const HEADER_OPTIONAL = 'Optional';
export const HEADER_UNIQUE = 'Unique';
export const HEADER_TAG = 'Tag';

export interface IRowInput {
  [key: string]: string | undefined;
}

export type RowCol = [number, number];

export function addHeader(worksheet: Worksheet, depth: number) {
  const columns = [
    ...new Array(depth + 1).fill(undefined).map((_, index) => {
      return headerIndexed(HEADER_NAME_BASE, index);
    }),
    HEADER_REFERENCE,
    HEADER_TYPE,
    HEADER_OPTIONAL,
    HEADER_UNIQUE,
    HEADER_TAG,
  ].map((key, index) => {
    const width = index < depth ? 3 : index > depth ? 15 : 45;
    return { key, width };
  });
  worksheet.columns = columns;
  const headers = [
    ...new Array(depth + 1).fill(undefined).map((_, index) => {
      return index === 0 ? HEADER_NAME_BASE : undefined;
    }),
    HEADER_REFERENCE,
    HEADER_TYPE,
    HEADER_OPTIONAL,
    HEADER_UNIQUE,
    HEADER_TAG,
  ];
  const row = worksheet.addRow(headers);
  columns.forEach((column) => {
    const { key } = column;
    row.getCell(key).style = {
      font: FontBold,
      border: BorderBottom,
    };
  });
}

export function addTitle(worksheet: Worksheet, title: string) {
  worksheet.addRow([title]).font = {
    size: 22,
    bold: true,
  };
}

export function addWorksheet(workbook: Workbook, name: string): Worksheet {
  const ws = workbook.addWorksheet(name, {
    views: [{ state: 'frozen', xSplit: 0, ySplit: 3, showGridLines: false }],
  });
  /**
   * TODO
   * [BUG] outlineProperties does not exist on type ' WorksheetProperties
   * https://github.com/exceljs/exceljs/issues/1351
   */
  (ws.properties as any).outlineProperties = {
    summaryBelow: false,
  };
  return ws;
}

export function appendInColumn(row: IRowInput, column: string, value: string) {
  const col = row[column];
  row[column] = col === undefined ? value : `${col} ${value}`;
}

export function drawBorder(
  worksheet: Worksheet,
  row: Row,
  depth: number,
  border?: Partial<Borders>
) {
  worksheet.columns.forEach((column, index) => {
    const { key } = column;
    if (key === undefined) {
      return;
    }
    const b = border
      ? border
      : index === worksheet.columns.length - 1
      ? BorderRightTop
      : index < depth
      ? BorderLeft
      : index > depth
      ? BorderTop
      : BorderLeftTop;
    row.getCell(index + 1).style = { border: b };
  });
}

export function getWorkbook(workbook?: Workbook) {
  if (workbook) {
    return workbook;
  }
  const wb = new Workbook();
  wb.creator = 'https://github.com/3gpp-network/lib3rd';
  return wb;
}

export function headerIndexed(header: string, index: number): string {
  return `${header}[${index}]`;
}

export function setOutlineLevel(row: Row, depth: number) {
  if (depth === 0) {
    return;
  }
  row.outlineLevel = Math.min(depth, 7);
}

export function uniqueSheetname(workbook: Workbook, name: string) {
  const { length } = workbook.worksheets;
  return `${length} ${name}`.substring(0, 31);
}
