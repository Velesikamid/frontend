// 1.
// Одномерный массив. Реализовать метод, возвращающий минимальное число из массива вещественных чисел.
const min = (array: number[]): never | number => {
    if (!array) throw new Error("The array is empty!");
    
    let result: number = array[0];
    
    for (let num of array) {
        if (num < result) result = num;
    }

    return result;
}

// Двумерный массив. Реализовать метод, возвращающий количество нулевых значений в матрице целых чисел.
const countZeros = (array: number[][]): number => {
    let result: number = 0;

    for (let line of array) {
        for (let elem of line) {
            if (elem == 0) ++result;
        }
    }

    return result;
}

// 2. Создайте кортеж, который может содержать только 3 строковых значения.
//    Реализуйте метод, возвращающий конкатенацию этих строковых значений.
type tuple = readonly [string, string, string];
const concatenate = (tuple: tuple): string => {
    let result: string = "";

    for (let string of tuple) result += string;

    return result;
}

// 3. Создайте тип перечисление для типов принтеров (струйный, лазерный и т.д.).
//    Выведите какой-либо тип принтера в консоль.
enum printers {
    JET = "Струйный принтер",
    LASER = "Лазерный принтер",
    LED = "Светодиодный принтер",
    SUBLIMATION = "Сублимационный принтер",
    MATRIX = "Матричный принтер"
}
console.log(printers.LED);

// 4. Реализуйте метод, который будет выводить информацию в консоль о создаваемом объекте типа
//    Cat или Dog, применяя Обобщённый тип, ограниченный типом Pet.
class Pet {
    name: string = "Some pet"
    age: number = -1
    speak() {
        return "No speak. I am fish!";
    }
}
class Dog extends Pet {
    label = "AngryHunter";
    age = 8;
    speak() {
        return "Yaw-Gaw!";
    }
}
class Cat extends Pet {
    name = "Barsik";
    age = 2;
    speak() {
        return "Miyau!";
    }
}
function printInfo<T extends Pet>(pet: T): void {
    console.log(`Name: ${pet.name}`);
    if ("label" in pet) console.log(`Label: ${pet.label}`);
    console.log(`Age: ${pet.age}`);
    console.log(pet.speak());
}

/* 5. Создайте тип с применением перечисления из 3го задания (для
использования его в качестве типа поля, для некоторых случаев
возможно его использование при реализации массива). Добавьте
собственные поля стандартных типов, корректно характеризующие ту
или иную предметную область, совпадающую с вашим типом
перечисления. Создайте объект на основе вашего типа и выведите его в
консоль в формате JSON. */
interface Printer {
    price: number;
    type: printers;
}
const printer: Printer = {
    price: 250,
    type: printers.MATRIX
};
console.log(JSON.stringify(printer));