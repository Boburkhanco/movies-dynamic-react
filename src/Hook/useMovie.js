import {useContext} from "react";
import {Context} from "./../Context/Context"

function useMovie(){

    const {movieData, setMovieData} = useContext(Context)

    return [movieData, setMovieData]
    
}

export default useMovie;