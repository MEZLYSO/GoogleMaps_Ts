"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Map_ = void 0;
class Map_ {
    constructor(div) {
        this.googleMap = new google.maps.Map(document.getElementById(div), {
            zoom: 1,
            center: {
                lat: 0,
                lng: 0,
            },
        });
    }
    //Solucion 1
    AddPassengerMark(passenger) {
        new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: passenger.getLocation().latitude,
                lng: passenger.getLocation().longitude,
            },
        });
    }
    AddDriverMark(driver) {
        new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: driver.getLocation().latitude,
                lng: driver.getLocation().longitude,
            },
        });
    }
}
exports.Map_ = Map_;
