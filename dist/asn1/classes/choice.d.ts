export declare class Choice {
    choices: any[];
    constructor(choices: any);
    setConstraint(constraint: any): Choice;
    expand(): Choice;
    toString(): string;
}
