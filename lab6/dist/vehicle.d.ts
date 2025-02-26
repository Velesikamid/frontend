import { IOwner } from "./owner.js";
import { bodyTypes, carClasses } from "./enums.js";
export declare namespace Transport {
    interface IVehicle {
        mark: string;
        model: string;
        yearRelease: string;
        VIN: string;
        registrationNumber: string;
        owner: IOwner;
        printInfo(): void;
    }
    class Vehicle implements IVehicle {
        private _mark;
        private _model;
        private _yearRelease;
        private _VIN;
        private _registrationNumber;
        private _owner;
        constructor(mark: string, model: string, yearRelease: string, VIN: string, registrationNumber: string, owner: IOwner);
        get mark(): string;
        set mark(mark: string);
        get model(): string;
        set model(model: string);
        get yearRelease(): string;
        set yearRelease(yearRelease: string);
        get VIN(): string;
        set VIN(VIN: string);
        get registrationNumber(): string;
        set registrationNumber(registrationNumber: string);
        get owner(): IOwner;
        set owner(owner: IOwner);
        printInfo(): void;
    }
    interface ICar extends IVehicle {
        bodyType: bodyTypes;
        carClass: carClasses;
    }
    class Car extends Vehicle implements ICar {
        private _bodyType;
        private _carClass;
        constructor(mark: string, model: string, yearRelease: string, VIN: string, registrationNumber: string, owner: IOwner, bodyType: bodyTypes, carClass: carClasses);
        get bodyType(): bodyTypes;
        set bodyType(bodyType: bodyTypes);
        get carClass(): carClasses;
        set carClass(carClass: carClasses);
        printInfo(): void;
    }
    interface IMotorbike extends IVehicle {
        frameType: string;
        forSport: boolean;
    }
    class Motorbike extends Vehicle implements IMotorbike {
        private _frameType;
        private _forSport;
        constructor(mark: string, model: string, yearRelease: string, VIN: string, registrationNumber: string, owner: IOwner, frameType: string, forSport: boolean);
        get frameType(): string;
        set frameType(frameType: string);
        get forSport(): boolean;
        set forSport(forSport: boolean);
        printInfo(): void;
    }
}
