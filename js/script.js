//for word rotaion in intro
setInterval(function () {
    const show = document.querySelector('span[data-show]')
    const next = show.nextElementSibling || document.querySelector('span:first-child')
    const up = document.querySelector('span[data-up]')
    
    if (up) {
      up.removeAttribute('data-up')
    }
    
    show.removeAttribute('data-show')
    show.setAttribute('data-up', '')
    
    next.setAttribute('data-show', '')
  }, 2000)


//for hamburger menu
burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.nav-list')  


burger.addEventListener('click' , ()=>{

    navbar.classList.toggle('h-nav-resp');
    navList.classList.toggle('v-class-resp');
  
})
/*
education  = document.querySelector('.education')
colorunder = document.querySelector('.color-underline')
font1 = document.querySelector('.edu-heading')
education.addEventListener('mouseover' , ()=>
{
  colorunder.classList.toggle('color-und');
  font1.classList.toggle('edu-color');
})
education.addEventListener('mouseout' , ()=>
{
  colorunder.classList.toggle('color-und');
  font1.classList.toggle('edu-color');
})

font2 = document.querySelector('.acc-heading')
accomplishments  = document.querySelector('.accomplishments')
colorunder2 = document.querySelector('.color-underline2')
accomplishments.addEventListener('mouseover' , ()=>
{
  colorunder2.classList.toggle('color-und2');
  font2.classList.toggle('acc-color');
})
accomplishments.addEventListener('mouseout' , ()=>
{
  colorunder2.classList.toggle('color-und2');
  font2.classList.toggle('acc-color');
})

//form actions

window.addEventListener("DOMContentLoaded", function () {

  // get the form elements defined in your form HTML above

  var form = document.getElementById("test-form");
  var button = document.getElementById("test-form-submit");
  var status = document.getElementById("status");

  // Success and Error functions for after the form is submitted

  function success() {
    form.reset();
    status.classList.add('success');
    status.innerHTML = "Thanks!";
  }

  function error() {
    status.classList.add('error');
    status.innerHTML = "Oops! There was a problem.";
  }

  // handle the form submission event

  form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    var data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
  });
});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}
*/
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
