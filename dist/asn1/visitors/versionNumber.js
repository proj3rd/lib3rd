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
var AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
var logging_1 = require("../../utils/logging");
var utils_1 = require("../utils");
/**
 * ANTLR4 grammar
 * ```
 * versionNumber  :  (NUMBER  COLON )?
 * ```
 */
var VersionNumberVisitor = /** @class */ (function (_super) {
    __extends(VersionNumberVisitor, _super);
    function VersionNumberVisitor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VersionNumberVisitor.prototype.defaultResult = function () {
        return null;
    };
    VersionNumberVisitor.prototype.visitChildren = function (versionNumberCtx) {
        var childCtxes = versionNumberCtx.children;
        if (childCtxes) {
            logging_1.log.warn(utils_1.getLogWithAsn1(versionNumberCtx, 'VersionNumber not supported:'));
        }
        return null;
    };
    return VersionNumberVisitor;
}(AbstractParseTreeVisitor_1.AbstractParseTreeVisitor));
exports.VersionNumberVisitor = VersionNumberVisitor;
