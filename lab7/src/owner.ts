import { documentTypes } from "./enums.js";

export interface IOwner {
    surname: string;
    name: string;
    patronymic: string;
    birthdate: Date;
    document: documentTypes;
    documentSeries: string;
    documentNumber: string;
    printInfo(): void;
}

export class Owner implements IOwner {
    private _surname: string;
    private _name: string;
    private _patronymic: string;
    private _birthdate: Date;
    private _document: documentTypes;
    private _documentSeries: string;
    private _documentNumber: string;

    constructor(surname: string, name: string, patronymic: string, birthdate: Date, document: documentTypes, documentSeries: string, documentNumber: string) {
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
    set surname(surname: string) {
        this._surname = surname.toUpperCase();
    }

    get name() {
        return this._name;
    }
    set name(name: string) {
        this._name = name.toUpperCase();
    }

    get patronymic() {
        return this._patronymic;
    }
    set patronymic(patronymic: string) {
        this._patronymic = patronymic.toUpperCase();
    }

    get birthdate() {
        return this._birthdate;
    }
    set birthdate(birthdate: Date) {
        this._birthdate = birthdate;
    }

    get document() {
        return this._document;
    }
    set document(document: documentTypes) {
        this._document = document;
    }

    get documentSeries() {
        return this._documentSeries;
    }
    set documentSeries(documentSeries: string) {
        const expression: RegExp = /^\d{4}$/;
        if (expression.test(documentSeries)) {
            this._documentSeries = documentSeries;
            return;
        }

        this._documentSeries = "0000";
    }

    get documentNumber() {
        return this._documentNumber;
    }
    set documentNumber(documentNumber: string) {
        const expression: RegExp = /^\d{6}$/;
        if (expression.test(documentNumber)) {
            this._documentNumber = documentNumber;
            return;
        }

        this._documentNumber = "000000";
    }

    printInfo(): void {
        console.log(
            `
            Surname: ${this._surname}
            Name: ${this._name}
            Patronymic: ${this._patronymic}
            Birthdate: ${this._birthdate.toLocaleDateString()}
            Document: ${this._document}
            Document series: ${this._documentSeries}
            Document number: ${this._documentNumber}
            `
        );
    }
}