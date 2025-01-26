// 1.
// Одномерный массив. Реализовать метод, возвращающий минимальное число из массива вещественных чисел.
const min = (array) => {
    if (!array)
        throw new Error("The array is empty!");
    let result = array[0];
    for (let num of array) {
        if (num < result)
            result = num;
    }
    return result;
};
// Двумерный массив. Реализовать метод, возвращающий количество нулевых значений в матрице целых чисел.
const countZeros = (array) => {
    let result = 0;
    for (let line of array) {
        for (let elem of line) {
            if (elem == 0)
                ++result;
        }
    }
    return result;
};
const concatenate = (tuple) => {
    let result = "";
    for (let string of tuple)
        result += string;
    return result;
};
// 3. Создайте тип перечисление для типов принтеров (струйный, лазерный и т.д.).
//    Выведите какой-либо тип принтера в консоль.
var printers;
(function (printers) {
    printers["JET"] = "\u0421\u0442\u0440\u0443\u0439\u043D\u044B\u0439 \u043F\u0440\u0438\u043D\u0442\u0435\u0440";
    printers["LASER"] = "\u041B\u0430\u0437\u0435\u0440\u043D\u044B\u0439 \u043F\u0440\u0438\u043D\u0442\u0435\u0440";
    printers["LED"] = "\u0421\u0432\u0435\u0442\u043E\u0434\u0438\u043E\u0434\u043D\u044B\u0439 \u043F\u0440\u0438\u043D\u0442\u0435\u0440";
    printers["SUBLIMATION"] = "\u0421\u0443\u0431\u043B\u0438\u043C\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0439 \u043F\u0440\u0438\u043D\u0442\u0435\u0440";
    printers["MATRIX"] = "\u041C\u0430\u0442\u0440\u0438\u0447\u043D\u044B\u0439 \u043F\u0440\u0438\u043D\u0442\u0435\u0440";
})(printers || (printers = {}));
console.log(printers.LED);
// 4. Реализуйте метод, который будет выводить информацию в консоль о создаваемом объекте типа
//    Cat или Dog, применяя Обобщённый тип, ограниченный типом Pet.
class Pet {
    constructor() {
        this.name = "Some pet";
        this.age = -1;
    }
    speak() {
        return "No speak. I am fish!";
    }
}
class Dog extends Pet {
    constructor() {
        super(...arguments);
        this.label = "AngryHunter";
        this.age = 8;
    }
    speak() {
        return "Yaw-Gaw!";
    }
}
class Cat extends Pet {
    constructor() {
        super(...arguments);
        this.name = "Barsik";
        this.age = 2;
    }
    speak() {
        return "Miyau!";
    }
}
function printInfo(pet) {
    console.log(`Name: ${pet.name}`);
    if ("label" in pet)
        console.log(`Label: ${pet.label}`);
    console.log(`Age: ${pet.age}`);
    console.log(pet.speak());
}
const printer = {
    price: 250,
    type: printers.MATRIX
};
console.log(JSON.stringify(printer));
