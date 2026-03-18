import { useState } from 'react'
import Garage from './Garage.jsx'


function Car(prpos){
    const [car,setCar]= useState('blue')
    return(
<>


<header>this car is {prpos.model} {car}</header>
<Garage size={'small'}/>

</>
    ) 
    
}

export default Car