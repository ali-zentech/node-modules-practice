import fs from 'fs';

fs.readFile("index.txt", (err, data) => {
    if(err) {
        console.log(err);
    }
    console.log("file content : "+ data)

    fs.writeFile('index.txt', "overiding the file", (err)=> {
        if(err){
            console.log(err)
        }
        console.log("writting completed")
    })
})


try {
    const data = fs.readFileSync("index.txt")
    if(!data) {
        throw new Error("Unable to read the content, ")
    }
    console.log(data.toString())
    
    fs.writeFileSync("index.txt", "returning to orignal state");
} catch(err) {
    console.log(err)
}

fs.appendFile("index.txt", "appending to file",(err)=>{
    if(err){
        console.log(err)
    }
    console.log("appended")
})
