import { IOwner } from "./owner.js";
import { bodyTypes, carClasses } from "./enums.js";
import { seal, upper } from "./decor.js";

export namespace Transport {
    export interface IVehicle {
        mark: string;
        model: string;
        yearRelease: string;
        VIN: string;
        registrationNumber: string;
        owner: IOwner;
        printInfo(): void;
    }

    @seal
    export class Vehicle implements IVehicle {
        private _mark: string;
        private _model: string;
        private _yearRelease: string;
        private _VIN: string;
        private _registrationNumber: string;
        private _owner: IOwner;

        constructor(mark: string, model: string, yearRelease: string, VIN: string, registrationNumber: string, owner: IOwner) {
            this.mark = mark;
            this.model = model;
            this.yearRelease = yearRelease;
            this.VIN = VIN;
            this.registrationNumber = registrationNumber;
            this.owner = owner;
        }

        @upper
        get mark() {
            return this._mark;
        }
        set mark(mark: string) {
            this._mark = mark.toUpperCase();
        }

        @upper
        get model() {
            return this._model;
        }
        set model(model: string) {
            this._model = model.toUpperCase();
        }

        get yearRelease() {
            return this._yearRelease;
        }
        set yearRelease(yearRelease: string) {
            const expression: RegExp = /^\d+$/;
            if (expression.test(yearRelease)) {
                this._yearRelease = yearRelease;
                return;
            }

            this._yearRelease = "0000";
        }

        @upper
        get VIN() {
            return this._VIN;
        }
        set VIN(VIN: string) {
            if (VIN.length != 17) {
                this._VIN = "0".repeat(17);
                return;
            }

            this._VIN = VIN;
        }

        get registrationNumber() {
            return this._registrationNumber;
        }
        set registrationNumber(registrationNumber: string) {
            const expression: RegExp = /^[ABEKMHOPCTYXАВЕКМНОРСТУХ]\d{3}[ABEKMHOPCTYXАВЕКМНОРСТУХ]{2}\d{1,3}$/i;
            if (expression.test(registrationNumber)) {
                this._registrationNumber = registrationNumber.toUpperCase();
                return;
            }

            this._registrationNumber = "А000АА000";
        }

        get owner() {
            return this._owner;
        }
        set owner(owner: IOwner) {
            this._owner = owner;
        }

        printInfo(): void {
            console.log(
                `
                Mark: ${this._mark}
                Model: ${this._model}
                Year of release: ${this._yearRelease}
                VIN: ${this._VIN}
                Registration number: ${this._registrationNumber}
                `
            );
        }
    }

    export interface ICar extends IVehicle {
        bodyType: bodyTypes;
        carClass: carClasses;
    }

    export class Car extends Vehicle implements ICar {
        private _bodyType: bodyTypes;
        private _carClass: carClasses;

        constructor(mark: string, model: string, yearRelease: string, VIN: string, registrationNumber: string, owner: IOwner, bodyType: bodyTypes, carClass: carClasses) {
            super(mark, model, yearRelease, VIN, registrationNumber, owner);
            this.bodyType = bodyType;
            this.carClass = carClass;
        }

        get bodyType() {
            return this._bodyType;
        }
        set bodyType(bodyType: bodyTypes) {
            this._bodyType = bodyType;
        }

        get carClass() {
            return this._carClass;
        }
        set carClass(carClass: carClasses) {
            this._carClass = carClass;
        }

        printInfo(): void {
            super.printInfo();
            console.log(
                `
                Body type: ${this._bodyType}
                Car class: ${this._carClass}
                `
            );
        }
    }

    export interface IMotorbike extends IVehicle {
        frameType: string;
        forSport: boolean;
    }

    export class Motorbike extends Vehicle implements IMotorbike {
        private _frameType: string;
        private _forSport: boolean;

        constructor(mark: string, model: string, yearRelease: string, VIN: string, registrationNumber: string, owner: IOwner, frameType: string, forSport: boolean) {
            super(mark, model, yearRelease, VIN, registrationNumber, owner);
            this.frameType = frameType;
            this.forSport = forSport;
        }

        get frameType() {
            return this._frameType;
        }
        set frameType(frameType: string) {
            this._frameType = frameType.toUpperCase();
        }

        get forSport() {
            return this._forSport;
        }
        set forSport(forSport: boolean) {
            this._forSport = forSport;
        }

        printInfo(): void {
            super.printInfo();
            console.log(
                `
                Frame type: ${this._frameType}
                For sport: ${(this._forSport) ? "YES" : "NO"}
                `
            );
        }
    }
}