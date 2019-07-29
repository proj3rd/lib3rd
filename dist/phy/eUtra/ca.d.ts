import { CcConfig } from '../caCommon';
export declare class CcConfigLte extends CcConfig {
    constructor(bandOrString: number | string, bwClass?: string);
    toString(): string;
}
