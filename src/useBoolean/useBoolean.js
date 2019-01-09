import React, { useState } from 'react';

function useBoolean(initialState = false) {
    const [bool, set] = useState(initialState);

    /* Methods */
    const toggle = () => set(!bool);
    const setTrue = () => set(true);
    const setFalse = () => set(false);
    const toString = () => bool.toString();

    return {
        value: bool,
        toggle,
        setTrue,
        setFalse,
        toString,
    };
}

export default useBoolean;
