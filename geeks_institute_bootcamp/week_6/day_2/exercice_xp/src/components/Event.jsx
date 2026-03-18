import { useState } from 'react'


const clickMe=()=>{
    alert('I was clicked')
}

const handleKeyDown=(e)=>{
    if (e.key=="Enter") {
        alert(e.target.value)
    }
}

const Event=(props)=>{
    const [isToggleOn,setIsToggleOn]=useState(true)

    return <>
    <button onClick={()=>{clickMe()}}>Click me</button>
       <input type="text" onKeyDown={handleKeyDown} />
       <button onClick={()=>{setIsToggleOn(!isToggleOn)}}>{isToggleOn?'on':'off'}</button>
       
    </>
    
}

export default Event