import { Map_ } from "./Map";
import { Driver } from "./Driver";
import { Passenger } from "./Passenger";

const map = new Map_("map");

//Solucion 1 a agregar marcadores de google
const driver = new Driver();
const passenger = new Passenger();
map.AddPassengerMark(passenger);
map.AddDriverMark(driver);
