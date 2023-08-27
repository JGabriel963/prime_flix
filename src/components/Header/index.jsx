import { Link } from "react-router-dom"

export default function Header() {
    return (
        <header className="flex items-center justify-around w-full h-16 bg-blue-500 text-white">
            <Link className="font-bold text-xl" to="/">
                Prime Flix
            </Link>
            <Link className="bg-red-600 hover:bg-red-700 hover:scale-105 py-2 px-4 rounded-md transition-all" to="/favoritos">
                Meus Filmes
            </Link>
        </header>
    )
}