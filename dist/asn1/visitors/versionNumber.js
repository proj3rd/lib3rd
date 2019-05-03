"use strict";
exports.__esModule = true;
var logging_1 = require("../../utils/logging");
var utils_1 = require("../utils");
/**
 * ANTLR4 grammar
 * ```
 * versionNumber  :  (NUMBER  COLON )?
 * ```
 */
var VersionNumberVisitor = /** @class */ (function () {
    function VersionNumberVisitor() {
    }
    VersionNumberVisitor.prototype.visitChildren = function (versionNumberCtx) {
        var childCtxes = versionNumberCtx.children;
        if (childCtxes) {
            logging_1.log.warn(utils_1.getLogWithAsn1(versionNumberCtx, 'VersionNumber not supported:'));
        }
        return null;
    };
    return VersionNumberVisitor;
}());
exports.VersionNumberVisitor = VersionNumberVisitor;
