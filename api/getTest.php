<?php
$callback = $_REQUEST['callback'];

      // Create the output object.
      $output = array('name' => 'Apple', 'lastname' => 'Banana');
 
      //start output
      if ($callback) {
          header('Content-Type: text/javascript');
          echo $callback . '(' . json_encode($output) . ');';
      } else {
          header('Content-Type: application/x-json');
          echo json_encode($output);
      }