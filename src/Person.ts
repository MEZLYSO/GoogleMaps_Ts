export abstract class Person implements Mappable {
  protected readonly name: string;
  protected readonly location: {
    latitude: number;
    longitude: number;
  };

  getLocation() {
    return this.location;
  }

  markerTitle(address: () => string): string {
    return `La direccion de ${this.name} es ${address()}`;
  }

  constructor(name: string, latitude: number, longitude: number) {
    this.name = name;
    this.location = {
      latitude,
      longitude,
    };
  }
}
