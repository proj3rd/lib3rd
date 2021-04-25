"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BorderRightTop = exports.BorderLeftTop = exports.BorderTop = exports.BorderRight = exports.BorderLeft = exports.BorderBottom = exports.FontTitle = exports.FontBold = void 0;
const lodash_1 = require("lodash");
exports.FontBold = {
    bold: true,
};
exports.FontTitle = lodash_1.merge({}, {
    size: 22,
}, exports.FontBold);
exports.BorderBottom = {
    bottom: { style: 'thin' },
};
exports.BorderLeft = {
    left: { style: 'thin' },
};
exports.BorderRight = {
    right: { style: 'thin' },
};
exports.BorderTop = {
    top: { style: 'thin' },
};
exports.BorderLeftTop = lodash_1.merge({}, exports.BorderLeft, exports.BorderTop);
exports.BorderRightTop = lodash_1.merge({}, exports.BorderRight, exports.BorderTop);
//# sourceMappingURL=style.js.map