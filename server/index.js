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
      console.error(error.message);
      return;
    }
    console.log('params:',params)
    console.log('results', results);
    res.send(req.body)

  });

  // db.connection.end();

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

app.put('/cows/:id', (req, res) => {

  console.log('id: ',req.params.id)
  var sqlQuery = `UPDATE cows SET name = '${req.body.name}', description = '${req.body.description}' WHERE id = ${req.params.id}`
  db.connection.query(sqlQuery, (err, results) => {
    if (err) {
      console.error(err)

    } else {
      var cow = {name: req.body.name, description: req.body.description, id: req.body.id}
      console.log(results)
      res.send(cow)
    }
  })
});

app.delete('/cows/:id', (req, res) => {
  var sqlQuery = `DELETE from cows where id = ${req.params.id}`
  db.connection.query(sqlQuery, (err, results)=> {
    if (err) {
      console.error(err)
    }
    else {
      res.send('successfully deleted')
    }
  })
})



app.listen(PORT, () => {
  console.log(`Server listening at localhost:${3000}!`);
});