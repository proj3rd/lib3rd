import { Workbook } from 'exceljs';
import { AsnType } from './asnType';
import { Modules } from './modules';
import { Parameter } from './parameter';
export declare class ParameterizedTypeAssignment {
    name: string;
    parameters: Parameter[];
    asnType: AsnType;
    private parameterizedTypeAssignmentTag;
    constructor(name: string, parameters: Parameter[], asnType: AsnType);
    /**
     * Expand `asnType` property. This will mutate the object itself.
     * @param modules
     */
    expand(modules: Modules): ParameterizedTypeAssignment;
    getDepth(): number;
    toSpreadsheet(workbook?: Workbook): Workbook;
    toString(): string;
    private parameterString;
}
//# sourceMappingURL=parameterizedTypeAssignment.d.ts.map