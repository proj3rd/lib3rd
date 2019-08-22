"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const combinatorics = require("js-combinatorics");
class CcConfig {
}
exports.CcConfig = CcConfig;
function getIntraBandFallback(ccConfig, cls) {
    return ccConfig.fallbackGroup.filter((bwClass) => bwClass <= ccConfig.bwClass)
        .map((bwClass) => new cls(ccConfig.band, bwClass));
}
exports.getIntraBandFallback = getIntraBandFallback;
function getFallback(ccConfigArr, cls) {
    return combinatorics.cartesianProduct(...ccConfigArr.map((ccConfig) => {
        const intraBandFallback = getIntraBandFallback(ccConfig, cls);
        intraBandFallback.unshift(null);
        return intraBandFallback;
    })).toArray();
}
exports.getFallback = getFallback;
