const criarPdf = require('./converterImagem')
const yargs = require('yargs')

let argv = yargs.argv

let diretorio_imagens = argv.dir
let arquivo_destino = argv.out
let senha = argv.password

criarPdf(diretorio_imagens, arquivo_destino, senha)
