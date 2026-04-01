import { useState,useEffect } from 'react'

import './App.css'

function App() {
  const [message,setMessage]=useState("")
  const [messageRes,setMessageRes]=useState("")
  const hellofromServer=async()=>{
    const response=await fetch("http://localhost:3000/api/hello")
    const data=await response.json()
    console.log(data)
    setMessage(data.message)
  }
  useEffect(()=>{
    hellofromServer()
  },[])
  const handleSubmit=(e)=>{
    e.preventDefault()
    const message=e.target.message.value
    fetch("http://localhost:3000/api/hello",{
      method:"POST",
      body:JSON.stringify({message}),
      headers:{
        "Content-Type":"application/json"
      }
    }).then(response=>response.json()).then(data=>{
      setMessageRes(data.message)
    })
  }
  return (
    <>
      <header><h1>{message}</h1></header>
      <form onSubmit={handleSubmit} >
        <input type="text" name='message' placeholder='Enter your message' />
        <button type='submit'>Send</button>
        <p>{messageRes}</p>
      </form>
    </>
  )
}

export default App
