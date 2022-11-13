import { useEffect, useState } from "react";

export function useLocalStorage<T>(key: string, initialValue: T |
    (() => T)) {
    // State to store our value
    // Pass initial state function to useState so logic is only executed once
    const [storedValue, setStoredValue] = useState(() => {
        const jsonValue = localStorage.getItem(key)
        if (jsonValue != null) return JSON.parse(jsonValue)
        if (initialValue instanceof Function) return initialValue()
        return initialValue
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(storedValue))
    }, [key, storedValue])

    return [storedValue, setStoredValue] as const
}