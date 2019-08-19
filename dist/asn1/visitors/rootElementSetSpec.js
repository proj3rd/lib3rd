"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var elementSetSpec_1 = require("./elementSetSpec");
/**
 * ANTLR4 grammar
 * rootElementSetSpec : elementSetSpec
 */
var RootElementSetSpecVisitor = /** @class */ (function () {
    function RootElementSetSpecVisitor() {
    }
    RootElementSetSpecVisitor.prototype.visitChildren = function (rootElementSetSpecCtx) {
        var elementSetSpec = rootElementSetSpecCtx.children[0];
        return elementSetSpec.accept(new elementSetSpec_1.ElementSetSpecVisitor());
    };
    return RootElementSetSpecVisitor;
}());
exports.RootElementSetSpecVisitor = RootElementSetSpecVisitor;
