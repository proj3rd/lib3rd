"use strict";
exports.__esModule = true;
var combinatorics = require("js-combinatorics");
var fallbackGroups = {
    FR1: ['A', 'C', 'D', 'E'],
    FR2: [
        ['A', 'B', 'C'],
        ['A', 'D', 'E', 'F'],
        ['A', 'G', 'H', 'I', 'J', 'K', 'L', 'M'],
        ['A', 'O', 'P', 'Q'],
    ]
};
var CaConfigPerCc = /** @class */ (function () {
    function CaConfigPerCc(bandOrString, bwClass) {
        if (typeof bandOrString === 'number' && bwClass) {
            this.band = Number(bandOrString);
            if (isNaN(this.band)) {
                throw Error("bandOrString (" + bandOrString + ") is not a valid band number");
            }
            this.fr = getFr(this.band);
            this.bwClass = bwClass;
            this.fallbackGroup = this.getFallbackGroup();
        }
        else if (typeof bandOrString === 'string' && !bwClass) {
            var bandWithoutN = bandOrString.replace('n', '');
            var bandNumberPart = bandWithoutN.match(/\d+/)[0];
            this.band = Number(bandNumberPart);
            this.fr = getFr(this.band);
            this.bwClass = bandWithoutN.substring(bandNumberPart.length);
            this.fallbackGroup = this.getFallbackGroup();
        }
        else {
            throw Error('Invalid arguments');
        }
    }
    CaConfigPerCc.prototype.getFallbackGroup = function () {
        if (this.fr === 'FR1') {
            return fallbackGroups.FR1;
        }
        for (var _i = 0, _a = fallbackGroups.FR2; _i < _a.length; _i++) {
            var fallbackgroup = _a[_i];
            if (fallbackgroup.includes(this.bwClass)) {
                return fallbackgroup;
            }
        }
        throw Error("band and bwClass (" + this.band + this.bwClass + ") is not a valid CC configuration");
    };
    CaConfigPerCc.prototype.toString = function () {
        return "n" + this.band + this.bwClass;
    };
    return CaConfigPerCc;
}());
function getFr(band) {
    return band < 200 ? 'FR1' : 'FR2';
}
exports.getFr = getFr;
function getIntraBandFallback(caConfigPerCc) {
    return caConfigPerCc.fallbackGroup.filter(function (bwClass) { return bwClass <= caConfigPerCc.bwClass; })
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
