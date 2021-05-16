/**
 * X.682 clause 10.7
 * ```
 * @....componentId[0]...componentId[n-1]
 * ```
 */
export declare class AtNotation {
    level: number;
    componentIdList: string[];
    atNotationTag: boolean;
    constructor(level: number, componentIdList: string[]);
    static fromObject(obj: unknown): AtNotation;
    toString(): string;
}
//# sourceMappingURL=atNotation.d.ts.map