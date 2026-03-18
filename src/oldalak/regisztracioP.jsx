import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import '../kinezetek/regisztracioC.css'

import Logo from '../assets/kepek/growLog.png'
import InputMezo from '../elemek/InputMezoE'
import Gomb from '../elemek/GombE'



export default function Regisztracio() {
    return (
        <div className='tarolo'>

            <div className='logoHelye'>
                <Link to="/"><img src={Logo} alt="" /></Link>
                <h1><span className=''>Grow</span></h1>
                <h1><span className=''>Casino</span></h1>
            </div>


            <div className='regisztracioHelye'>
                <div className="inputMD">
                    <InputMezo label='Username' type='text' placeholder='' />
                    <InputMezo label='E-mail' type='email' placeholder='' />
                    <InputMezo label='Password' type='password' placeholder='' />
                    <InputMezo label='Password agian' type='password' placeholder='' />
                </div>
                <div className="alsoFelirat">
                    <p>If you already have an account: <Link className='alsoFeliratKinezet' to='/bejelentkezes'>log in</Link></p>
                </div>
                <div className='gombDiv'>
                    <Gomb buttonClass='regGomb' content='Sing up' />
                </div>

            </div>
        </div>
    )
} 