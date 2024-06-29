import { useState } from 'react'
import { Stringify } from '@utilities'

export function useLocalStorage<T> (key: string, initialValue: T) {
  const [ storedV, setStoredValue ] = useState<T>(() => {
    if (typeof window === 'undefined') {
      return initialValue
    }

    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (e: any) {
      throw new Error(`Fail in useLocalStorage ${ initialValue } ${ Stringify(e) }`)
    }
  })

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedV) : value
      setStoredValue(valueToStore)

      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore))
      }
    } catch (e: any) {
      throw new Error(`Fail in useLocalStorage, setValue ${ Stringify(e) }`)
    }
  }

  return [ storedV, setValue ] as const;
}