var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { seal, upper } from "./decor.js";
export var Transport;
(function (Transport) {
    let Vehicle = class Vehicle {
        constructor(mark, model, yearRelease, VIN, registrationNumber, owner) {
            this.mark = mark;
            this.model = model;
            this.yearRelease = yearRelease;
            this.VIN = VIN;
            this.registrationNumber = registrationNumber;
            this.owner = owner;
        }
        get mark() {
            return this._mark;
        }
        set mark(mark) {
            this._mark = mark.toUpperCase();
        }
        get model() {
            return this._model;
        }
        set model(model) {
            this._model = model.toUpperCase();
        }
        get yearRelease() {
            return this._yearRelease;
        }
        set yearRelease(yearRelease) {
            const expression = /^\d+$/;
            if (expression.test(yearRelease)) {
                this._yearRelease = yearRelease;
                return;
            }
            this._yearRelease = "0000";
        }
        get VIN() {
            return this._VIN;
        }
        set VIN(VIN) {
            if (VIN.length != 17) {
                this._VIN = "0".repeat(17);
                return;
            }
            this._VIN = VIN;
        }
        get registrationNumber() {
            return this._registrationNumber;
        }
        set registrationNumber(registrationNumber) {
            const expression = /^[ABEKMHOPCTYXАВЕКМНОРСТУХ]\d{3}[ABEKMHOPCTYXАВЕКМНОРСТУХ]{2}\d{1,3}$/i;
            if (expression.test(registrationNumber)) {
                this._registrationNumber = registrationNumber.toUpperCase();
                return;
            }
            this._registrationNumber = "А000АА000";
        }
        get owner() {
            return this._owner;
        }
        set owner(owner) {
            this._owner = owner;
        }
        printInfo() {
            console.log(`
                Mark: ${this._mark}
                Model: ${this._model}
                Year of release: ${this._yearRelease}
                VIN: ${this._VIN}
                Registration number: ${this._registrationNumber}
                `);
        }
    };
    __decorate([
        upper
    ], Vehicle.prototype, "mark", null);
    __decorate([
        upper
    ], Vehicle.prototype, "model", null);
    __decorate([
        upper
    ], Vehicle.prototype, "VIN", null);
    Vehicle = __decorate([
        seal
    ], Vehicle);
    Transport.Vehicle = Vehicle;
    class Car extends Vehicle {
        constructor(mark, model, yearRelease, VIN, registrationNumber, owner, bodyType, carClass) {
            super(mark, model, yearRelease, VIN, registrationNumber, owner);
            this.bodyType = bodyType;
            this.carClass = carClass;
        }
        get bodyType() {
            return this._bodyType;
        }
        set bodyType(bodyType) {
            this._bodyType = bodyType;
        }
        get carClass() {
            return this._carClass;
        }
        set carClass(carClass) {
            this._carClass = carClass;
        }
        printInfo() {
            super.printInfo();
            console.log(`
                Body type: ${this._bodyType}
                Car class: ${this._carClass}
                `);
        }
    }
    Transport.Car = Car;
    class Motorbike extends Vehicle {
        constructor(mark, model, yearRelease, VIN, registrationNumber, owner, frameType, forSport) {
            super(mark, model, yearRelease, VIN, registrationNumber, owner);
            this.frameType = frameType;
            this.forSport = forSport;
        }
        get frameType() {
            return this._frameType;
        }
        set frameType(frameType) {
            this._frameType = frameType.toUpperCase();
        }
        get forSport() {
            return this._forSport;
        }
        set forSport(forSport) {
            this._forSport = forSport;
        }
        printInfo() {
            super.printInfo();
            console.log(`
                Frame type: ${this._frameType}
                For sport: ${(this._forSport) ? "YES" : "NO"}
                `);
        }
    }
    Transport.Motorbike = Motorbike;
})(Transport || (Transport = {}));
