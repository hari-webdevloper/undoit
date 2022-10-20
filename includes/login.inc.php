<?php
session_start();
if(isset($_POST['login'])){
    $userid = $_POST['userid'];
    $pwd  = $_POST['password'];

    include_once 'functions.inc.php';
    include_once 'db.inc.php';

    if(emptyLogin($userid,$pwd) !== false){
        header('location:../login.php?error=emptyinput');
        exit();
    }

    loginUser($con,$userid,$pwd);

}else{
    header('location:../index.php');
    exit();
}