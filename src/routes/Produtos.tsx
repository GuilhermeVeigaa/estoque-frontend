import { useEffect, useState } from "react";
import ProducForm from "../components/ProductForm";
import ProductGrid from "../components/ProductGrid";
import ProducHeader from "../components/ProductHeader";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";

export default function Produtos() {

    const [product, setProduct] = useState([])
    const [onEdit, setOnEdit] = useState(null)

    const getProduct = async () => {
        try {
            const res = await axios.get("http://localhost:8800/estoque")
            setProduct(res.data.sort((a, b) => (a.name > b.name ? 1 : -1)))
        } catch (error) {
            toast.error(error)
        }
    }

    useEffect(() => {
        getProduct()
    }, [setProduct])

  return (
    <main className="w-full h-screen">
        <ProducHeader />

        <section className="w-full gap-3 flex flex-col justify-center items-center">
            <h1 className="text-3xl font-bold my-5">Produtos</h1>
            <ProducForm onEdit={onEdit} setOnEdit={setOnEdit} getProduct={getProduct} />
            <ProductGrid product={product} setProduct={setProduct} setOnEdit={setOnEdit} />
        </section>

        <ToastContainer autoClose={3000} position={'bottom-left'} />
    </main>
  )
}
