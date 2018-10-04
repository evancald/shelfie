const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./controller');
const massive = require('massive');
const cors = require('cors');
require('dotenv').config();
const port = 8080;

const app = express();
app.use(bodyParser.json());
app.use(cors());

//Stuff to make errors go away
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
 next();
});

massive(process.env.DATABASE_STRING)
  .then(db => {
    app.set('db', db)
    console.log('database is connected');
  })
  .catch(err => {
    console.log('database connection error', err);
  })

//Endpoints
app.get('/api/inventory', controller.read);
app.post('/api/product', controller.create);
app.delete('/api/product/:id', controller.delete);
app.put('/api/product/:id', controller.update);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
})