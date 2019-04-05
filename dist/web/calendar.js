"use strict";
exports.__esModule = true;
var ical = require("node-ical");
// https://portal.etsi.org/webapp/MeetingCalendar/QueryForm.asp
var techBodyKeyVal = {
    RAN: 373,
    RAN1: 379,
    RAN2: 380,
    RAN3: 381,
    RAN4: 382
};
var techBodies = Object.keys(techBodyKeyVal);
/**
 * Get a collection of meeting schedules
 * @param calQuery Criteria for meeting schedules to be queried
 * @param cb Callback function
 * @param args Arguments for callback function
 * @param cb.cal node-ical [`ical`](https://www.npmjs.com/package/node-ical) object
 */
function get(calQuery, cb) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    var techBodyStr = calQuery.techBodyStr, includeSub = calQuery.includeSub, to = calQuery.to, detail = calQuery.detail;
    var from = calQuery.from;
    var techBodyId = techBodyKeyVal[techBodyStr.toUpperCase()];
    if (!techBodyId) {
        if (cb) {
            cb(Error(techBodies.join(', ') + " are supported. Got " + techBodyStr), null, args);
        }
        return;
    }
    if (!from) {
        from = new Date();
    }
    var calUrlElems = [
        "https://portal.etsi.org/webapp/MeetingCalendar/iCal.asp?qTB=" + techBodyId,
        "qINCLUDE_SUB_TB=" + !!includeSub,
        "qDISPLAY_TYPE=" + (!!detail ? 'LONG' : 'SHORT'),
        "qSTART_DAY=" + from.getDate(),
        "qSTART_MONTH=" + (from.getMonth() + 1),
        "qSTART_YEAR=" + from.getFullYear(),
    ];
    if (to) {
        calUrlElems = calUrlElems.concat([
            "qEND_DAY=" + to.getDate(),
            "qEND_MONTH=" + (to.getMonth() + 1),
            "qEND_YEAR=" + to.getFullYear(),
        ]);
    }
    var calUrl = calUrlElems.join('&');
    ical.fromURL(calUrl, {}, function (e, cal) {
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
