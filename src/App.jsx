import { useState } from 'react'
import Header from './components/Header'
import Photos from './pages/Photos'
import Cart from './pages/Cart'
import { Link, Routes, Route } from 'react-router-dom'
import './style.css'
function App() {
  
 
  return (
    <div className="App">
        <Header />


      <Routes>
        <Route exact path="/" element={ <Photos/> } />
        <Route  path="cart" element={ <Cart/> } />
     </Routes>
       
    </div>
  )
}

export default App
