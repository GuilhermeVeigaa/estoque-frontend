import { useEffect, useRef } from "react"
import axios from "axios"
import { toast } from "react-toastify"

export default function ProducForm({onEdit, setOnEdit, getProduct}) {
        
    const ref = useRef()


    useEffect(() => {
        if (onEdit) {
            const product = ref.current

            product.name.value = onEdit.name
            product.desc.value = onEdit.desc
            product.price.value = onEdit.price
            product.amount.value = onEdit.amount
        }
    }, [onEdit])

    const handleSubmit = async (e) => {
        e.preventDefault()

        const product = ref.current

        if (
            !product.name.value || !product.desc.value || !product.price.value || !product.amount.value
        ) {
            return toast.warn("Preencha todos os campos")
        }

        if (onEdit) {
            await axios.put("http://localhost:8800/estoque" + onEdit.id, {
                name: product.name.value,
                desc: product.desc.value,
                price: product.price.value,
                amount: product.amount.value,
            })
            .then(({ data }) => toast.success(data))
            .catch(({ data }) => toast.error(data))
        } else {
            await axios.post("http://localhost:8800/estoque", {
                name: product.name.value,
                desc: product.desc.value,
                price: product.price.value,
                amount: product.amount.value,
            })
            .then(({ data }) => toast.success(data))
            .catch(({ data }) => toast.error(data))
        }

        product.name.value = ""
        product.desc.value = ""
        product.price.value = ""
        product.amount.value = ""

        setOnEdit(null)
        getProduct()
    }

  return (
    <form ref={ref} className="flex flex-end gap-3 flex-wrap bg-zinc-100 p-5 shadow-lg rounded-md" onSubmit={handleSubmit}>
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
