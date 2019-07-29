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
exports.__esModule = true;
var caCommon_1 = require("../caCommon");
var fallbackGroup = ['A', 'C', 'D', 'E'];
var CcConfigLte = /** @class */ (function (_super) {
    __extends(CcConfigLte, _super);
    function CcConfigLte(bandOrString, bwClass) {
        var _this = _super.call(this) || this;
        if (typeof bandOrString === 'number' && bwClass) {
            _this.band = Number(bandOrString);
            if (isNaN(_this.band)) {
                throw Error("bandOrString (" + bandOrString + ") is not a valid band number");
            }
            _this.fallbackGroup = fallbackGroup;
            _this.bwClass = bwClass;
            if (!_this.fallbackGroup.includes(_this.bwClass)) {
                throw Error("bwClass (" + bwClass + ") is not a valid bandwidth class");
            }
        }
        else if (typeof bandOrString === 'string' && !bwClass) {
            var bandNumberPart = bandOrString.match(/\d+/)[0];
            _this.band = Number(bandNumberPart);
            _this.fallbackGroup = fallbackGroup;
            _this.bwClass = bandOrString.substring(bandNumberPart.length);
            if (!_this.fallbackGroup.includes(_this.bwClass)) {
                throw Error("bandOrString (" + bandOrString + ") does not contain a valid bandwidth class");
            }
        }
        else {
            throw Error('Invalid arguments');
        }
        return _this;
    }
    CcConfigLte.prototype.toString = function () {
        return "" + this.band + this.bwClass;
    };
    return CcConfigLte;
}(caCommon_1.CcConfig));
exports.CcConfigLte = CcConfigLte;
if (require.main === module) {
    var argv = process.argv;
    var caConfig = argv[2];
    var ccConfigArr = caConfig.replace('CA_', '').split('-')
        .map(function (caConfigPerCc) { return new CcConfigLte(caConfigPerCc); });
    process.stdout.write('Original input\n');
    process.stdout.write(caConfig + "\n");
    process.stdout.write('\n');
    var fallbackCombos = caCommon_1.getFallback(ccConfigArr, CcConfigLte);
    process.stdout.write('Cartesian product\n');
    fallbackCombos.forEach(function (combo) {
        var comboFiltered = combo.filter(function (caConfigPerCc) { return caConfigPerCc !== null; });
        if (!comboFiltered.length) {
            return;
        }
        process.stdout.write("CA_" + comboFiltered.join('-') + "\n");
    });
}
