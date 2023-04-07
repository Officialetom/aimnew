const social = document.getElementById('social');
const action = document.getElementById('take-action');
const innerOne = document.getElementById('inner-link-1');
const innerTwo = document.getElementById('inner-link-2');
const toggleBtn = document.getElementById('toggle-btn');
const navItem = document.getElementById('nav-item-2');
const Btn1 = document.getElementById('btn-2');
const Btn2 = document.getElementById('btn-3');
const Body = document.querySelector('body');
const loader = document.getElementById('preloader');
const Modal = document.getElementById('signup-modal');
const CloseBtn = document.getElementById('close-btn');
const Reserve = document.getElementById('reserve');
const Pop = document.getElementById('pop');
const Right = document.getElementById('date');

window.addEventListener('load', ()=>{
  setTimeout(() =>{loader.style.display = "none";}, 1000)
})

setTimeout(()=>{Pop.style.display = "none";}, 1000)

Reserve.addEventListener('click', ()=>{
  Modal.classList.toggle('active');
})

CloseBtn.addEventListener('click', () =>{
  Modal.classList.toggle('active');
})

toggleBtn.addEventListener('click', () => {
    navItem.classList.toggle('active');
    Btn1.classList.toggle('active');
    Btn2.classList.toggle('active');
})

social.addEventListener('click', () => {
    innerOne.classList.toggle('active');
})

action.addEventListener('click', () => {
    innerTwo.classList.toggle('active');
})


var Yeardate = new Date().getFullYear();

Right.innerHTML = Yeardate;
// countdown begins here

var countDownDate = new Date("Jun 24, 2023 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("days").innerHTML = "EXPIRED";
    document.getElementById("hours").innerHTML = "EXPIRED";
    document.getElementById("minutes").innerHTML = "EXPIRED";
    document.getElementById("seconds").innerHTML = "EXPIRED";
  }
}, 1000);