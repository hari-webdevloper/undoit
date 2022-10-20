<?php
session_start();
if(isset($_POST['signup'])){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $username = $_POST['userid'];
    $pwd = $_POST['password'];
    $conpwd = $_POST['confirmpassword'];

   include_once 'functions.inc.php';


   if(emptyInput($name,$email,$username,$pwd,$conpwd) !== false){
    header('location:../signup.php?error=emptyinput');
    exit();
   }

   if(emptyEmail($email) !== false){
    header('location:../signup.php?error=emailnotvalid');
    exit();
   }

   if(pwdCheck($pwd,$conpwd) !== false){
    header('location:../signup.php?error=pwd!match');
    exit();
   }
   include_once 'db.inc.php';

   if(dbcheck($con,$username,$email) !== false){
    header('location:../signup.php?error=usernameExist');
    exit();
   }
 
  createUser($con,$name,$email,$username,$pwd);
  

}else{
    header('location:../signup.php');
    exit();
}