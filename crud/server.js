const express = require("express");
const app = express();

// used to send request for patch,delete : bypassing the browser 
let methodOverride = require('method-override');
app.use(methodOverride('_method'))

// telling which engine is used 
app.set("view engine","ejs");

// used to view the message of post method 
app.use(express.urlencoded({extended:true}));

app.get("/", (req, res) => {
	res.send("<h1>hello server !!!!!!!!!!!!!!! </h1>");
});

let arr = [
	{
        id:1,
		leader: "Chanakya",
		message:"A person should not be too honest. Straight trees are cut first and Honest people are screwed first."
    },
	{
        id:2,
		leader: "Dr. A.P. J. Abdul Kalam",
		message:"Never stop fighting until you arrive at your destined place."
	},
	{
        id:3,
		leader: "Swami Vivekananda",
		message:"Take risks in your life, If you win, you can lead! If you lose, you can guide!."
	},
	{
        id:4,
		leader: "Ratan Tata",
		message:"I don’t believe in taking the right decisions. I take the decision and then make them right."
    },
	{
        id:5,
		leader: " M. S. Dhoni ",
		message:"What doesn’t kill you makes you stronger."
    }];
    
// CRUD : C->create 
app.get('/home/create',(req,res)=>{
    res.render("create");
})

// taking data to perform insert/create operation
app.post('/insert',(req,res)=>{
    let id = arr.length;
    let {leader,message} = req.body;
    arr.push({id,leader,message});
    res.redirect("/home");
})

//CRUD : R->retrive data  
app.get('/home',(req,res)=>{
    res.render('home',{arr});
})

// retriving particulat id 
app.get('/home/:id',(req,res) => {
    const {id} = req.params;
    let searchid = arr.filter((key)=>{
        return key.id == id;
    })
    res.render('show',{searchid});
})

//CRUD : U->Update data : rendering form
app.get('/home/:id/edit',(req,res)=>{
    let {id} = req.params;
    let updateData = arr.find((key)=>{
        return key.id == id;
    })
    res.render('update',{updateData});
});

// updating data in database
app.patch('/home/:id',(req,res)=>{
    let {id} = req.params;
    let editedData = arr.find((c)=>{
        return c.id==id;
    });
    let {message} = req.body;
    editedData.message = message;
    console.log(message);
    res.redirect('/home');
});

// CRUD : D->deleting data 
app.delete('/home/:id',(req,res)=>{
    let {id} = req.params;
    let newArr = arr.filter((key)=>{
        return key.id != id;
    })
    arr = newArr;
    res.redirect('/home');
})


// starting server at port no : 3005
const port = 3005;
app.listen(port, () => {
	console.log(`server is running at http://localhost:${port}`);
});
