const app = require('express')();
const consign = require('consign');
const port = 3000;

consign()
  .then('./config/middlewares.js')
  .into(app)

app.listen(port, () => {
  console.log(`Backend executando na porta: [${port}]`);
})