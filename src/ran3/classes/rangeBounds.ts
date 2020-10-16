import { Worksheet } from 'exceljs';
import { drawBorder, headerIndexed, IRowInput } from '../../common/spreadsheet';
import { BorderTop, FontBold } from '../../common/spreadsheet/style';
import { IRangeBound } from '../types';
import { HEADER_DESCRIPTION, HEADER_NAME_BASE } from './definition';

export class RangeBounds {
  public rangeBoundList: IRangeBound[];

  constructor(rangeBoundList: IRangeBound[]) {
    this.rangeBoundList = rangeBoundList;
  }

  public add(rangeBound: IRangeBound) {
    const range = this.rangeBoundList.find((item) => item.rangeBound === rangeBound.rangeBound);
    if (range) {
      return;
    }
    this.rangeBoundList.push(rangeBound);
  }

  public toSpreadsheet(worksheet: Worksheet) {
    if (!this.rangeBoundList.length) {
      return;
    }
    // eslint-disable-next-line no-param-reassign
    worksheet.addRow({
      [headerIndexed(HEADER_NAME_BASE, 0)]: 'Range bound',
      [HEADER_DESCRIPTION]: 'Explanation',
    }).font = FontBold;
    this.rangeBoundList.forEach((range) => {
      const { rangeBound, explanation } = range;
      const rowInput: IRowInput = {
        [headerIndexed(HEADER_NAME_BASE, 0)]: rangeBound,
        [HEADER_DESCRIPTION]: explanation,
      };
      const r = worksheet.addRow(rowInput);
      drawBorder(worksheet, r, 0);
    });
    drawBorder(worksheet, worksheet.addRow([]), 0, BorderTop);
  }
}
