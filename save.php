<?php include('header.php'); ?>

define('UPLOAD_DIR','images/');
$save = $_POST["save"];
$save = str_replace('data:image/png;base64,','',$save);
$save = str_replace(' ', '+',$img);
$data = base64_decode($save)l
$file = UPLOAD_DIR.uniqid().'.png';
$success = file_put_contents($file,$data);


echo 'Unable to save the file.';

?>

</body>
</html>