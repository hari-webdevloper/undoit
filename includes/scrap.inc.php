<?php

  $file_name = $_FILES['file']['name'];
  $dir   = '../scrapImage/';
  $tmp_name = $_FILES['file']['tmp_name'];
  $filext  =  pathinfo($file_name,PATHINFO_EXTENSION);
  $ext = strtolower($filext);
  $name = $_POST['sellername'];
  $address = $_POST['address'];
  $mobno = $_POST['mobno'];
  $timing = $_POST['timing'];
  $file_new_name = $name.'.'.$ext;
  $file_dir = $dir.$file_new_name;
  move_uploaded_file($tmp_name,$file_dir);

  include_once 'db.inc.php';

  $sql  = "INSERT INTO sellingscrap (name,address,mobile,timing,scrapImage) VALUES('$name','$address','$mobno','$timing',' $file_new_name')";

  mysqli_query($con,$sql);

