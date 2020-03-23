import { IModules } from './visitors/modules';
interface IIeWithDiff {
    moduleName: string;
    ieName: string;
    diff?: string;
    diffHtml?: string;
}
interface IDiffResult {
    iesOld: IIeWithDiff[];
    iesNew: IIeWithDiff[];
    iesCommon: IIeWithDiff[];
}
export declare function diff(asn1Old: IModules, asn1New: IModules, fileNameOld?: string, fileNameNew?: string): IDiffResult;
export declare function renderDiff(diffResult: IDiffResult): string;
export {};
