import { faker } from "@faker-js/faker";

class Passenger {
  name: string;
  location: {
    latitude: number;
    longitude: number;
  };
  constructor(name: string, latitude: number, longitude: number) {}
}
