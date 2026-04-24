import { useState, useEffect } from "react";
import {useNavigate } from 'react-router-dom'
import {whoami, logout} from '../api';

import '../kinezetek/adminC.css'
import Gomb from '../elemek/GombE'
import FelsoSav from '../elemek/FelsoSav';
import User from '../assets/kepek/user.png'


export default function Admin() {


    return (
        <div>
            <div>
                <FelsoSav/>
            </div>

            <div className="rendezes">
                <div className="felulet">
                    <div className='felhasznalokKezdo'>
                        <div className='felbal'>
                            <img src={User} alt="" className='profkep' />
                            <p className='felhasznaloNev'>USER</p>
                            <p className='balance'>BALANCE: 1000$ </p>
                        </div>
                        <div className='jobGombok'>
                            <Gomb content="Add" />
                            <Gomb content="Delete" />
                            <Gomb content="History" />
                        </div>
                    </div>
                    <hr />
                    <div className='felhasznalok'>
                        <div className='felbal'>
                            <img src={User} alt="" className='profkep' />
                            <p className='felhasznaloNev'>USER</p>
                            <p className='balance'>BALANCE: 1000$ </p>
                        </div>
                        <div className='jobGombok'>
                            <Gomb content="Add" />
                            <Gomb content="Delete" />
                            <Gomb content="History" />
                        </div>
                    </div>
                    <hr />
                    <div className='felhasznalok'>
                        <div className='felbal'>
                            <img src={User} alt="" className='profkep' />
                            <p className='felhasznaloNev'>USER</p>
                            <p className='balance'>BALANCE: 1000$ </p>
                        </div>
                        <div className='jobGombok'>
                            <Gomb content="Add" />
                            <Gomb content="Delete" />
                            <Gomb content="History" />
                        </div>
                    </div>
                    <hr />
                    <div className='felhasznalok'>
                        <div className='felbal'>
                            <img src={User} alt="" className='profkep' />
                            <p className='felhasznaloNev'>USER</p>
                            <p className='balance'>BALANCE: 1000$ </p>
                        </div>
                        <div className='jobGombok'>
                            <Gomb content="Add" />
                            <Gomb content="Delete" />
                            <Gomb content="History" />
                        </div>
                    </div>
                    <hr />                    <div className='felhasznalok'>
                        <div className='felbal'>
                            <img src={User} alt="" className='profkep' />
                            <p className='felhasznaloNev'>USER</p>
                            <p className='balance'>BALANCE: 1000$ </p>
                        </div>
                        <div className='jobGombok'>
                            <Gomb content="Add" />
                            <Gomb content="Delete" />
                            <Gomb content="History" />
                        </div>
                    </div>
                    <hr />
                                        <div className='felhasznalok'>
                        <div className='felbal'>
                            <img src={User} alt="" className='profkep' />
                            <p className='felhasznaloNev'>USER</p>
                            <p className='balance'>BALANCE: 1000$ </p>
                        </div>
                        <div className='jobGombok'>
                            <Gomb content="Add" />
                            <Gomb content="Delete" />
                            <Gomb content="History" />
                        </div>
                    </div>
                    <hr />
                    


                </div>
            </div>
        </div>
    );
}
