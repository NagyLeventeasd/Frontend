import { Link, useNavigate } from 'react-router-dom'
import '../kinezetek/felsoSavC.css'
import InputMezo from './InputMezoE'
import Gomb from './GombE'

export default function FelsoSav() {
    return(
        <div className='felsoSor'>
            <span className='growFelirat'>Grow</span>
            <InputMezo/>
            <Gomb buttonClass='felsoGombok' content='Sing up' />
            <Gomb buttonClass='felsoGombok' content='Log in' />


        </div>
    )
}