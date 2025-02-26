import { Transport } from "./vehicle.js";
export interface IVehicleStorage<T extends Transport.Vehicle> {
    creationDate: Date;
    data: T[];
    getData(): T[];
}
export declare class VehicleStorage<T extends Transport.Vehicle> implements IVehicleStorage<T> {
    private _creationDate;
    private _data;
    constructor(data: T[]);
    get creationDate(): Date;
    set creationDate(creationDate: Date);
    get data(): T[];
    set data(data: T[]);
    getData(): T[];
}
