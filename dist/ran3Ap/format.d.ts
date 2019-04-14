import { IMsgIeDefinition } from './common';
declare type fieldType = 'ie/group name' | 'presence' | 'range' | 'ie type and reference' | 'semantics description' | 'criticality' | 'assigned criticality';
/**
 * Configuration structure for formatting
 */
export interface IFormatConfig {
    order: fieldType[];
    /**
     * Whether to show collection of range bounds
     */
    showRange: boolean;
    /**
     * Whether to show collection of conditions
     */
    showCondition: boolean;
    /**
     * Whether to group parent-child IEs
     */
    grouping: boolean;
    /**
     * Whether to freeze header of each message or IE
     */
    freezeHeader: boolean;
    /**
     * Custom styling. See [excel4node](https://www.npmjs.com/package/excel4node)
     */
    style: {
        title: any;
        header: any;
        /**
         * Column width for indentation
         */
        indentWidth: number;
    };
}
/**
 * Default configuration for formatting
 */
export declare const formatConfigDefault: IFormatConfig;
/**
 * Generate an Excel workbook containing message(s) and/or IE(s) in a tabular form
 * @param msgIeDefinitions Definitions of message(s) and/or IE(s)
 * @param formatConfig Formatting configuration. TBA
 * @returns excel4node [`Workbook`](https://www.npmjs.com/package/excel4node) object.
 * One worksheet is included for one definition
 */
export declare function format(msgIeDefinitions: IMsgIeDefinition[], formatConfig?: IFormatConfig): any;
export {};
