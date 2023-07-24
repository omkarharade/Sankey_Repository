const express = require('express')
const app = express()
const bodyParser = require('body-parser');  
const Pool = require('pg').Pool;
const config = require('./config/serverConfig')

const port = 3000;

const pool = new Pool({
  user: config.USER,
  host: config.HOST,
  database: config.DATABASE,
  password: config.PASSWORD,
  dialect: config.DIALECT,
  port: config.PORT,
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

pool.connect((err, client, release) => {
  if (err) {
      return console.error(
          'Error acquiring client', err.stack)
  }


  client.query('SELECT NOW()', (err, result) => {
      release()
      if (err) {
          return console.error(
              'Error executing query', err.stack)
      }
      console.log("Connected to Database !")
  })
})

app.get('/testdata', (req, res, next) => {
  console.log("TEST DATA :");
  pool.query('Select * from test')
      .then(testData => {
          console.log(testData);
          res.send(testData.rows);
      })
})

app.get('/', (req, res) => {
  res.json({data: "hello world"})
})

app.listen(port, () => {
  console.log(`Server listening on port : ${port}`)
})