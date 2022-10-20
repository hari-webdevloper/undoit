let data = [
    {
        id:1,
        class:`fa fa-mobile`,
        content:"Scrap Collection",
        p1:"If the waste is generated in bulk, then the way to deal with it can’t be traditional, there are few things that have to be done differently to provide end-to-end waste management covering all kinds of waste",
        p2:"Our digital platform allows the traceability and transparency of records and streamlines the process of data collection and reporting.",
        p3:"While being associated with The Undo it, the businesses and the brand owners can be confident of its customised bulk scrap collection service being compliant with the standards laid down by central pollution control board",
        link:'scrapCollection.php'
    },
    {
        id:2,
        class:"fa fa-industry",
        content:"EPR Service",
        p1:"Extended Producer Responsibility also known as EPR is an obligation imposed on Producers, Importers and Brand owners in which they stand responsible for the collection & recycling of the plastic waste they introduce in the market through their products, as per the Plastic Waste Management rules 2016",
        p2:"We conduct audits & plan your EPR fulfilment process by examining your total production quantity & type of plastic used for packaging, measure the achievability, mark targets, study challenges while unlocking easy solutions.",
        p3:"We provide you assistance with all the legal documentation requirements to initiate the EPR fulfilment process",
        link:'EPR.php'
    },
    {
        id:3,
        class:"fa fa-trash",
        content:"Zero waste services",
        p1:"Zero waste aims at completely wiping away the waste out of existence by practising the 5R’s principle of waste management",
        p2:"Refuse what we don’t need, Reduce what we need, Reuse what we actually consume, Recycle what we can’t refuse, reduce or recycle and Rot the rest.",
        p3:"Hence, close the loop of the linear economy and send nothing to landfills, incinerators and the ocean which would otherwise harm the environment and result in climate change, pollution and scarcity of resources to meet the growing demands.",
        link:'zerowasteservice.php'
    },
    {
        id:4,
        class:"fas fa-users",
        content:"Zero Waste Society",
        p1:"Zero waste aims at completely wiping away the waste out of existence by practising the 5R’s principle of waste management. ",
        p2:" Refuse what we don’t need, Reduce what we need, Reuse what we actually consume, Recycle what we can’t refuse, reduce or recycle and Rot the rest. ",
        p3:"Hence, close the loop of the linear economy and send nothing to landfills, incinerators and the ocean which would otherwise harm the environment and result in climate change, pollution and scarcity of resources to meet the growing demands.",
        link:'zerowasteS.php'
    },
    {
        id:5,
        class:"fas fa-edit",
        content:"Shredding service",
        p1:"The Undo it provides a secure and cost-effective way to get rid of your personal and business confidential documents that are no longer useful but possess huge risk. Tossing them into the waste bins, just like that, can’t be an option, and locking them up somewhere in the office or study takes away a whole lot of storage space and peace of mind.",
        p2:"We provide a digitised platform through ‘The Undo it’ app to streamline pick-up on your scheduled date & time.",
        p3:"Our Dedicated Executive assigned arrives at the location on your desired schedule and collects the documents after accurate weighing & inspection",
        link:'shreddingService.php'
    },
    {
        id:6,
        class:"fa fa-wrench",
        content:"Dismantling service",
        p1:"For the sustainable disposal of the scrap, the dismantling process plays the most critical part where dismantled items are <br>segregated into marketable fractions to be repaired and reused, while the rest of the hazardous components are removed from end-of-life products and securely transferred to the authorised recyclers to prevent them from ending up in our dumping grounds which otherwise not just pollute our environment but also create a grave occupational hazard for the waste workers.",
        p2:"The nature of the recyclables are carefully taken into account before sending them to the concerned recyclers for their right disposal.",
        p3:"Apart from dismantling services, The Undo it team is engaged in carrying out the pre-processing of the recycling service, to later send the baled material to the authorised recyclers for further processing.",
        link:'Dismantling.php'
    },
    {
        id:7,
        class:"fa fa-car",
        content:"Vehicle Scrapping Service",
        p1:"As per the policy, vehicles as old as 10 to 15 years or those who have to be applied for re-registration would be declared as end of life or unfit to be on roads if failed the automated fitness test by the authority. ",
        p2:"Such vehicles have to be considered for voluntary scrapping by the owners. This is the point where The Undo it vehicle scrapping service comes into picture. ",
        p3:"On depositing the vehicle for scrapping with us, the vehicle owner first of all gets the fair scrap value and a tradable certificate of deposit which can be used to avail multiple benefits such as registration fee waiver, road tax concession and auto OEM discounts on purchase of new vehicle.",
        link:'vehicleScrapping.php'
    },
    {
        id:8,
        class:"fa fa-recycle",
        content:"Circular Economy Services",
        p1:"Until now, the waste economy mainly operated on a 'take, make and dispose'​ model popularly known to be a linear model which led to the growing pressure of manufacturing and consumption on our scarce natural resources and environment. To counter that problem, the rise of the circular economy concept came about to help in the sustainable growth of businesses",
        p2:"Through our circular economy solutions, we plan and design innovative strategies to provide sustainable solutions to businesses. The Undo it formulated strategies deal with the 360-degree approach to transforming a linear waste economy into a circular one",
        p3:"By providing end-to-end waste management solutions based on the principles of circular economy, the products in its end of life stage are pushed back into the economy by practising the phenomenon of reusing, repairing, remanufacturing, and recycling existing materials and products",
        link:'circularEconomy.php'
    },
    {
        id:9,
        class:"fa fa-tasks" ,
        content:"IEC Activity",
        p1:"IEC stands for information, education and communication, is a public health system approach aiming at changing or reinforcing health-related behaviours in a target audience, concerning a specific problem and within a predefined period of time, through communication methods and principles.",
        p2:"The Undo it extends its service to the Urban local bodies to carry out the IEC on waste management effectively and in the best possible way. The aim is to bring behavioural change in the masses by adopting safe and sustainable waste practices.",
        p3:"For that, The Undo it engages its team in spreading awareness across the community about the importance of the 3 R’s - Reduce, Reuse, and Recycle. Then, educating them about the type of waste and its segregation at source and how it can contribute to increasing the recycling rate, thereby reducing waste pollution.",
        link:'CSR.php'
    }
]

let container = document.querySelector('.d_two_2 div:nth-of-type(1)');
data.map(pre=>{ container.innerHTML += `<div id=${pre.id}><i class="array ${pre.class}"  aria-hidden="true"  style="background-color: rgb(150, 237, 128);color:black"></i><span>${pre.content}</span></div>`});





let container1 = document.querySelectorAll('.d_two_2 div:nth-of-type(1) div');
let clicks = document.getElementById('1');
clicks.style.background="#4caa5b";
clicks.style.color='white';
let containerArr = Array.from(container1);
let container2 = document.getElementById('d_two_content'); 
containerArr.map(pre=>{

   pre.addEventListener('click',(e)=>{

    let attr = e.target.getAttribute('id');
  
    containerArr.map(pre=>{
        let i = pre.querySelector('span');
        pre.getAttribute('id')==attr?pre.style.background='#4caa5b':pre.style.background='yellow';
        pre.getAttribute('id')==attr?i.style.color="white":i.style.color="black";
    })
    data.map(pre=>{
        if(pre.id == attr){
          container2.innerHTML = `        <h5>${pre.content}</h5> 
          <p>${pre.p1}<p>
          <p>${pre.p2}</p>
          <p>${pre.p3}</p>
          <a href="${pre.link}" class="button">Know More</a>`
        }
    })
   })
    
})

