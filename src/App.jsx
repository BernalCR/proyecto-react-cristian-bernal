import './App.css'
import React from 'react'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer'

function App() {
  return (
    <>
      <NavBar/>
      <ItemListContainer greeting="Main Content"/>
    </>
  )
}

export default App
