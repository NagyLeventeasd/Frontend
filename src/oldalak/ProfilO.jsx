import FelsoSav from '../elemek/FelsoSav';
import '../kinezetek/profileC.css';
import Logo from '../assets/kepek/growLog.png'
import Gomb from '../elemek/GombE'
import InputMezo from '../elemek/InputMezoE'



export default function Profil() {
  return (
    <div>
      <div>
        <FelsoSav />
      </div>
      <div className='rendezes'>
        <div className='profilAlap'>
          <div className='balOldalKep'>
            <img src={Logo} alt="" />
          </div>
          <div className='jobRendezes'>
            <div className='pfpIgazitas'>
              <div>
                <img className='pfp' src={Logo} alt="" />
              </div>
              <div>
                <p>Upload your profile picture</p>
                <Gomb content='Browse'/>
                <Gomb content='Change'/>
              </div>
            </div>
            <hr />
            <div>
              <p>Change your name</p>
              <InputMezo/>
              <Gomb content='Change'/>
            </div>
            <hr />
            <div>
              <p>Change your password</p>
              <InputMezo/>
              <InputMezo/>
              <InputMezo/>
              <Gomb content='Change'/>
            </div>
            <hr />
            <Gomb content='Account Delete'/>
          </div>
        </div>
      </div>
    </div>
  );
}