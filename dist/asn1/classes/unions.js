"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Unions {
    constructor(intersections) {
        this.intersectionsList = intersections;
    }
    toString() {
        return this.intersectionsList
            .map((intersections) => intersections.toString())
            .join(' |\n');
    }
}
exports.Unions = Unions;
//# sourceMappingURL=unions.js.map