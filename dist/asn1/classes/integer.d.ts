import { Base } from './base';
export declare class Integer extends Base {
    namedNumberList: any;
    value: number | string;
    min: number | string;
    max: number | string;
    setConstraint(constraint: any): Integer;
    expand(): Integer;
    toString(depth?: number): string;
}
