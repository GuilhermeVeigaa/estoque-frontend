import { useRef } from "react"

export default function ProducForm() {

    const Form = ({onEdit}) => {
        const ref = useRef()
    }

  return (
    <form className="flex flex-end gap-3 flex-wrap bg-zinc-100 p-5 shadow-lg rounded-md" action="">
            <div className="flex flex-col">
                <label htmlFor="">Nome</label>
                <input  
                className="w-32 px-3 border-2 border-slate-500 h-10" 
                type="text" 
                name="name" />
            </div>

            <div className="flex flex-col">
                <label htmlFor="">Descrição</label>
                <input  
                className="w-32 px-3 border-2 border-slate-500 h-10 text-wrap" 
                type="text" 
                name="desc" />
            </div>

            <div className="flex flex-col">
                <label htmlFor="">Preço</label>
                <input  
                className="w-32 px-3 border-2 border-slate-500 h-10" 
                type="number" 
                name="price" />
            </div>

            <div className="flex flex-col">
                <label htmlFor="">Quantidade</label>
                <input  
                className="w-32 px-3 border-2 border-slate-500 h-10" 
                type="number" 
                name="amount" />
            </div>

            <button 
            className="p-3 cursor-pointer rounded-md border-0 bg-red-600 text-white font-bold text-lg h-12 mt-4 shadow-md" 
            type="submit">Salvar</button>
    </form>
  )
}
