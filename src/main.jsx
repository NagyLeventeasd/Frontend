import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom' //Az oldalak közti navigáció

//oldalak
//----------------------------------------------------------------------
import Test from'./oldalak/test'
import Regisztracio from './oldalak/RegisztracioP.jsx'
import Bejelentkezes from './oldalak/BejelentkezesP.jsx'
import Home from './oldalak/HomeP.jsx'
import Depostit from './oldalak/DepositP.jsx'
import Admin from './oldalak/admin.jsx'
import Profil from './oldalak/Profil.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/test' element={<Test/>}/>
        <Route path='/regisztracio' element={<Regisztracio/>}/>
        <Route path='/bejelentkezes' element={<Bejelentkezes/>}/>
        <Route path='/deposit' element={<Depostit/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/profile' element= {<Profil/>}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
