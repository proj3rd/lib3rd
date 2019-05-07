import { Base } from './base';
import { NamedType } from './namedType';
export declare class Choice extends Base {
    choices: NamedType[];
    constructor(choices: any);
    setConstraint(constraint: any): Choice;
    expand(): Choice;
    depthMax(): number;
    toString(): string;
}
