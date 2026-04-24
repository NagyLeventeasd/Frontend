import { useState, useEffect } from "react";
import {useNavigate, Link} from 'react-router-dom'


import '../kinezetek/olalsoNavBarTypShiii.css'
import '../kinezetek/homeC.css'

import Navbar from '../elemek/Navbar'
import FelsoSav from '../elemek/FelsoSav'
import Card from'../elemek/Card'

import Hirdet from '../assets/kepek/hirdetes.png'
import SlotKep from '../assets/kepek/sugar.png'
import Dropdown from "../elemek/ProfileG";
import { AuthProvider } from "../context/AuthContext";




export default function Home() {
    

    return (
        <div>
            <div>
                <FelsoSav/>
            </div>
         
            <div className='asd'>
                <Navbar user/>
                <img className="hirdetesekK" src={Hirdet} alt="" />
            </div>
        
            <div className='slots'>
                <Link to="/mines"><Card src={SlotKep} slotClass='slot'/></Link>
                <Link to="/mines"><Card src={SlotKep} slotClass='slot'/></Link>
                <Link to="/mines"><Card src={SlotKep} slotClass='slot'/></Link>
                <Link to="/mines"><Card src={SlotKep} slotClass='slot'/></Link>
                <Link to="/mines"><Card src={SlotKep} slotClass='slot'/></Link>
            </div>
            <div className='slots'>
            <Link to="/mines"><Card src={SlotKep} slotClass='slot'/></Link>
                <Link to="/mines"><Card src={SlotKep} slotClass='slot'/></Link>
                <Link to="/mines"><Card src={SlotKep} slotClass='slot'/></Link>
                <Link to="/mines"><Card src={SlotKep} slotClass='slot'/></Link>
                <Link to="/mines"><Card src={SlotKep} slotClass='slot'/></Link>
            </div>
            <div className='slots'>
            <Link to="/mines"><Card src={SlotKep} slotClass='slot'/></Link>
                <Link to="/mines"><Card src={SlotKep} slotClass='slot'/></Link>
                <Link to="/mines"><Card src={SlotKep} slotClass='slot'/></Link>
                <Link to="/mines"><Card src={SlotKep} slotClass='slot'/></Link>
                <Link to="/mines"><Card src={SlotKep} slotClass='slot'/></Link>
            </div>
            <div className='slots'>
            <Link to="/mines"><Card src={SlotKep} slotClass='slot'/></Link>
                <Link to="/mines"><Card src={SlotKep} slotClass='slot'/></Link>
                <Link to="/mines"><Card src={SlotKep} slotClass='slot'/></Link>
                <Link to="/mines"><Card src={SlotKep} slotClass='slot'/></Link>
                <Link to="/mines"><Card src={SlotKep} slotClass='slot'/></Link>
            </div>
            <div className='slots'>
            <Link to="/mines"><Card src={SlotKep} slotClass='slot'/></Link>
                <Link to="/mines"><Card src={SlotKep} slotClass='slot'/></Link>
                <Link to="/mines"><Card src={SlotKep} slotClass='slot'/></Link>
                <Link to="/mines"><Card src={SlotKep} slotClass='slot'/></Link>
                <Link to="/mines"><Card src={SlotKep} slotClass='slot'/></Link>
            </div>
            <div className='slots'>
            <Link to="/mines"><Card src={SlotKep} slotClass='slot'/></Link>
                <Link to="/mines"><Card src={SlotKep} slotClass='slot'/></Link>
                <Link to="/mines"><Card src={SlotKep} slotClass='slot'/></Link>
                <Link to="/mines"><Card src={SlotKep} slotClass='slot'/></Link>
                <Link to="/mines"><Card src={SlotKep} slotClass='slot'/></Link>
            </div>
        </div>

    )
}
