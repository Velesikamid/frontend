declare const concatenate: (first_string: string, second_string: string, third_string: string) => string;
declare const bool: boolean;
declare let num: number;
declare const big: bigint;
declare let str: string;
declare const any: any;
declare let func: string;
declare const id: number | string;
declare let obj: {
    name: string;
    surname: string;
};
interface Entity {
    id: number;
}
interface ToJsonStringify extends Entity {
    e1: string;
    e2: string;
}
declare const data: ToJsonStringify;
declare const jsonString: string;
