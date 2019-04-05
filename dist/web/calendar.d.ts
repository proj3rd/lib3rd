/**
 * Criteria for meeting schedules to be queried
 */
export interface ICalQuery {
    /**
     * Which technical body to be queried, case-insensitive.
     * Only `RAN`, `RAN1`, `RAN2`, `RAN3` and `RAN4` are supported currently
     */
    techBodyStr: string;
    /**
     * Whether to include sub technical body, e.g. `RAN` includes `RAN1`, `RAN2` and so on
     */
    includeSub?: boolean;
    /**
     * From when to be queried
     */
    from?: Date;
    /**
     * By when to be queried
     */
    to?: Date;
    /**
     * Whether to get detailed information of meetings
     */
    detail?: boolean;
}
/**
 * Get a collection of meeting schedules
 * @param calQuery Criteria for meeting schedules to be queried
 * @param cb Callback function
 * @param args Arguments for callback function
 * @param cb.cal node-ical [`ical`](https://www.npmjs.com/package/node-ical) object
 */
export declare function get(calQuery: ICalQuery, cb: (e: Error, cal: any, ...args: any[]) => void, ...args: any[]): void;
