const {Sequelize, DataTypes} = require("sequelize");

const sequelize = new Sequelize(
   'hello_world_db',
   'DATABASE_USERNAME',
   'DATABASE_PASSWORD',
    {
      host: 'DATABASE_HOST',
      dialect: 'mysql'
    }
  );

sequelize.authenticate().then(() => {
   console.log('Connection has been established successfully.');
}).catch((error) => {
   console.error('Unable to connect to the database: ', error);
});

const Hero = sequelize.define("books", {
    name: {
        type: DataTypes.STRING(30),
        allowNull: false
      },
      alias: {
        type:DataTypes.STRING(15)
      },
      max_defence_power: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      max_attack_power: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      is_certified: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
      government_allowance: {
        type: DataTypes.DECIMAL(10,2),
      },
      date_introduced: {
        type: DataTypes.DATE
      }
});

sequelize.sync().then(() => {
   console.log('Book table created successfully!');
}).catch((error) => {
   console.error('Unable to create table : ', error);
});