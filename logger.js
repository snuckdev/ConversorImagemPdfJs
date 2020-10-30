const colors = require('colors')

function log(tipo, mensagem) {

  switch(tipo) {

    case 'info':

      return '[ '.gray + '+'.green + ' ] '.gray + mensagem.green

  }

}

module.exports = {
  log: log
}
