<?php
header('Access-Control-Allow-Origin: *');

$filecsv='users.csv';
define('DATA_FILE','data.json'); // must be writable

    $fh = fopen($filecsv,'r');
    $rows = array();
    while($rows[] = fgetcsv($fh)) { }
    $json = json_encode($rows);
    file_put_contents(DATA_FILE,$json);
    echo $json;     
	fclose($fh);