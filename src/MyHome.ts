import { Person } from "./Person";

export class MyHome implements Mappable {
  private location: {
    latitude: number;
    longitude: number;
  };

  getLocation() {
    return this.location;
  }

  constructor(passenger: Person) {
    this.location = {
      latitude: passenger.getLocation().latitude + 0.002,
      longitude: passenger.getLocation().longitude + 0.002,
    };
  }
}
