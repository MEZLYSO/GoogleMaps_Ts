"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
class Person {
    constructor(name, latitude, longitude) {
        this.name = name;
        this.location = {
            latitude,
            longitude,
        };
    }
}
exports.Person = Person;
