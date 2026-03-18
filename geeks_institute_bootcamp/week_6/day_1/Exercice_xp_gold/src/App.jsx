import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import CelebrityCard from './components/CelebrityCard.jsx'
import Planet from './components/Planet.jsx' 

function App() {
  const celebrities = [
    {
      title: "Bob Dylan",
      imageUrl: "https://miro.medium.com/max/4800/1*_EDEWvWLREzlAvaQRfC_SQ.jpeg",
      buttonLabel: "Go to Wikipedia",
      buttonUrl: "https://en.wikipedia.org/wiki/Bob_Dylan",
      description:
        "Bob Dylan is an American singer, songwriter and cultural icon who has influenced music for more than five decades.",
    },
    {
      title: "Paul McCartney",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Paul_McCartney_in_October_2018.jpg/240px-Paul_McCartney_in_October_2018.jpg",
      buttonLabel: "Go to Wikipedia",
      buttonUrl: "https://en.wikipedia.org/wiki/Paul_McCartney",
      description:
        "Paul McCartney is an English singer, songwriter, and musician best known as a member of the Beatles.",
    },
  ];

  const planets = [
    "Mars",
    "Venus",
    "Jupiter",
    "Earth",
    "Saturn",
    "Neptune",
  ];
  return (
    <>
      {celebrities.map((x,index)=>(<CelebrityCard key={index} celebrity={x}/>))}
      {planets.map((x,index)=>(<Planet key={index} planet={x}/>))}
    </>
  )
}

export default App
