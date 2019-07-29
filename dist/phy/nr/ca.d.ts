declare type Fr = 'FR1' | 'FR2';
declare class CaConfigPerCc {
    fr: Fr;
    band: number;
    bwClass: string;
    fallbackGroup: string[];
    constructor(bandOrString: number | string, bwClass?: string);
    getFallbackGroup(): string[];
    toString(): string;
}
export declare function getFr(band: number): Fr;
export declare function getIntraBandFallback(caConfigPerCc: CaConfigPerCc): CaConfigPerCc[];
export declare function getFallback(caConfigPerCcArr: CaConfigPerCc[]): CaConfigPerCc[][];
export {};
