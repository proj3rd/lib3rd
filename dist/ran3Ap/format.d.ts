import { IMsgIeDefinition } from './interfaces';
declare type fieldType = 'ie/group name' | 'presence' | 'range' | 'ie type and reference' | 'semantics description' | 'criticality' | 'assigned criticality';
interface IFormatConfig {
    order: fieldType[];
    showRange: boolean;
    showCondition: boolean;
    grouping: boolean;
    freezeHeader: boolean;
    style: {
        title: any;
        header: any;
        indentWidth: number;
    };
}
/**
 * Generate an Excel workbook containing message(s) and/or IE(s) in a tabular form
 * @param msgIeDefinitions
 * @param formatConfig Formatting configuration. TBA
 * @returns excel4node [`Workbook`](https://www.npmjs.com/package/excel4node) object
 */
export declare function format(msgIeDefinitions: IMsgIeDefinition[], formatConfig?: IFormatConfig): any;
export {};
