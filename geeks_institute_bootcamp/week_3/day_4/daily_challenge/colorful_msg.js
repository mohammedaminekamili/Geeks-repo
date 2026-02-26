const chalk=require("chalk")
function display(){
    
   
    console.log(chalk.blue.bold("Hello,") +
      " " +
      chalk.green.underline("colorful") +
      " " +
      chalk.red("world!") +
      chalk.yellow(" 🎉"))
}


module.exports=display