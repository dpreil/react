const express = require('express');
const bodyParser = require('body-parser');
const bCrypt = require('bcryptjs');
const knex = require('knex');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const db = knex({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : '',
    password : '',
    database : 'smartbrain'
  }
});

app.get('/', (req,res)=>{
	res.send("this is working")
})

app.get('/profile/:id', (req,res) => {
	const {id} = req.params;
	db('users').select('*')
	.where({id})
	.then(user => {
		if(user.length){
		res.json(user[0]);
		} else { throw error}
		})
		.catch (err => res.status(400).json('user not found'))
	})

app.put('/image', (req,res) => {
	const id = parseInt(req.body.id);
	console.log(id);
	db('users').where('id','=',id)
	.increment('entries',1)
	.returning('entries')
	.then(()=> res.json('entries updated'))
	.catch(err => res.status(400).json('unable to process entry'))})

	// database.forEach(user => {
	// 	if (user.id === parseInt(id,10)){
	// 		found=true;
	// 		user.entries++;
	// 		res.json('count updated');
	// 	}} )
	// 	if(!found) {
	// 		res.status(404).json("please reenter username and password")
	// 	}})


app.post('/signin', (req,res) => {
	const {email,password} = req.body;
	db.select('email','hash').from('logins').where({email:email})
	.then(data => {
		if(data.length){
			bCrypt.compare(password,data[0].hash,(err,hashRes)=>{
					if (hashRes){
					//	var userData = {"name":"","entries":"0"};
						db.select('name','entries').from('users').where({email:email})
						.then(data =>{
							res.json({
							"match":"match",
							"name":data[0].name,
							"entries":data[0].entries,
						})});
						}})
					} else {
						res.json("please reenter your email and password")
						console.log('password doesn\'t match');
					}})
	})


app.post('/register', (req,res) => {
	const {name, email, password} = req.body;
	bCrypt.hash(password, 10).then(hash => {
		db.transaction(trx => {
			trx.insert({email:email, hash:hash})
			.into("logins")
			.then(()=>{
				return trx.insert({
					name:name,
					email:email,
					entries:0,
					date_joined:new Date()
				})
				.into('users')
			})
			.then(()=>{
				trx.commit();
				res.json("registration successful")})
			.catch(trx.rollback)
		}).catch(err => res.status(400).json("Registration failed."))
	})
})


app.listen(3001,()=>console.log("listening on port 3001"))


/* End-points
sign in
register

*/