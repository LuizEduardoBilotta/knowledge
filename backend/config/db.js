const config = require('../knexfile.js');
const knex = require('knex')(config);

knex.migrate.latest([config])
  .then(() => console.log('[SUCESSO]: Aplicação conectada ao PostresSQL.'))
  .catch(() => {
    const msg = '[ERRO]: Não foi possível conectar com o PostgresSQL!'
    //Deixar mensagem do log com letra colorida
    console.log('\x1b[41m%s\x1b[37m', msg, '\x1b[0m');
    }
  );

module.exports = knex;