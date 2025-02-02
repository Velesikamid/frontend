import { bodyTypes, carClasses, documentTypes } from "./enums.js";
import { Owner } from "./owner.js";
import { Transport } from "./vehicle.js";
import { VehicleStorage } from "./vehicle_storage.js";

import Vehicle = Transport.Vehicle;
import Car = Transport.Car;
import Motorbike = Transport.Motorbike;

let owner: Owner = new Owner("Kiselev", "dmitriy", "Ivanovich", new Date(), documentTypes.PASSPORT, "abcd", "efghij");
owner.printInfo();

let vehicle1: Vehicle = new Vehicle("bmw", "m5", "abcd", "456", "567", owner);
vehicle1.printInfo();
let vehicle2: Vehicle = new Vehicle("kia", "rio", "1999", "17161514131211109", "c579ox163", owner);
vehicle2.printInfo();

let car1: Car = new Car("koenigsegg", "jesko", "2019", "12345678901234567", "x001ex163", owner, bodyTypes.SUPERCAR, carClasses.A);
car1.printInfo();
let car2: Car = new Car("mclaren", "p1", "2013", "a", "b", owner, bodyTypes.SUPERCAR, carClasses.A);
car2.printInfo();

let moto1: Motorbike = new Motorbike("yamaha", "yzf-r1", "1998", "88003141589351020", "t385ht871", owner, "Sport bike", true);
moto1.printInfo();
let moto2: Motorbike = new Motorbike("bmw", "r 1200 gs", "2004", "a", "b", owner, "tubular steel", false);
moto2.printInfo();

let storage1: VehicleStorage<Vehicle> = new VehicleStorage([vehicle1, vehicle2]);
console.log(storage1.getData());

let storage2: VehicleStorage<Car> = new VehicleStorage([car1, car2]);
console.log(storage2.getData());

let storage3: VehicleStorage<Motorbike> = new VehicleStorage([moto1, moto2]);
console.log(storage3.getData());