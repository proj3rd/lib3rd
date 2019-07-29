import { CcConfig } from '../caCommon';
declare type Fr = 'FR1' | 'FR2';
export declare class CcConfigNr extends CcConfig {
    fr: Fr;
    constructor(bandOrString: number | string, bwClass?: string);
    getFallbackGroup(): string[];
    toString(): string;
}
export declare function getFr(band: number): Fr;
export {};
