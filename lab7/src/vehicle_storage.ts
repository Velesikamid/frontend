import { Transport } from "./vehicle.js";

export interface IVehicleStorage<T extends Transport.Vehicle> {
    creationDate: Date;
    data: T[];
    getData(): T[];
    sortByModel(): T[];
    getAllVehiclesWithMark(mark: string): T[];
}

export class VehicleStorage<T extends Transport.Vehicle> implements IVehicleStorage<T> {
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
        return this.data;
    }

    sortByModel(): T[] {
        return this.data.sort((v1: T, v2: T) => v2.model.toLowerCase().localeCompare(v1.model.toLowerCase()));
    }

    getAllVehiclesWithMark(mark: string): T[] {
        let resultArray: T[] = [];

        for (let v of this._data) {
            if (v.mark === mark) {
                resultArray.push(v);
            }
        }

        return resultArray;
    }
}