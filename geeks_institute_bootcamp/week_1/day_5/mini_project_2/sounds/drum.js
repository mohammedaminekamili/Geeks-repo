let spans=document.querySelectorAll("span")




    spans.forEach(e => {e.addEventListener("click", ()=>{
        let id = e.children[1].textContent
        console.log(id)
        let audio = document.getElementById(id)
        audio.play()
        audio.currentTime =0
    });
} )
spans.forEach(e=>{
    document.addEventListener("keydown",(event)=>{
        if (event.key===e.children[0].textContent.toLowerCase()) {
            let id = e.children[1].textContent
            
            let audio = document.getElementById(id)
            audio.play()
            audio.currentTime=0
        }
        

    })
})


