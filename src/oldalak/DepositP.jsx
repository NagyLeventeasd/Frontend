import FelsoSav from '../elemek/FelsoSav';
import '../kinezetek/depositC.css';
import Logo from '../assets/kepek/growLog.png'
import Mastercard from '../assets/kepek/mastercard.png'
import Visa from '../assets/kepek/visa.png'
import American from '../assets/kepek/American.png'

import { Link, useNavigate } from 'react-router-dom'
import InputMezo from '../elemek/InputMezoE';
import Gomb from '../elemek/GombE';

export default function deposit() {
  return (
    <div>
      <div>
        <FelsoSav />
      </div>

      <div className="rendezes">

        <div className="kartyaAlap">
          <div className='kartyaLogo'>
            <img src={Logo} alt="" />
          </div>
          <div className='kartya'>
            <div className='kartyaCimsor'>
              <img src={American} alt="" />
              <img src={Mastercard} alt="" />
              <img src={Visa} alt="" />
            </div>
            <div className='inputIgazitas'>
              <InputMezo  placeholder="Amount" />
            </div>
            <div className='gombIgazitas'>
              <Gomb content="Pay" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

