//Exercice1



const getGIF = () => {
    console.log("Working ...")
    fetch("https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My")
        .then((response) => {
            if(response.ok){
                return response.json()
            } else {
                throw new Error("Wrong artwork")
            }
        })
        .then((obj) => {
            console.log(obj);
            
        })
        .catch(function (error) {
            console.log(`We got the error ${error}`)
        });
    console.log("Work Done ...")
}


getGIF()
//Exercice2
const getGIF2 = () => {
    console.log("Working ...")
    fetch("https://api.giphy.com/v1/gifs/search?q=sun&limit=10&offset=2&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My")
        .then((response) => {
            if(response.ok){
                return response.json()
            } else {
                throw new Error("Wrong artwork")
            }
        })
        .then((obj) => {
            console.log(obj);
            
        })
        .catch(function (error) {
            console.log(`We got the error ${error}`)
        });
    console.log("Work Done ...")
}
getGIF2()

//exercice3
const getSw=async()=>{
    try {
        let data
        let response=await fetch("https://www.swapi.tech/api/starships/9/")
        console.log(response.ok)
        if (response.ok) {
            data=await response.json()
            console.log(data.result)
        }
    } catch (error) {
        console.error(error)
    }    
    }
    getSw()
//exercice 4
//calling
//resolved
