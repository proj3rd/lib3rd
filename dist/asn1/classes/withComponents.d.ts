import { IFormatConfig, IIe } from '../format/xlsx';
import { Base } from './base';
import { ComponentPresence } from './componentPresence';
import { ExtensionMarker } from './extensionMarker';
export declare class WithComponents extends Base {
    components: Array<ExtensionMarker | ComponentPresence>;
    constructor(components: Array<ExtensionMarker | ComponentPresence>);
    setConstraint(constraint: any): WithComponents;
    expand(): WithComponents;
    depthMax(): never;
    toString(): string;
    fillWorksheet(ieElem: IIe, ws: any, row: number, col: number, depthMax: number, constants: any[], formatConfig: IFormatConfig, depth?: number): never;
}
