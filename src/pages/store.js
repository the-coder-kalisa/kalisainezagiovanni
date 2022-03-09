import React, {createContext} from 'react'
import Verification from './Verification'
const Context = createContext();

export function main(){
    return(
        <Context.Provider value={"thecoder"}>
    <Verification />
</Context.Provider>
    )
}