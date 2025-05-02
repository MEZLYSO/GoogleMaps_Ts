export class MapGeoCoder {
  private map: google.maps.Map;
  private geocoder: google.maps.Geocoder;

  constructor(map: google.maps.Map) {
    this.map = map;
    this.geocoder = new google.maps.Geocoder();
  }

  AddMarkerInfo(marker: google.maps.Marker, mappable: Mappable) {
    marker.addListener("click", () => {
      const latLng = {
        lat: marker.getPosition()!.lat(),
        lng: marker.getPosition()!.lng(),
      };
      this.geocoder.geocode({ location: latLng }, (result, status) => {
        if (status == "OK" && result) {
          const infoWindow = new google.maps.InfoWindow({
            content: mappable.markerTitle(() => result[0].formatted_address),
          });
          infoWindow.open(this.map, marker);
        } else {
          window.alert("Error en la geolocalizacion " + status);
        }
      });
    });
  }

  searchText(options: SearchOptions): void {
    options.searchButton.addEventListener("click", () => {
      const address = options.input.value;
      this.geocoder.geocode({ address: address }, (result, status) => {
        if (status == "OK" && result) {
          this.map.setZoom(15);
          this.map.setCenter(result[0].geometry.location);
          new google.maps.Marker({
            map: this.map,
            position: result[0].geometry.location,
          });
        } else {
          alert("Error en la geolocalizacion " + status);
        }
      });
    });
  }
}
