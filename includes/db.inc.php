<?php

$con = mysqli_connect('localhost','root','','undo_it');

if(!$con){
    header('location:index.php?error=databasenotconnected');
}