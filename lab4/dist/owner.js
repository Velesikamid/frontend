export class Owner {
    constructor(surname, name, patronymic, birthdate, document, documentSeries, documentNumber) {
        this.surname = surname;
        this.name = name;
        this.patronymic = patronymic;
        this.birthdate = birthdate;
        this.document = document;
        this.documentSeries = documentSeries;
        this.documentNumber = documentNumber;
    }
    get surname() {
        return this._surname;
    }
    set surname(surname) {
        this._surname = surname.toUpperCase();
    }
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name.toUpperCase();
    }
    get patronymic() {
        return this._patronymic;
    }
    set patronymic(patronymic) {
        this._patronymic = patronymic.toUpperCase();
    }
    get birthdate() {
        return this._birthdate;
    }
    set birthdate(birthdate) {
        this._birthdate = birthdate;
    }
    get document() {
        return this._document;
    }
    set document(document) {
        this._document = document;
    }
    get documentSeries() {
        return this._documentSeries;
    }
    set documentSeries(documentSeries) {
        const expression = /^\d{4}$/;
        if (expression.test(documentSeries)) {
            this._documentSeries = documentSeries;
            return;
        }
        this._documentSeries = "0000";
    }
    get documentNumber() {
        return this._documentNumber;
    }
    set documentNumber(documentNumber) {
        const expression = /^\d{6}$/;
        if (expression.test(documentNumber)) {
            this._documentNumber = documentNumber;
            return;
        }
        this._documentNumber = "000000";
    }
    printInfo() {
        console.log(`
            Surname: ${this._surname}
            Name: ${this._name}
            Patronymic: ${this._patronymic}
            Birthdate: ${this._birthdate.toLocaleDateString()}
            Document: ${this._document}
            Document series: ${this._documentSeries}
            Document number: ${this._documentNumber}
            `);
    }
}
