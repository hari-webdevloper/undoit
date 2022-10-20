let check = [
    {  img:'signupbg.jpg',
        main:'Paper',
        content:'Paper is manufactured in thin sheets from the pulp of wood or other fibrous substances. Paper scrap includes newspaper, books cartons, magazines, Beverage carton etc.',
        material:[
            {name:'Newspaper',price:'15'},
            {name:'Book',price:'15'},
            {name:'Carton',price:'15'},
            {name:'Magazines',price:'15'},
            {name:'Plain Paper',price:'15'},
            {name:'Used Beverage Carton',price:'15'},
            {name:'Record Paper',price:'15'},
            {name:'Grey Board',price:'15'},
            {name:'White paper',price:'15'},
            {name:'Rough paper',price:'15'},]
    },

    {
       img:'plastics.jpg',
        main:'Plastic',
        content:'Plastics are a wide range of synthetic or semi-synthetic materials that use polymers as a main ingredient. HDPE, LDPE, MLP, PVC, PP, PET etc. are types of plastics used for different purposes',
        material:[
            {name:'Soft Plastic',price:'15'},
            {name:'Hard Plastic',price:'15'},
            {name:'Mix Plastic',price:'15'},
            {name:'Milk Covers',price:'15'},
            {name:'Water/Oil Covers',price:'15'},
            {name:'Polythene (Mix)',price:'15'},
            {name:'Plastic Jar(15ltr)',price:'15'},
            {name:'HPP',price:'15'},
            {name:'Fibre',price:'15'},
       ]
    },

    {
        img:'metal.jpg',
        main:'Metal',
        content:'Scrap metal are an important source of industrial metals and alloys, particularly in the production of steel, copper, lead, aluminum, and zinc. Smaller amounts of tin, nickel, magnesium, and precious metals are also recovered from scrap',
        material:[
            {name:'Iron',price:'15'},
            {name:'Tin',price:'15'},
            {name:'Steel',price:'15'},
            {name:'Brass',price:'15'},
            {name:'Copper',price:'15'},
            {name:'Alluminium',price:'15'},
            {name:'Casting Aluminium',price:'15'},
            ]
    },
    {
        img:'electronic.jpg',
        main:'E-Waste',
        content:'E-waste is electronic products that are unwanted, not working, and nearing or at the end of their “useful life.” It includes TV, refrigerator, mobile phones, printers etc.',
        material:[
            {name:'E-Waste',price:'15'},
            {name:'Fridge',price:'15'},
            ]
    },
    {
        img:'bottle.jpg',
        main:'Other',
        content:'It Includes, beer bottle, mix-waste, tyre, mattresses etc.',
        material:[
            {name:'Beer-Bottle',price:'15'},
            {name:'Other-Mix-Waste',price:'15'},
            {name:'Battery',price:'15'},
            ]
    },
]
const template = document.querySelector('[data-user-template]');
const listcontainer = document.getElementById('scrap-list');
const search = document.querySelector('[data-search]');
let btn = document.querySelectorAll('.btn-value');


search.addEventListener('input',(e)=>{
 const value = e.target.value;
 searchlist(value);
 btn.forEach(pre=>{
    pre.style.background='#f0fff2';
    pre.style.color='black'
 })
})

let users = [];
users = check.map((list)=>{
    const card = template.content.cloneNode(true).children[0];
    const img = card.querySelector('[data-img]');
    const main = card.querySelector('[data-main]');
    const content =card.querySelector('[data-content]');
    const btn_content = card.querySelector('[data-button]');
    img.src = `images/${list.img}`;
    main.textContent = list.main;
    content.textContent = list.content;
 let names =   list.material.map(pre =>{
        let button = `<button><span>${pre.name}</span><br><span>Rs ${pre.price} / kg</span></button>`;
        btn_content.innerHTML += button;
        return  pre.name;
    })
   listcontainer.append(card);
  return {main:list.main, names:names,element:card};
})
function searchlist(value){
    users.forEach(pre=>{
        const isvisible = pre.main.toLowerCase().includes(value) || pre.names.toString().toLowerCase().includes(value);
        pre.element.classList.toggle('hide',!isvisible);
    })
}

btn.forEach(pre => pre.addEventListener('click',(e)=>{
 btn.forEach(pre=>{
    pre.style.background='#f0fff2';
    pre.style.color='black'})
 e.target.style.background = 'green';
 e.target.style.color = 'white';

if(e.target.textContent === " All"){
    users.map(pre=> pre.element.classList.toggle('hide',false));
    search.value = "";
    return;
}else{
    let a =e.target.textContent.trim().toLowerCase() ;
   searchlist(a);
search.value = "";
}
}))



