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
    };
}
export declare function format(msgIeDefinitions: IMsgIeDefinition[], formatConfig?: IFormatConfig): any;
export {};
