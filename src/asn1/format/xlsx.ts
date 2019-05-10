import { log } from '../../utils/logging';

import * as xl from 'excel4node';

import { author, styleBorderLeft, styleBorderTop } from '../../utils/xlsx';
import { IMsgIe } from './common';

type fieldType = 'ie' | 'reference' | 'type' | 'optional' | 'tag';

export interface IFormatConfig {
  order: fieldType[];
  grouping: boolean;
  freezeHeader: boolean;
  style: {
    title: any,
    header: any,
    indentWidth: number,
  };
}

export const formatConfigDefault: IFormatConfig = {
  order: ['ie', 'reference', 'type', 'optional', 'tag'],
  grouping: true,
  freezeHeader: false,
  style: {
    title: {
      font: {
        size: 18,
        bold: true,
      },
    },
    header: {
      font: {
        bold: true,
      },
    },
    indentWidth: 3,
  },
};

const headerDefinition: any /* TODO */ = {
  ie: 'IE Name',
  reference: 'Reference Name',
  type: 'Type',
  optional: 'Optional',
  tag: 'Tag',
};

const headerConstants: any /* TODO */ = {
  constant: 'Constant',
  value: 'Value',
};

/**
 * Format ASN.1 in xlsx
 * @param msgIes Array of ASN.1 objects you want to format
 * @returns Workbook object of excel4node
 */
export function format(msgIes: IMsgIe[], formatConfig: IFormatConfig = formatConfigDefault): any {
  const wb = new xl.Workbook({ author });
  msgIes.forEach((msgIe, index) => {
    log.debug(`Formatting ${msgIe.name} in xlsx...`);
    const indexString = index.toString();
    const sheetname = `${msgIe.name.substr(0, 31 - (indexString.length + 1))} ${indexString}`;
    const ws = wb.addWorksheet(sheetname, {
      outline: {
        summaryBelow: false,
      },
    });
    const depthMax = msgIe.definition.depthMax();
    let [row, col] = [1, 1];
    ws.cell(row++, col).string(msgIe.name).style(formatConfig.style.title);

    row++;
    const constants = [];
    [row, col] = fillDefinition(msgIe, ws, row, col, depthMax, constants, formatConfig);

    if (constants.length) {
      [row, col] = fillConstants(constants, ws, row, col, depthMax, formatConfig);
    }
  });
  return wb;
}

function fillDefinition(msgIe: IMsgIe, ws: any, row: number, col: number, depthMax: number, constants: any[],
                        formatConfig: IFormatConfig = formatConfigDefault): [number, number] {
  if (formatConfig.freezeHeader) {
    ws.row(row).freeze();
  }
  ws.cell(row, col, row, col + depthMax + formatConfig.order.length - 1).style(formatConfig.style.header);
  formatConfig.order.forEach((field, index): void => {
    if (index === 0) {
      ws.cell(row, col).style(styleBorderLeft);
    }
    switch (field) {
      case 'ie': {
        ws.cell(row, col).string(headerDefinition.ie).style(styleBorderLeft).style(styleBorderTop);
        ws.column(col++).setWidth(formatConfig.style.indentWidth);
        for (let i = 0; i < depthMax; i++) {
          ws.column(col).setWidth(formatConfig.style.indentWidth);
          ws.cell(row, col++).style(styleBorderTop);
        }
        ws.column(col - 1).setWidth(formatConfig.style.indentWidth * 10);
        break;
      }
      case 'reference': {
        ws.cell(row, col++).string(headerDefinition.reference).style(styleBorderTop);
        break;
      }
      case 'type': {
        ws.cell(row, col++).string(headerDefinition.type).style(styleBorderTop);
        break;
      }
      case 'optional': {
        ws.cell(row, col++).string(headerDefinition.optional).style(styleBorderTop);
        break;
      }
      case 'tag': {
        ws.cell(row, col++).string(headerDefinition.tag).style(styleBorderTop);
        break;
      }
    }
    if (index === formatConfig.order.length - 1) {
      ws.cell(row, col).style(styleBorderLeft);
    }
  });
  row++;
  col = 1;
  // TODO: Format body
  ws.cell(row, col, row, col + depthMax + formatConfig.order.length - 1).style(styleBorderTop);
  return [row, col];
}

function fillConstants(constants: any[], ws: any, row: number, col: number, depthMax: number,
                       formatConfig: IFormatConfig): [number, number] {
  [headerConstants, ...constants].forEach((rangeElem) => {
    ws.cell(row, col, row, col + depthMax + formatConfig.order.length - 1).style(styleBorderTop);
    ws.cell(row, col + depthMax + formatConfig.order.length).style(styleBorderLeft);
    ws.cell(row, col).string(rangeElem.constant).style(styleBorderLeft);
    ws.cell(row++, col + depthMax + 1).string(rangeElem.value);
  });
  ws.cell(row, col, row, col + depthMax + formatConfig.order.length - 1).style(styleBorderTop);
  return [row, col];
}
