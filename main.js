var container=document.querySelector(".container");

let header=document.createElement("header");
header.classList.add("header");
container.appendChild(header);

let div=document.createElement("div");
div.classList.add("row");
header.appendChild(div);

let img=document.createElement("div");
img.classList.add("img-sec");
img.innerHTML=`<img src="http://pcstech.in/assets/img/PCS-Logo-resize.png">`;
div.appendChild(img);


let nav=document.createElement("nav");
nav.classList.add("navigator");
div.appendChild(nav);

let a1=document.createElement("a");
a1.classList.add("navia")
a1.setAttribute("href","");
a1.innerText="Home";
nav.appendChild(a1)

let a2=document.createElement("a");
a2.setAttribute("href","");
a2.innerText="About";
nav.appendChild(a2)

let a3=document.createElement("a");
a3.setAttribute("href","");
a3.innerText="Services";
nav.appendChild(a3)

let a4=document.createElement("a");
a4.setAttribute("href","");
a4.innerText="Team"
nav.appendChild(a4)

let a5=document.createElement("a");
a5.setAttribute("href","");
a5.innerText="contact";
nav.appendChild(a5)

let section=document.createElement("section");
section.classList.add("section","margin");
container.appendChild(section);
section.style.backgroundImage="url('https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_1280.jpg')";

let div1=document.createElement("div");
div1.classList.add("home-sec");
div1.style.display="flex";
section.appendChild(div1);


let codiv2=document.createElement("div");
codiv2.classList.add("left-sec");
codiv2.style.width="50%";
div1.appendChild(codiv2);

let codiv1=document.createElement("div");
codiv1.classList.add("content-sec");
div1.appendChild(codiv1);
codiv1.innerHTML=`<h1>Excellence in Software Development & Training</h1>
                <p>PCS is a professionally run software development company<br>
                with a clear focus on delivering optimal, customized and cost<br>
                effective solutions to global customers.</p>
                <button>Start Your Career</button>`;
codiv1.style.color="white";
codiv1.style.width="50%";



let section1=document.createElement("section");
section1.classList.add("about-section");
container.appendChild(section1);

let h1=document.createElement("h1");
h1.innerText="About us";
h1.style.display="flex";
h1.style.justifyContent="center";
section1.appendChild(h1);

let h11=document.createElement("h1");
h11.classList.add("h11")
h11.innerHTML=`<img src="http://pcstech.in/assets/img/8czrRMbdi.png" alt="demo">`;
h11.style.display="flex";
h11.style.justifyContent="center";
section1.appendChild(h11);

let div2=document.createElement("div");
div2.classList.add("about-sec");
div2.style.display="flex";
div2.style.justifyContent="space-between";
div2.style.width="80%";
div2.style.margin="0 auto";
section1.appendChild(div2);

let div3=document.createElement("div");
div3.classList.add("about-img");
let codiv3=document.createElement("div");
codiv3.classList.add("co-about-img");
codiv3.innerHTML=`<img src='http://pcstech.in/assets/img/about_us_image.jpg'>`;
div3.appendChild(codiv3)
div2.appendChild(div3);

let div4=document.createElement("div");
div4.classList.add("about-content");
div2.appendChild(div4);
div4.style.padding="0px 0px 0px 10px";
div4.style.fontFamily="sans-Serif";
div4.innerHTML=`<h1>We support our Technology Solutions to Synergize Your Business</h1>
                <p>PCS software solutions is an Information Technology Services Company that provides complate IT solutions,
                software and Training. It was started in the year 2021, by a team of highly experienced technology experts
                who have the rich experience in the IT industry for more than 15 years.</p>
                <button id="about-btn">Read more</button>`;

let section2=document.createElement("section");
section2.classList.add("service-section" ,"margin");
container.appendChild(section2);

let sh1=document.createElement("h1");
sh1.innerText="Services";
sh1.style.marginTop="5%";
sh1.style.display="flex";
sh1.style.justifyContent="center";
section2.appendChild(sh1);

let sh11=document.createElement("h1");
sh11.classList.add("h11")
sh11.innerHTML=`<img src="http://pcstech.in/assets/img/8czrRMbdi.png" alt="demo">`;
sh11.style.display="flex";
sh11.style.justifyContent="center";
section2.appendChild(sh11);

let image=[{
    imageurl:"http://pcstech.in/assets/img/webdevelopment_image.jpeg",
    heading:"WEB DEVELOPEMENT",
    para:"We are one of the web design company in Tenkasi that provides tailor-made solutions to its clients",
},
{
    imageurl:"http://pcstech.in/assets/img/mobileappdevelopment_image.jpg",
    heading:"MOBILE APP DEVELOPEMENT",
    para:"We helps to expant=d your customer reach in a very short time by this the resucing marketing costs",  
},
{
    imageurl:"http://pcstech.in/assets/img/seo_image.jpeg",
    heading:"SEO",
    para:"We are an ethical search optimazation company providing SEO services cost effective",  
},
{
    imageurl:"http://pcstech.in/assets/img/itsolution_images.jpg",
    heading:"COMPLETE IT SOLUTIONS",
    para:"PCS always tries to create great value and productivity gains for the client by providing quality solutions",  
},
{
    imageurl:"https://assets.entrepreneur.com/content/3x2/2000/20150503125436-shutterstock-177305711.jpeg",
    heading:"INTERNSHIP & IMPLANT PROJECT",
    para:"Inplant training is vertue modus to make a good engineer with the real timemanifestation",  
},
{
    imageurl:"https://www.northeastern.edu/graduate/blog/wp-content/uploads/2017/07/Project-Management-Skills-HERO.jpg",
    heading:"UG & PG COLLEGE PROJECTS",
    para:"we empower the final year students with require comprehenstion and attitude",  
}
];

