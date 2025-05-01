export class MapGeoCoder {
  private map: google.maps.Map;
  private geocoder: google.maps.Geocoder;

  constructor(map: google.maps.Map) {
    this.map = map;
    this.geocoder = new google.maps.Geocoder();
  }
}
