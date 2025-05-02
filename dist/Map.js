"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Map_ = void 0;
const MapGeoCoder_1 = require("./MapGeoCoder");
class Map_ {
    constructor(div) {
        this.googleMap = new google.maps.Map(document.getElementById(div), {
            zoom: 1,
            center: {
                lat: 0,
                lng: 0,
            },
        });
        this.geoCoder = new MapGeoCoder_1.MapGeoCoder(this.googleMap);
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
        this.geoCoder.AddMarkerInfo(mark, mappable);
    }
    SerchText(options) {
        this.geoCoder.searchText(options);
    }
}
exports.Map_ = Map_;
