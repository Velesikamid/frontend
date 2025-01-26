const concatenate = (first_string: string, second_string: string, third_string: string) => {
    return first_string + second_string + third_string;
}
console.log(concatenate("Hello, ", "world", "!\n"));

const bool: boolean = false;
let num: number = 125;
const big: bigint = BigInt(9999);
let str: string = "Bruh...";
const any: any = 500;
let func: string = concatenate("How ", "are ", "you?\n");
const id: number | string = 1;
let obj: {name: string, surname: string} = {name: "Steve", surname: "Jobs"};
console.log(bool);
console.log(num);
console.log(big);
console.log(str);
console.log(any);
console.log(func);
console.log(id);
console.log(obj);

interface Entity {
    id: number;
}
interface ToJsonStringify extends Entity {
    e1: string;
    e2: string;
}
const data: ToJsonStringify = {
    id: 2,
    e1: "Поле 1",
    e2: "Поле 2",
}
const jsonString: string = JSON.stringify(data);
console.log(data);
console.log(jsonString);