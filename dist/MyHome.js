"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyHome = void 0;
class MyHome {
    getLocation() {
        return this.location;
    }
    markerTitle(address) {
        return `La direccion de mi casa es ${address()}`;
    }
    constructor(passenger) {
        this.location = {
            latitude: passenger.getLocation().latitude + 0.002,
            longitude: passenger.getLocation().longitude + 0.002,
        };
    }
}
exports.MyHome = MyHome;
