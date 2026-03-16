import Header from "./components/Header.tsx"
import Card from "./components/Card.tsx"
import Contact from "./components/Contact.tsx"
import './App.css'
import { faRocket, faBolt, faMobileScreen } from "@fortawesome/free-solid-svg-icons"
import type { IconDefinition } from "@fortawesome/free-solid-svg-icons";

// Card type (interface)
export interface CardData {
  id:number;
  icon: IconDefinition; // you can change this later to a real FontAwesome Icon type
  title: string;
  description: string;
}

// 3 cards array
export const cards: CardData[] = [
  { id:0,icon: faRocket, title: "Fast Performance", description: "Loads quickly and feels smooth." },
  { id:1,icon: faBolt, title: "Easy to Use", description: "Simple and intuitive to navigate" },
  { id:2,icon: faMobileScreen, title: "Friendly", description: "Simple UI and easy to use." },
];

function App() {


  return (
    <>
      <Header/>
      <h1>Build a Responsive Landing Page with React</h1>
      <p>a mini_project to practice building responsive landing pages using React components</p>
      <button className="start"> get started</button>
      <div className="cards">
      {cards.map((x)=>(<Card  key={x.id} card={x} />))}
      </div>
      <h1>Contact us</h1>
      <p>have any questions?</p>

      <Contact/>


    </>
  )
}

export default App
