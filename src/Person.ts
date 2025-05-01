export abstract class Person implements Mappable {
  protected readonly name: string;
  protected readonly location: {
    latitude: number;
    longitude: number;
  };

  getLocation() {
    return this.location;
  }

  constructor(name: string, latitude: number, longitude: number) {
    this.name = name;
    this.location = {
      latitude,
      longitude,
    };
  }
}
