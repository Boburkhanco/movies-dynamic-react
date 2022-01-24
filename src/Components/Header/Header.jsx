import { useEffect, useState } from "react";
import shock from "./../../assets/images/Ripple-1.4s-197px.svg"
import monkey from "./../../assets/images/mailchimp.svg"
import "./Header.css"
import {NavLink} from "react-router-dom"
import useMovie from "../../Hook/useMovie";

function Header(){
  
    const [movie, setMovie] = useState([])
    const [input, setInput] = useState("harry potter")
    const [type, setType] = useState("")
    const [page, setPage] = useState("1")
    const [disabled, setDisabled] = useState(true)
    const [movieData, setMovieData] = useMovie([])


    
    useEffect(() => {
        setTimeout(() => { 
        fetch(`http://www.omdbapi.com/?apikey=77d4cb8c&s=${input}&type=${type}&page=${page}`)
        .then(res => res.json())
        .then(movie => setMovie(movie.Search))
    }, 1500);
    }, [movie, input, type, page])

    if(movie === undefined) {
        window.location.reload()
    }


    
    
    const currentPage = parseInt(page)
    const nextPage = currentPage + 1 
    const previousPage = currentPage - 1
    
    useEffect(() => {
        if(currentPage === 1){
          setDisabled(true)
        }else{
          setDisabled(false)
        }
    }, [currentPage])

  return (
    <>
    
        <div className="header">
            <div className="header__search">
                <input type="text" className="header__search-space" />
                <button 
                className="header__submit-btn" 
                onClick={(e) => setInput(e.target.previousElementSibling.value)}>Submit</button>
            </div>
            {/* <ul className="header__list" id="listId">
                <li className="header__list-item">Home</li>
            </ul> */}
            <div className="filter">
                <select className="form-select genres" id="genreSort" onChange={(e) => setType(e.target.value)}>
                    <option value="">Type</option>
                    <option value="movie">Movie</option>
                    <option value="series">Series</option>
                    <option value="episode">Episode</option>
                </select>
                {/* <hr className="hr"/>
                <div className="ratingBtns">
                    <select className="form-select ratings" id="ratingSort">
                        <option defaultValue="">Rating</option>
                        <option value="high">High to Low</option>
                        <option value="down">Low to High </option>
                    </select>
                    <span id="viewChanger"></span>
                </div> */}
            </div>
        </div>
        <div className="main__btns">
            <button value={previousPage} disabled={disabled} onClick={(e) => setPage(e.target.value)}>Previous</button>
             <button value="1" onClick={(e) => setPage(e.target.value)}>1</button>
             <button value="2" onClick={(e) => setPage(e.target.value)}>2</button>
             <button value="3" onClick={(e) => setPage(e.target.value)}>3</button>
             <button value={nextPage} onClick={(e) => setPage(e.target.value)}>Next</button>
         </div>
        <ul className="main__list">
            {!movie.length ? (
            <img src={shock}  className="shock-img" alt="shocked"/>
            ) : (
                movie.map((item) => {
                return (
                <NavLink to={`/movieInfo/${item.imdbID}`} key={item?.Id} 
                className="main__list-item thisList" 
                onClick={(e) => {
                    setMovieData(item?.imdbID)
                }}>
                    <img src={item?.Poster} alt="" className="item2img" />
                    <h1 className="item2title">{item?.Title}</h1>
                    <p className="item2text">Type: {item?.Type}</p>
                </NavLink>
                );
            })
            )}
        </ul>
        


    </>
  )
}
export default Header;