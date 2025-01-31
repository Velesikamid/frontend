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
        return this._data;
    }
}
