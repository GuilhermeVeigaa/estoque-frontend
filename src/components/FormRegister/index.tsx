'use client'

import axios from "axios"
import { useState } from "react"

export default function FormRegister() {

    const [email, setEmail]  =  useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    const handleRegister = async (e) => {
        e.preventDefault()

        try {
            const response = await axios.post('http://localhost:8800/register', 
                JSON.stringify({name, email, password}),
                {
                    headers: { 'Content-Type': 'application/json'}
                }
            )
            setSuccess('Usuário cadastrado com sucesso')
            
        } catch (error) {
            if (!error?.response) {
                setError('Erro ao acessar o servidor')
            } else if (error.response.status === 400) {
                setError('Email já cadastrado')
            }
        }
    }

  return (

    <form className="flex flex-col my-24" action="">
        <div className="flex flex-col items-center w-full">

            <input 
            className="rounded-md w-80 max-h-96 h-max-20 p-2 my-4 text-xl font-semibold focus:outline-0 border-2 border-zinc-800 shadow-md" 
            type="text" 
            name="name" 
            placeholder="Nome de usuário"
            required
            onChange={(e) => setName(e.target.value)}/>

            <input 
            className="rounded-md w-80 max-h-96 h-max-20 p-2 my-4 text-xl font-semibold focus:outline-0 border-2 border-zinc-800 shadow-md" 
            type="email" 
            name="email" 
            placeholder="Email"
            required
            onChange={(e) => setEmail(e.target.value)}/>

            <input  
            className="rounded-md w-80 max-h-96 h-max-20 p-2 my-4 text-xl font-semibold focus:outline-0 border-2 border-zinc-800 shadow-md" 
            type="password" name="password" 
            placeholder="Senha"
            required
            onChange={(e) => setPassword(e.target.value)}/>
        </div>
        
        <div className="w-full flex flex-col items-center">
            <button 
            className="bg-red-500 w-80 h-12 max-h-20 p-1 font-bold text-white text-xl rounded-full shadow-lg mt-11" 
            type="submit"
            onClick={(e) => handleRegister(e)}
            >Registrar</button>
        </div>

        <div className=" w-full flex flex-col items-center mt-10">
            <p className="font-bold text-lg text-green-600">{success}</p>
        </div>

        <div className=" w-full flex flex-col items-center mt-10">
            <p className="font-bold text-lg text-red-600">{error}</p>
        </div>
        
    </form>
  )
}
