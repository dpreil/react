const express = require('express');
const bodyParser = require('body-parser');
const bCrypt = require('bcryptjs');

const app = express();
app.use(bodyParser.json());

var database = [
	{
		id: 101,
		name: 'John',
		email: 'j@gmail.com',
		password: 'apples',
		entries: 0,
		joined: new Date()
	},
	{
		id: 102,
		name: 'Bob',
		email: 'bob@gmail.com',
		password: 'bobstheman',
		entries:2,
		joined: new Date()
	}
]

app.get('/', (req,res)=>{
	res.send("this is working")
})

app.get('/profile/:id', (req,res) => {
	const {id} = req.params;
	var found = false;
	database.forEach(user => {
		if (user.id === parseInt(id,10)){
			found=true;
			res.json(user);
		}} )
		if(!found) {
			res.status(404).json("please reenter username and password")
		}
})

app.put('/image', (req,res) => {
	const id = parseInt(req.body.id);
	var found = false;
	database.forEach(user => {
		if (user.id === parseInt(id,10)){
			found=true;
			user.entries++;
			res.json('count updated');
		}} )
		if(!found) {
			res.status(404).json("please reenter username and password")
		}})


app.post('/signin', (req,res) => {
	var found = false;
	for (entry in database){
		if(req.body.email === database[entry].email){
			console.log("email match!")
			found=true;
			bCrypt.compare(req.body.password,database[entry].password,(err,hashRes)=>{
				if (hashRes){
					console.log("Password match!")
					res.json(database[entry]);
					found = true;
				} else {
					res.json("please reenter your email and password")
					console.log('password doesn\'t match');
				}
		})
		break;
	}} 
	console.log(found);
	if (!found){
		found=false;
		res.json("please reenter your email and password")
	}
})

app.post('/register', (req,res) => {
	const {name, email, password} = req.body;
	let hashedPW = '';
	bCrypt.hash(password, 10).then(hash => {
		database.push({
		id: database[database.length-1].id+1,
		name: name,
		email: email,
		password: hash,
		entries: 0,
		joined: new Date()
		})
	}).then(res.json("Registration completed succesfully!"));
})

app.listen(3000,()=>console.log("listening on port 3000"))


/* End-points
sign in
register

*/