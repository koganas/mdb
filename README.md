# React App + TMDB Api
Search upcoming movies webapp using The Movie Database API v3.
The `master` branch contains the boilerplate files and packages used initially to start the development.

## API
Using:
- Composer - https://getcomposer.org/
- Require `php-tmdb/api` package - https://github.com/php-tmdb/api

Follow this commands to install all the packages using composer:
```
cd api
composer install
```
Server tested with PHP 7.2.18. If testing in a local server, check the API at http://localhost/mdb/api

## APP
Using:
- Create React App - https://github.com/facebook/create-react-app
- Node-sass - https://github.com/sass/node-sass
- Axios - https://github.com/axios/axios
- Moment.js - https://momentjs.com/
- Font Awesome - https://fontawesome.com/

If you want to run locally and the API is already running, follow the instructions:
```
cd app
yarn install
yarn start
```
Application will run at http://localhost:3000
