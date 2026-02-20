import { Modules } from './classes/modules';
interface IPatch {
    moduleName1: string;
    assignmentName1: string;
    moduleName2: string;
    assignmentName2: string;
    change: 'added' | 'modified' | 'removed';
    patch: string;
    patchHtml?: string;
}
export interface IDiffResult {
    specOld: string;
    specNew: string;
    patchList: IPatch[];
}
export declare function diff(modules1: Modules, modules2: Modules): IPatch[];
export declare function renderDiff(diffResult: IDiffResult, template: string): string;
export {};
//# sourceMappingURL=diff.d.ts.map