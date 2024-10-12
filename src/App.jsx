import './App.css'
import React from 'react'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart/Cart';
import Checkout from './components/checkout/checkout';
function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/categoria/:idCategory' element={<ItemListContainer />} />
            <Route path='/item/:idItem' element={<ItemDetailContainer />} />

            <Route path='/cart' element={ <Cart /> } />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='*' element={ <h2> Sitio en construccion</h2> } />
          </Routes>
          </CartProvider>
      </BrowserRouter>
    </>
  )
}

export default App
