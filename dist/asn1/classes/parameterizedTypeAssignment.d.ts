import { Workbook } from 'exceljs';
import { IParameterMapping } from '../expander';
import { AsnType } from './asnType';
import { Modules } from './modules';
import { Parameter } from './parameter';
export declare class ParameterizedTypeAssignment {
    name: string;
    parameters: Parameter[];
    asnType: AsnType;
    private parameterizedTypeAssignmentTag;
    constructor(name: string, parameters: Parameter[], asnType: AsnType);
    expand(modules: Modules, parameterMappings: IParameterMapping[]): ParameterizedTypeAssignment;
    getDepth(): number;
    toSpreadsheet(workbook?: Workbook): Workbook;
    toString(): string;
    private parameterString;
}
//# sourceMappingURL=parameterizedTypeAssignment.d.ts.map