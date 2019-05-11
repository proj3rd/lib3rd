import { IFormatConfig, IIe } from '../format/xlsx';
import { Base } from './base';
export declare class ComponentPresence extends Base {
    identifier: string;
    absentPresent: string;
    constructor(identifier: string, absentPresent: string);
    setConstraint(constraint: any): ComponentPresence;
    expand(): ComponentPresence;
    depthMax(): never;
    toString(): string;
    fillWorksheet(ieElem: IIe, ws: any, row: number, col: number, depthMax: number, constants: any[], formatConfig: IFormatConfig, depth?: number): never;
}
