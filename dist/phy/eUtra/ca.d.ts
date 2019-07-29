declare class CaConfigPerCc {
    band: number;
    bwClass: string;
    constructor(bandOrString: number | string, bwClass?: string);
    toString(): string;
}
export declare function getIntraBandFallback(caConfigPerCc: CaConfigPerCc): CaConfigPerCc[];
export declare function getFallback(caConfigPerCcArr: CaConfigPerCc[]): CaConfigPerCc[][];
export {};
