import axios from "axios";

export async function fetchPost(){
    const response= await axios.get("https://jsonplaceholder.typicode.com/posts")
    const data= response.data
   
    return data
    
}