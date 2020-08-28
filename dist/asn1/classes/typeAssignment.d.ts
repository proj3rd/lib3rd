import { Workbook } from 'exceljs';
import { IParameterMapping } from '../expander';
import { AsnType } from './asnType';
import { Modules } from './modules';
export declare class TypeAssignment {
    name: string;
    asnType: AsnType;
    private typeAssignmentTag;
    constructor(name: string, asnType: AsnType);
    expand(modules: Modules, parameterMappings: IParameterMapping[]): TypeAssignment;
    getDepth(): number;
    toSpreadsheet(workbook?: Workbook): Workbook;
    toString(): string;
}
//# sourceMappingURL=typeAssignment.d.ts.map