This app was created during our time as students at Code Chrysalis

<img src="./src/assets/MentorMe.png">

# MentorMe. - Connect driven students to industry professionals for one on one mentoring sessions

MentorMe is a fullstack application which aims to create a platform for students to communicate with experts in the industry. 
This project was an oppurtunity for team members to put their skills to practice to develop a fullstack application in a limited amount of time while using the STRIP API. The STRIPE API used is the Client-Only One Time Payment capability for the test checkout portion of MentorMe.

## Built With

* [Vuex](https://vuejs.org) for the UI
* [Knex](http://knexjs.org) Query Builder
* [Express](https://www.npmjs.com/package/express) Server
* [Postgres](https://www.postgresql.org) Database
* [STRIPE API](https://stripe.com/docs/api) Checkout Functionality

## Repository Structure
* Initial seeding data is located in the `database/seeds/data` folder
* In the `migrations` folder are located all the migrations for the PostgreSQL database
* In the `server` folder are located all the files necessary to the back-end node server
* In the `src` file contain all code for client facing files and component

## Getting Started

***Please note that you will not have access to the original products but you are free to test with your own using SRIPE dashboard***

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 
See deployment for notes on how to deploy the project on a live system.

### Installing

Everything you need is in the package.json, so just a basic install from your package manager of choice will suffice:

```
npm install
```

Next, create a .env file in the root directory and populate it with the following:

** FOR WINDOWS USERS **

```
DB_NAME= // your database name
DB_USER=postgres
DB_PW=// your postgres password
DB_HOST=localhost
Add all necessary STRIPE ENV
```

** FOR MAC USERS **

```
DB_NAME= // your database name
DB_USER=// your postgres username
DB_PW=// your postgres password
DB_HOST=localhost
Add all necessary STRIPE ENV
```

Head over to your postgres terminal and create a local database with whatever name you entered for DB_NAME in your .env file, and then run

You can then start the two dev servers (in separate terminals):

```
npm run start
npm run serve
```

And then open your localhost8080 to see the site in action!

Note: the servers will automatically run a migration and seed.

## Contributing

Should you want to contribute:
* please fork and clone the repo on your machine
* Create an "issue" to describe what you want to work on
* Submit a pull request.

Thank you! 

## Authors

* [Ken](https://github.com/KuroKen91)
* [Mussin](https://github.com/mussinbenarbia)
* [Johan](https://github.com/johanthestrup)
* [Pete](https://github.com/griffitp12)

