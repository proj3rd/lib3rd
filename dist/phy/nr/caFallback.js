"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var caCommon_1 = require("../caCommon");
var fallbackGroups = {
    FR1: ['A', 'C', 'D', 'E'],
    FR2: [
        ['A', 'B', 'C'],
        ['A', 'D', 'E', 'F'],
        ['A', 'G', 'H', 'I', 'J', 'K', 'L', 'M'],
        ['A', 'O', 'P', 'Q'],
    ],
};
var CcConfigNr = /** @class */ (function (_super) {
    __extends(CcConfigNr, _super);
    function CcConfigNr(bandOrString, bwClass) {
        var _this = _super.call(this) || this;
        if (typeof bandOrString === 'number' && bwClass) {
            _this.band = Number(bandOrString);
            if (isNaN(_this.band)) {
                throw Error("bandOrString (" + bandOrString + ") is not a valid band number");
            }
            _this.fr = getFr(_this.band);
            _this.bwClass = bwClass;
            _this.fallbackGroup = _this.getFallbackGroup();
        }
        else if (typeof bandOrString === 'string' && !bwClass) {
            var bandWithoutN = bandOrString.replace('n', '');
            var bandNumberPart = bandWithoutN.match(/\d+/)[0];
            _this.band = Number(bandNumberPart);
            _this.fr = getFr(_this.band);
            _this.bwClass = bandWithoutN.substring(bandNumberPart.length);
            _this.fallbackGroup = _this.getFallbackGroup();
        }
        else {
            throw Error('Invalid arguments');
        }
        return _this;
    }
    CcConfigNr.prototype.getFallbackGroup = function () {
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
    CcConfigNr.prototype.toString = function () {
        return "n" + this.band + this.bwClass;
    };
    return CcConfigNr;
}(caCommon_1.CcConfig));
exports.CcConfigNr = CcConfigNr;
function getFr(band) {
    return band < 200 ? 'FR1' : 'FR2';
}
exports.getFr = getFr;
if (require.main === module) {
    var argv = process.argv;
    var caConfig = argv[2];
    var ccConfigArr = caConfig.replace('CA_', '').split('-')
        .map(function (ccConfig) { return new CcConfigNr(ccConfig); });
    process.stdout.write('Original input\n');
    process.stdout.write(caConfig + "\n");
    process.stdout.write('\n');
    var fallbackCombos = caCommon_1.getFallback(ccConfigArr, CcConfigNr);
    process.stdout.write('Cartesian product\n');
    fallbackCombos.forEach(function (combo) {
        var comboFiltered = combo.filter(function (ccConfig) { return ccConfig !== null; });
        if (!comboFiltered.length) {
            return;
        }
        process.stdout.write("CA_" + comboFiltered.join('-') + "\n");
    });
}
