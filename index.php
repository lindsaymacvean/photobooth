

<?php include('header.php'); ?>


<div class="fluid-container">
	<form id="form2" action="save.php" method="POST">
	<input type="hidden" name="save" />
	<input type="button" value="Save Photo" onclick="saveImg()"/>
	</form>
</div>

<div id="splash" class="fluid-container">
	<p id="errorMessage">Loading...</p>
</div>

<div id="videoDiv" class="fluid-container">
	<video id="video" autoplay="autoplay"></video>
</div>

<div id="app" class="fluid-container" style="display:none;">
	<canvas id="photo"></canvas><br>
</div>

<div class="fluid-container">
	<div id="filmroll" class="container"></div>
</div>

<?php include('footer.php'); ?>