image.forEach(e=>{
    let div5=document.createElement("div");
    div5.classList.add("service-head");
    div5.style.width="80%";
    div5.style.margin="0 auto"
    section2.appendChild(div5);

    let div6=document.createElement("div");
    div6.classList.add("bg");
    div5.appendChild(div6);
    div6.style.backgroundColor="white";
    div6.style.boxShadow=" 0px 14px 22px -9px #bbcbd8";

    let image=document.createElement("img");
    image.classList.add("image-sec")
    image.src=e.imageurl;
    div6.appendChild(image);

    let head=document.createElement("h2");
    head.classList.add("h2head");
    head.innerHTML=e.heading;
    div6.appendChild(head);

    let paragraph=document.createElement("p");
    paragraph.classList.add("para");
    paragraph.innerHTML=e.para;
    div6.appendChild(paragraph);

});



var teams=document.createElement("section");
teams.classList.add("teams");
container.appendChild(teams);

var teamObject=[
    {
        icon:'fa fa-whatsapp',
        number:'2+',
        category:'Years'
    },
    {
        icon:'fa fa-whatsapp',
        number:'10',
        category:'Employees'
    },
    {
        icon:'fa fa-whatsapp',
        number:'5',
        category:'Clients'
    },
    {
        icon:'fa fa-whatsapp',
        number:'7',
        category:'Projects'
    }
]



var teamsContainer=document.createElement('div')
teamsContainer.className='teams-container';
teams.appendChild(teamsContainer);

teamObject.forEach((value,index)=>{
    var teamCard =document.createElement('div');
    teamCard.className='team-card';
    teamsContainer.appendChild(teamCard)

    var teamBox = document.createElement('div');
    teamBox.className='team-box';
    teamCard.appendChild(teamBox)

    var teamIconPosition = document.createElement('div');
    teamIconPosition.className='team-icon-position';
    teamBox.appendChild(teamIconPosition)

    var teamIcons= document.createElement('div');
    teamIcons.className='team-icons';
    teamIconPosition.appendChild(teamIcons)

    var teamIcon = document.createElement('i');
    teamIcon.className=value.icon;
    teamIcons.appendChild(teamIcon)

    var count = document.createElement('h1');
    count.innerText=value.number;
    teamBox.appendChild(count);

    var category = document.createElement('p');
    category.innerText=value.category;
    teamBox.appendChild(category);
})

//footer-section
let footer=document.createElement("footer");
footer.style.backgroundColor="#311b92";
container.appendChild(footer);

let div9=document.createElement("div");
div9.classList.add("footer-sec");
footer.appendChild(div9);
div9.style.color="white";
div9.style.display="flex";
div9.style.justifyContent="space-between";
div9.style.fontFamily="sans-Serif";

let map=document.createElement("div");
map.classList.add("map-sec");
div9.appendChild(map);
map.style.width="33.3%";

let mapsec=document.createElement("div")
mapsec.classList.add("map-section");
mapsec.innerHTML=`<h2>For visit</h2>
               <iframe style="border:0; width: 100%; height: 250px;" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=pavitha%20consutancy%20services,%20surandai+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">" frameborder="0" allowfullscreen></iframe>`;
map.appendChild(mapsec);
mapsec.style.width="80%";
mapsec.style.margin="0 auto";

let icon=document.createElement("div");
icon.classList.add("icon-sec");
div9.appendChild(icon);
icon.style.width="33.3%";
icon.innerHTML=`<h2>follow us</h2>`;



let icons1=document.createElement("h2");
icons1.classList.add("h2icon")
icons1.innerHTML=`<i class="fa fa-facebook"></i>`+" "+"Facebook";
icon.appendChild(icons1);

let icons2=document.createElement("h2");
icons2.classList.add("h2icon")
icons2.innerHTML=` <i class="fa fa-twitter"></i>`+" "+"Twitter";
icon.appendChild(icons2);

let icons3=document.createElement("h2");
icons3.classList.add("h2icon")
icons3.innerHTML=` <i class="fa fa-instagram"></i>`+" "+"Instagram";
icon.appendChild(icons3);

let address=document.createElement("address");
address.classList.add("address-section");
address.style.width="33.3%";
div9.appendChild(address);
address.style.fontFamily="serif";

let headadd=document.createElement("h2");
headadd.innerText="Address";
address.appendChild(headadd);
headadd.style.textDecoration="none";




let p1=document.createElement("p");
p1.classList.add("address-para");
p1.innerHTML=`<i class="fa fa-map"></i>`+" "+"P.M.Complex,14-1-123/7,Sankarankovil road,Sangeetha Mobiles Upstairs,Surandai-627859,Tenkasi(Dt)";
address.appendChild(p1);

let p2=document.createElement("p");
p2.classList.add("address-para");
p2.innerHTML=`<i class="fa fa-map"></i>`+" "+"+91 8754768231";
address.appendChild(p2);

let p3=document.createElement("p");
p3.classList.add("address-para");
p3.innerHTML=`<i class="fa fa-map"></i>`+" "+"04633 211620";
address.appendChild(p3);

let p4=document.createElement("p");
p4.classList.add("address-para");
p4.innerHTML=`<i class="fa fa-map"></i>`+"  "+"pcstech2021@gmail.com";
address.appendChild(p4);

let p5=document.createElement("p");
p5.classList.add("address-para");
p5.innerHTML="contact@pcs.in";
address.appendChild(p5);









