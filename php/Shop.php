<?php
	$localhost = "localhost";
	$db = "Shop";
	$user = "admin";
	$password = "admin";

	$link = mysqli_connect($localhost, $user, $password) or trigger_error(mysqli_error(), E_USER_ERROR);
	mysqli_query($link,"SET NAMES utf8;") or die(mysqli_error());
	mysqli_query($link, "SET CHARACTER SET utf8;") or die(mysqli_error());
	mysqli_select_db($link,$db);
?>