"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Passenger = void 0;
const Person_1 = require("./Person");
const faker_1 = require("@faker-js/faker");
class Passenger extends Person_1.Person {
    constructor() {
        super(faker_1.faker.person.firstName(), faker_1.faker.location.latitude(), faker_1.faker.location.longitude());
    }
}
exports.Passenger = Passenger;
