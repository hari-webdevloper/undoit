<?php
session_start();

if(isset($_POST['upload'])){
  $file_name = $_FILES['file']['name'];
  $dir   = '../upload/';
  $tmp_name = $_FILES['file']['tmp_name'];
  $err = $_FILES['file']['error'];
  $filext  =  pathinfo($file_name,PATHINFO_EXTENSION);
  $ext = strtolower($filext);

  if($err == 1){
    header('location:../profile.php?error=filehaserror');
     echo $err;
     exit();
  }
  $allowedExt = array('png','jpeg','jpg');

  if(!in_array($ext,$allowedExt)){
    header('location:../profile.php?error=fileExterror');
    exit();
  }
 $file_new_name = $_SESSION['userid'].'.'.$ext;

  $userid = $_SESSION['userid'];

  $file_dir = $dir.$file_new_name;

  move_uploaded_file($tmp_name,$file_dir);

  $_SESSION['upload_file_name'] = $file_new_name;

  include_once 'db.inc.php';

  $sql  = "UPDATE upload SET profile = '$file_new_name' WHERE userid = '$userid';";

  mysqli_query($con,$sql);

  header('location:../profile.php?success');



}else{
    header('location:../profile.php');
    exit();
}