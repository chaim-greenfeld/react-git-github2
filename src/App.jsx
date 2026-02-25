import { useState } from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import {BombsContextProvider} from './context/Bombs-context'
import Body from './components/Body'
import './App.css'

function App() {
  

  return (
    <>
    <BombsContextProvider>
      <Navbar/>
      <Header/>
      <Body/>
    </BombsContextProvider>
    </>
  )
}

export default App
