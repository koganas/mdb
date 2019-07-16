<?php

require_once __DIR__ . '/vendor/autoload.php';

/* Client Auth */
$token  = new \Tmdb\ApiToken('1f54bd990f1cdfb230adb312546d765d');
$client = new \Tmdb\Client($token, ['secure' => false]);

/* Get image info */
function get_img_info() {
	global $client;
	return $client->getConfigurationApi()->getConfiguration()['images'];
}

/* Return API */
$imgDetails = get_img_info();

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
echo json_encode($imgDetails);
