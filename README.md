## [Template] Usando DynamoDB como cache para suas requisições

<img src="https://storage.googleapis.com/golden-wind/experts-club/capa-github.svg" />

*Esse repositório não contém o código finalizado e sim o template para dar início à aula.*

Muitas vezes quando fazemos requisições para nossas APIs, precisamos buscar alguns dados demorados, muitas vezes de várias fontes diferentes até. Neste projeto veremos como podemos agregar as informações de resposta em uma tabela do DynamoDB, inclusive utilizando o recurso de TTL para excluir entradas mais antigas.

No nosso exemplo teremos uma API que busca dados clínicos de pacientes (dados pessoais, exames e medicamentos) no banco relacional. Ao longo da aula adicionaremos um banco DynamoDB na frente para buscar esses dados de uma forma mais eficiente.

## Expert

| [<img src="https://avatars.githubusercontent.com/u/711732?s=460&u=6b1039f8a921c5733d92d13b2971c55157fee005&v=4" width="75px;"/>](https://github.com/askmon) |
| :-: |
|[André Spanguero Kanayama](https://github.com/askmon)|

### Requisitos

- Node.js v14 (`.nvmrc` incluso no projeto)
- Conta na AWS (utilizaremos IAM e DynamoDB)
- Um banco PostgreSQL (existe um docker-compose no projeto, para quem quiser rodar usando Docker)

### Como rodar

0. Antes de tudo, rode o comando `npm install`;
0. Caso queira rodar o banco localmente com Docker, pode-se utilizar o comando `docker-compose up` para subir o banco;
0. Renomeie o arquivo `.env.example` para `.env` e edite as variáveis para conexão com o banco;
0. Rode o comando `npm run sequelize:migrate` para gerar as tabelas;
0. Rode o comando `npm run sequelize:seed` para criar dados de exemplo nas tabelas;
0. Rode o comando `npm run dev` para rodar o projeto usando nodemon.

### Próximos passos

Aqui estão alguns assuntos que não foram abordados na aula, mas fica o desafio!

0. Rode o DynamoDB localmente usando Docker e utilize-o para o desenvolvimento
0. Faça o deploy da sua aplicação na AWS (pode ser até usando serverless e lambdas!)
0. Monte um dashboard no ClousWatch para monitorar sua tabela no DynamoDB
0. Monte uma estratégia para atualização do cache que não dependa apenas do TTL do DynamoDB
0. Quer deixar ainda mais performático? Que tal dar uma olhada no DAX (DynamoDB Accelerator)?
