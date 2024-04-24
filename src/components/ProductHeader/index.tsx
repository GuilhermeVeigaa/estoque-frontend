import { Link } from "react-router-dom"

export default function ProducHeader() {
  return (
    <header className="bg-red-700 h-20 w-full flex justify-evenly">
        <h1 className="text-2xl font-bold text-center pt-4 ps-80">Mind Stock</h1>
        <Link to="/estoque">
          <button className="bg-blue-600 text-center p-1 font-bold text-white rounded mt-4">Voltar</button>
        </Link>
    </header>
  )
}
