"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Passenger = void 0;
const faker_1 = require("@faker-js/faker");
class Passenger {
    constructor() {
        this.name = faker_1.faker.person.firstName();
        this.location = {
            latitude: faker_1.faker.location.latitude(),
            longitude: faker_1.faker.location.longitude(),
        };
    }
}
exports.Passenger = Passenger;
