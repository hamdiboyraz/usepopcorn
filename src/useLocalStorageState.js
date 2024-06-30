import {useEffect, useState} from "react";

export function useLocalStorageState(key, initialState = []) {
    const [value, setValue] = useState(function () {
        const storedValue = localStorage.getItem(key)
        return storedValue ? JSON.parse(storedValue) : initialState; // By using this avoid unnecessary parsing
    });

    useEffect(function () {
        localStorage.setItem(key, JSON.stringify(value));
    }, [value, key])

    return [value, setValue];
}