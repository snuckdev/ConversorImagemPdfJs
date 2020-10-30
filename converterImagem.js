const PDFDocument = require('pdfkit')
const fs = require('fs')
const bcrypt = require('bcryptjs')
const logger = require('./logger')

function criarPdf(pasta_imagens, arquivo_destino, senha = null) {

  console.clear()

  console.log(' ')
  console.log(logger.log('info', 'Criando arquivo PDF...'))

  let documento
  let senha_texto

  if(senha != null) {
    let salt = bcrypt.genSaltSync(10)
    let hash = bcrypt.hashSync(senha, salt)
    senha_texto = hash

    documento = new PDFDocument({
      userPassword: hash
    })
  } else {
    documento = new PDFDocument()
  }



  // Instanciamos o arquivo pdf com a senha (opcional)


  console.log(logger.log('info', 'Arquivo criado com sucesso.'))
  console.log(' ')

  // Criamos um WriteStream para a escrita de arquivos.
  documento.pipe(fs.createWriteStream(arquivo_destino))

  // Lemos o diretório com as imagens para serem adicionadas no arquivo.
  lista_imagens = fs.readdirSync(pasta_imagens)

  // Fazemos um loop para pegar cada imagem.
  for(let index = 0; index < lista_imagens.length; index++) {

    console.log(logger.log('info', `Estou no arquivo de número ${index}. Salvando para o arquivo.`))


    // Pegamos o arquivo atual do loop.
    let arquivo_atual = lista_imagens[index]


    /*
    Se o arquivo for o primeiro, não cria uma página, somente adiciona uma imagem,
    pois o pdfkit já cria uma página logo quando o arquivo é criado.
    */

    if(index == 0) {
      documento.image(`./${pasta_imagens}/${arquivo_atual}`, 0, 0, {
        width: documento.page.width
      })
    } else {
      documento.addPage().image(`./${pasta_imagens}/${arquivo_atual}`, 0, 0, {
        width: documento.page.width
      })
  }

  console.log(logger.log('info', 'Imagem adicionada.'))
  console.log(' ')

  }

  documento.end()
  console.log(' ')
  console.log(logger.log('info', 'Documento salvo com sucesso.'))


  if(senha != null) {

    fs.writeFileSync('./senha.txt', senha_texto)

    console.log(logger.log('info', 'Senha salva no arquivo senha.txt'))
    console.log(logger.log('info', 'OBS: a senha foi salva em um arquivo para maior segurança.'))
}

}

module.exports = criarPdf
