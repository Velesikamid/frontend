const concatenate = (first_string, second_string, third_string) => {
    return first_string + second_string + third_string;
};
console.log(concatenate("Hello, ", "world", "!\n"));
const bool = false;
let num = 125;
const big = BigInt(9999);
let str = "Bruh...";
const any = 500;
let func = concatenate("How ", "are ", "you?\n");
const id = 1;
let obj = { name: "Steve", surname: "Jobs" };
console.log(bool);
console.log(num);
console.log(big);
console.log(str);
console.log(any);
console.log(func);
console.log(id);
console.log(obj);
const data = {
    id: 2,
    e1: "Поле 1",
    e2: "Поле 2",
};
const jsonString = JSON.stringify(data);
console.log(data);
console.log(jsonString);
