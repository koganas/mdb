<?php

require_once __DIR__ . '/vendor/autoload.php';

/*
Client Auth
Construct the client
*/
$token  = new \Tmdb\ApiToken('1f54bd990f1cdfb230adb312546d765d');
$client = new \Tmdb\Client($token, ['secure' => false]);

/* API Functions */

/* Test API call of upcoming movies, merging the first 3 pages */
$list1 = $client->getMoviesApi()->getUpcoming(array('page' => 1))['results'];
$list2 = $client->getMoviesApi()->getUpcoming(array('page' => 2))['results'];
$list3 = $client->getMoviesApi()->getUpcoming(array('page' => 3))['results'];
$movies = array_merge($list1, $list2, $list3);

print_r($movies);
