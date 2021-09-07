const app = require('express')();
const consign = require('consign');
const db = require('./config/db.js');
const mongoose = require('mongoose');

const port = 3000;

require('./config/mongodb');

app.db = db;
app.mongodb = mongoose;

consign()
  .include('./config/passport.js')
  .then('./config/middlewares.js')
  .then('./api/validator.js')
  .then('./api')
  .then('./config/routes.js')
  .into(app)

app.listen(port, () => {
  console.log(`Backend executando na porta: [${port}]`);
});