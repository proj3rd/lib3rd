import { Base } from './base';
export declare class BitString extends Base {
    namedBitList: any;
    size: number | string;
    sizeMin: number | string;
    sizeMax: number | string;
    setConstraint(constraint: any): BitString;
    expand(): BitString;
    toString(): string;
}
