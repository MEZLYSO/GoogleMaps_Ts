import { Person } from "./Person";

export class MyHome implements Mappable {
  private location: {
    latitude: number;
    longitude: number;
  };

  getLocation() {
    return this.location;
  }

  markerTitle(address: () => string): string {
    return `La direccion de mi casa es ${address()}`;
  }

  constructor(passenger: Person) {
    this.location = {
      latitude: passenger.getLocation().latitude + 0.002,
      longitude: passenger.getLocation().longitude + 0.002,
    };
  }
}
