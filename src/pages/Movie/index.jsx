import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import api from "../../services/api";
import { toast } from "react-toastify";

export default function Movie() {
    const { id } = useParams();
    const navigate = useNavigate()
    const [movie, setMovie] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function loadFilme() {
            await api.get(`/movie/${id}`, {
                params: {
                    api_key: "48e896d49084c8bfe5b85bc46870d1bc",
                    language: "pt-BR",
                  }
            })
            .then((response) => {
                setMovie(response.data)
                setLoading(false)
            })
            .catch((error) => {
                console.log(error)
                navigate("/", { replace: true })
                return
            })
        }

        loadFilme()

        return () => {
            console.log("Componente foi desmotado")
        }
    }, [navigate, id])

    function saveMovie() {
        const myList = localStorage.getItem("@primeflix")

        let moviesSaved = JSON.parse(myList) || [];

        const hasMovie = moviesSaved.some((movieSaved) => movieSaved.id === movie.id)

        if (hasMovie) {
            toast.warn("Filme já está em sua lista")
            return
        }

        moviesSaved.push(movie)
        localStorage.setItem("@primeflix", JSON.stringify(moviesSaved))
        toast.success("Filme salvo com sucesso")
    }

    if (loading) {
        return (
            <div className="mt-4 flex flex-col max-w-[800px] px-2">
                <h2>Carregando detalhes do filme...</h2>
            </div>
        )
    }

    return (
        <div className="mt-4 flex flex-col max-w-[800px] px-2">
            <h1 className="my-4 text-4xl font-extrabold text-blue-800">{movie.title}</h1>
           <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={movie.title} className="rounded-xl w-[800px] max-w-full mx-h-[360px] object-cover"/>

           <h3 className="mt-4 text-3xl font-bold border-b-2 border-b-black">Sinopse</h3>
           <span className="my-3">{movie.overview}</span>

           <strong>Avaliação: {movie.vote_average} / 10</strong>

           <div className="mt-4 space-x-4">
                <button
                    onClick={saveMovie}
                    className="p-2 border-2 font-bold border-green-600 text-green-600 hover:bg-green-600 hover:text-white rounded-lg transition-colors"
                >
                    Salvar
                </button>
                <button
                    className="p-2 border-2 font-bold border-red-600 text-red-600 hover:bg-red-600 hover:text-white rounded-lg transition-colors"
                >
                    <a href={`https://youtube.com/results?search_query=${movie.title}`} target="_blank">
                        Trailer
                    </a>
                </button>
           </div>
        </div>
    )
}