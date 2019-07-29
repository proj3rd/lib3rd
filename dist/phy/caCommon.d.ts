export declare abstract class CcConfig {
    band: number;
    bwClass: string;
    fallbackGroup: string[];
    protected abstract toString(): string;
}
export declare function getIntraBandFallback<T extends CcConfig>(ccConfig: T, cls: {
    new (...args: any[]): T;
}): T[];
export declare function getFallback<T extends CcConfig>(ccConfigArr: T[], cls: {
    new (...args: any[]): T;
}): CcConfig[][];
