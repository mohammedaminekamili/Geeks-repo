import "./Exercise.css"


function Exercise() {
    const styleHeader = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Arial",
      };
   return <>
   
   <h1 style={styleHeader}>this is a title</h1>
   <p className="para">this si a paragraph</p>
   <a href="facebook.com"> this is a link</a>
   <form action=""><label htmlFor="input">this is a form</label>
   <input type="text" name="input" /></form>
   <img src="./assets/hero.png"  />
   <ul>
    <li>tihis is a list</li>
   </ul>
   
   
   </>

}

export default Exercise