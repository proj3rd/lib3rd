"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagVisitor = void 0;
/* eslint-disable class-methods-use-this */
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const logger_1 = require("../../logger");
const logger = logger_1.Logger.getLogger('asn1.parser.tagVisitor');
const RE_COND = /--\s*?Cond\s+?.+?/;
const RE_NEED = /--\s*?Need\s+?.+?/;
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
        if (RE_COND.test(tagText) || RE_NEED.test(tagText)) {
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