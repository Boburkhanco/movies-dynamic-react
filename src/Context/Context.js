import {createContext, useState} from "react"

const Context = createContext()

function Provider({children}){

    const [movieData, setMovieData]  = useState([])

    return(
        <Context.Provider value={{movieData, setMovieData}}>{children}</Context.Provider>
    )
}

export {Context, Provider}