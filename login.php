<?php include_once 'header.php'?>

<?php
$err = "";
if(isset($_GET['error'])){
    if($_GET['error'] == 'emptyinput'){
        $err = "Inputs are empty !";
       }else if($_GET['error'] == 'usernotexist'){
        $err = "Username doesn't exist !";
       }else if($_GET['error'] == 'pwd!match'){
        $err = "Password not match !";
       }
}



?>





<section id="login">
<div class="black">
<h1>Login<br><span style="font-size:2rem;color:red"><?php echo $err;?></span></h1>

<form action="includes/login.inc.php" method="post">
<label>Username</label>
<input type="text" name="userid" placeholder="Userid / Email...">
<label>Password</label>
<input type="password" name="password" placeholder="Enter your password...">

<input type="submit" name="login" value="Login">
<span>don't have an account?<a href="signup.php" style="color:green;margin-left:5px">sign up</a></span>
</form>


</div>



</section>

<?php include_once 'footer.php'?>