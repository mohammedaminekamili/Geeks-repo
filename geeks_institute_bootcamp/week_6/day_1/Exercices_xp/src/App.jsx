import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import UserFavoriteAnimals from './UserFavoriteAnimals.jsx'
import Exercise from './Exercise3.jsx'

function App() {
  const myElement = <h1>I Love JSX!</h1>;
  const sum = 5 + 5;
  const user = {
    firstName: "Bob",
    lastName: "Dylan",
    favAnimals: ["Horse", "Turtle", "Elephant", "Monkey"],
  };

  return (
    <>
      <p> hello world!</p>
      {myElement}
      <p>React is {sum} times better with JSX</p>
      <h3>{user.firstName}</h3>
      <h3>{user.lastName}</h3>
      <Exercise />
      <UserFavoriteAnimals favAnimals={user.favAnimals} />
      
    </>
  )
}

export default App
