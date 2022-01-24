import { useNavigate } from "react-router-dom";
import "./MovieInfo.css"
// import useMovie from "../../Hook/useMovie";
import { useParams } from "react-router";
import { useState, useEffect} from "react";

function MovieInfo(){

    // const [movieData] = useMovie()
    // console.log(movieData);
    const history = useNavigate()
    const {imdb} = useParams()
    const [movieInfo, setMovieInfo] = useState([])


    useEffect(() => {
        fetch(`http://www.omdbapi.com/?apikey=77d4cb8c&i=${imdb}&plot=full`)
        .then(res2 => res2.json())
        .then(movieInfo => setMovieInfo(movieInfo))
        console.log(movieInfo);
    }, [movieInfo, setMovieInfo, imdb])
  
  return (
    <>
        <div key={movieInfo.imdbID}>
            <button className="exit-btn" onClick={(e) => history("/")}></button>
            <div className="main__part">
                <img src={movieInfo.Poster} alt="" />
                <div className="main__part-content content">
                    <h2 className="content-title">{movieInfo.Title}</h2>
                    <span className="content-genre">
                        <p>{movieInfo.Genre} | {movieInfo.Language} </p>
                        <p>{movieInfo.Runtime} </p>
                        <p>{movieInfo.Year}</p>
                    </span>
                    <p className="plot">{movieInfo.Plot}</p>
                    <p className="actors">{movieInfo.Actors}</p>
                </div>
            </div>
        </div>


    </>
  )
}
export default MovieInfo;