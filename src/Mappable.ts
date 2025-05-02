interface Mappable {
  getLocation(): {
    latitude: number;
    longitude: number;
  };

  markerTitle(address: () => string): string;
}
