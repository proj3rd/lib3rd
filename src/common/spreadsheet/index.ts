import {
  Borders, Row, Workbook, Worksheet,
} from 'exceljs';
import {
  BorderBottom,
  BorderLeft,
  BorderLeftTop,
  BorderRightTop,
  BorderTop,
  FontBold,
} from './style';

export interface IRowInput {
  [key: string]: string | undefined;
}

export function headerIndexed(header: string, index: number): string {
  return `${header}[${index}]`;
}

export function addHeader(
  worksheet: Worksheet,
  headerList: string[],
  depth: number,
) {
  const columns = [
    ...new Array(depth + 1).fill(undefined).map((_, index) => headerIndexed(headerList[0], index)),
    ...headerList.slice(1),
  ].map((key, index) => {
    let width: number;
    if (index < depth) {
      width = 3;
    } else if (index > depth) {
      width = 15;
    } else {
      width = 45;
    }
    return { key, width };
  });
  // eslint-disable-next-line no-param-reassign
  worksheet.columns = columns;
  const headers = [
    ...new Array(depth + 1).fill(undefined)
      .map((_, index) => (index === 0 ? headerList[0] : undefined)),
    ...headerList.slice(1),
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
  // eslint-disable-next-line no-param-reassign
  worksheet.addRow([title]).font = {
    size: 22,
    bold: true,
  };
}

export function addWorksheet(
  workbook: Workbook,
  name: string,
  ySplit: number,
): Worksheet {
  const ws = workbook.addWorksheet(name, {
    views: [{
      state: 'frozen', xSplit: 0, ySplit, showGridLines: false,
    }],
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

export function drawBorder(
  worksheet: Worksheet,
  row: Row,
  depth: number,
  border?: Partial<Borders>,
) {
  worksheet.columns.forEach((column, index) => {
    const { key } = column;
    if (key === undefined) {
      return;
    }
    let borderExtra: Partial<Borders>;
    if (index === worksheet.columns.length - 1) {
      borderExtra = BorderRightTop;
    } else if (index < depth) {
      borderExtra = BorderLeft;
    } else if (index > depth) {
      borderExtra = BorderTop;
    } else {
      borderExtra = BorderLeftTop;
    }
    const b = border || borderExtra;
    // eslint-disable-next-line no-param-reassign
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

export function setOutlineLevel(row: Row, depth: number) {
  if (depth === 0) {
    return;
  }
  // eslint-disable-next-line no-param-reassign
  row.outlineLevel = Math.min(depth, 7);
}

export function uniqueSheetname(workbook: Workbook, name: string) {
  const { length } = workbook.worksheets;
  const postfix = `#${length}`;
  const nameTrucated = name.substring(0, 31 - postfix.length);
  return `${nameTrucated}${postfix}`.replace('/', '_');
}
