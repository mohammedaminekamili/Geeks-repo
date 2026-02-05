/*<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
                <form action="/" method="get">
                    <label for="firstName">First Name</label>
                    <input type="text" name="firstName">
                     <label for="lastName">Last Name</label>
                    <input type="text" name="lastName">
                     <input type="submit" value="send" name="send">
                </form>
           
                      
                    
                
             
</body>

    <script>
*/
const form=document.forms[0]
form.addEventListener("submit",(event)=>{
    event.preventDefault()
    let firstName=form.firstName.value
    let lastName=form.lastName.value
    const user={firstName,lastName}
    const userJSON=JSON.stringify(user)
    const body=document.body
body.innerHTML+=`<p> ${userJSON}</p>`
})/*

  
    
    </script>
</html>
*/

