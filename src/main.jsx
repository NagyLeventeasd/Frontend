import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom' //Az oldalak közti navigáció

//oldalak
//----------------------------------------------------------------------
import Test from'./oldalak/test'
import Regisztracio from './oldalak/regisztracioP.jsx'
import Bejelentkezes from './oldalak/bejelentkezesP.jsx'
import Home from './oldalak/homeP.jsx'
import Depostit from './oldalak/depositP.jsx'
import Admin from './oldalak/admin.jsx'
import Profil from './oldalak/profil.jsx'

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
