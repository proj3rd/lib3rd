import { log } from '../../utils/logging';

import * as xl from 'excel4node';

import { author, styleBorderLeft, styleBorderTop } from '../../utils/xlsx';
import { IConstantAndModule } from '../classes/base';
import { findConstantValue } from '../utils';
import { IModules } from '../visitors/modules';
import { IMsgIe } from './common';

type fieldType = 'ie' | 'reference' | 'type' | 'optional' | 'tag';

export interface IIe {
  ie?: string;
  reference?: string;
  type?: string;
  optional?: string;
  tag?: string;
}

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

const headerDefinition: IIe = {
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
export function format(msgIes: IMsgIe[], asn1Pool: IModules, formatConfig: IFormatConfig = formatConfigDefault): any {
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
      row++;
      [row, col] = fillConstants(constants, msgIe.definition.moduleName, asn1Pool, ws, row, col, depthMax,
                                 formatConfig);
    }
  });
  return wb;
}

function fillDefinition(msgIe: IMsgIe, ws: any, row: number, col: number, depthMax: number,
                        constants: IConstantAndModule[],
                        formatConfig: IFormatConfig = formatConfigDefault): [number, number] {
  if (formatConfig.freezeHeader) {
    ws.row(row).freeze();
  }
  ws.cell(row, col, row, col + depthMax + formatConfig.order.length - 1).style(formatConfig.style.header);
  [row, col] = fillRow(headerDefinition, ws, row, col, depthMax, formatConfig);
  const parameterList: string[] = msgIe.definition.parameterList;
  const parameterString = parameterList ? ` { ${parameterList.join(', ')} }` : '';
  [row, col] = msgIe.definition.fillWorksheet({ie: `${msgIe.name}${parameterString}`},
    ws, row, col, depthMax, constants, formatConfig);
  ws.cell(row, col, row, col + depthMax + formatConfig.order.length - 1).style(styleBorderTop);
  return [row, col];
}

export function fillRow(ieElem: IIe, ws: any, row: number, col: number, depthMax: number,
                        formatConfig: IFormatConfig, depth: number = 0): [number, number] {
  formatConfig.order.forEach((field, index): void => {
    if (index === 0) {
      ws.cell(row, col).style(styleBorderLeft);
    }
    switch (field) {
      case 'ie': {
        for (let i = 0; i < depth; i++) {
          ws.column(col).setWidth(formatConfig.style.indentWidth);
          ws.cell(row, col++).style(styleBorderLeft);
        }
        ws.cell(row, col).string(ieElem.ie ? ieElem.ie : '').style(styleBorderLeft).style(styleBorderTop);
        ws.column(col++).setWidth(formatConfig.style.indentWidth);
        for (let i = depth; i < depthMax; i++) {
          ws.column(col).setWidth(formatConfig.style.indentWidth);
          ws.cell(row, col++).style(styleBorderTop);
        }
        ws.column(col - 1).setWidth(formatConfig.style.indentWidth * 10);
        break;
      }
      case 'reference': {
        if ('reference' in ieElem) {
          ws.cell(row, col).string(ieElem.reference);
        }
        ws.cell(row, col++).style(styleBorderTop);
        break;
      }
      case 'type': {
        if ('type' in ieElem) {
          ws.cell(row, col).string(ieElem.type);
        }
        ws.cell(row, col++).style(styleBorderTop);
        break;
      }
      case 'optional': {
        if ('optional' in ieElem) {
          ws.cell(row, col).string(ieElem.optional);
        }
        ws.cell(row, col++).style(styleBorderTop);
        break;
      }
      case 'tag': {
        if ('tag' in ieElem) {
          ws.cell(row, col).string(ieElem.tag);
        }
        ws.cell(row, col++).style(styleBorderTop);
        break;
      }
    }
    if (index === formatConfig.order.length - 1) {
      ws.cell(row, col).style(styleBorderLeft);
    }
    if (formatConfig.grouping && depth > 0) {
      ws.row(row).group(Math.min(depth, 7));
    }
  });
  row++;
  col = 1;
  return [row, col];
}

function fillConstants(constants: IConstantAndModule[], moduleName: string, asn1Pool: IModules,
                       ws: any, row: number, col: number, depthMax: number,
                       formatConfig: IFormatConfig): [number, number] {
  ws.cell(row, col, row, col + depthMax + formatConfig.order.length - 1).style(formatConfig.style.header);
  [headerConstants, ...constants].forEach((rangeElem, index) => {
    if (index > 0) {
      rangeElem.value = findConstantValue(rangeElem.constant, moduleName, asn1Pool);
    }
    ws.cell(row, col, row, col + depthMax + formatConfig.order.length - 1).style(styleBorderTop);
    ws.cell(row, col + depthMax + formatConfig.order.length).style(styleBorderLeft);
    ws.cell(row, col).string(rangeElem.constant).style(styleBorderLeft);
    if (rangeElem.value === null) {
      rangeElem.value = `Spec error: ${moduleName} neither defines nor imports ${rangeElem.constant}`;
    }
    if (isNaN(Number(rangeElem.value))) {
      ws.cell(row++, col + depthMax + 1).string(rangeElem.value);
    } else {
      ws.cell(row++, col + depthMax + 1).number(rangeElem.value);
    }
  });
  ws.cell(row, col, row, col + depthMax + formatConfig.order.length - 1).style(styleBorderTop);
  return [row, col];
}
