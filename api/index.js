const express = require('express')
const mysql = require("mysql")
const bodyParser = require('body-parser')
const cors = require('cors');
const port = 3000


const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'iftweb'
});


db.connect(function(err) {
  if (err) {
    return console.error('error: ' + err.message);
  }

  console.log('Connected to the MySQL server.');
});

const corsOptions = {
  origin: 'http://localhost:5173',
  optionsSuccessStatus: 200,
  methods: "GET, PUT, POST, DELETE",
}

const app = express()
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({
  extended: true
})); 
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


app.get('/', (req, res) => {
  console.log('Hello World!') 
})


app.post('/register', (req, res) => {
  let f_name = req.body.firstName
  let l_name = req.body.lastName
  let email = req.body.email
  let pwd = req.body.password
  let sql = "INSERT INTO users values('" + f_name + "','"+ l_name + "'" + email + "'" + pwd +"')";
  db.query(sql, function (err, result) {
    if (err) throw err;
    return result;
  });
})

app.post('/login', (req, res) => {
  let email = req.body.email
  let pwd = req.body.password   
  let sql = "select * from users where email = '"+email+"' and password = '"+ pwd + "'";
  db.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result)
    return result;
  });
})

app.get('/users', (req, res) => {
  let sql = "select * from users";
  db.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
  });
})

app.post('/addProject', (req, res) => {
  let name = req.body.name
  let budget = req.body.budget
  let color = req.body.color
  
  let sql = "INSERT INTO project values('" + name + "','"+ budget + "'" + color + "')";
  db.query(sql, function (err, result) {
    if (err) throw err;
    return result;
  });
})

app.post('/fetchMicro',  (req, res) => {
  let id = req.body.id
  let sql = "select * from services WHERE id = '"+ id + "'" ;
  db.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
    return result
  });
})

app.post('/removeProject', (req, res) => {
  let id = req.body.id
  
  let sql = "DELETE FROM project WHERE id = '"+ id + "'";
  db.query(sql, function (err, result) {
    if (err) throw err;
    return result;
  });
})

app.put('/updateProject', (req, res) => {
  let id = req.body.id
  
  let sql = "UPDATE project id = '"+ id +"'";
  db.query(sql, function (err, result) {
    if (err) throw err;
    return result;
  });
})