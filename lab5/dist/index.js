function getCurrentDate() {
    console.log(Date.now());
}
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(getCurrentDate, 10000);
});
const sayHello = (name) => {
    return function (surname) {
        console.log(`Hello, ${name} ${surname}!`);
    };
};
let hello = sayHello("Dmitriy");
hello("Kiselev");
hello("Ivanov");
hello = sayHello("Maria");
hello("Shenina");
hello("Pelevina");
