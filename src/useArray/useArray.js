import React, { useState } from 'react';

function useArr(initialState = []) {
    const [arr, setArr] = useState(initialState);

    /* Methods */
    const push = (...args) => {
        const newArr = [...arr, ...args];
        setArr(newArr);
        return newArr.length;
    };

    const pop = () => {
        setArr(arr.slice(0, arr.length - 1));
        return arr[arr.length - 1];
    };

    const shift = () => {
        const firstEl = arr[0];
        setArr(arr.slice(1, arr.length));
        return firstEl;
    };

    const unshift = (...args) => {
        const newArr = [...args, ...arr];
        setArr(newArr);
        return newArr.length;
    };

    const concat = (...args) => setArr(arr.concat(...args));

    const map = (...args) => arr.map(...args);

    const reduce = (...args) => arr.reduce(...args);

    const filter = (...args) => arr.filter(...args);

    const forEach = (...args) => arr.forEach(...args);

    return {
        value: arr,
        set: setArr,
        concat,
        filter,
        forEach,
        map,
        pop,
        push,
        reduce,
        shift,
        unshift,
        get length() {
            return arr.length;
        },
    };
}

export default useArr;
