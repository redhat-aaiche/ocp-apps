const mysql = require('mysql');
const express = require('express');

const app = express();
const port = 3000;

// Create a MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'ricardo',
  password: 'redhat123',
  database: 'world'
});

// Connect to the MySQL server
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});

// Set up a route to query the City table
app.get('/city', (req, res) => {
  const cityName = req.query.name;
  
  if(!cityName){
    return res.status(400).send('Missing city name in query parameters.');
  }
  
  const sql = 'SELECT ID, Name, CountryCode, District, Population FROM City WHERE LOWER(Name) = LOWER(?)';
  connection.query(sql, [cityName], (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

// Start the server
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

