import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../kinezetek/regisztracioC.css'

import Logo from '../assets/kepek/growLog.png'
import InputMezo from '../elemek/InputMezoE'
import Gomb from '../elemek/GombE'

import { register, login } from '../api'


export default function Regisztracio() {
    const navigate=useNavigate()
    const [email, setEmail]=useState('')
    const [username, setUsername]=useState('')
    const [psw, setPsw]=useState('')
    const [psw2, setPsw2]=useState('')

    const [hiba, setHiba]=useState('')
    const [uzenet, setUzenet]=useState('')


    async function onRegister(){
        setHiba('')
        setUzenet('')


        if(!email || !username || !psw || !psw2){
            return setHiba("Minden mezőt kötelező kitölteni")
        }
        if(psw !== psw2){
            return setHiba ("A két jelszó nem egyezik")
        }

        try {
            const data=await register(email,username,psw)

            if (data.error){
                return setHiba(data.error)
            }
            setUzenet(data.message)
            login(email,psw)
            setTimeout(()=>navigate('/'), 1000)
        } catch (err) {
            setHiba("Nem sikerült kapcsolódni a backendhez")
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
                    <InputMezo label='Username' type='text' placeholder='' value={username} setValue={setUsername} />
                    <InputMezo label='E-mail' type='email' placeholder='' value={email} setValue={setEmail} />
                    <InputMezo label='Password' type='password' placeholder='' value={psw} setValue={setPsw} />
                    <InputMezo label='Password agian' type='password' placeholder='' value={psw2} setValue={setPsw2}/>
                </div>
                <div className="alsoFelirat">
                    <p>If you already have an account: <Link className='alsoFeliratKinezet' to='/bejelentkezes'>log in</Link></p>
                </div>
                <div className='gombDiv'>
                    <Gomb buttonClass='regGomb' content='Sing up' onClick={onRegister}/>
                </div>
                {hiba && <div>{hiba}</div>}
                {uzenet && <div>{uzenet}</div>}

            </div>
        </div>
    )
} 