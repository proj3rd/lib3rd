import { readFile } from 'fs';
import { parse as parsePath } from 'path';

import * as xl from 'excel4node';

import { IConditionDefinitionElem, IMsgIeDefinition, IMsgIeDefinitionElem, IRangeDefinitionElem } from './interfaces';
import { parse } from './parse';

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

export function format(msgIeDefinitions: IMsgIeDefinition[], formatConfig?: IFormatConfig): any {
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
    const depthMax = msgIeDefinition.definition.reduce((prevDepth: number, currElem) => {
      return Math.max(prevDepth, currElem.depth);
    }, 0);

    let [row, col] = [1, 1];
    ws.cell(row++, col).string(msgIeDefinition.name);
    if (msgIeDefinition.description) {
      ws.cell(row++, col).string(msgIeDefinition.description);
    }
    if (msgIeDefinition.direction) {
      ws.cell(row++, col).string(`Direction: ${msgIeDefinition.direction}`);
    }

    row++;
    [row, col] = fillDefinition(msgIeDefinition.definition, ws, row, col, depthMax, formatConfig);

    if (msgIeDefinition.range && formatConfig.showRange) {
      row++;
      [row, col] = fillRange(msgIeDefinition.range, ws, row, col, depthMax);
    }

    if (msgIeDefinition.condition && formatConfig.showCondition) {
      row++;
      [row, col] = fillCondition(msgIeDefinition.condition, ws, row, col, depthMax);
    }
  });
  return wb;
}

function sheetname(msgIeDefinition: IMsgIeDefinition): string {
  return `${msgIeDefinition.section} ${msgIeDefinition.name}`.substr(0, 31);
}

function fillDefinition(definition: IMsgIeDefinitionElem[],
                        ws: any, row: number, col: number, depthMax: number,
                        formatConfig: IFormatConfig): number[] {

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
          ws.column(col++).setWidth(3);
        }
        ws.cell(row, col).string(elem['ie/group name']);
        ws.column(col++).setWidth(3);
        for (let i = elem.depth; i < depthMax; i++) {
          ws.column(col++).setWidth(3);
        }
        ws.column(col - 1).setWidth(30);
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
        if (elem.criticality) {
          ws.cell(row, col).string(elem.criticality);
        }
        col++;
        break;
      }
      case 'assigned criticality': {
        if (elem['assigned criticiality']) {
          ws.cell(row, col).string(elem['assigned criticiality']);
        }
        col++;
        break;
      }
    }
  });
  row++;
  col = 1;
  return [row, col];
}

function fillRange(range: IRangeDefinitionElem[], ws: any, row: number, col: number, depthMax: number): number[] {
  const header: IRangeDefinitionElem = {
    'range bound': 'Range bound',
    'explanation': 'Explanation',
  };
  [header, ...range].forEach((rangeElem) => {
    ws.cell(row, col, row, col + depthMax, true).string(rangeElem['range bound']);
    ws.cell(row, col + depthMax + 1).string(rangeElem.explanation);
    row++;
    col = 1;
  });
  return [row, col];
}

function fillCondition(condition: IConditionDefinitionElem[], ws: any, row: number, col: number,
                       depthMax: number): number[] {
  const header: IConditionDefinitionElem = {
    condition: 'Condition',
    explanation: 'Explanation',
  };
  [header, ...condition].forEach((conditionElem) => {
    ws.cell(row, col, row, col + depthMax, true).string(conditionElem.condition);
    ws.cell(row, col + depthMax + 1).string(conditionElem.explanation);
    row++;
    col = 1;
  });
  return [row, col];
}

if (require.main === module) {
  const [filePath, msgIeName, expand] = process.argv.slice(2);
  if (!filePath || !msgIeName || !expand) {
    throw Error('Requires 3 arguments, filePath, msgIeName and expand');
  }
  readFile(filePath, 'utf8', (err: Error, html: string) => {
    if (err) {
      throw err;
    }
    const fileName = parsePath(filePath);
    const definitions = parse(html);
    let msgIeDefinitions: IMsgIeDefinition[] = null;
    let wb = null;
    let outFileName: string = null;
    if (msgIeName === 'all') {
      msgIeDefinitions = Object.keys(definitions).filter((key) => {
        return typeof definitions[key] !== 'string';
      }).map((sectionNumber) => {
        return definitions[sectionNumber] as IMsgIeDefinition;
      });
      outFileName = `${fileName.name}.xlsx`;
    } else {
      if (!(msgIeName in definitions)) {
        throw Error(`Definition for a given name ${msgIeName} is not found`);
      }
      const sectionNumber  = definitions[msgIeName] as string;
      msgIeDefinitions = [definitions[sectionNumber] as IMsgIeDefinition];
      outFileName = `${fileName.name} ${msgIeName}.xlsx`;
    }
    wb = format(msgIeDefinitions);
    wb.write(outFileName);
  });
}
