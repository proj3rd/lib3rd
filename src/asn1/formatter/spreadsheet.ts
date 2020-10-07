import { IRowInput } from '../../common/spreadsheet';

export const HEADER_NAME_BASE = 'Name';
export const HEADER_REFERENCE = 'Reference';
export const HEADER_TYPE = 'Type';
export const HEADER_OPTIONAL = 'Optional';
export const HEADER_UNIQUE = 'Unique';
export const HEADER_TAG = 'Tag';

export const HEADER_LIST = [
  HEADER_NAME_BASE,
  HEADER_REFERENCE,
  HEADER_TYPE,
  HEADER_OPTIONAL,
  HEADER_UNIQUE,
  HEADER_TAG,
];

export type RowCol = [number, number];

export function appendInColumn(row: IRowInput, column: string, value: string) {
  const col = row[column];
  // eslint-disable-next-line no-param-reassign
  row[column] = col === undefined ? value : `${col} ${value}`;
}
