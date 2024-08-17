import axios from "axios";


const movieBaseUrl = "https://api.themoviedb.org/3/trending/all/day?api_key=";

const movieByGenreBaseURL = "https://api.themoviedb.org/3/discover/movie?api_key=";

const ImageBaseUrl = "http://image.tmdb.org/t/p/original";

const getVideos = axios.get(`${movieBaseUrl}${process.env.NEXT_PUBLIC_API_KEY}`);

const getMovieById = (id:number) => {
    axios.get(`${movieByGenreBaseURL}${process.env.NEXT_PUBLIC_API_KEY}&with_genres=${id}}`)
};



export default{getVideos,getMovieById,ImageBaseUrl}