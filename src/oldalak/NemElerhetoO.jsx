import Logo from '../assets/kepek/growLog.png'
import { Link, useNavigate } from 'react-router-dom'
import Gomb from '../elemek/GombE'


import '../kinezetek/jelenlegNemElerhetoC.css'



export default function NemElerheto() {

    return (
        <div id='body'>

            <div id='rendezes'>
                <div>
                    <Link to="/"><img id='logo' src={Logo} alt="" /></Link>
                </div>
                <div>
                    <h1 id='nemElerhetoFelirat'>THE PAGE IS <br />CURRENTLY UNAVAILABLE </h1>
                </div>
            </div>
            <div id='gombRendezes'>
                <Link id='visszaLink' to="/"><Gomb id='visszaGomb' buttonClass="asd" content='Back to the main page' /></Link>
            </div>
        </div>
    );
}