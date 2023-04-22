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
# Backend
POSTGRES_HOST="localhost"
POSTGRES_PORT="5432"
POSTGRES_DB="backend"
POSTGRES_USER= <your-postgres-username>
POSTGRES_PASSWORD= <your-postgres-password>
DATABASE_URL="postgresql://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${POSTGRES_HOST}:${POSTGRES_PORT}/${POSTGRES_DB}?schema=public"
JWT_secret= <your-jwt-secret>

# Cloudinary
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=

# Email
EMAIL_HOST="smtp.gmail.com"
EMAIL_PORT="587"
EMAIL_USER=
EMAIL_PASSWORD=

# Test
USER_TEST_EMAIL="testUser@mack.de"
USER_TEST_PASSWORD="pass123"

SUPPLIER_TEST_EMAIL="testSupplier@mack.de"
SUPPLIER_TEST_PASSWORD="pass123"

SUPPLIER_TEST_EMAIL_TWO="crack1@mack.de"
USER_TEST_EMAIL_TWO="jackiechan@kung-fu.de"

    ```
  Make sure to replace ```<your-postgres-username>```, ```<your-postgres-password>``` and ```<your-jwt-secret>``` with your actual values.

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
  
  and for the testing environment add

```
test-db:
    image: postgres:13
    ports:
      - '5435:5432'
    restart: always
    env_file:
        - .env.test
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
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

## Test

```bash
# integration test
$ pnpm test:integration
```
