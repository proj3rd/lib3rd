import { format as formatTxt } from './text';
import { format as formatXlsx } from './xlsx';
import { IMsgIe } from './common';
export { formatTxt, formatXlsx, };
export declare function findMsgIes(msgIeName: string, asn1: any): IMsgIe[];
