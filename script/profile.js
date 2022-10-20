 let file = document.getElementById('file');

let img = document.getElementById('cover');


let headerImg = document.getElementById('force');
headerImg.addEventListener('click',()=>{
    return window.location.assign('profile.php');
})

let pro_change    = ()=>{
    let reader     = new FileReader();
    reader.onload  = function(){img.src = reader.result};
    reader.readAsDataURL(file.files[0]);
         }
         let profile = document.getElementById('plus');
         profile.addEventListener('click',()=>{
             file.click();
         })
         file.addEventListener('change',pro_change);







