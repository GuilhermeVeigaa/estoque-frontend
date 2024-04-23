import { Link } from "react-router-dom";

export default function Estoque() {
  return (
    <main className="w-full">
      <header className="bg-red-700 h-20 w-full">
          <h1 className="text-2xl font-bold text-center pt-4">Mind Stoque</h1>
      </header>
      <section className="my-44">
        <div className="w-full flex flex-col items-center">
          <Link to="/produtos">
            <button 
            className="bg-red-500 w-80 h-12 max-h-20 p-1 font-bold text-white text-xl rounded-full shadow-lg mb-11" 
            type="submit">Produtos</button>
          </Link>
        </div>

        <div className="w-full flex flex-col items-center">
              <Link to="/register">
                <button 
                className="bg-red-500 w-80 h-12 max-h-20 p-1 font-bold text-white text-xl rounded-full shadow-lg mt-11" 
                type="submit">Logs</button>
              </Link>
          </div>
        </section>
    </main>
  )
}
