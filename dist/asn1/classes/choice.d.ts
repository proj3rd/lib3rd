import { Base } from './base';
export declare class Choice extends Base {
    choices: any[];
    constructor(choices: any);
    setConstraint(constraint: any): Choice;
    expand(): Choice;
    toString(): string;
}
