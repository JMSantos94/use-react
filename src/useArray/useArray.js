import React, { useState } from 'react';

function useArr(initialState = []) {
    const [arr, setArr] = useState(initialState);
    const push = val => setArr([...arr, val]);
    const pop = () => {
        setArr(arr.slice(0, arr.length - 1));
        return arr[arr.length - 1];
    };
    return { value: arr, push, pop };
}

export default useArr;
