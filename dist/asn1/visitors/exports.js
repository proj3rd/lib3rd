"use strict";
exports.__esModule = true;
var logging_1 = require("../../utils/logging");
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
            logging_1.log.warn('ASN.1 contains Exports defined in X.680. This will not be treated in the current version');
        }
        return exports;
    };
    return ExportsVisitor;
}());
exports.ExportsVisitor = ExportsVisitor;
