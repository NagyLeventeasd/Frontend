import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom' //Az oldalak közti navigáció

//oldalak
//----------------------------------------------------------------------
import Test from './oldalak/test'
import Regisztracio from './oldalak/RegisztracioO.jsx'
import Bejelentkezes from './oldalak/BejelentkezesO.jsx'
import Home from './oldalak/HomeO.jsx'
import Deposit from './oldalak/DepositO.jsx'
import Profil from './oldalak/ProfilO.jsx'
import Admin from './oldalak/AdminO.jsx'
import NemElerheto from './oldalak/NemElerhetoO.jsx'
import Game from './oldalak/GameO.jsx'
import { AuthProvider } from './context/AuthContext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/test' element={<Test />} />
          <Route path='/regisztracio' element={<Regisztracio />} />
          <Route path='/bejelentkezes' element={<Bejelentkezes />} />
          <Route path='/deposit' element={<Deposit />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/profile' element={<Profil />} />
          <Route path='/mines' element={<Game />} />

          <Route path='/played' element={<NemElerheto />} />
          <Route path='/favorite' element={<NemElerheto />} />
          <Route path='/promotion' element={<NemElerheto />} />

          <Route path='/slots' element={<NemElerheto />} />
          <Route path='/cards' element={<NemElerheto />} />
          <Route path='/roulette' element={<NemElerheto />} />
          <Route path='/liveCasino' element={<NemElerheto />} />

        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>,
)
