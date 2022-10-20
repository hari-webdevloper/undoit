<?php session_start()?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
    <link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css"
/>
    <link href="css/header.css" rel="stylesheet" type="text/css">
    <link href="css/banner.css" rel="stylesheet" type="text/css">
    <link href="css/swipper.css" rel="stylesheet" type="text/css">
    <link href="css/comment.css" rel="stylesheet" type="text/css">
    <link href="css/signup.css" rel="stylesheet" type="text/css">
    <link href="css/profile.css" rel="stylesheet" type="text/css">
    <link href="css/individual.css" rel="stylesheet" type="text/css">
    <link href="css/bussiness.css" rel="stylesheet" type="text/css">
    <link href="css/scrapCollection.css" rel="stylesheet" type="text/css">
    <link href="css/rate.css" rel="stylesheet" type="text/css">
    <link href="css/sellscrap.css" rel="stylesheet" type="text/css">
    <link href="css/about.css" rel="stylesheet" type="text/css">
    <title>Undo it</title>
</head>
<body>
    <main>
        <header>
        
            <img src="images/logo.png" alt="logo" id="index">
            <nav class="nav">
            <a>Service <i class="fa-solid fa-chevron-up"></i></a>
            <div class="service">
                <div class="service-1">
                <p>For Individuals</p>
                <a href="scrapCollection.php">Scrap Collection</a>
                <a href="zerowasteS.php">Zero Waste Society</a>
                <a href="vehicleScrapping.php">Vehicle Scrapping</a>
                </div>
                <div class="service-2">
                <P>For Bussiness</p>
                <div>
                <span>
                <a href="scrapCollection.php">Scrap Collections</a>
                <a href="EPR.php">EPR Services</a>
                <a href="Dismantling.php">Dismantling</a> 
                </span>
                <span>
                <a href="circularEconomy.php">Circular Economy</a>
                <a href="zerowasteservice.php">Zero Waste</a>
                <a href="shreddingService.php">Papper Shredding</a>
                </span>
                <a href="CSR.php">CSR Service</a>
                </div>
                </div>
                <div class="service-3">
                <p>For Government</p>
                <a href="materialRecovery.php">Material Recovery Facility</a>
                </div>
            </div>
            <a id="company">Company <i class="fa-solid fa-chevron-up"></i></a>
            <div class="company">
            <a href="about.php">About Us</a>
            <a href="contact.php">Contact</a>
            <a href="joinus.php" class="last">Franchise</a>
            </div>
            <a href="joinus.php">Join Us</a>
            </nav>
            <nav class="nav">
             <a href="rate.php">Check Rate List</a>
             <a href="sellscrap.php">Sell Scraps</a>
            </nav>

            <?php
            if(isset($_SESSION['userid'])){

                include_once 'includes/db.inc.php';

                $stmt    =  mysqli_stmt_init($con);

                $userid  =  $_SESSION['userid'];

                $sql     = "SELECT * FROM upload WHERE userid=? OR email=?;";
                $prepare =  mysqli_stmt_prepare($stmt,$sql);
             
                if(!$prepare){
                header('location:index.php?error=headerstmterror');
                exit();
                }
             
                mysqli_stmt_bind_param($stmt,'ss',$userid,$userid);
                mysqli_stmt_execute($stmt);
             
                $resultData  =  mysqli_stmt_get_result($stmt);
                 
                if($row = mysqli_fetch_assoc($resultData)){
                    $profile = $row['profile'];
                    echo "  <div class='profile'>
                    <span  id='force'>
                    <img src='upload/{$profile}' alt='profile'style='cursor:pointer'>
                   </span>
                    <a href='logout.php'>Logout</a>
                    </div>";

                }
            }else{
              echo "  <div class='ls'>
              <a href='signup.php'>Sign Up</a>
              <span style='color:white;margin:0px 5px'>/</span>
              <a href='login.php'>Login</a>
              </div>";
            }
            ?>
          

          
           <i class="fa fa-bars menu" style="color:white"></i>
        </header>