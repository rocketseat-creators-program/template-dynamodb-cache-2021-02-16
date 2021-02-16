## [Template] Usando DynamoDB como cache para suas requisições

*Esse repositório não contém o código finalizado e sim o template para dar início à aula.*

Muitas vezes quando fazemos requisições para nossas APIs, precisamos buscar alguns dados demorados, muitas vezes de várias fontes diferentes até. Neste projeto veremos como podemos agregar as informações de resposta em uma tabela do DynamoDB, inclusive utilizando o recurso de TTL para excluir entradas mais antigas.

No nosso exemplo teremos uma API que busca dados clínicos de pacientes (dados pessoais, exames e medicamentos) no banco relacional. Ao longo da aula adicionaremos um banco DynamoDB na frente para buscar esses dados de uma forma mais eficiente.

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
