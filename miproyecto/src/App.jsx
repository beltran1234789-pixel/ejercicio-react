import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Inicio from './vistas/Inicio'
import Register from './vistas/Register'
import Lonig from './vistas/Lonig'
import Materiales from './vistas/Materiales'
import Products from './vistas/Products'

import './styles/style.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Lonig />} />
          <Route path="/materiales" element={<Materiales />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
