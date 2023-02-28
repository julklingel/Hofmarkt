<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

To install and run the project on your local machine, please follow these steps:

1. Clone the repository to your local machine by running the following command in your terminal:

    ```
    git clone https://github.com/julklingel/hofmarkt.git
    ```

2. If not already existing, install pnpm on your machine by running the following command in your terminal:

    ```
    brew install pnpm
    ```

3. Install the project dependencies by running the following command in your terminal:

    ```
    pnpm install
    ```

4. Create a .env file in the root directory of the project and add your credentials in the following format:

    ```
    POSTGRES_HOST="localhost"
    POSTGRES_PORT="5432"
    POSTGRES_NAME="backend"
    POSTGRES_USER=<your-postgres-username>
    POSTGRES_PASSWORD=<your-postgres-password>
    DATABASE_URL="postgresql://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${POSTGRES_HOST}:${POSTGRES_PORT}/${POSTGRES_NAME}?schema=public"
    JWT_secret=<your-jwt-secret>
    ```
  Make sure to replace <your-postgres-username>, <your-postgres-password>, and <your-jwt-secret> with your actual values.

5. Create a docker-compose.yml file in the same directory with the following content:

  ```
  services:
    postgres:
      image: postgres
      restart: always
      env_file:
        - .env
      environment:
        - POSTGRES_USER=${POSTGRES_USER}
        - POSTGRES_PASSWORD=${POSTGRES_PASSWORD}
      volumes:
        - postgres:/var/lib/postgresql/data
      ports:
        - '5432:5432'
  volumes:
    postgres:
  ```

  if this is not working, try to add the following docker-compose.yml file:

  ```
  version: '3.8'
  services:
    postgres:
      image: postgres:13
      ports:
        - '5432:5432'
      restart: always
      env_file:
          - .env
      environment:
        POSTGRES_USER: ${POSTGRES_USER}
        POSTGRES_PASSWORD: ${POSTGRES_PASSWORD}
        POSTGRES_DB: backend
    
  volumes:
    postgres:
  ```

6. If you haven't already, install the Docker Desktop application and open it.

7. In your terminal, navigate to backend in the project directory and run the following command to start the PostgreSQL container:

    ```
    docker-compose up
    ```

8. Once you are ready to migrate the database tables to your local database, run the following command in your terminal:
  
    ```
    npx prisma migrate dev
    ```

9. To reset the database to its initial state and see if everything is working, run the following command in your terminal:

    ```
    pnpm reset:db
    ```

  That's it! You now have a local development environment for Hofmarkt up and running. If you have any questions or encounter any issues, please feel free to reach out to us. Happy coding!








## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
