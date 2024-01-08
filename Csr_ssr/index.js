const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/cat',express.static('public'));

app.set('view engine','ejs');

let arr = [1,2,3,4,5,'hello','hiii'];

// this is automatically called by javascript 
app.get('/todo',(req,res)=>{
    if(req.xhr){
        res.json(arr);
    }else{
        res.render('todo',{arr});
    }
})

app.get('/',(req,res)=>{
    res.send("<h1>Hello serevr !!!!!!!!!</h1>");
})

app.post('/todo',(req,res)=>{
    let {value} = req.body;
    arr.push(value);
});

// post request
app.post('/post',(req,res)=>{
    res.send(req.body);
})

// get request
app.get('/get', (req, res) => {
    res.send("get request");
})

// server side rendering file: todo
app.get('/todo',(req,res)=>{
    res.render('todo',{arr});
})

const port = 3001;
app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
});
