import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom' //Az oldalak közti navigáció

//oldalak
//----------------------------------------------------------------------
import Test from'./oldalak/test'
import Regisztracio from './oldalak/regisztracioP'
import Bejelentkezes from './oldalak/bejelentkezesP'
import Home from './oldalak/homeP'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/test' element={<Test/>}/>
        <Route path='/regisztracio' element={<Regisztracio/>}/>
        <Route path='/bejelentkezes' element={<Bejelentkezes/>}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
