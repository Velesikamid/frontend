export function seal(constructor) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}
export function upper(target, method, descriptor) {
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
