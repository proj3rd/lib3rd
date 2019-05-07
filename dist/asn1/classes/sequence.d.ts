import { Base } from './base';
import { NamedType } from './namedType';
export declare class Sequence extends Base {
    items: NamedType[];
    constructor(items: any[]);
    setConstraint(constraint: any): Sequence;
    expand(): Sequence;
    depthMax(): number;
    toString(): string;
}
