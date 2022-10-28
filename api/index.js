const express = require('express')
const mysql = require("mysql")
const bodyParser = require('body-parser')
const cors = require('cors');

const db = mysql.createConnection({
  host: "localhost",
  port: "80",
  user: "root",
  password: "",
  database: 'itfweb'
})

db.connect((err) => {
  if(err) {
    throw err;
  }
  console.log("Connection done")
});

db.connect(function (err) {
  if(err){
      console.log("error occurred while connecting");
  }
  else{
      console.log("connection created with Mysql successfully");
  }
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

const port = 3000

app.get('/', (req, res) => {
  console.log('Hello World!')
})

app.post('/login', (req, res) => {
  let email = req.body.email
  let pwd = req.body.password 
  let sql = "select * from users";
  db.query(sql, function (err, result) {
    if (err) throw err;
    return result;
  });
})

app.post('/register', (req, res) => {
  let firstName = req.body.firstName
  let lastName = req.body.lastName
  let email = req.body.email
  let pwd = req.body.password
  let sql = "select * from users where email = '"+email+"' and password = '"+ password + "'";
  db.query(sql, function (err, result) {
    if (err) throw err;
    return result;
  });
})

app.get('/users', (req, res) => {
  let sql = "select * from users";
  db.query(sql, function (err, result) {
    if (err) throw err;
    return result;
  });
})

app.listen(port, () => {
  console.log(`Example listening on port ${port}`)
})