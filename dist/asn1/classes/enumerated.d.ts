import { Base } from './base';
export declare class Enumerated extends Base {
    items: any[];
    constructor(items: any[]);
    setConstraint(constraint: any): Enumerated;
    expand(): Enumerated;
    toString(depth?: number): string;
}
