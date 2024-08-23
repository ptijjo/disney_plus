import axios from "axios";


const movieBaseUrl = "https://api.themoviedb.org/3/trending/all/day?api_key=";

const movieByGenreBaseURL = "https://api.themoviedb.org/3/discover/movie?api_key=";

const ImageBaseUrl = "http://image.tmdb.org/t/p/original";

const key = "4cf28ecda7bd425d147da24a188d44e9";

const getVideos = axios.get(`${movieBaseUrl}${key}`);

const getMovieById = (id:number) => {
    axios.get(`${movieByGenreBaseURL}${key}&with_genres=${id}}`)
};



export default{getVideos,getMovieById,ImageBaseUrl}