const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    res.send("<h1>Hello World!</h1>");
})


app.get('/home',(req,res)=>{
    res.send("<h1>Hello home page</h1>");
})

const port = 3000;
app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
});
