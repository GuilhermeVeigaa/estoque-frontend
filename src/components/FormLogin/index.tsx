'use client'

import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function FormLogin() {

    const navigate = useNavigate()

    const [email, setEmail]  =  useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')



    const handleLogin = async (e) => {
        e.preventDefault()

        try {
            const response = await axios.post('http://localhost:8800/login', 
                JSON.stringify({email, password}),
                {
                    headers: { 'Content-Type': 'application/json'}
                }
            )
        
        return navigate("/estoque")
        } catch (error) {
            if (!error?.response) {
                setError('Erro ao acessar o servidor')
            } else if (error.response.status === 400) {
                setError('Email ou senha inválidos')
            }
        }
    }

  return (

    <form className="flex flex-col my-24" action="">
        <div className="flex flex-col items-center w-full">

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
            onClick={(e) => handleLogin(e)}
            >Entrar</button>
        </div>

        <div className=" w-full flex flex-col items-center mt-10">
            <p className="font-bold text-lg text-red-600">{error}</p>
        </div>
        
    </form>
  )
}
