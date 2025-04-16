"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Driver = void 0;
const Person_1 = require("./Person");
const faker_1 = require("@faker-js/faker");
class Driver extends Person_1.Person {
    constructor() {
        super(faker_1.faker.person.firstName(), faker_1.faker.location.latitude(), faker_1.faker.location.longitude());
    }
}
exports.Driver = Driver;
