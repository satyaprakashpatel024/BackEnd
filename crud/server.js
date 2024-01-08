const express = require("express");
const app = express();
app.use(express.urlencoded({extended:true}));
const methodOverride = require('method-override');
app.use(methodOverride('_method'));
app.set('view engine','ejs');

let arr = [
	{
		id: 1,
		city: "Bhopal",
		message: "Bhopal is the city of lakes",
	},
	{
		id: 2,
		city: "Indore",
		message: "Indore is the clean city",
	},
	{
		id: 3,
		city: "Delhi",
		message: "Delhi is the capital of India",
	},
    {
        id:4,
        city:"Mumbai",
        message:"Mumbai is the land of Bollybood"
    }
];
// home page
app.get("/", (req, res) => {
	res.send("local server is running.");
});

// CRUD operation
// C-> create operation
app.get('/home/form',(req,res)=>{
    res.render('form');
})

// post data
app.post('/home/form',(req,res)=>{
    let {city,message}= req.body;
    // console.log(req.body);
    let id = arr.length+1;
    arr.push({id,city,message});
    res.redirect('/home');
})

// R->retrive operation
app.get('/home',(req,res)=>{
    res.render('home',{arr});
})

// retriving particular id 
app.get('/home/:id',(req,res)=>{
    let id= req.params.id;
    let result = arr.find((x)=>{
        return x.id == id
    });
    res.render('each',{result});
})

// U-> update operation



const port = 3015;

app.listen(port, () => {
	console.log(`server is running at http://localhost:${port}`);
});
