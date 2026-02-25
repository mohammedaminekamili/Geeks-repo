const fs=require("fs")




module.exports.readFile=(name)=>{
    fs.readFile(name,'utf8',(err, data) => {
        if (err) throw err;
        console.log(data);
      });
}

module.exports.writeFile=(data,name)=>{
    fs.writeFile(name,data,'utf8',(err, data) => {
        if (err) throw err;
        console.log("data writed correctly");
      })
}