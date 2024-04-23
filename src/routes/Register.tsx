import FormRegister from "../components/FormRegister";

export default function Register() {
  return (
    <main className="flex flex-col">
      <header className="w-full flex flex-col items-center">
        <h1 className="text-3xl font-bold mt-10">Cadastrar</h1>
      </header>

      <section>
            <FormRegister />
      </section>
    </main>
  )
}
