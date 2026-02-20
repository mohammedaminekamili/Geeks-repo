// Exercice 1
/*
 <form action="/" method="get">
        <label for="name"></label>
        <input type="text" name="name">
         <label for="message"></label>
        <input type="text" name="message">
         <input type="submit" value="send" name="send">
    </form>
*/
// in the url as a query

// exercice 2 
/*
 <form action="/" method="post">
 <label for="name"></label>
 <input type="text" name="name">
  <label for="message"></label>
 <input type="text" name="message">
  <input type="submit" value="send" name="send">
</form>
*/
//in the body of the request

//exercice 3
const marioGame = {
    detail : "An amazing game!",
    characters : {
        mario : {
          description:"Small and jumpy. Likes princesses.",
          height: 10,
          weight: 3,
          speed: 12,
        },
        bowser : {
          description: "Big and green, Hates princesses.",
          height: 16,
          weight: 6,
          speed: 4,
        },
        princessPeach : {
          description: "Beautiful princess.",
          height: 12,
          weight: 2,
          speed: 2,
        }
    },
  }
debugger
  let marioGameJSON= JSON.stringify(marioGame)
  let prettyJSON=JSON.stringify(marioGame,null,4)
  console.log(marioGame)
  console.log(prettyJSON)


