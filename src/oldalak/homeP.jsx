import { Link, useNavigate } from 'react-router-dom'
import '../kinezetek/olalsoNavBarTypShiii.css'
import Navbar from '../elemek/Navbar'
import FelsoSav from '../elemek/FelsoSav'
import Card from'../elemek/Card'
import Hirdet from '../assets/kepek/hirede.png'
import SlotKep from '../assets/kepek/sugar.png'
import '../kinezetek/homeC.css'

export default function Home() {
    return (
        <div>
            <div>
                <FelsoSav />
            </div>
         
            <div className='asd'>
                <Navbar />
                <div className='hirdetesekK'></div>
            </div>
        
            <div className='slots'>
                <Card src={SlotKep} slotClass='slot'/>
                <Card  src={SlotKep} slotClass='slot'/>
                <Card src={SlotKep} slotClass='slot'/>
                <Card src={SlotKep} slotClass='slot'/>
                <Card src={SlotKep} slotClass='slot'/>
            </div>
            <div className='slots'>
                <Card src={SlotKep} slotClass='slot'/>
                <Card src={SlotKep} slotClass='slot'/>
                <Card src={SlotKep} slotClass='slot'/>
                <Card src={SlotKep} slotClass='slot'/>
                <Card src={SlotKep} slotClass='slot'/>
            </div>
            <div className='slots'>
                <Card slotClass='slot'/>
                <Card slotClass='slot'/>
                <Card slotClass='slot'/>
                <Card slotClass='slot'/>
                <Card slotClass='slot'/>
                
            </div>
        </div>

    )
}
