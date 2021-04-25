"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComponentPresence = void 0;
class ComponentPresence {
    constructor(name, presence) {
        if (presence !== 'ABSENT' && presence !== 'PRESENT') {
            throw Error();
        }
        this.name = name;
        this.presence = presence;
    }
    toString() {
        return `${this.name} ${this.presence}`;
    }
}
exports.ComponentPresence = ComponentPresence;
//# sourceMappingURL=componentPresence.js.map