import { Base } from './base';
export declare class Sequence extends Base {
    items: any[];
    constructor(items: any[]);
    setConstraint(constraint: any): Sequence;
    expand(): Sequence;
    toString(depth?: number): string;
}
