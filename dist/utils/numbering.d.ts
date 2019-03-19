interface IVersion {
    major: number;
    technical: number;
    editorial: number;
}
export declare function versionFromString(str: string): IVersion;
export {};
