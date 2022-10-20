<?php
$name = $_POST['fullname'];
$email = $_POST['email'];
$mobile = $_POST['mobile'];
$subject = $_POST['subject'];
$comment = $_POST['textarea'];

include_once 'db.inc.php';

$sql = "INSERT INTO message (name,email,mobile,subject,message) VALUES ('$name','$email','$mobile','$subject','$comment')";

mysqli_query($con,$sql);