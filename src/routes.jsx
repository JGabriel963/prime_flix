import { BrowserRouter, Routes, Route  } from "react-router-dom";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Header from "./components/Header";
import Favoritos from "./pages/Favoritos";

export default function RoutesApp() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Movie />} />
        <Route path="/favoritos" element={<Favoritos />} />

        {/* Page Error 404 */}
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}
