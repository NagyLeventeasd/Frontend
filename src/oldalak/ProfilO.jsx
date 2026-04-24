import { useState, useEffect } from "react";
import {useNavigate } from 'react-router-dom'
import {whoami, logout} from '../api';

import FelsoSav from '../elemek/FelsoSav';
import '../kinezetek/profileC.css';
import Logo from '../assets/kepek/growLog.png'
import Gomb from '../elemek/GombE'
import ProfileInput from '../elemek/ProfileInput';
import Pfp from '../assets/kepek/hirdetes.png'



export default function Profil() {

  


  return (
    <div>

      <div>
        <FelsoSav/>
      </div>

      <div className='rendezes'>

        <div className='profilAlap'>

          <div className='balOldalKep'>
            <img src={Logo} alt="" />
          </div>

          <div className='profilJobbRendezes'>

            <div className='pfpIgazitas'>
              <div>
                <img className='pfp' src={Pfp} alt="" />
              </div>
              <div id='vegig'>
                <p className='profilFeliratok'>Upload your profile picture</p>
                <div id='gomokMegfeleloElhelyezese'>
                  <Gomb content='Browse' />
                  <Gomb content='Change' />
                </div>
              </div>
            </div>

            <hr className='hrEltartas' />

            <div>
              <p className='profilFeliratok alsokettoprofilFeliratok'>Change your name</p>

              <div id='nevValtasRendezes'>
                <ProfileInput placeholder="Name" />
                <Gomb content='Change' />
              </div>
            </div>

            <hr className='hrEltartas' />

            <div>
              <p className='profilFeliratok alsokettoprofilFeliratok'>Change your password</p>
              <div className='jelszoRendezes'>
                <ProfileInput placeholder="Current password"/>
                <ProfileInput placeholder="Current password agian"/>
              </div>
              <div className='jelszoRendezes jelszoRendezesGomb'>
                <ProfileInput placeholder="New password"/>
                <Gomb content='Change' />
              </div>
            </div>

            <hr className='hrEltartas' />

            <div id='torlesRendezes'>
              <Gomb content='Delete'/>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}