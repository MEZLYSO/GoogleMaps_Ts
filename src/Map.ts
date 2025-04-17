import { Driver } from "./Driver";
import { Passenger } from "./Passenger";

export class Map_ {
  private googleMap: google.maps.Map;
  constructor(div: string) {
    this.googleMap = new google.maps.Map(document.getElementById(div)!, {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }

  //Solucion 1
  AddPassengerMark(passenger: Passenger) {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: passenger.getLocation().latitude,
        lng: passenger.getLocation().longitude,
      },
    });
  }

  AddDriverMark(driver: Driver) {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: driver.getLocation().latitude,
        lng: driver.getLocation().longitude,
      },
    });
  }
}
