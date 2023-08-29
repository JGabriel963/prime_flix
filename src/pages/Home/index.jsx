import { useEffect, useState } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadMovies() {
      const response = await api.get("movie/now_playing", {
        params: {
          api_key: "48e896d49084c8bfe5b85bc46870d1bc",
          language: "pt-BR",
          page: 1,
        },
      })
    setMovies(response.data.results.slice(0, 10));
    setLoading(false)

    }

    loadMovies();

  }, []);

  if(loading) {
    return (
        <div className="mt-4 text-xl">
            <h2>Carregando Filmes...</h2>
        </div>
    )
  }

  return (
    <div>
      <div className="max-w-[800px] mt-4 mx-auto space-y-4 text-center">
        {movies.map((movie) => {
          return (
            <article
              key={movie.id}
              className="w-full bg-zinc-200 p-4 rounded-md shadow-md"
            >
              <strong className="mb-4 text-xl block">{movie.title}</strong>
              <img
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                alt={movie.title}
                className="w-[900px] mx-w-full max-h-[340px] object-cover rounded-t-lg"
              />
              <Link
                to={`/movie/${movie.id}`}
                className="flex items-center justify-center py-3 text-xl bg-blue-600 hover:bg-blue-700 transition-colors text-white rounded-b-lg"
                t
              >
                Acessar
              </Link>
            </article>
          );
        })}
      </div>
    </div>
  );
}
