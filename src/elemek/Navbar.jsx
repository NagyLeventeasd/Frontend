import { Link, useNavigate } from 'react-router-dom'
import '../kinezetek/olalsoNavBarTypShiii.css'
import Logo from '../assets/kepek/growLog.png'
import User from '../assets/kepek/user.png'
import History from '../assets/kepek/history.png'
import Favorite from '../assets/kepek/favorite.png'
import Slot from '../assets/kepek/slot.png'
import Roulette from '../assets/kepek/roulette.png'
import Promotion from '../assets/kepek/promotion.png'
import PokerC from '../assets/kepek/pokerC.png'
import Live from '../assets/kepek/stream.png'


export default function Navbar() {
<<<<<<< HEAD
  
    
=======


>>>>>>> master
    return (
        <div>
            <div className='azEgesz'>
                <div className='NavCucc'>

                    <div id='imgDiv'>
                        <img src={Logo} alt="" id='navcuccimg' />
                    </div>
                    <hr />
                    <Link className='link' to='/profile'> <img src={User} alt="" /> Profile</Link><br />
                    <hr />
                    <Link className='link' to='/profile'><img src={History} alt="" /> Played</Link><br />
                    <hr />
                    <Link className='link' to='/profile'><img src={Favorite} alt="" /> Favorite</Link><br />
                    <hr />
                    <Link className='link' to='/profile'><img src={Promotion} alt="" /> Promotion</Link><br />
                    <hr className='elvalasztas' />
                    <hr />
<<<<<<< HEAD
                    <Link className='link' to='/profile'><img src={Slot} alt="" /> Slots</Link><br />
=======
                    <Link className='link' to='/'><img src={Slot} alt="" /> Slots</Link><br />
>>>>>>> master
                    <hr />
                    <Link className='link' to='/profile'> <img src={PokerC} alt="" /> Cards</Link><br />
                    <hr />
                    <Link className='link' to='/profile'> <img src={Roulette} alt="" /> Roulette</Link><br />
                    <hr />
                    <Link className='link' to='/profile'> <img src={Live} alt="" /> Live casino</Link>
                    <hr />
<<<<<<< HEAD
                    
                    
=======


>>>>>>> master
                </div>

                <div className=''>

                </div>
            </div>
        </div>
    )
}