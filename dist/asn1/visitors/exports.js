"use strict";
exports.__esModule = true;
var utils_1 = require("../utils");
/**
 * exports :   (EXPORTS_LITERAL symbolsExported SEMI_COLON
 *  |    EXPORTS_LITERAL ALL_LITERAL SEMI_COLON )?
 */
var ExportsVisitor = /** @class */ (function () {
    function ExportsVisitor() {
    }
    ExportsVisitor.prototype.visitChildren = function (exportsCtx) {
        var exports = [];
        if (exportsCtx.children) {
            utils_1.warnNotSupportedAsn1(exportsCtx);
        }
        return exports;
    };
    return ExportsVisitor;
}());
exports.ExportsVisitor = ExportsVisitor;
