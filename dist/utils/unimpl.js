"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unreach = exports.unimpl = exports.todo = void 0;
function e(...args) {
    throw Error(args.join(' '));
}
function todo(...args) {
    e(['not yet implemented', ...args]);
}
exports.todo = todo;
function unimpl(...args) {
    e(['not implemented', ...args]);
}
exports.unimpl = unimpl;
function unreach(...args) {
    e(['unreachable', ...args]);
}
exports.unreach = unreach;
//# sourceMappingURL=unimpl.js.map