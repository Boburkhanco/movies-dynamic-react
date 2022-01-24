import './App.css';
import { Route, Routes } from 'react-router';
// import Main from './Components/Main/Main';
import Header from "./Components/Header/Header"
import MovieInfo from './Components/MovieInfo/MovieInfo';
import "./assets/fonts/fonts.css"


function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Header/>}/>
        <Route path="/movieInfo/:imdb" element={<MovieInfo/>}/>

      </Routes>
    </div>
  );
}

export default App;


