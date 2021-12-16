const express = require('express');
const path = require('path');
const db = require('../database/index.js')

const PORT = 3000;
const app = express();
app.use(express.json());
app.use(express.urlencoded());

app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/', (req, res) => {
  res.send('Hello from the server!');
})

app.post('/cows', (req, res) => {
  console.log('req.body: ', req.body)


  let sqlQuery = `INSERT INTO cows(name,description) VALUES (?,?)`;
  let params = [req.body.name, req.body.description]
  db.connection.query(sqlQuery, params, (error, results, fields) => {
    if (error) {
      return console.error(error.message);
    }
    console.log('params:',params)
    console.log('results', results);
  });

  // db.connection.end();
  res.send(201)

})

app.get('/cows', (req, res) => {

  var sqlQuery = `select * from cows`
  db.connection.query(sqlQuery, (error, results, fields)=> {
    if (error) {
      console.error(error.message)
      return;
    }
    console.log('results: ',results)

    res.json(results)

  })


})



app.listen(PORT, () => {
  console.log(`Server listening at localhost:${3000}!`);
});