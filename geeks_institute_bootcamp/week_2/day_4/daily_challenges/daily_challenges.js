const gameInfo = [
    {
      username: "john",
      team: "red",
      score: 5,
      items: ["ball", "book", "pen"]
    },
    {
      username: "becky",
      team: "blue",
      score: 10,
      items: ["tape", "backpack", "pen"]
    },
    {
      username: "susy",
      team: "red",
      score: 55,
      items: ["ball", "eraser", "pen"]
    },
    {
      username: "tyson",
      team: "green",
      score: 1,
      items: ["book", "pen"]
    },
   ];
const usernames=[]
 gameInfo.forEach(x=>usernames.push(x.username+"!"))
const winners=[]
 gameInfo.forEach(x=>x.score>5?winners.push(x.username):null)


let total = 0
gameInfo.forEach(x=>total+=x.score)
console.log(total)