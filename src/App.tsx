import { Link, Outlet, Router, Routes } from "react-router-dom"

function App() {

  return (
    <>  
      <main className="flex flex-col items-center justify-center w-full h-screen bg-red-100">
        <section>
          <Link to="/home">
            <h1 className="text-2xl font-semibold my-10 sm:text-md md:text-md xl:text-2xl text-wrap">Olá, seja bem-vindo(a) ao Mind Stock, click aqui parar ir para Home </h1>
          </Link>
        </section>
        <section className="bg-slate-50 w-2/4 h-3/4 rounded-md shadow-2xl">
          <Outlet />
        </section>
      </main>
      
    </>
  )
}

export default App
