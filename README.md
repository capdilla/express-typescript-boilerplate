# Typescript Express Boiler plate

Steps to run this project:

1. Change the ` "name": "backend-typescript"` by the name of the project
2. Run `rm -r .git` for clean git and set to your new repo

## Tech

- Typescript
- Sequelize-typescript
- Swagger
- TSOA (Typescript Open API)

## How it works


### How work routes and Swagger
`tsoa` reads the controllers folder and takes all the files there with the `.controllers.ts` extension and generate the `routes.ts` and the `swagger.json`, do not upload this generated files to the repo

## Folder Structure
```
├── README.md
├── cert # Certificated like ssl or private and public
│   ├── generateCerts.js
│   ├── private.key
│   └── public.key
├── config # Configuration files, keys, secrets, DB, etc
│   ├── config.js
│   └── dbConfig.js
├── docker-compose.yml 
├── migrations
├── server.ts
├── src
│   ├── controllers
│   │   ├── auth.controller.ts
│   │   └── example.controller.ts
│   ├── enums
│   │   ├── Roles.ts
│   │   └── SecurityNames.ts
│   ├── helpers
│   │   ├── getCerts.helper.ts
│   │   ├── getModelFields.ts
│   │   ├── hasKey.ts
│   │   ├── jwt.helper.ts
│   │   └── logger.ts
│   ├── interfaces
│   │   ├── ExpressRequest.ts
│   │   ├── LogedUser.ts
│   │   └── Response.ts
│   ├── middlewares
│   │   ├── auth.middleware.ts
│   │   ├── errorHandler.middleware.ts
│   │   └── logger.middleware.ts
│   ├── models
│   │   ├── index.ts
│   │   ├── posts.model.ts # example model
│   │   └── user.model.ts # example model
│   ├── services
│   │   ├── auth.service.ts
│   │   └── example.service.ts
│   ├── routes.ts # auto generate file, Do not upload to repo
│   └── swagger.json # auto generate file, Do not upload to repo
├── startServer.ts
├── tests
│   └── controllers
│       └── auth.test.ts
├── tsconfig.json
└── tsoa.json

```

## Run project

- ```
  npm install
  ```

- Create the private and public keys for sign the jwt token

  ```
  npm run dev-certs
  ```

- ```
  npm run dev
  ```

Also if you need a local db you can use `docker-compose up` this will be create a local db and a client for posgres

## Migrations

- Create a new migration

  ```
  npm run create-migration my-migration-name
  ```

- run all the migrations availables

  ```
  npm run migrate
  ```

- revert the last migration

  ```
  npm run undo-migrate
  ```

- Revert all migrations

  ```
    npm run undo-migrate-all
  ```

## Seeds

`NOTE: SUPER IMPORTANT: do not use seed to save constanst values in the database and do not use seeds in production. if you need to save constanst values in the DB use a normal migration, keep seeds only for testing data`

- create a seed

  ```
    npm run create-seed user-seed
  ```

- run seed
  ```
  npm run seeds
  ```

## Testing

- First make sure that you have created a testing DB

- create migrations for testing table `(just run this command if you have new migrations)`

  ```
  npm run migrate-testing
  ```

- OPTIONAL create seeds for testing

  ```
  npm run seeds-testing
  ```

- ```
  npm test
  ```

## Production

- ```
  npm run build
  ```

- `VERY IMPORTANT` be careful with the private.key and the public.key generated in the production mode, if you lose this files all your users will going to need to relogin in the app

  ```
  npm run prod-cert
  ```

- Run the server prod

  ```
  npm run prod
  ```


## Dev Tools 

other dev tools available in this boilerplate

1. `postgres` continaer if you need to use a database in local running in port `5432`
2. `pgadmin` a client admin for `postgres` running in `http://localhost:5050/` and you can access with the credentials in the `docker-compose.yml`

just install `docker` and run `docker-compose up`