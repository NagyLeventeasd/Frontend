import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import '../kinezetek/bejelentkezesC.css'

import Logo from '../assets/kepek/growLog.png'
import InputMezo from '../elemek/InputMezoE'
import Gomb from '../elemek/GombE'

export default function Bejelentkezes() {
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
                    <InputMezo label='Password' type='password' placeholder='' />
                </div>
                <div className="alsoFelirat">
                    <p>If you don't have an account: <Link className='alsoFeliratKinezet' to='/regisztracio'>Sing up</Link></p>
                </div>
                <div className='gombDiv'>
                    <Gomb buttonClass='regGomb' content='Log in' />
                </div>

            </div>
        </div>
    )
} 