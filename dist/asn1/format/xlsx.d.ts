import { IMsgIe } from './common';
declare type fieldType = 'ie' | 'reference' | 'type' | 'optional' | 'tag';
export interface IFormatConfig {
    order: fieldType[];
    grouping: boolean;
    freezeHeader: boolean;
    style: {
        title: any;
        header: any;
        indentWidth: number;
    };
}
export declare const formatConfigDefault: IFormatConfig;
/**
 * Format ASN.1 in xlsx
 * @param msgIes Array of ASN.1 objects you want to format
 * @returns Workbook object of excel4node
 */
export declare function format(msgIes: IMsgIe[], formatConfig?: IFormatConfig): any;
export {};