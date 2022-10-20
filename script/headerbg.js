let content_one = document.getElementById('content-one')??document.getElementsByClassName('c_2')[0];
let header      = document.querySelector('header');
let class_content = document.querySelectorAll('.content-one');
let content_four = document.querySelectorAll('.content_four');
let content_two = document.querySelectorAll('.content_two');
let f_1 = document.getElementById('f_1');
let float = document.getElementById('float');

window.addEventListener('scroll',()=>{
   let top = f_1.getBoundingClientRect().top;
   if(top<window.innerHeight){
   float.style.opacity = '0';
   }else{
      float.style.opacity = '1'
   }
})


let bounding = (ele)=>{
   return ele.getBoundingClientRect().top;
}

showColor       = (ele)=>{
             let top = ele.getBoundingClientRect().top;
             let height = header.getBoundingClientRect().height;
             if(top <= height){
                header.style.background = '#20551F';
                header.style.boxShadow = 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px';
             }else{
                header.style.background = 'transparent';
                header.style.boxShadow ='none';
             }
       
                      }


 
let transition     = ()=>{
                  class_content.forEach((pre)=>{
                     let top = bounding(pre);
                     let height = window.innerHeight;
                     if(top<height){
                     pre.style.opacity = '1';
                      pre.style.transform = 'translateY(0px)'
                     }else{
                        pre.style.opacity = '0';
                     pre.style.transform = 'translateY(100px)'
                     }
                  })
                           }         
                           

let reveal1        = ()=>{
   let height = window.innerHeight;
   content_four.forEach(pre=>{  
      let cut = pre.querySelectorAll('.cuts')
      let o = Array.from(cut);
      let cuts = o.slice(0,3).reverse();
      let cutss = o.slice(3,5).reverse();
      let cutsss=[];
      cuts.forEach(pre=>cutsss.push(pre));
      cutss.forEach(pre=>cutsss.push(pre));
    
   cutsss.forEach((item,index)=>{
      let top = item.getBoundingClientRect().top;
      if(top<height){
         item.style.right = '0px';
         item.style.transitionDelay = index/4 + 's';
         item.style.opacity='1';
      }else{
         item.style.right = '200px';
         item.style.opacity='0';
         item.style.transitionDelay ='-10s';
      }
   })
   })
                   
                        }




                        let pathname = window.location.pathname;
                        let filename = pathname.substring(pathname.lastIndexOf('/')+1);
                        if(filename === 'index.php'||filename==='scrapCollection.php'|| filename ==='zerowasteS.php'|| filename === 'vehicleScrapping.php'|| filename === 'EPR.php'|| filename === 'Dismantling.php'|| filename === "circularEconomy.php" || filename === 'shreddingService.php' || filename==="CSR.php" || filename === "materialRecovery.php"|| filename==="zerowasteservice.php" || filename === 'joinus.php'){
                           window.addEventListener('scroll',()=>showColor(content_one));
                        }
                        else{
                           header.style.background = '#20551F';
                           header.style.boxShadow = 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px';
                        }


let slide = ()=>{
   let height = window.innerHeight;
   content_two.forEach(pre=>{
   let cut = pre.querySelectorAll('.cut');
   cut.forEach((pre,index)=>{
      let top = pre.getBoundingClientRect().top;
      if(top<height){
         pre.style.top = '0px';
         pre.style.opacity = '1';
         pre.style.transitionDelay = index/4 + 's';
      }else{
         pre.style.top = '50px';
         pre.style.opacity = '0';
         pre.style.transitionDelay ='-10s';
      }
   })
   })
}

window.addEventListener('scroll',transition);
window.addEventListener('scroll',slide);
window.addEventListener('scroll',reveal1);