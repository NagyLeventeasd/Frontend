import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from "../context/AuthContext"

import '../kinezetek/bejelentkezesC.css'

import Logo from '../assets/kepek/growLog.png'
import InputMezo from '../elemek/InputMezoE'
import Gomb from '../elemek/GombE'


import { login } from '../api'

export default function Bejelentkezes() {
    const navigate=useNavigate()
    const { refreshUser } = useAuth();

    const [email, setEmail]=useState('')
    const [username, setUsername]=useState('')
    const [psw, setPsw]=useState('')
    
    const [hiba, setHiba]=useState('')
    const [uzenet, setUzenet]=useState('')
    

    async function onLogin(){
        setHiba('')
        setUzenet('')


        if(!email || !psw){
            return setHiba('Minden mező kitöltése kötelező')
        }

        try {
            const data=await login(email,psw);
            
            if (data.error){
                return setHiba(data.error)
            }
            setUzenet(data.message)

            await refreshUser();
            navigate("/")
           
        } catch (err) {
            setHiba("Nem Sikerült a backendhez kapcsolódni")
        }
    }

    return (
        <div className='tarolo'>
            <div className='logoHelye'>
                <Link to="/"><img src={Logo} alt="" /></Link>
                <h1><span className=''>Grow</span></h1>
                <h1><span className=''>Casino</span></h1>
            </div>
            <div className='regisztracioHelye'>
                <div className="inputMD">
                    <InputMezo label='Email' type='text' placeholder='' value={email} setValue={setEmail} />
                    <InputMezo label='Password' type='password' placeholder='' value={psw} setValue={setPsw}/>
                </div>
                <div className="alsoFelirat">
                    <p>If you don't have an account: <Link className='alsoFeliratKinezet' to='/regisztracio'>Sing up</Link></p>
                </div>
                <div className='gombDiv'>
                    <Gomb buttonClass='regGomb' content='Log in' onClick={onLogin}/>
                </div>
                {hiba && <div>{hiba}</div>}
                {uzenet && <div>{uzenet}</div>}
            </div>
        </div>
    )
} 