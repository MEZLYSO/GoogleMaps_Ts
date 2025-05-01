"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MapGeoCoder = void 0;
class MapGeoCoder {
    constructor(map) {
        this.map = map;
        this.geocoder = new google.maps.Geocoder();
    }
}
exports.MapGeoCoder = MapGeoCoder;
