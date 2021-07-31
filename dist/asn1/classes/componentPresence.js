"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComponentPresence = void 0;
const constants_1 = require("../constants");
class ComponentPresence {
    constructor(name, presence) {
        this.componentPresenceTag = true;
        if (presence !== 'ABSENT' && presence !== 'PRESENT') {
            throw Error();
        }
        this.name = name;
        this.presence = presence;
    }
    static fromObject(obj) {
        const { name, presence, componentPresenceTag } = obj;
        if (!componentPresenceTag) {
            throw Error(constants_1.MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
        }
        if (typeof name !== 'string' || typeof presence !== 'string') {
            throw Error(constants_1.MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
        }
        return new ComponentPresence(name, presence);
    }
    toString() {
        return `${this.name} ${this.presence}`;
    }
}
exports.ComponentPresence = ComponentPresence;
//# sourceMappingURL=componentPresence.js.map