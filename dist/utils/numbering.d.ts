export interface IVersion {
    major: number;
    technical: number;
    editorial: number;
}
export declare function versionFromString(versionStr: string): IVersion;
export declare function seriesFromString(specNumStr: string): string;
