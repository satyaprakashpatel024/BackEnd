// importing express
let express = require('express');

let app = express();

// app.use((req,res)=>{
//     res.send("<h2>hello local Server</h2>");
// })


app.listen(3000,()=>{
    console.log("Server is running at http://localhost:3000");
})