const yargs = require('yargs')
const fs = require('fs')
const criarPdf = require('./converterImagem')

let argv = yargs.argv

let diretorio_imagens = argv.dir
let arquivo_destino = argv.out
let senha = argv.password

let nome_diretorio = './imagens'

if(!fs.existsSync(nome_diretorio)) {
  fs.mkdirSync(nome_diretorio)
}

criarPdf(diretorio_imagens, arquivo_destino, senha)
