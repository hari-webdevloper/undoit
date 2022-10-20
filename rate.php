<?php include_once 'header.php'?>

<section id="r-1">
<h1>Scarp Prices</h1>
<div id="search-box">
<i class='fas fa-search'></i><input type="search" name="search" placeholder="search material here..." data-search>
</div>
<div id="r-button">
<button class="btn-value"><i></i> All</button>
<button class="btn-value"><i></i> Paper</button>
<button class="btn-value"><i></i> Plastic</button>
<button class="btn-value"><i></i> Metal</button>
<button class="btn-value"><i></i> E-Waste</button>
<button class="btn-value"><i></i> Other</button>
</div>
</section>

<section id="scrap-list">
</section>


<template data-user-template>
<div id="list">
<div id="content">
<img data-img src="images/signupbg.jpg" alt="">
<h5 style="font-size:12px" data-main></h5>
<p data-content></p>
</div> 

<div id="rates">
<div id="r" data-button>
</div>
<p><a href="sellscrap.php">sell scrap -></a></p>
</div>
</div>
<hr></hr>
</template>
<div class="paddingfoot padding">
<?php include_once 'footer1.php'?>
</div>
<?php include_once 'footer.php'?>