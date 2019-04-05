import * as ical from 'node-ical';

interface ITechBodyKeyVal {
  [techBody: string]: number;
}

// https://portal.etsi.org/webapp/MeetingCalendar/QueryForm.asp
const techBodyKeyVal: ITechBodyKeyVal = {
  RAN: 373,
  RAN1: 379,
  RAN2: 380,
  RAN3: 381,
  RAN4: 382,
};
const techBodies = Object.keys(techBodyKeyVal);

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
export function get(calQuery: ICalQuery,
                    cb: (e: Error, cal: any, ...args: any[]) => void,
                    ...args: any[]): void {
  const {techBodyStr, includeSub, to, detail} = calQuery;
  let {from} = calQuery;
  const techBodyId = techBodyKeyVal[techBodyStr.toUpperCase()];
  if (!techBodyId) {
    if (cb) {
      cb(Error(`${techBodies.join(', ')} are supported. Got ${techBodyStr}`), null, args);
    }
    return;
  }
  if (!from) {
    from = new Date();
  }
  let calUrlElems: string[] = [
    `https://portal.etsi.org/webapp/MeetingCalendar/iCal.asp?qTB=${techBodyId}`,
    `qINCLUDE_SUB_TB=${!!includeSub}`,
    `qDISPLAY_TYPE=${!!detail ? 'LONG' : 'SHORT'}`,
    `qSTART_DAY=${from.getDate()}`,
    `qSTART_MONTH=${from.getMonth() + 1}`,
    `qSTART_YEAR=${from.getFullYear()}`,
  ];
  if (to) {
    calUrlElems = calUrlElems.concat([
      `qEND_DAY=${to.getDate()}`,
      `qEND_MONTH=${to.getMonth() + 1}`,
      `qEND_YEAR=${to.getFullYear()}`,
    ]);
  }
  const calUrl = calUrlElems.join('&');
  ical.fromURL(calUrl, {}, (e: Error, cal: any): void => {
    if (e) {
      if (cb) {
        cb(e, null, args);
      }
      return;
    }
    cb(null, cal, args);
  });
}
