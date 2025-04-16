export abstract class Person {
  protected readonly name: string;
  protected readonly location: {
    latitude: number;
    longitude: number;
  };
  constructor(name: string, latitude: number, longitude: number) {
    this.name = name;
    this.location = {
      latitude,
      longitude,
    };
  }
}
