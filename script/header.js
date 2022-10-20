let service    = document.querySelector('a');
let company    = document.getElementById('company');
let company_dd = document.getElementsByClassName('company')[0];
let drop_down  = document.querySelector('.service');
let nav        = document.querySelectorAll('.nav');
let menu       = document.querySelector('.menu');
let index     = document.getElementById('index');
let reveal     = (e)=>{
              let chevron   = e.target.querySelector('.fa-chevron-up');

              chevron.classList.toggle('chevron');
              e.target.classList.toggle('active');
          
              if(e.target == service){
               company.querySelector('.fa-chevron-up').classList.remove('chevron');
               company.classList.remove('active');
               company_dd.classList.remove('reveal_drop_down');
               drop_down.classList.toggle('reveal_drop_down');
              }
              else if(e.target == company){
               service.querySelector('.fa-chevron-up').classList.remove('chevron');
               service.classList.remove('active');
               drop_down.classList.remove('reveal_drop_down');
               company_dd.classList.toggle('reveal_drop_down');

              }
  }

let show      = ()=>{
                nav.forEach(pre=>pre.classList.toggle('activate'));
                     }
service.addEventListener('click',reveal);
company.addEventListener('click',reveal);
menu.addEventListener('click',show);

index.addEventListener('click',()=>{
  return window.location.assign('index.php');
})
