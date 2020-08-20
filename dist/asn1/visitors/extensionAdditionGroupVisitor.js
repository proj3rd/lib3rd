"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const unimpl_1 = require("unimpl");
const sequenceType_1 = require("../classes/sequenceType");
const componentTypeListVisitor_1 = require("./componentTypeListVisitor");
const tagVisitor_1 = require("./tagVisitor");
const versionNumberVisitor_1 = require("./versionNumberVisitor");
/**
 * # Grammar
 * ```
 * extensionAdditionGroup: DOUBLE_L_BRACKET versionNumber componentTypeList tag? DOUBLE_R_BRACKET
 * ```
 */
class ExtensionAdditionGroupVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    visitChildren(ctx) {
        const versionNumberCtx = ctx.versionNumber();
        const versionNumber = versionNumberCtx.accept(new versionNumberVisitor_1.VersionNumberVisitor());
        const componentTypeListCtx = ctx.componentTypeList();
        const componentTypeList = componentTypeListCtx.accept(new componentTypeListVisitor_1.ComponentTypeListVisitor());
        const tagCtx = ctx.tag();
        if (tagCtx !== undefined) {
            const tag = tagCtx.accept(new tagVisitor_1.TagVisitor());
            const { length } = componentTypeList;
            if (length === 0) {
                throw Error();
            }
            const lastComponentType = componentTypeList[length - 1];
            lastComponentType.tag = tag;
        }
        return new sequenceType_1.ExtensionAdditionGroup(versionNumber, componentTypeList);
    }
    defaultResult() {
        return unimpl_1.unimpl();
    }
}
exports.ExtensionAdditionGroupVisitor = ExtensionAdditionGroupVisitor;
//# sourceMappingURL=extensionAdditionGroupVisitor.js.map