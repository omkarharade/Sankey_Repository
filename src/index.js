const express = require('express')
const {USER, PASSWORD, HOST, DATABASE, DIALECT, DB_PORT, SERVER_PORT} = require('./config/serverConfig')
const bodyParser = require('body-parser');  
const {HeroRoutes} = require('./routes/index');
const db = require("./models/index");
const cors = require('cors');
const { sequelize } = require('./models');


const setupAndStartServer = () => {
  const app = express()
  const port = 3000;

  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cors());
  
  app.use('/api', HeroRoutes);

  app.get('/', (req, res) => {
    res.json({data : "Successfully running test API"})
  })

  app.listen(port, () => {

    console.log(`server running on port : ${port}`);

    console.log(`Server is running on http://localhost:${port}`);
    sequelize.authenticate()
    .then(() => {
      console.log('Database connection has been established successfully.');
    })
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    });

    if (process.env.SYNC_DB) {
			db.sequelize.sync({ alter: true});
		}
  })
}

setupAndStartServer();

