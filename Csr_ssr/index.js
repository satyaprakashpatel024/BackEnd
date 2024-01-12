const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/cat',express.static('public'));

app.set('view engine','ejs');

let arr = [1,2,3,4,5,'hello','hiii'];

// this is automatically called by javascript 
app.get('/todo',(req,res)=>{
    // if request is sent by javascript then it is in the form of xhr
    if(req.xhr){
        res.json(arr);
    }else{ // if request is sent by user or browser then this id simple request
        res.render('todo',{arr});
    }
})

// home page
app.get('/',(req,res)=>{
    res.send("<h1>Hello serevr !!!!!!!!!</h1>");
})

// data receiving to update in array
app.post('/todo',(req,res)=>{
    let {value} = req.body;
    // console.log(value);
    arr.push(value);
});

// server side rendering file: todo
// app.get('/todo',(req,res)=>{
//     res.render('todo',{arr});
// })

const port = 3001;
app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
});
