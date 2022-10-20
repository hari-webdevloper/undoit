let sellspan= document.querySelector('#scrapImg span');
let filess = document.querySelector('#sellScrap input[type="file"]');
let sellimg = document.querySelector('#scrapImg img');
let sellscrapform = document.getElementById('sellscrapform');
let boost = document.getElementById('boost');
let inputs = document.querySelectorAll('#inputs input[type="text"]');

sellspan.addEventListener('click',()=>{
filess.click();
})

filess.addEventListener('change',()=>{
    let reader = new FileReader();
    reader.onerror = function() {
        alert('uploaded file has an error');
        return;
      };
    reader.onload = ()=>{
    sellimg.src = reader.result;
    };

    reader.readAsDataURL(filess.files[0]);
})

sellscrapform.addEventListener('submit',(e)=>{
        e.preventDefault();
    let result = 1;
    inputs.forEach(pre=>{
        let span = pre.nextElementSibling;
        if(pre.value == ""){
        span.textContent = "input is empty!"
        result = 0;
        }
    })
  if(filess.files.length == 0){
     result = 0;
     alert('upload your Scrap image');
     return;
  }
  if(result !== 0){
    const scrapdata = new FormData(sellscrapform);
    fetch('includes/scrap.inc.php',{
        method:'post',
        body:scrapdata,
    }).then(res=>res.text())
    .then(res=> console.log(res))
    .catch(err=>console.log(err));
    slip();
  }

})

function slip(){
boost.classList.add('a');
}