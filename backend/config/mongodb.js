const mongoose = require('mongoose');
const { mongoDB } = require('../.env');

mongoose.connect(mongoDB.path, mongoDB.config)
  .then(() => {
    console.log('[SUCESSO]: Aplicação conectada ao mongoDB.');
  })
  .catch(e => {
    const msg = '[ERRO]: Não foi possível conectar com o mongoDB!'
    //Deixar mensagem do log com letra colorida
    console.log('\x1b[41m%s\x1b[37m', msg, '\x1b[0m');
  });