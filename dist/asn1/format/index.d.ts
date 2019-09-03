import { format as formatTxt } from './text';
import { format as formatXlsx } from './xlsx';
import { IModules } from '../visitors/modules';
import { IMsgIe } from './common';
export { formatTxt, formatXlsx, };
export declare function findMsgIes(msgIeName: string, asn1Pool: IModules): IMsgIe[];
