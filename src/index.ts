import { Map_ } from "./Map";
import { Driver } from "./Driver";
import { Passenger } from "./Passenger";
import { MyHome } from "./MyHome";

const map = new Map_("map");

//Solucion 1 a agregar marcadores de google
const driver = new Driver();
const passenger = new Passenger();
//Solucion 3 donde implementamos la interfaz Mappable
const home = new MyHome(passenger);
// map.AddPassengerMark(passenger);
// map.AddDriverMark(driver);

//Solucion 2 a agregar marcadores de google con una sola clase
map.AddMark(driver);
map.AddMark(passenger);
map.AddMark(home);
//Solucion 2 a agregar marcadores de google
