import { Vehicle } from "./vehicle.js";

export interface IVehicleStorage<T extends Vehicle> {
    creationDate: Date;
    data: T[];
    getData(): T[];
}

export class VehicleStorage<T extends Vehicle> implements IVehicleStorage<T> {
    private _creationDate: Date;
    private _data: T[];

    constructor(data: T[]) {
        this.creationDate = new Date();
        this.data = data;
    }

    get creationDate() {
        return this._creationDate;
    }
    set creationDate(creationDate: Date) {
        this._creationDate = creationDate;
    }

    get data() {
        return this._data;
    }
    set data(data: T[]) {
        this._data = data;
    }

    getData(): T[] {
        return this._data;
    }
}