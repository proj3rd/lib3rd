"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefinitiveIdentification = void 0;
class DefinitiveIdentification {
    constructor(definitiveOID) {
        this.definitiveOID = definitiveOID;
    }
    toString() {
        if (this.definitiveOID.length === 0) {
            return '';
        }
        const innerString = this.definitiveOID
            .map((item) => `${item.name} (${item.number})`)
            .join(' ');
        return `{${innerString}}`;
    }
}
exports.DefinitiveIdentification = DefinitiveIdentification;
//# sourceMappingURL=definitiveIdentification.js.map