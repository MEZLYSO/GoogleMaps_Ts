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

  //Solucion 2
  AddMark(mappable: Mappable) {
    const infoWindow = new google.maps.InfoWindow({
      content: "Hola",
    });
    const mark = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.getLocation().latitude,
        lng: mappable.getLocation().longitude,
      },
    });

    mark.addListener("click", () => {
      infoWindow.open(this.googleMap, mark);
    });
  }

  // //Solucion 1
  //     map: this.googleMap,
  //     position: {
  //       lat: driver.getLocation().latitude,
  //       lng: driver.getLocation().longitude,
  //     },
  //   });
  // }
}
