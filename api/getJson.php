<?php

$callback = $_REQUEST['callback'];

// Create the output object.
//$output = array('a' => 'Apple', 'b' => 'Banana');

$json = '{ blah: 
   [{
        name: "q",
        firstname: "Ed Spencer",
        lastname: "ed@sencha.com",
        department:"A",
        email:"E",
        login:"E",
        status:"s"
    },
    {
        name: "w",
        firstname: "Ed Spencer",
        lastname: "ed@sencha.com",
        department:"A",
        email:"E",
        login:"E",
        status:"s"
    }]
}';

//start output
if ($callback) {
    header('Content-Type: text/javascript');
    echo $callback . '(' . json_encode($json) . ');';
} else {
    header('Content-Type: application/x-json');
    echo json_encode($json);
}