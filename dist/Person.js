"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
class Person {
    getLocation() {
        return this.location;
    }
    constructor(name, latitude, longitude) {
        this.name = name;
        this.location = {
            latitude,
            longitude,
        };
    }
}
exports.Person = Person;
