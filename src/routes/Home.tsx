import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="w-full my-44">
      <div className="w-full flex flex-col items-center">
        <Link to="/login">
          <button 
          className="bg-red-500 w-80 h-12 max-h-20 p-1 font-bold text-white text-xl rounded-full shadow-lg mb-11" 
          type="submit">Entrar</button>
        </Link>
      </div>

      <div className="w-full flex flex-col items-center">
            <Link to="/register">
              <button 
              className="bg-red-500 w-80 h-12 max-h-20 p-1 font-bold text-white text-xl rounded-full shadow-lg mt-11" 
              type="submit">Registrar</button>
            </Link>
        </div>
    </main>
  )
}
