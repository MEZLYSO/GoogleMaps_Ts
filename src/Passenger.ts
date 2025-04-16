import { Person } from "./Person";
import { faker } from "@faker-js/faker";

export class Passenger extends Person {
  constructor() {
    super(
      faker.person.firstName(),
      faker.location.latitude(),
      faker.location.longitude(),
    );
  }
}
