import { Link, useNavigate } from 'react-router-dom'
import '../kinezetek/felsoSavC.css'
import KeresoInputM from './KeresoInputM'
import Gomb from './GombE'
import Dropdown from "../elemek/ProfileG";


export default function FelsoSav({ user, onLogout }) {
    const isLoggedIn = !!user

    const isAdmin = user?.role === 'admin'
    return (


        <div className='felsoSor'>
            <span className='growFelirat'>Grow</span>
            <KeresoInputM placeholder="Search..." className='kereso' />

            {isLoggedIn ? (
                //bejelentkezett
                <>
                    <Dropdown user={user} onLogout={onLogout}/>
                   


                </>) : (
                <>
                    <Link to="/regisztracio"><Gomb buttonClass='felsoGombok ' content='Sing up' /></Link>
                    <Link to="/bejelentkezes"><Gomb buttonClass='felsoGombok felsoGI' content='Log in' /></Link>
                </>
            )}
        </div>
    )
}