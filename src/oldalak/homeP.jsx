import { Link, useNavigate } from 'react-router-dom'
import '../kinezetek/olalsoNavBarTypShiii.css'
import Navbar from '../elemek/Navbar'
import FelsoSav from '../elemek/FelsoSav'
import Hirdet from '../assets/kepek/hirede.png'

export default function Home() {
    return (
        <div>
            <div>
                <FelsoSav />
            </div>
         
            <div className='asd'>
                <Navbar />
                <img src={Hirdet} alt="" />
            </div>
        </div>
    )
}
