let message = document.getElementsByClassName('message')[0];
let msg_form = document.getElementById('message_form');
let input = msg_form.querySelectorAll('.input');
let text = document.getElementById('text');

let width = window.innerWidth ;

window.addEventListener('resize',()=>{
    width = window.innerWidth;
    let ref = message.getAttribute('class');
    let arr = ref.split(" ");
    
    arr.forEach(pre=>{
        if(width>670){
            if(pre === 'ani'){
                message.classList.remove('ani');
                message.classList.add('animate');
                }
        }else{
            if(pre === 'animate'){
                message.classList.remove('animate');
                message.classList.add('ani'); 
            }
        }
    })
  })


msg_form.addEventListener('submit',(e)=>{
    e.preventDefault();
  
    let key ;

    input.forEach((pre) =>{
        span = pre.nextElementSibling;
        if(pre.value == ''){
            span.innerHTML = 'input is empty';
            key = 0;
        }else{
            span.innerHTML='';
            switch (pre.getAttribute('name')){
                case 'email':
                   pattern = /^[a-zA-Z0-9]*@[a-z]{5,8}\.[a-z]{2,3}$/;
                   result = pattern.test(pre.value);
                   if(!result){
                    span.innerHTML = 'email not valid !';
                    key = 0;
                    return;
                   }else{
                    span.innerHTML = '';
                    key = 1;
                   }
                   break;
                case 'mobile':
                    if(isNaN(pre.value)){
                        span.innerHTML = 'input is not a number';
                        key = 0;
                        return;
                    }else{
                        span.innerHTML = '';
                        key = 1;
                    }
            }
    } 
} 
    )

    if(key == 1){
        const formData = new FormData(msg_form);
        fetch('includes/message.inc.php',{
            method:'post',
            body:formData,
        }).then(res=>res.text())
        .then(res=>console.log(res))
        .catch(err=>console.log(err));

    input.forEach(pre=>pre.value="");
    }

     if(width>670){

        if(key === 1){
            input.forEach(pre=>pre.value='');
            message.classList.add('animate');
          message.innerHTML = `<h1>Message Recieved</h1>
          <p>we will contact you shortly.  `
       }

     }else{
        if(key == 1){
            message.classList.add('ani');
            message.innerHTML = `<h1>Message Recieved</h1>
            <p>we will contact you shortly.  `
        }

     }
})




