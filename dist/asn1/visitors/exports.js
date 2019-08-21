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
 * exports :   (EXPORTS_LITERAL symbolsExported SEMI_COLON
 *  |    EXPORTS_LITERAL ALL_LITERAL SEMI_COLON )?
 */
var ExportsVisitor = /** @class */ (function (_super) {
    __extends(ExportsVisitor, _super);
    function ExportsVisitor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExportsVisitor.prototype.defaultResult = function () {
        return [];
    };
    ExportsVisitor.prototype.visitChildren = function (exportsCtx) {
        var exports = [];
        if (exportsCtx.children) {
            logging_1.log.warn(utils_1.getLogWithAsn1(exportsCtx, 'Exports not supported:'));
        }
        return exports;
    };
    return ExportsVisitor;
}(AbstractParseTreeVisitor_1.AbstractParseTreeVisitor));
exports.ExportsVisitor = ExportsVisitor;
