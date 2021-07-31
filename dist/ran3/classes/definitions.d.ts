import { Workbook } from 'exceljs';
import { Definition } from './definition';
export declare class Definitions {
    definitionList: Definition[];
    constructor(definitionList: Definition[]);
    static fromObject(obj: unknown): Definitions;
    findDefinition(sectionNumberOrName: string): Definition | undefined;
    toSpreadsheet(): Workbook;
}
//# sourceMappingURL=definitions.d.ts.map