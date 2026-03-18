import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Car from './components/Car.jsx'
import Event from './components/Event.jsx'
import Phone from './components/Phone.jsx'
import Color from './components/Color.jsx'

const carinfo = {name: "Ford", model: "Mustang"};

function App() {

  return (
    <>
      <Event/>
      <Car model={carinfo.model}/>
      <Phone/>
      <Color />
    </>
  )
}

export default App
