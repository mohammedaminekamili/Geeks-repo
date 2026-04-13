import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import TaskForm from './TaskForm'
import TaskList from './TaskList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ marginBottom: '20px' }}>Task Manager</h2>
        <TaskForm />
        <TaskList />
      </div>

    </>
  )
}

export default App
