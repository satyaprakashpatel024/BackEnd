const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/db")
	.then(() => {
		console.log("DataBase connection Successful !!");
	})
	.catch((err) => {
		console.log(err);
	});

let userSchema = new mongoose.Schema({
	id: Number,
	name: String,
	isbool: Boolean,
});

// syntax : to create model in mongoose (Collection_name,schema_name);
let User = mongoose.model("User", userSchema);

console.log(User);

let userData = new User({
	id: 2,
	name: "Hello",
	isbool: true,
});

userData.save();
console.log();
