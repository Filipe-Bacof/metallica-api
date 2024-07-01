# API gratuita para fãs de Metallica e desenvolvedores

- [Read this document in English](https://github.com/Filipe-Bacof/metallica-api/blob/main/README-EN.md)

<img src="./metallica-logo.png" alt="Metallica Logo" width="300">
<img src="https://rollingstone.uol.com.br/media/_versions/metallica_ross_halfin_rs_brasil_widelg.jpg" alt="Metallica Band" width="300">

<a href="https://rollingstone.uol.com.br/artigo/trinta-anos-do-album-preto-metallica-no-topo-do-mundo/" target="_blank">fonte da imagem</a>

## Dedicatória e Agradecimentos

- Sou um grande fã do Metallica desde criança, há mais de duas décadas ouvindo o som magnífico desses caras.
- Dedico esta API a todos os fãs que apreciam a música, a missão e o trabalho dessas estrelas do rock 🤘
- Dedico também este pequeno trabalho de programação em homenagem ao grande Cliff Burton, um dos maiores baixistas que já existiu na terra, que nos deixou após um acidente em 27 de setembro de 1986. Descanse em paz!

## Apoie o Projeto

- Caso tiver condições de apoiar o projeto pode fazer um PIX para a chave abaixo:

```
filipebacof@gmail.com
```

## Sugestões e Parcerias

- Sinta-se a vontade para entrar em contato comigo por email `filipebacof@gmail.com` ou entrar em contato comigo pelo LinkedIn [neste link](https://www.linkedin.com/in/filipe-bacof/)

## Não acabou por aqui

- Esse projeto será atualizado eventualmente e algumas coisas já serão implementadas em breve, tais como
- [x] Seeder para inicialização do banco de dados.
- [ ] Paginação de resultados de alguns endpoints.
- [ ] Endpoints para realizar operações CRUD, obviamente com autenticação.

## Sobre o deploy

- Atualmente o deploy está feito na [Render](https://render.com/) e o único servidor gratuito deles é nos Estados Unidos, dessa forma pode ocorrer um pequeno delay na primeira requisição, você pode testar o endpoint `/` que deve retornar `Let's Rock! 🤘😎🔥`.
- URL Base para consumo da API: `https://metallica-api.onrender.com`
- [Clique aqui](https://metallica-api.onrender.com/) para testar

## Documentação dos endpoints

- Você pode acessar o arquivo exportado do postman chamado `Metallica API.postman_collection.json` ou acessar algum desses links:
- [Documentação em inglês](https://github.com/Filipe-Bacof/metallica-api/blob/main/Documentation.md)
- [Documentação em português](https://github.com/Filipe-Bacof/metallica-api/blob/main/Documentação.md)

## Criando um banco local com todos os dados de produção

- Você pode instalar o PostgreSQL localmente e popular ele com o script de seed que eu criei.
- Para isso primeiro você precisa criar um banco de dados local ou na nuvem, posso recomendar criar através da [Vercel](https://vercel.com/docs/storage/vercel-postgres) ou do [ElephantSQL](https://www.elephantsql.com/index.html), ambos possuem planos gratuitos.
- Após isso crie um aquivo chamado `.env` aqui na pasta raiz do projeto e coloque a sua string de conexão com o seu banco de dados, vai ficar algo parecido com isso:

```
DATABASE_URL="postgres://user:password@host:port/dbname?sslmode=require&connection_limit=30&pool_timeout=60"

# user: Seu nome de usuário do banco de dados.
# password: Sua senha do banco de dados.
# host: O endereço do servidor do banco de dados.
# port: A porta do servidor do banco de dados.
# dbname: O nome do seu banco de dados.
```

- Ao final da string de conexão, adicione os seguintes parâmetros para otimizar a performance e evitar bloqueios de requisições: `connection_limit=30` e `pool_timeout=60` igual no exemplo, separanto os parâmetros pelo caractere `&`.
- Com o banco de dados configurado e a string de conexão definida, você pode rodar `npx prisma generate` para aplicar as migrações.
- Com isso feito você já pode executar o script de seed para popular o banco com os dados de produção com o comando `npx prisma db seed`
- Vale ressaltar que eu deixei no topo do arquivo de seed algumas constantes que mostram logs após as inserções, fique a vontade para modificar os valores para `true` e visualizar no seu terminal as inserções.
