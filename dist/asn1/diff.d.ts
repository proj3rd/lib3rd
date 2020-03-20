interface IIeWithDiff {
    moduleName: string;
    ieName: string;
    diff?: string;
}
interface IIeClassification {
    iesOld: IIeWithDiff[];
    iesNew: IIeWithDiff[];
    iesCommon: IIeWithDiff[];
}
export declare function diff(filePathOld: string, filePathNew: string): IIeClassification;
export {};
