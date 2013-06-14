<!doctype html>
<html>
<head>
<link rel="stylesheet" href="global.css" type="text/css">
<script type="text/javascript" src="utils.js"></script>
<script type="text/javascript" src="advAutoComplete.js"></script>
</head>
<body onload="onload();">
<form action="index.php" method="POST">
<div id="advAutoCompleteBox">
    <input type="text" name="advAutoCompleteInput" value="<?=((isset($_POST['advAutoCompleteInput'])) ? $_POST['advAutoCompleteInput'] : '') ?>" />
</div>
<input type="submit">
</form>
</body>
</html>