import { Link, useNavigate } from 'react-router-dom'
import '../kinezetek/felsoSavC.css'
import KeresoInputM from './KeresoInputM'
import Gomb from './GombE'

export default function FelsoSav() {
    return(
        <div className='felsoSor'>
            <span className='growFelirat'>Grow</span>
            <KeresoInputM placeholder="Search..." className='kereso'/>
            <Link to="/regisztracio"><Gomb  buttonClass='felsoGombok ' content='Sing up' /></Link>
            <Link to="/bejelentkezes"><Gomb buttonClass='felsoGombok felsoGI' content='Log in' /></Link>
        </div>
    )
}