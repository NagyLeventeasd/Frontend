import { Link, useNavigate } from 'react-router-dom'
import '../kinezetek/felsoSavC.css'
import KeresoInputM from './KeresoInputM'
import Gomb from './GombE'
import Dropdown from "../elemek/ProfileG";
import { useAuth } from "../context/AuthContext";


export default function FelsoSav() {
    const { user, onLogout, loading } = useAuth();
    const isLoggedIn = !!user;

    console.log(isLoggedIn, user);
    return (


        <div className='felsoSor'>
            <Link className='link' to='/'><span className='growFelirat'>Grow</span></Link>
            <KeresoInputM placeholder="Search..." className='kereso' />

            {isLoggedIn ? (
                //bejelentkezett
                <>
                    
                    <Dropdown/>



                </>) : (
                <>
                    <Link to="/regisztracio"><Gomb buttonClass='felsoGombok ' content='Sing up' /></Link>
                    <Link to="/bejelentkezes"><Gomb buttonClass='felsoGombok felsoGI' content='Log in' /></Link>
                </>
            )}
        </div>
    )
}