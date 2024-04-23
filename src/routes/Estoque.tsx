import { Link } from "react-router-dom";
import ProducHeader from "../components/ProductHeader";

export default function Estoque() {
  return (
    <main className="w-full h-screen bg-slate-50">
      <ProducHeader />
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
