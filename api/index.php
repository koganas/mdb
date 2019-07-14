<?php

require_once __DIR__ . '/vendor/autoload.php';

/* Client Auth */
$token  = new \Tmdb\ApiToken('1f54bd990f1cdfb230adb312546d765d');
$client = new \Tmdb\Client($token, ['secure' => false]);

/* API Functions */
function get_all_upcoming() {
	global $client;

	/* Get total pages and merge arrays */
	$totalPages = $client->getMoviesApi()->getUpcoming()['total_pages'];
	for ($i=1; $i<=(int)$totalPages; $i++) {
		$pages[$i] = $client->getMoviesApi()->getUpcoming(array('page' => $i))['results'];
	}
	$movies = array_merge(...$pages);

	return $movies;
}


/* Return API */
$movies = get_all_upcoming();

header('Content-Type: application/json');
echo json_encode($movies);
