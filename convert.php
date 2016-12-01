<?php
header('Content-Type: text/html; charset=utf-8');
$name = empty($_REQUEST['name']) ? '' : strtolower($_REQUEST['name']);
$extension = '.csv';
$separator = ';';

$directory = './csv';
$files  = scandir($directory);

$filesToConvert = [];

for($i = 0; $i < count($files); $i++) {
    $file = $files[$i];
    
    if(!strpos($file,$extension)) {
        continue;
    }

    $pos = strpos($file,$extension);
    $fName = substr($file,0,$pos);

    if($name == '') {
        $filesToConvert[] = $file;
    } else {
        if(strtolower($fName) == $name) {
            $filesToConvert[] = $file;
        }
    }
}

for($i = 0; $i < count($filesToConvert); $i++) {
    convert($filesToConvert[$i],$separator,$extension);
}

function convert($name,$sep,$ext) {
    
    $filecsv='./csv/'.$name;

    $pos = strpos($name,$ext);
    $fName = substr($name,0,$pos);

    $filename = $fName.'.json';

    $fh = fopen($filecsv,'r');
    $rows = array();
    while($rows[] = fgetcsv($fh)) { }

    $headers = [];

    $headerA = $rows[0][0];

    $headers = explode($sep,$headerA);

    for($j = 0; $j < count($headers); $j++) {
        $headers[$j] = implode("_",explode(" ",strtolower(trim($headers[$j]))));
    }

    $json = getJson($headers,$rows,$sep);
    //print_r($headers);
    
    $myfile = fopen("data/".$filename, 'w') or die('Unable to open file!');
	fwrite($myfile, $json);
	fclose($myfile);

    //echo $json;
    //print_r($rows);
    //$json = json_encode($rows);
    //file_put_contents(DATA_FILE,$json);
    //echo $json;     
    //fclose($fh);
}

function getJson($headers,$rows,$sep) {
    $hJson = '{ "data": [';
    $json = '';
    for($j = 1; $j < count($rows); $j++) {

        $rowV = explode($sep,$rows[$j][0]);
        if(count($rowV) != count($headers)) {
            continue;
        }

        if($json != '') {
            $json .= ',';
        }
        $json .= '{';
        $values = '';
        for($k = 0; $k < count($rowV); $k++) {
            $row = $rowV[$k];

            if($values != '') {
                $values .= ',';
            }

            $values .= '"'.$headers[$k].'":"'.$row.'"';

        }
        $json .= $values;
        $json .= '}';
    }

    $fJson = ']}';

    $finalJson = $hJson.$json.$fJson;
    return $finalJson;
}
/*
$filecsv='users.csv';
define('DATA_FILE','data.json'); // must be writable

$fh = fopen($filecsv,'r');
$rows = array();
while($rows[] = fgetcsv($fh)) { }
$json = json_encode($rows);
file_put_contents(DATA_FILE,$json);
echo $json;     
fclose($fh);
*/