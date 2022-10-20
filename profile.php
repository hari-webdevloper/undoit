
<?php include_once 'header.php'?>

<section id="profile">
<div>
<form action="includes/profile.inc.php" method="post" enctype="multipart/form-data">
<?php
if(isset($_SESSION['userid'])){
    $userid = $_SESSION['userid'];
    echo "<p>Welcome {$userid}</p>";
}
?>
<?php
        include_once 'includes/db.inc.php';

        $userid   =  $_SESSION['userid'];

        $sql     = "SELECT * FROM upload WHERE userid=?;";
        $stmt    =  mysqli_stmt_init($con);
        $prepare =  mysqli_stmt_prepare($stmt,$sql);
     
        if(!$prepare){
        header('location:profile.php?error=stmtprofileerror');
        exit();
        }
        mysqli_stmt_bind_param($stmt,'s',$userid);
        mysqli_stmt_execute($stmt);
     
        $resultData  =  mysqli_stmt_get_result($stmt);
     
        if($row  =  mysqli_fetch_assoc($resultData)){

                    echo "<img src='upload/{$row['profile']}' alt='profile' id='cover'>";
                    $_SESSION['profile'] = $row['profile'];
                    mysqli_stmt_close($stmt);
                     }
?>
<input type="file" name="file" id="file" accept="image/*">
<input type="submit" name="upload" value=<?php if(isset($_SESSION['profile'])){echo 'update';}else{echo 'upload';}?>>
<p style="text-align:center"><?php if(isset($_SESSION['userid'])){echo $_SESSION['userid'];}?> <br> <?php if(isset($_SESSION['upload_file_name'])){echo "profile uploaded successfully!";}else if(isset($_SESSION['profile'])){echo "update your profile picture!";}else{echo "take a minute to upload pic!";}?></p>
<span id="plus">+</span>
</form>
</div>
</section>
<div id="skip">
<a href="index.php"><?php if(isset($_SESSION['upload_file_name'])||$_SESSION['profile']){echo 'Next';}else{echo 'Skip';}?><i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
</div>

<?php include_once 'footer.php'?>