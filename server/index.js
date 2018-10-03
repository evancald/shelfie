const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./controller');
const massive = require('massive');
require('dotenv').config();
const port = 8080;

const app = express();
app.use(bodyParser.json());

massive(process.env.DATABASE_STRING)
  .then(db => {
    app.set('db', db)
    console.log('database is connected');
  })
  .catch(err => {
    console.log('database connection error', err);
  })

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
})