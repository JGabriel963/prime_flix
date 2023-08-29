import RoutesApp from "./routes";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  return (
    <div className="flex flex-col w-full justify-center items-center">
      <ToastContainer autoClose={3000} />
      <RoutesApp />
    </div>
  )
}