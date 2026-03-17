import { Link, useNavigate } from 'react-router-dom'
import '../kinezetek/olalsoNavBarTypShiii.css'
import Navbar from '../elemek/Navbar'
import FelsoSav from '../elemek/FelsoSav'

export default function Home() {
    return(
        <div>
            <FelsoSav/>
            <Navbar/>
        </div>
    )
}
