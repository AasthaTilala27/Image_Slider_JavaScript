let images = [
"images/img-1.jpg",
"images/img-2.jpg",
"images/img-3.jpg",
"images/img-4.jpg",
"images/img-5.jpg"
];
let container =document.querySelector(".images");

for(let i=0;i<images.length;i++)
{
container.innerHTML +=`<img src="${images[i]}"class="slide">`;
}

let slides =document.querySelectorAll(".slide");

let current = 0;

showSlide();

function showSlide(){
for(let i=0;i<slides.length;i++)
{
slides[i].classList.remove("active");
}

slides[current].classList.add("active");
}

function nextSlide(){
current++;

if(current==slides.length){
current=0;
}

showSlide();
}

function prevSlide(){
current--;

if(current<0){
current=slides.length-1;
}

showSlide();
}