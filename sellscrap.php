<?php include_once 'header.php'?>

<section id="sellScrap">
<form id="sellscrapform" >
<div id="scrapImg">
<div>
<img src="upload/default.jpg" alt="">
</div>
<span>+</span>
<p>Upload your scrap image</p>
<input type="file" name="file" accept="image/*">
</div>
<div id="inputs">
<label>name:</label>
    <input type="text" name="sellername" placeholder="Enter your name...">
    <span></span>
    <label>Address:</label>
    <input type="text" name="address" placeholder="Enter your address...">
    <span style="color:red"></span>
    <label>mobile no:</label>
    <input type="text" name="mobno" placeholder="Enter your mobile no...">
    <span style="color:red"></span>
    <label>Arrival date and time:</label>
    <input type="text" name="timing" placeholder="Enter timing of arrival...">
    <span style="color:red"></span>
    <input type="submit"class="button" name="uploadScrap" value="upload">
</div>
</form>
<div id="boost">
    <h1 style="text-align:center;font-size:2rem;color:#f0fff2;">Data uploaded we will call you 
        shortly to confirm pick up!
    </h1>
</div>
</section>





<?php include_once 'footer.php'?>