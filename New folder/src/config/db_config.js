const express = require('express')
const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: '13102001',
    dialect: 'postgres',
    port: 5432
  })
  

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

module.exports = {
    query: (text, params) => pool.query(text, params),
    end: () => pool.end(),
};