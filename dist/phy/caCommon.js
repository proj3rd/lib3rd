"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var combinatorics = require("js-combinatorics");
var CcConfig = /** @class */ (function () {
    function CcConfig() {
    }
    return CcConfig;
}());
exports.CcConfig = CcConfig;
function getIntraBandFallback(ccConfig, cls) {
    return ccConfig.fallbackGroup.filter(function (bwClass) { return bwClass <= ccConfig.bwClass; })
        .map(function (bwClass) { return new cls(ccConfig.band, bwClass); });
}
exports.getIntraBandFallback = getIntraBandFallback;
function getFallback(ccConfigArr, cls) {
    return combinatorics.cartesianProduct.apply(combinatorics, ccConfigArr.map(function (ccConfig) {
        var intraBandFallback = getIntraBandFallback(ccConfig, cls);
        intraBandFallback.unshift(null);
        return intraBandFallback;
    })).toArray();
}
exports.getFallback = getFallback;
