export class VehicleStorage {
    constructor(data) {
        this.creationDate = new Date();
        this.data = data;
    }
    get creationDate() {
        return this._creationDate;
    }
    set creationDate(creationDate) {
        this._creationDate = creationDate;
    }
    get data() {
        return this._data;
    }
    set data(data) {
        this._data = data;
    }
    getData() {
        return this.data;
    }
    sortByModel() {
        return this.data.sort((v1, v2) => v2.model.toLowerCase().localeCompare(v1.model.toLowerCase()));
    }
    getAllVehiclesWithMark(mark) {
        let resultArray = [];
        for (let v of this._data) {
            if (v.mark === mark) {
                resultArray.push(v);
            }
        }
        return resultArray;
    }
}
