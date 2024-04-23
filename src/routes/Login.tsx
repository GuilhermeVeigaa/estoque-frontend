import { Link } from "react-router-dom";
import FormLogin from "../components/FormLogin";

export default function Register() {
  return (
    <main>
      <Link to="/home">
        <button className="float-left text-2xl ps-2">&times;</button>
      </Link>
      <section className="flex flex-col">
        <header className="w-full flex flex-col items-center">
          
          <h1 className="text-3xl font-bold mt-10">Entrar</h1>
        </header>

        <section>
              <FormLogin />
        </section>
      </section>
    </main>
  )
}
