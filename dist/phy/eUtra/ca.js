"use strict";
exports.__esModule = true;
var fallbackGroup = ['A', 'C', 'D', 'E'];
var CaConfigPerCc = /** @class */ (function () {
    function CaConfigPerCc(bandOrString, bwClass) {
        if (typeof bandOrString === 'number' && bwClass) {
            this.band = Number(bandOrString);
            if (isNaN(this.band)) {
                throw Error("bandOrString (" + bandOrString + ") is not a valid band number");
            }
            if (!fallbackGroup.includes(bwClass)) {
                throw Error("bwClass (" + bwClass + ") is not a valid bandwidth class");
            }
            this.bwClass = bwClass;
        }
        else if (typeof bandOrString === 'string' && !bwClass) {
            var bandNumberPart = bandOrString.match(/\d+/)[0];
            this.band = Number(bandNumberPart);
            this.bwClass = bandOrString.substring(bandNumberPart.length);
            if (!fallbackGroup.includes(this.bwClass)) {
                throw Error("bandOrString (" + bandOrString + ") does not contain a valid bandwidth class");
            }
        }
        else {
            throw Error('Invalid arguments');
        }
    }
    return CaConfigPerCc;
}());
function getIntraBandFallback(caConfigPerCc) {
    return fallbackGroup.filter(function (bwClass) { return bwClass <= caConfigPerCc.bwClass; })
        .map(function (bwClass) { return new CaConfigPerCc(caConfigPerCc.band, bwClass); });
}
exports.getIntraBandFallback = getIntraBandFallback;
if (require.main === module) {
    var argv = process.argv;
    var caConfig = argv[2];
    var caConfigPerCcArr = caConfig.replace('CA_', '').split('-')
        .map(function (caConfigPerCc) { return new CaConfigPerCc(caConfigPerCc); });
}
