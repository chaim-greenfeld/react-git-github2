import { createContext, useState } from "react";

const BombsContext = createContext()

export function BombsContextProvider ({children}) {
    const [time, setTime] = useState(2)
    const [bombRemain, setBombRemain] = useState(9)


    return (
        <BombsContext.Provider value={{time, setTime, bombRemain, setBombRemain}}>
            {children}
        </BombsContext.Provider>
    )
}


export default BombsContext