# deno-drizzle

A project skeleton example that integrates [Drizzle Orm](https://orm.drizzle.team/) inside a deno+node project

> [!NOTE]
> the included example is using a postgres driver, feel free to integrate yours.

## Get started

```sh
$ git clone https://github.com/ZOASR/deno-drizzle.git
$ cd deno-drizzle
```

## install npm dependencies

```sh
$ npm i drizzle-orm [YOUR_DRIZZLE_DB_DRIVER]
$ npm i -D drizzle-kit
```

replace `[YOUR_DRIZZLE_DB_DRIVER]` with whatever driver you're using from drizzle see the [docs](https://orm.drizzle.team/docs/get-started-postgresql#postgresjs) here for examples

## Project setup

modify the files inside the `./db` folder to match imports for your driver:

```ts
// schema.ts

import /*...*/ "drizzle-orm/[YOUR_DRIVER]";

export const; /* your schema definitions*/
//...
```

in the `.env` file modify the `DB_URL` to the appropriate connection url for your DB driver:

```
DB_URL=[YOUR_DB_CONNECTION_URL]
```

once you're done modifying all the files you can finally run:

```bash
$ deno task generate
$ deno task push
```

> You need to rerun the `generate` and `push` tasks everytime you modify your schema

In `main.ts` you can write all your queries and regular ORM stuff and it will run inside your deno environment ten run :

```bash
$ deno task dev
```
