import React, { useState } from 'react';

function useObject(initialState = {}) {
    const [obj, set] = useState(initialState);

    /* Methods */
    const merge = (...args) => set(Object.assign({}, obj, ...args));

    const entries = () => Object.entries(obj);
    const values = () => Object.values(obj);
    const keys = () => Object.keys(obj);

    return { value: obj, set, merge, entries, values, keys };
}

export default useObject;
