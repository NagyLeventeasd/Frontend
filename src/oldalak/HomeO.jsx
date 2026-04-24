import { useState, useEffect } from "react";
import {useNavigate } from 'react-router-dom'
import {whoami, logout} from '../api';

import '../kinezetek/olalsoNavBarTypShiii.css'
import '../kinezetek/homeC.css'

import Navbar from '../elemek/Navbar'
import FelsoSav from '../elemek/FelsoSav'
import Card from'../elemek/Card'

import Hirdet from '../assets/kepek/hirdetes.png'
import SlotKep from '../assets/kepek/sugar.png'
import Dropdown from "../elemek/ProfileG";




export default function Home() {
    const navigate=useNavigate()

    const [user, setUser] = useState(null)
    const [userError, setUserError]=useState(null)
    useEffect(() => {
        async function load() {
            const data = await whoami()
            if (!data.error) {
                return setUser(data)
            }
            return setUserError(data.error)
        }
        load()
    }, [])

    async function onLogout(){
        const data=await logout()

        if (!data.error) {
            return setUserError(data.error)
        }
        setUser(null)
    }

    return (
        <div>
            <div>
                <FelsoSav user={user} onLogout={onLogout}/>
            </div>
         
            <div className='asd'>
                <Navbar user={user}/>
                <img className="hirdetesekK" src={Hirdet} alt="" />
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
                <Card src={SlotKep} slotClass='slot'/>
                <Card src={SlotKep} slotClass='slot'/>
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
                <Card src={SlotKep} slotClass='slot'/>
                <Card src={SlotKep} slotClass='slot'/>
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
        </div>

    )
}
