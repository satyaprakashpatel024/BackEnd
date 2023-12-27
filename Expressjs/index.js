// importing express
let express = require('express');

let app = express();
app.set('view engine','ejs');

// app.use((req,res)=>{
//     res.send("<h2>hello local Server</h2>");
// })


                            // static routing 

app.get('/',(req,res)=>{
    let random = Math.random()*100;
    res.render('index',{random});
    // res.send('<h2>this is home page</h2>');
})

app.get('/home',(req,res)=>{
    res.render('home');
})

// app.get('/new',(req,res)=>{
//     res.send('<h2>this is new page</h2>');
// })

// app.get('/cat',(req,res)=>{
//     res.send('<h2> mewwwww</h2>');
// })

// app.get('/*',(req,res)=>{
//     res.send('<h2>galat hai</h2>');
// })

app.listen(3000,()=>{
    console.log("Server is running at http://localhost:3000");
})

                    // dynamic routing

// app.get('/:key',(req,res)=>{
//     let {key} = req.params;
//     res.send(`<h2>${key}</h2>`);
// })


// querry parameter format : search(pathname)?firstName="value"&lastName="value"

// app.get('/search',(req,res)=>{
//     let {firstName,lastName} = req.query;
//     // console.log(req.query);
//     res.send(`${firstName} ${lastName}`)
// })