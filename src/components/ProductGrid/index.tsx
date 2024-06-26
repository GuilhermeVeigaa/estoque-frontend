import { FaTrash, FaEdit } from "react-icons/fa"
import { toast } from "react-toastify"
import axios from "axios"

export default function ProductGrid({ product, setProduct, setOnEdit }) {

  const handleEdit = (item) => {
    setOnEdit(item)
  } 

  const handleDelete = async (id) => {
    await axios.delete("http://localhost:8800/estoque" + id)
    .then(({ data }) => {
      const newArray = product.filter((product) => product.id !== id)

      setProduct(newArray)
      toast.success(data)
    })
    .catch(({ data }) => toast.error(data))

    setOnEdit(null)
  }

  return (
    <table className="w-full bg-zinc-100 p-5 shadow-md rounded-md max-w-4xl my-5 mx-auto break-all">
      <thead>
        <tr>
          <th className="text-start pb-1 border-b-2 border-zinc-500">Nome</th>
          <th className="text-start pb-1 border-b-2 border-zinc-500">Descrição</th>
          <th className="text-start ps-3 pb-1 border-b-2 border-zinc-500">Preço</th>
          <th className="text-start pb-1 border-b-2 border-zinc-500">Quantidade</th>
          <th className="text-start pb-1 border-b-2 border-zinc-500"></th>
          <th className="text-start pb-1 border-b-2 border-zinc-500"></th>
        </tr>
      </thead>
      <tbody>
        {product.map((item, i) => (
          <tr key={i}>
            <td className="pt-4 text-start" width="20%">{item.name}</td>
            <td className="pt-4 me-3 text-start text-wrap" width="30%">{item.desc}</td>
            <td className="pt-4 text-start ps-3" width="20%">{item.price}</td>
            <td className="pt-4 text-start" width="20%">{item.amount}</td>

            <td className=" pt-4 text-start" align="center" width="5%">
              <FaEdit onClick={() => handleEdit(item)} />
            </td>

            <td className="pt-4 text-start" align="center" width="5%">
              <FaTrash onClick={() => handleDelete(item.id)} />
              </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
