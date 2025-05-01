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
    //Solucion 2
    AddMark(mappable) {
        const infoWindow = new google.maps.InfoWindow({
            content: "Hola",
        });
        const mark = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: mappable.getLocation().latitude,
                lng: mappable.getLocation().longitude,
            },
        });
        mark.addListener("click", () => {
            infoWindow.open(this.googleMap, mark);
        });
    }
}
exports.Map_ = Map_;
