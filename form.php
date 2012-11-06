<?php include('header.php'); ?>

<form id="form1" action="form.php" method="get">

	First Name: <input type="text" name"fname" value=""/><br />
	Last Name: <input type="text" name"lname" value=""/><br />
	Email: <input type="text" name"email" /><br />
	Message: <input type="text" name"message" /><br />
	<input type="hidden" name"date" />
	<input type="button" name="submit" value="save" />
</form>

<script src="js/jquery.1.7.2.js"></script>
<script src="js/bootstrap.js"></script>

<script>
var form = document.getElementById("form1");
form.getChild('date').value = Date()

</script>

</body>

</html>