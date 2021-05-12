import { Workbook } from 'exceljs';
import { Definition } from './definition';
export declare class Definitions {
    definitionList: Definition[];
    constructor(definitionList: Definition[]);
    static deserialize(serialized: string): Promise<Definitions>;
    findDefinition(sectionNumberOrName: string): Definition | undefined;
    toSpreadsheet(): Workbook;
}
//# sourceMappingURL=definitions.d.ts.map