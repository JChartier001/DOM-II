// Your code goes here

//change picture to polaroid on load
const destinationImg = document.querySelector(".content-destination img");
window.addEventListener("load", () => {
    destinationImg.style.width = "100%";
    destinationImg.style.padding = "10px 10px 20px 10px";
    destinationImg.style.border = '1px solid #BFBFBF';
    destinationImg.style.backgrounColor = 'white';
    destinationImg.style.boxShadow = '10px 10px 5px #aaaaaa';
});

//bubbling
const body = document.querySelector(".page");
body.addEventListener('click', () => {
    body.style.backgroundColor = "green";
});

const introInfo = document.querySelector(".intro");
introInfo.addEventListener('click', () => {
    introInfo.style.backgroundColor = "rgb(" + event.offsetX + ", " + event.offsetY + ", 40)";
});

//change image end of bubbling
const busImg = document.querySelector('.intro img');
busImg.addEventListener('click', (event) => {
    busImg.src = "https://images.assetsdelivery.com/compings_v2/valeriikhadeiev/valeriikhadeiev1904/valeriikhadeiev190400538.jpg";
    event.stopPropagation();
});

//function changeImg() {
//    busImg.src = "https://images.assetsdelivery.com/compings_v2/valeriikhadeiev/valeriikhadeiev1904/valeriikhadeiev190400538.jpg";
//};

//scale pics
const imgContent = document.querySelector('.content-section .img-content img');
imgContent.addEventListener('mouseenter', () => {
    imgContent.style.transform = "scale(1.3)";
    imgContent.style.transition = "0.4s";
});

imgContent.addEventListener('mouseleave', () => {
    imgContent.style.transform = "scale(1.0)"
});

//removing fixed from header
const header = document.querySelector(".main-navigation");
window.addEventListener('scroll', () => {
    header.style.position = "initial";
});

//changing nav background color 
header.addEventListener('mouseleave', backColor);
function backColor(event) {
    header.style.backgroundColor = "rgb(" + event.offsetX + ", " + event.offsetY + " , 40)";
};

//annimation added to button
const button = document.querySelector('.btn');
button.addEventListener("dblclick", () => {
    TweenMax.to(button, 0.5, { rotation: 360 });
});


//text rotate on mouseenter
const introText = document.querySelector(".intro");
introText.addEventListener('mouseover', () => {
    introText.style.transform = "rotate(360deg)";
    introText.style.transition = "0.7s"
});

//constant changing background color on mousemove
const contentText = document.querySelector('.text-content');
contentText.addEventListener('mousemove', () => {
    contentText.style.backgroundColor = "rgb(" + event.offsetX + ", " + event.offsetY + " , 40)";
});

////change text to red on copy
const adventureText = document.querySelector(".adventure h2");
adventureText.addEventListener("copy", () => {
    adventureText.style.color = "red";
});

////disable context menu
const getawayText = document.querySelector(".getaway");
getawayText.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    alert("The context menu has been disabled");
});

//GSAP
const headerText = document.querySelector(".logo-heading");
TweenMax.from(headerText, 2, { x: 600, ease: Bounce.easeOut });

const textContent = document.querySelectorAll(".text-content");
TweenMax.from(textContent, 2, { rotation: 360 });

