const fs=require("fs")

const readFileData=()=>{
    fs.readFile("C:\\Users\\moham\\OneDrive\\Desktop\\Geeks-repo\\geeks_institute_bootcamp\\week_3\\day_4\\daily_challenge\\files\\file_data.txt","utf-8",(err, data) => {
        if (err) throw err;
        console.log(data);}
      )
}

module.exports=readFileData