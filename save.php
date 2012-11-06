<?php

$save = $_POST["save"];
$save = str_replace('data:image/png;base64,','',$save);
$save = str_replace(' ', '+',$save);
$data = base64_decode($save);
$file = "images/".uniqid().'.png';
$success = file_put_contents($file,$data);


echo 'Success, file name is '.$file;

//now use mysql to save image location and meta

?>
