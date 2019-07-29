declare class CaConfigPerCc {
    band: number;
    bwClass: string;
    constructor(bandOrString: number | string, bwClass?: string);
}
export declare function getIntraBandFallback(caConfigPerCc: CaConfigPerCc): CaConfigPerCc[];
export {};
