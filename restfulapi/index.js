let express = require("express");
let app = express();
app.use(express.urlencoded({ extended: true }));
let methodOverride = require('method-override')
app.use(methodOverride('_method'))
app.set("view engine", "ejs");

// dummy data
let arr = [
	{
		id: 0,
		userName: "chetan",
		comment: "mai singer hu",
	},
	{
		id: 1,
		userName: "aashish",
		comment: "mai singer nhi hu",
	},
	{
		id: 2,
		userName: "Ram",
		comment: "mandir whi banega",
	},
	{
		id: 3,
		userName: "sanjh",
		comment: "ab se daily aaungi",
	},
	{
		id: 4,
		userName: "aniket",
		comment: " sir doubt solve nii ho rhaa",
	},
	{
		id: 5,
		userName: "poonam",
		comment: " mai kaha bolti hu",
	},
];

// get method : home 
app.get("/", (req, res) => {
	res.send("this is home file");
});

// get method : render file(retriving data)
app.get("/blog", (req, res) => {
	res.render("index", { arr });
});

// showing form to add new data : 
app.get("/blog/new", (req, res) => {
	res.render("new");
});

// sending data to server post method to add new data
app.post("/blog", (req, res) => {
	console.log(req.body);
	let id = arr.length;
	let { userName, comment } = req.body;
	arr.push({ id, userName, comment });
	res.redirect("/blog");
});

// rendering particular id
app.get("/blog/:id", (req, res) => {
	let { id } = req.params;
	let SearchC = arr.filter((key) => {
		return key.id == id;
	});
	res.render("show", { SearchC });
});

// update the data : update form 
app.get("/blog/:id/edit", (req, res) => {
	let { id } = req.params;
	let updateData = arr.find((key)=>{
		return key.id == id;
	})
	res.render('edit',{updateData});
});

// modifying the updated data 
app.patch('/blog/:id',(req,res)=>{
	let {id}=req.params; //
	let editedData = arr.find((c)=> c.id==id);
	let {comment} = req.body;
	editedData.comment = comment;
	res.redirect('/blog');
})

// deleting data
app.delete('/blog/:id',(req,res)=>{
	let {id} = req.params;
	let NewArr = arr.filter((key)=>{
		return key.id != id;
	})
	arr = NewArr;
	res.redirect('/blog');
})

// creating server
let port = 3000;
app.listen(port, () => {
	console.log(`local server is running at http://localhost:${port}`);
});
