# API REST de Alunos

## Sobre o projeto

Este projeto consiste em uma API REST desenvolvida com Node.js e Express.js para realizar operações básicas de gerenciamento de alunos.

Cada aluno possui os campos ID, nome e curso. Os dados são armazenados temporariamente em um array durante a execução do servidor.

## Funcionalidades

- Listar todos os alunos.
- Buscar um aluno pelo ID.
- Cadastrar um novo aluno.
- Atualizar os dados de um aluno.
- Excluir um aluno.
- Validar os campos obrigatórios.
- Retornar mensagens de erro quando um aluno não for encontrado.

## Tecnologias utilizadas

- Node.js
- Express.js
- Postman
- Git e GitHub

## Como executar o projeto

1. Instale o Node.js.
2. Clone este repositório ou baixe seus arquivos.
3. Abra o terminal na pasta do projeto.
4. Instale as dependências:

   `npm install`

5. Inicie o servidor:

   `node server.js`

6. Acesse `http://localhost:3000/alunos` ou utilize o Postman para testar as rotas.

## Testes

As rotas foram testadas no Postman, incluindo consultas, cadastro, atualização, exclusão e validações de dados.

As capturas de tela dos testes estão disponíveis na pasta `teste_img_postman`.

## Observação

Os dados são armazenados em memória e são reiniciados quando o servidor é reiniciado.
