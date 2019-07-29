"use strict";
exports.__esModule = true;
var combinatorics = require("js-combinatorics");
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
    CaConfigPerCc.prototype.toString = function () {
        return "" + this.band + this.bwClass;
    };
    return CaConfigPerCc;
}());
function getIntraBandFallback(caConfigPerCc) {
    return fallbackGroup.filter(function (bwClass) { return bwClass <= caConfigPerCc.bwClass; })
        .map(function (bwClass) { return new CaConfigPerCc(caConfigPerCc.band, bwClass); });
}
exports.getIntraBandFallback = getIntraBandFallback;
function getFallback(caConfigPerCcArr) {
    return combinatorics.cartesianProduct.apply(combinatorics, caConfigPerCcArr.map(function (caConfigPerCc) {
        var intraBandFallback = getIntraBandFallback(caConfigPerCc);
        intraBandFallback.unshift(null);
        return intraBandFallback;
    })).toArray();
}
exports.getFallback = getFallback;
if (require.main === module) {
    var argv = process.argv;
    var caConfig = argv[2];
    var caConfigPerCcArr = caConfig.replace('CA_', '').split('-')
        .map(function (caConfigPerCc) { return new CaConfigPerCc(caConfigPerCc); });
    process.stdout.write('Original input\n');
    process.stdout.write(caConfig + "\n");
    process.stdout.write('\n');
    var fallbackCombos = getFallback(caConfigPerCcArr);
    process.stdout.write('Cartesian product\n');
    fallbackCombos.forEach(function (combo) {
        var comboFiltered = combo.filter(function (caConfigPerCc) { return caConfigPerCc !== null; });
        if (!comboFiltered.length) {
            return;
        }
        process.stdout.write("CA_" + comboFiltered.join('-') + "\n");
    });
}
