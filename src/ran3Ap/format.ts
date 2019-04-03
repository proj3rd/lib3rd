import * as xl from 'excel4node';

import { IConditionDefinitionElem, IMsgIeDefinition, IMsgIeDefinitionElem, IRangeDefinitionElem } from './interfaces';
type fieldType = 'ie/group name' | 'presence' | 'range' | 'ie type and reference' | 'semantics description' |
                'criticality' | 'assigned criticality';

interface IFormatConfig {
  order: fieldType[];
  showRange: boolean;
  showCondition: boolean;
  grouping: boolean;
  freezeHeader: boolean;
}

const formatConfigDefault: IFormatConfig = {
  order: ['ie/group name', 'presence', 'range', 'ie type and reference', 'semantics description',
              'criticality', 'assigned criticality'],
  showRange: true,
  showCondition: true,
  grouping: true,
  freezeHeader: true,
};

const headerDefinition: IMsgIeDefinitionElem = {
  'ie/group name': 'IE/Group Name',
  'presence': 'Presence',
  'range': 'Range',
  'ie type and reference': 'IE Type and Reference',
  'semantics description': 'Semantics Description',
  'criticality': 'Criticality',
  'assigned criticiality': 'Assigned Criticality',
  'depth': 0,
};

export function format(msgIeDefinitions: IMsgIeDefinition[], formatConfig: IFormatConfig): any {
  if (!formatConfig) {
    formatConfig = formatConfigDefault;
  }
  const wb = new xl.Workbook({
    author: '3GPP Utility https://github.com/gsongsong/3gpp',
  });
  msgIeDefinitions.forEach((msgIeDefinition) => {
    const wsName = sheetname(msgIeDefinition);
    const ws = wb.addWorksheet(wsName, {
      outline: {
        summaryBelow: false,
      },
    });

    let [row, col] = [1, 1];
    ws.cell(row++, col).string(msgIeDefinition.name);
    if (msgIeDefinition.description) {
      ws.cell(row++, col).string(msgIeDefinition.description);
    }
    if (msgIeDefinition.direction) {
      ws.cell(row++, col).string(`Direction: ${msgIeDefinition.direction}`);
    }

    row++;
    [row, col] = fillDefinition(msgIeDefinition.definition, ws, row, col, formatConfig);

    if (msgIeDefinition.range && formatConfig.showRange) {
      row++;
      [row, col] = fillRange(msgIeDefinition.range, ws, row, col);
    }

    if (msgIeDefinition.condition && formatConfig.showCondition) {
      row++;
      [row, col] = fillCondition(msgIeDefinition.condition, ws, row, col);
    }
  });
  return wb;
}

function sheetname(msgIeDefinition: IMsgIeDefinition): string {
  return (msgIeDefinition.section + msgIeDefinition.name).substr(0, 31);
}

function fillDefinition(definition: IMsgIeDefinitionElem[],
                        ws: any, row: number, col: number,
                        formatConfig: IFormatConfig): number[] {
  const depthMax = definition.reduce((prevDepth: number, currElem) => {
    return Math.max(prevDepth, currElem.depth);
  }, 0);

  if (formatConfig.freezeHeader) {
    ws.row(row).freeze();
  }
  [row, col] = fillRow(headerDefinition, ws, row, col, depthMax, formatConfig.order);
  definition.forEach((msgIeDefinitionElem) => {
    [row, col] = fillRow(msgIeDefinitionElem, ws, row, col, depthMax, formatConfig.order);
  });
  return [row, col];
}

function fillRow(elem: IMsgIeDefinitionElem, ws: any, row: number, col: number, depthMax: number,
                 order: fieldType[]): number[] {
  order.forEach((field): void => {
    switch (field) {
      case 'ie/group name': {
        for (let i = 0; i < elem.depth; i++) {
          col++;
        }
        ws.cell(row, col++).string(elem['ie/group name']);
        for (let i = elem.depth; i < depthMax; i++) {
          col++;
        }
        break;
      }
      case 'presence': {
        ws.cell(row, col++).string(elem.presence);
        break;
      }
      case 'range': {
        ws.cell(row, col++).string(elem.range);
        break;
      }
      case 'ie type and reference': {
        ws.cell(row, col++).string(elem['ie type and reference']);
        break;
      }
      case 'semantics description': {
        ws.cell(row, col++).string(elem['semantics description']);
        break;
      }
      case 'criticality': {
        ws.cell(row, col++).string(elem.criticality);
        break;
      }
      case 'assigned criticality': {
        ws.cell(row, col++).string(elem['assigned criticiality']);
        break;
      }
    }
  });
  row++;
  col = 1;
  return [row, col];
}

function fillRange(range: IRangeDefinitionElem[], ws: any, row: number, col: number): number[] {
  return [row, col];
}

function fillCondition(condition: IConditionDefinitionElem[], ws: any, row: number, col: number): number[] {
  return [row, col];
}
