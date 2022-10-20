<?php include_once 'header.php'?>

<?php
 $err = "";
if(isset($_GET['error'])){
   if($_GET['error'] == 'emptyinput'){
    $err = "Inputs are empty !";
   }else if($_GET['error'] == 'emailnotvalid'){
    $err = "Email not Valid !";
   }else if($_GET['error'] == 'pwd!match'){
    $err = "Password not match !";
   }else if($_GET['error'] == 'usernameExist'){
    $err = "Username already exist !";
   }
}

?>

<section id="signup">
<div class="black">
<h1>Sign Up<br><span style="font-size:2rem;color:red"><?php echo $err;?></span></h1>

<form action="includes/signup.inc.php" method="post">
<label>Name :</label>
<input type="text" name="name" placeholder="Enter your name...">
<label>Email :</label>
<input type="text" name="email" placeholder="Enter your email...">
<label>Username :</label>
<input type="text" name="userid" placeholder="Enter your username...">
<label>Password :</label>
<input type="password" name="password" placeholder="Enter your password...">
<label>Confirm Password :</label>
<input type="password" name="confirmpassword" placeholder="Confirm password...">
<input type="submit" name="signup" value="Sign Up">
<span>have an account already? <a href="login.php" style="color:green;margin-left:2px">login in </a></span>
</form>


</div>



</section>

<?php include_once 'footer.php'?>