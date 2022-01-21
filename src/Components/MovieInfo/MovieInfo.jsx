import { NavLink } from "react-router-dom";
// import useMovie from "../../Hook/useMovie";
import { useParams } from "react-router";

function MovieInfo(){

    // const [movieData] = useMovie()
    // console.log(movieData);
    const {imdb} = useParams()
    console.log(imdb);
  
  return (
    <>
        <NavLink to="/"><button>Exit</button></NavLink>
        <h1> Hello, This is movieInfo</h1>

        {/* {
            movieData.map((item) => {
                return(
                    <li key="item.Id">
                        <h1>{console.log(item)}</h1>
                    </li>
                )
            })
        } */}


    </>
  )
}
export default MovieInfo;