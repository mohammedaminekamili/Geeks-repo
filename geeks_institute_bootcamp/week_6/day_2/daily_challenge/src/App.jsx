import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from "./components/Card.jsx"



function App() {
  const [languages, setLanguages] = useState([
    { name: "Php", votes: 0 },
    { name: "Python", votes: 0 },
    { name: "JavaScript", votes: 0 },
    { name: "Java", votes: 0 }
  ]);

 
  const handleVote = (index) => {
    const newLanguages = [...languages]; 
    newLanguages[index].votes += 1;      
    setLanguages(newLanguages);          
  };

  return (
    <div className="flex flex-col gap-4 p-10"> 
      {languages.map((lang, index) => (
        <Card 
          key={lang.name} 
          card={lang} 
          handleClick={() => handleVote(index)} 
        />
      ))}
    </div>
  );
}

export default App; // Usually you export App here
