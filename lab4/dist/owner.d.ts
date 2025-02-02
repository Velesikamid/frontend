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
export declare class Owner implements IOwner {
    private _surname;
    private _name;
    private _patronymic;
    private _birthdate;
    private _document;
    private _documentSeries;
    private _documentNumber;
    constructor(surname: string, name: string, patronymic: string, birthdate: Date, document: documentTypes, documentSeries: string, documentNumber: string);
    get surname(): string;
    set surname(surname: string);
    get name(): string;
    set name(name: string);
    get patronymic(): string;
    set patronymic(patronymic: string);
    get birthdate(): Date;
    set birthdate(birthdate: Date);
    get document(): documentTypes;
    set document(document: documentTypes);
    get documentSeries(): string;
    set documentSeries(documentSeries: string);
    get documentNumber(): string;
    set documentNumber(documentNumber: string);
    printInfo(): void;
}
