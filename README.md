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


## Project Diary

### DAY 1 (Friday)
I studied the TMDB api documentation, so i could understand how to handle the requests. After some struggle to find solutions, i researched more and found a PHP wrapper that uses the TMDB api (https://github.com/php-tmdb/api) and started testing it. This package was really helpful and was perfect for this project, because i could modify all the api requests and return my own object.

### DAY 2
Created the PHP files to return a custom API using the php-tmdb package. The TMDB API returns paged results, so i merged all the arrays to bring one single object, that way i could handle all the necessary data inside my app. I've also modified some results, converting the genre ids to genre names.

### DAY 3
Now that i could use my custom api, i've started the react app using create-react-app. I usually don't use this command for big projects, but i thought that this could save time since the project has a short deadline. I've made a basic structure, importing the data as a list and filtering it to meet the project requirements. I've also made the "ModalMovie" that retrieves the selected movie details (release date, genres and overview).

### DAY 4 
In the final day, i focused on optimizing the project code and styles. I've also made some adjustments for web responsive behavior and mobile browsers.
