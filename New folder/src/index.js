const express = require('express')
const {USER, PASSWORD, HOST, DATABASE, DIALECT, DB_PORT, SERVER_PORT} = require('./config/serverConfig')
const Pool = require('pg').Pool;
const bodyParser = require('body-parser');  
const {HeroRoutes} = require('./routes/index');


const setupAndStartServer = () => {
  const app = express()
  const port = 3000;

  console.log('password', PASSWORD)

  const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: '13102001',
    dialect: 'postgres',
    port: 5432
  })

  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use('/api', HeroRoutes);

  app.get('/', (req, res) => {
    res.json({data : "Successfully running test API"})
  })

  app.listen(port, () => {
    console.log(`server running on port : ${port}`);
  })
}

setupAndStartServer();

