"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const asnType_1 = require("./classes/asnType");
function expand(msgIe, asn1Pool) {
    const msgIeClone = lodash_1.cloneDeep(msgIe);
    const parameterList = msgIeClone.definition instanceof asnType_1.AsnType ? msgIeClone.definition.parameterList : [];
    msgIeClone.definition.expand(asn1Pool, undefined, parameterList);
    return msgIeClone;
}
exports.expand = expand;
