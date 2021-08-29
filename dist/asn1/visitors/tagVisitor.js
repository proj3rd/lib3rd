"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagVisitor = exports.RE_NEED = exports.RE_COND = void 0;
/* eslint-disable class-methods-use-this */
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const logger_1 = require("../../logger");
const logger = logger_1.Logger.getLogger('asn1.parser.tagVisitor');
exports.RE_COND = /--\s*?Cond\s+?.+?/i;
exports.RE_NEED = /--\s*?Need\s+?.+?/i;
/**
 * # Grammar
 * ```
 * tag: TAG
 * TAG: '--' ~('\n'|'\r')*
 * ```
 */
class TagVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    visitChildren(ctx) {
        const tagText = ctx.text.replace(/\s+/, ' ');
        if (exports.RE_COND.test(tagText) || exports.RE_NEED.test(tagText)) {
            return tagText;
        }
        logger.warn(`Need to check if tag contains a human error:
${tagText}`);
        return '';
    }
    defaultResult() {
        return '';
    }
}
exports.TagVisitor = TagVisitor;
//# sourceMappingURL=tagVisitor.js.map