# Trix -  Seu App de Transferências

### dos mesmos criadores de um carro de 10s, aqui vai um projeto de 28 horas

# Contexto

Este projeto tem como objetivo demonstra as habilidades do autor com desenvolvimento backend.

Nesse projeto é utilizado Node.js,TypeScript, Express, Docker, MySql, Chai, Sinon, Swagger, Jest, Mocha, node-fetch, etc...

## Api Utilizada

Neste projeto é utilizada a API 'https://docs.awesomeapi.com.br/api-de-moedas' para requisição das cotações de moedas atualizadas a cada 30s

## End Points

<details>
  <summary><strong>/docs</strong></summary>
  <br>
   este end-point contém swagger documentado com objetivo de demonstrar habilidade na stack
   <br>
</details>

<details>
  <summary><strong>/users</strong></summary>
  <br>
  <strong> post - cadastro de novo usuário:</strong><br>
      username: string <br>
      vocation: string <br>
      level: number <br>
      password: string <br>
      balance: number <br>
   <br>
</details>

<details>
  <summary><strong>/login</strong></summary>
  <br>
  <strong> post - login de usuários na plataforma:</strong><br>
      username: string <br>
      password: string <br>
   <br>
</details>

<details>
  <summary><strong>/transactions</strong></summary>
  <br>
  <strong> put - /transactions/deposit - deposito de dinheiro em conta:</strong><br>
      money: number <br>
      token<br>
   <br>
   <strong> put - /transactions/withdrawal - saque de dinheiro em conta:</strong><br>
      money: number <br>
      token<br>
   <br>
   <strong> post - /transactions/trix - transferencia bancária instantanea:</strong><br>
      receiving: string <br>
      money: number <br>
      token<br>
   <br>
   <br>
</details>

<details>
  <summary><strong>/coin</strong></summary>
  <br>
   <strong> get - consulta a cotações atualizadas de moedas</strong><br>
       parâmetros não são necessários<br>
    <br>
   <br>
   <strong> get - /coin/:code - consulta da cotação da moeda especificada pelo code(consulta api externa)</strong><br>
       code: string<br>
    <br>
    <strong> post - /coin/sellcoin - venda de moeda estrangeira e deposito automático em Real (R$)</strong><br>
       code: string<br>
       username: string <br>
       money: number <br>
    <br>
</details>

## Baixando Aplicação


1. Clone o repositório

2. Prepare o ambiente
  * Se local, instale as dependências:
    * `npm install`
  * Se utilizar docker, suba:
    * `docker-compose up -d` 
    * `docker exec -it trix bash`
    * `npm install`
3. Prepare o Banco
  * abra seu workbench e rode o arquivo  Trix.sql
4. Execute a aplicação
  * Inicialize o projeto:
    * `npm start` 
  * Verifique que os testes estão executando:
    * `npm test` 
    
## Modelo Relacional

  <img src="./image/modelo_relacional.JPG" >
