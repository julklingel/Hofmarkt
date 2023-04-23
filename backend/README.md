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

## REST API Description

### AuthController

The AuthController API provide a set of RESTful API endpoints for user authentication and password management. The following is an overview of the available endpoints:

POST /auth/signup: This endpoint is responsible for registering a new user. It takes a signupDto object as input with properties like email, password, and isSupplier. On successful registration, it returns a message "Account created successfully" and sends a confirmation email to the user.

POST /auth/login: This endpoint is responsible for authenticating a user. It takes a loginDto object as input with properties email and password. On successful authentication, it returns an access_token.

POST /auth/send-reset-mail: This endpoint is responsible for sending a reset password email to a user. It takes a resetMailDto object as input with the property email. On successful operation, it returns a message "Reset code sent successfully".

POST /auth/enter-resetCode: This endpoint is responsible for verifying a reset code sent to the user's email. It takes a resetTokenDto object as input with properties email and token. On successful verification, it returns a message "Reset code verified successfully" along with the token.

POST /auth/reset-password: This endpoint is responsible for resetting a user's password. It takes a resetPasswordDto object as input with properties email, token, and password. On successful password reset, it returns a message "Password changed successfully".

GET /auth/confirm/:email/:code: This endpoint is responsible for confirming a user's email address. It takes email and code as URL parameters. On successful email confirmation, it returns a new access_token.


### SupplierController

The SupplierController API delivers a collection of RESTful API endpoints devised for supplier management and associated image handling. The overview of available endpoints is as follows:

POST /supplier/create: This endpoint handles the creation of a new supplier. It accepts a supplierDto object as input, featuring properties such as name, location, and contact information, and up to 4 images, each capped at 2 MB. Upon successful supplier creation, it returns a message "Supplier created successfully" and the created supplier object.

GET /supplier: This endpoint retrieves a list of all suppliers, complete with their offer and image details.

GET /supplier/id: This endpoint obtains a specific supplier by its ID.

GET /supplier/offer/id: This endpoint gathers a list of offers made by a specific supplier, identified by their ID.

PATCH /supplier/update/id: This endpoint updates an existing supplier by its ID. It accepts a supplierDto object as input, with properties such as name, location, and contact information, and up to 4 images, each capped at 2 MB. Upon successful supplier update, it returns a message "Supplier updated successfully" and the updated supplier object.


### UserController

The UserController API delivers a collection of RESTful API endpoints devised for user management and profile image handling. The overview of available endpoints is as follows:

GET /user/me: This endpoint retrieves the logged-in user's own information.

PATCH /user/me: Placeholder for a future implementation of updating the logged-in user's information.

POST /user/create: This endpoint is responsible for creating a new user, complete with their address and optional profile image. It accepts a userDto object and an addressDto object as input, featuring properties such as firstName, lastName, streetAddress, city, state, country, and zip. It also accepts an optional image file, with a maximum size of 1 MB. Upon successful user creation, it returns a message "User created with name [firstName]."


### OfferController

The OfferController API provides a set of RESTful API endpoints for managing offers and their associated images. The following is an overview of the available endpoints:

GET /offer: This endpoint is responsible for retrieving a list of all offers with their supplier and image details.

GET /offer/id: This endpoint is responsible for retrieving a specific offer by its ID.

GET /offer/supplier/id: This endpoint is responsible for retrieving a list of offers made by a specific supplier, identified by their ID.

POST /offer/create: This endpoint is responsible for creating a new offer. It is protected by JWT authentication and restricted to users with a 'SUPPLIER' role. It takes an offerDto object as input with properties like title, price, unit, and amount, along with up to 4 images, each with a maximum size of 2 MB. On successful offer creation, it returns the created offer object.

PATCH /offer/update/id: This endpoint is responsible for updating an existing offer by its ID. It is protected by JWT authentication and restricted to users with a 'SUPPLIER' role. It takes an offerDto object as input with properties like title, price, unit, and amount, along with up to 4 images, each with a maximum size of 2 MB. On successful offer update, it returns the updated offer object.



## Project's Architecture
![image](https://user-images.githubusercontent.com/94459330/233842800-14e1c369-5190-4323-bef7-fbe7b70cae88.png)


## Code Ownership
Each branch is written by the branch owner only. 

