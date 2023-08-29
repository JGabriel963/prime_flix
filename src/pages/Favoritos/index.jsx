import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export default function Favoritos() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const minhaLista = localStorage.getItem("@primeflix");
    setMovies(JSON.parse(minhaLista) || []);
  }, []);

  function handleDeleteMovie(id) {
    let filterMovies = movies.filter((movie) => movie.id !== id)

    setMovies(filterMovies)
    localStorage.setItem("@primeflix", JSON.stringify(filterMovies))
    toast.success("Filme removido com sucesso")
  }

  return (
    <div className="mt-5">
      <h1 className="mb-3 font-semibold text-4xl text-blue-600">Meus Filmes - Favoritos</h1>

      {movies.length === 0 && (
        <span>Nenhum filme em favoritos :(</span>
      )}

      <ul>
        {movies.map((item) => (
          <li key={item.id} className="flex justify-between items-center mb-3">
            <span className="text-xl font-bold border-b-2 border-b-blue-400">{item.title}</span>
            <div className="space-x-4">
              <Link 
              to={`/movie/${item.id}`}
              className="p-2 border-2 font-bold border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-white rounded-lg transition-colors"
              >
                Ver detalhes
            </Link>
              <button
                onClick={() => handleDeleteMovie(item.id)}
                className="p-2 border-2 font-bold border-red-600 text-red-600 hover:bg-red-600 hover:text-white rounded-lg transition-colors"
              >
                Excluir
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
