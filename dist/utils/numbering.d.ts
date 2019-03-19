export interface IVersion {
    major: number;
    technical: number;
    editorial: number;
}
export declare function seriesFromString(specNumStr: string): string;
export declare function versionFromString(versionStr: string): IVersion;
