import axios from "axios";

// Base da URL: https://api.themoviedb.org/3/
// URL da APi: /movie/now_playing?api_key=48e896d49084c8bfe5b85bc46870d1bc

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})

export default api;
