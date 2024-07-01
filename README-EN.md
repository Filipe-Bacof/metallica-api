# Free API for Metallica fans and Developers

<img src="./metallica-logo.png" alt="Metallica Logo" width="300">
<img src="https://rollingstone.uol.com.br/media/_versions/metallica_ross_halfin_rs_brasil_widelg.jpg" alt="Metallica Band" width="300">

<a href="https://rollingstone.uol.com.br/artigo/trinta-anos-do-album-preto-metallica-no-topo-do-mundo/" target="_blank">image source</a>

## Dedication and Thanks

- I've been a big fan of metallica since I was a child, more than two decades listening to these guys' magnificent sound.
- I dedicate this API to all fans who appreciate the music, mission and work of these rock stars 🤘
- I also dedicate this small programming work in honor of the great Cliff Burton, one of the greatest bass players who ever walked the earth, who left us after an accident on September 27, 1986. Rest in Peace!

## Support the Project

- If you are able to support the project, you can make a PIX for the key below:

```
filipebacof@gmail.com
```

## Sugestões e Parcerias

- Feel free to contact me via email `filipebacof@gmail.com` or contact me on LinkedIn [on this link](https://www.linkedin.com/in/filipe-bacof/)

## It's not over here

- This project will be updated eventually and some things will be implemented soon, such as
- [x] Seeder for database initialization.
- [ ] Pagination of results for some endpoints.
- [ ] Endpoints to perform CRUD operations, obviously with authentication.

## About deployment

- Currently the deployment is done at [Render](https://render.com/) and their only free server is in the United States, so there may be a small delay in the first request, you can test the `/` endpoint which should return `Let's Rock! 🤘😎🔥`.
- Base URL for consuming the API: `https://metallica-api.onrender.com`
- [Click Here](https://metallica-api.onrender.com/) to test it

## Endpoint documentation

- You can access the exported postman file called `Metallica API.postman_collection.json` or access one of these links:
- [Documentation in English](https://github.com/Filipe-Bacof/metallica-api/blob/main/Documentation.md)
- [Documentation in Portuguese](https://github.com/Filipe-Bacof/metallica-api/blob/main/Documentação.md)

## Creating a local database with all production data

- You can install PostgreSQL locally and populate it with the seed script I created.
- To do this, you first need to create a local or cloud database, I can recommend creating it through [Vercel](https://vercel.com/docs/storage/vercel-postgres) or [ElephantSQL](https:/ /www.elephantsql.com/index.html), both have free plans.
- After that, create a file called `.env` here in the project root folder and place your connection string with your database, it will look something like this:

```
DATABASE_URL="postgres://user:password@host:port/dbname?sslmode=require&connection_limit=30&pool_timeout=60"

# user: Your database username.
# password: Your database password.
# host: The address of the database server.
# port: The database server port.
# dbname: The name of your database.
```

- At the end of the connection string, add the following parameters to optimize performance and avoid blocking requests: `connection_limit=30` and `pool_timeout=60` as in the example, separating the parameters with the `&` character.
- With the database configured and the connection string defined, you can run `npx prisma generate` to apply the migrations.
- With this done, you can now run the seed script to populate the database with production data with the command `npx prisma db seed`
- It is worth mentioning that I left at the top of the seed file some constants that show logs after the insertions, feel free to change the values ​​to `true` and view the insertions in your terminal.
