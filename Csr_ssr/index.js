const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));

app.use('/cat',express.static('public'))

let arr = [1,2,3,4,5,'hello','hiii'];

// this is automatically called by javascript 
app.get('/todo',(req,res)=>{
    res.json(arr);
})

app.get('/',(req,res)=>{
    res.send("<h1>Hello serevr !!!!!!!!!</h1>");
})

app.post('/todo',(req,res)=>{
    let {value} = req.body;
    arr.push(value);
    res.redirect('/cat');
});

const port = 3001;
app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
});
