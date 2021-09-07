const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/knowledge_stats', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('[SUCESSO]: Aplicação conectada ao mongoDB.');
  })
  .catch(e => {
    const msg = '[ERRO]: Não foi possível conectar com o mongoDB!'
    console.log('\x1b[41m%s\x1b[37m', msg, '\x1b[0m');
  });