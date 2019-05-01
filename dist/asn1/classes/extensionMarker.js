"use strict";
exports.__esModule = true;
var ExtensionMarker = /** @class */ (function () {
    function ExtensionMarker() {
    }
    ExtensionMarker.prototype.expand = function () {
        return this;
    };
    ExtensionMarker.prototype.toString = function () {
        return '...';
    };
    return ExtensionMarker;
}());
exports.ExtensionMarker = ExtensionMarker;
