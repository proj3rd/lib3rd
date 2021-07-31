import { Workbook } from 'exceljs';
import { IDefinition, IInformationElement } from '../types';
import { Conditions } from './conditions';
import { Definitions } from './definitions';
import { RangeBounds } from './rangeBounds';
export declare const HEADER_NAME_BASE = "IE/Group Name";
export declare const HEADER_DESCRIPTION = "Semantics description";
export declare class Definition {
    sectionNumber: string;
    name: string;
    descriptionList: string[];
    direction: string;
    elementList: IInformationElement[];
    rangeBounds: RangeBounds;
    conditions: Conditions;
    constructor(definition: IDefinition);
    static fromObject(obj: unknown): Definition;
    /**
     * Expand `elementList`, `rangeBounds` and `condition`. This will mutate the object itself.
     */
    expand(definitions: Definitions): Definition;
    getDepth(): number;
    hasSingleRoot(): boolean;
    toSpreadsheet(workbook?: Workbook): Workbook;
}
//# sourceMappingURL=definition.d.ts.map