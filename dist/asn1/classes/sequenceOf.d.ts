import { Base } from './base';
export declare class SequenceOf extends Base {
    type: any;
    size: number | string;
    sizeMin: number | string;
    sizeMax: number | string;
    constructor(type: any);
    setConstraint(constraint: any): SequenceOf;
    expand(): SequenceOf;
    toString(depth?: number): string;
}
