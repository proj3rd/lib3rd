"use strict";
exports.__esModule = true;
var logging_1 = require("../../utils/logging");
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
            logging_1.log.warn(utils_1.getLogWithAsn1(exportsCtx, 'Exports not supported:'));
        }
        return exports;
    };
    return ExportsVisitor;
}());
exports.ExportsVisitor = ExportsVisitor;
