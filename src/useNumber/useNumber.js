import React, { useState } from 'react';

function useNumber(initialState) {
    const [num, set] = useState(initialState);

    /* Methods */
    const add = addend => set(num + addend);
    const subtract = subtrahend => set(num - subtrahend);
    const multiply = multiplier => set(num * multiplier);
    const divide = divisor => set(num / divisor);

    const pow = exponent => set(Math.pow(num, exponent));
    const sqrt = () => set(Math.sqrt(num));

    const min = (...args) => set(Math.min(min, ...args));
    const max = (...args) => set(Math.max(max, ...args));

    const isNaN = () => Number.isNaN(num);
    const isFinite = () => Number.isFinite(num);
    const isInteger = () => Number.isInteger(num);
    const isSafeInteger = () => Number.isSafeInteger(num);

    const toLocaleString = (...args) => num.toLocaleString(...args);
    const toString = (...args) => num.toString(...args);

    return {
        value: num,
        set,
        add,
        subtract,
        multiply,
        divide,
        pow,
        sqrt,
        min,
        max,
        isNaN,
        isFinite,
        isInteger,
        isSafeInteger,
        toLocaleString,
        toString,
        get length() {
            return num.length;
        },
    };
}

export default useNumber;
