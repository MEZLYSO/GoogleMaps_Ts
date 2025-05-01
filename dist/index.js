"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Map_1 = require("./Map");
const Driver_1 = require("./Driver");
const Passenger_1 = require("./Passenger");
const MyHome_1 = require("./MyHome");
const map = new Map_1.Map_("map");
//Solucion 1 a agregar marcadores de google
const driver = new Driver_1.Driver();
const passenger = new Passenger_1.Passenger();
//Solucion 3 donde implementamos la interfaz Mappable
const home = new MyHome_1.MyHome(passenger);
// map.AddPassengerMark(passenger);
// map.AddDriverMark(driver);
//Solucion 2 a agregar marcadores de google con una sola clase
map.AddMark(driver);
map.AddMark(passenger);
map.AddMark(home);
//Solucion 2 a agregar marcadores de google
