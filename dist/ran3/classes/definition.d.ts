import { Workbook } from 'exceljs';
import { IDefinition, IInformationElement } from '../types';
import { Conditions } from './conditions';
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
    getDepth(): number;
    toSpreadsheet(workbook?: Workbook): Workbook;
}
//# sourceMappingURL=definition.d.ts.map