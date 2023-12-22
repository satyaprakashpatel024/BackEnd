// importing express
let express = require('express');

let app = express();

app.use((req,res)=>{
    res.send("Hello : localhost server.");
})

app.listen(3000,()=>{
    console.log("Server is running at http://localhost:3000");
})