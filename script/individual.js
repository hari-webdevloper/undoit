let steps = document.querySelectorAll('.steps');
let sec_three_img  = document.querySelectorAll('#sec_three img');
let sec_eight_img = document.querySelectorAll('#sec_eight img');

let position = (ele)=>{
    ele.forEach(pre=>{
        let height = window.innerHeight;
        let div = pre.querySelectorAll('.step')
        
        div.forEach((element,index)=>{
            let top = element.getBoundingClientRect().top;  
            if(top<height){
                element.style.top = "0px"
                element.style.opacity = '1';
                element.style.transitionDelay = index/2 + 's';
            }else{
                element.style.top = "100px"
                element.style.opacity = '0';
                element.style.transitionDelay = '-10s';
            }
        })
    })
   
}

let skip  = (element)=>{
 element.forEach(pre=>{
    let top = pre.getBoundingClientRect().top;
    let height = window.innerHeight;

    if(top<height){
        pre.style.top="0px";
        pre.style.opacity = '1';
    }else{
        pre.style.top = "100px"
        pre.style.opacity = '0';
    }
 })
}


window.addEventListener('scroll',()=>{ return position(steps) });
window.addEventListener('scroll',()=>{ return skip(sec_three_img) });
