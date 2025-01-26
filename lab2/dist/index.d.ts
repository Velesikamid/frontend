declare const min: (array: number[]) => never | number;
declare const countZeros: (array: number[][]) => number;
type tuple = readonly [string, string, string];
declare const concatenate: (tuple: tuple) => string;
declare enum printers {
    JET = "\u0421\u0442\u0440\u0443\u0439\u043D\u044B\u0439 \u043F\u0440\u0438\u043D\u0442\u0435\u0440",
    LASER = "\u041B\u0430\u0437\u0435\u0440\u043D\u044B\u0439 \u043F\u0440\u0438\u043D\u0442\u0435\u0440",
    LED = "\u0421\u0432\u0435\u0442\u043E\u0434\u0438\u043E\u0434\u043D\u044B\u0439 \u043F\u0440\u0438\u043D\u0442\u0435\u0440",
    SUBLIMATION = "\u0421\u0443\u0431\u043B\u0438\u043C\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0439 \u043F\u0440\u0438\u043D\u0442\u0435\u0440",
    MATRIX = "\u041C\u0430\u0442\u0440\u0438\u0447\u043D\u044B\u0439 \u043F\u0440\u0438\u043D\u0442\u0435\u0440"
}
declare class Pet {
    name: string;
    age: number;
    speak(): string;
}
declare class Dog extends Pet {
    label: string;
    age: number;
    speak(): string;
}
declare class Cat extends Pet {
    name: string;
    age: number;
    speak(): string;
}
declare function printInfo<T extends Pet>(pet: T): void;
interface Printer {
    price: number;
    type: printers;
}
declare const printer: Printer;
