## 🔨ConversorImagemPdfJs
Este projeto foi desenvolvido visando os donos de empresas: é chato organizar documentos
que precisam ser em PDF com muitas imagens, e você tem que optar por confiar em
sites, certo? Errado! Este programa faz tudo isso e adiciona uma forte encriptação
no arquivo que nunca vai ser quebrada, a não ser que a pessoa que quebrá-la tenha
a senha, certo?

## 🌠Como funciona o projeto
É um projeto simples, foi usado o pdfkit para a criação do PDF e o bcryptjs para a
encriptação.

## 🚀Tecnologias usadas

- [yargs](https://github.com/yargs/yargs)
- [pdfkit](http://http://pdfkit.org/)
- [bcryptjs](https://github.com/dcodeIO/bcrypt.js)
- [Node.js](https://github.com/nodejs/node)

## 📦Mesclando imagens e encriptando (opcional)

```bash

  # Clonando o repositório
  $ git clone https://github.com/snuckdev/ConversorImagemPdfJs

  # Entrando no diretório
  $ cd ConversorImagemPdfJs

  # Instalando os módulos
  $ npm ConversorImagemPdfJs

  # Mesclando imagens em um PDF e, opcionalmente, encriptando.
  # Com encriptação:
  $ node index.js --dir ./imagens --out output.pdf --password senhaparruda123

  # Sem encriptação
  $ node index.js --dir ./imagens --out output.pdf

  # Note que a senha não irá ficar 'senhaparruda123'. Essa senha irá passar por uma
  # forte encriptação e então será salva em um arquivo chamado senha.txt

```
