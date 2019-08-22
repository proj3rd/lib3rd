"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ical = require("node-ical");
// https://portal.etsi.org/webapp/MeetingCalendar/QueryForm.asp
const techBodyKeyVal = {
    RAN: 373,
    RAN1: 379,
    RAN2: 380,
    RAN3: 381,
    RAN4: 382,
};
const techBodies = Object.keys(techBodyKeyVal);
/**
 * Get a collection of meeting schedules
 * @param calQuery Criteria for meeting schedules to be queried
 * @param cb Callback function
 * @param args Arguments for callback function
 * @param cb.cal node-ical [`ical`](https://www.npmjs.com/package/node-ical) object
 */
function get(calQuery, cb, ...args) {
    const { techBodyStr, includeSub, to, detail } = calQuery;
    let { from } = calQuery;
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
    let calUrlElems = [
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
    ical.fromURL(calUrl, {}, (e, cal) => {
        if (e) {
            if (cb) {
                cb(e, null, args);
            }
            return;
        }
        cb(null, cal, args);
    });
}
exports.get = get;
