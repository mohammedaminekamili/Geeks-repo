import { useState } from 'react'

const phoneInfo={brand: "Samsung",
    model: "Galaxy S20",
    color: "black",
    year: 2020
    }
const Phone=()=>{
    const [phone,setPhone]=useState(phoneInfo)
    const changeColor = () => {
        setPhone(prev=>({...prev,color:'blue'}))
      }

    return <>
    <h1>My phone is {phone.brand}</h1>
    <p>it's {phone.color} {phone.model} from {phone.year}</p>
    <button onClick={changeColor}>Change color</button>

    </>
}

export default Phone
