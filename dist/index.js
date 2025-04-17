"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Map_1 = require("./Map");
const Driver_1 = require("./Driver");
const Passenger_1 = require("./Passenger");
const map = new Map_1.Map_("map");
//Solucion 1 a agregar marcadores
const driver = new Driver_1.Driver();
const passenger = new Passenger_1.Passenger();
map.AddPassengerMark(passenger);
map.AddDriverMark(driver);
