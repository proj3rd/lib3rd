export interface ICalQuery {
    techBodyStr: string;
    includeSub?: boolean;
    from?: Date;
    to?: Date;
    detail?: boolean;
}
export declare function get(calQuery: ICalQuery, cb: (e: Error, cal: any, ...args: any[]) => void, ...args: any[]): void;
