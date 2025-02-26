export function seal(constructor: Function) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}

export function upper(target: Object, method: string, descriptor: PropertyDescriptor) {
    let originalGetter = descriptor.get;

    if (!originalGetter) {
        throw new Error("@upper can be used only with getters!");
    }

    descriptor.get = function () {
        let returnValue = originalGetter.apply(this);
        if (typeof returnValue === "string") {
            return returnValue.toUpperCase();
        }
        return returnValue;
    };
}