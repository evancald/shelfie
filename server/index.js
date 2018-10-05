require('dotenv').config({ path: __dirname + '/.env' });
const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./controller');
const massive = require('massive');
const cors = require('cors');
const port = 8080;


const app = express();
app.use(cors()); //This has to be the first middleware we add!!!
app.use(bodyParser.json());


massive(process.env.DATABASE_STRING, { scripts: __dirname + '/db' })
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