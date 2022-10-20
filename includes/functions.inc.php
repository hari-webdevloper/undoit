<?php


function emptyInput($name,$email,$username,$pwd,$conPwd){
     $result ;
    if(empty($name)||empty($email)||empty($username)||empty($pwd)||empty($conPwd)){
        $result = true;
    }else{
        $result = false;
    }
    return $result;
}

function emptyEmail($email){
    $result ;
   if(!filter_var($email,FILTER_VALIDATE_EMAIL)){
       $result = true;
   }else{
       $result = false;
   }
   return $result;
}

function pwdCheck($pwd,$conpwd){
    $result ;
   if($pwd !== $conpwd){
       $result = true;
   }else{
       $result = false;
   }
   return $result;
}



function dbcheck($con,$username,$email){
    $sql = "SELECT * FROM user WHERE userid=? OR email=?;";
    $stmt    =  mysqli_stmt_init($con);

    if(!mysqli_stmt_prepare($stmt,$sql)){
        header('location:../signup.php?error=stmt1errdbcheck');
        exit();
    }
    mysqli_stmt_bind_param($stmt,'ss',$username,$email);
    mysqli_stmt_execute($stmt);

    $result = mysqli_stmt_get_result($stmt);
    
    if($row = mysqli_fetch_assoc($result)){
        return $row;
    }else{
        return $result = false;
    }
}

function createUser($con,$name,$email,$userid,$pwd){
    $sql ="INSERT INTO user (name,email,userid,password) VALUES(?,?,?,?);";
    $stmt = mysqli_stmt_init($con); 

    if(!mysqli_stmt_prepare($stmt,$sql)){
        header('location:../signup.php?error=stmt1errcreateUser');
        exit();
    }
    $hashed = password_hash($pwd,PASSWORD_DEFAULT);

    mysqli_stmt_bind_param($stmt,'ssss',$name,$email,$userid,$hashed);
    mysqli_stmt_execute($stmt);
    
    mysqli_stmt_close($stmt);

    $sql ="INSERT INTO upload (userid,email,profile) VALUES(?,?,?);";
    $stmt = mysqli_stmt_init($con);

    if(!mysqli_stmt_prepare($stmt,$sql)){
        header('location:../signup.php?error=stmt2errcreateUser');
        exit();
    }
    $pro  = 'default.jpg';
    mysqli_stmt_bind_param($stmt,'sss',$userid,$email,$pro);
    mysqli_stmt_execute($stmt);
    
    mysqli_stmt_close($stmt);
     $_SESSION['userid'] = $userid;
     header('location:../profile.php?');
     exit();

}

function emptyLogin($username,$pwd){
    $result ;
   if(empty($username)||empty($pwd)){
       $result = true;
   }else{
       $result = false;
   }
   return $result;
}

 
function loginUser($con,$userid,$pwd){
    $user = dbcheck($con,$userid,$userid);
    if(!user){
        header('location:../login.php?error=usernotexist');
        exit();
    }
    $hashed = $user['password'];
    $pwd_verify = password_verify($pwd,$hashed);

    if(!$pwd_verify){
        header('location:../login.php?error=pwd!match');
        exit();  
        }
        else{
        $_SESSION['userid']  =  $userid;
        header('location:../index.php');
        exit();
        }
}