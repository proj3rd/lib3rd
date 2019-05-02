import { Base } from './base';
export declare class OctetString extends Base {
    size: number | string;
    sizeMin: number | string;
    sizeMax: number | string;
    setConstraint(constraint: any): OctetString;
    expand(): OctetString;
    toString(depth?: number): string;
}
