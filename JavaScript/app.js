function vh(v) {
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    return (v * h) / 100;
  }

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    
    burger.addEventListener('click', ()=>{
        //Toggle Nav
        nav.classList.toggle('nav-active');

        // Animate links
        navLinks.forEach((link, index) => {
            if(link.style.animation) {
                link.style.animation = "";
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index /7 + 0.3}s`;
            }
        });

        console.log();

        //Burger animation
        burger.classList.toggle('toggle');

    });
}


const scrollSize = () => {
    window.addEventListener('scroll', () => {
        if (document.body.scrollTop > vh(6) || document.documentElement.scrollTop > vh(6)) {
            document.getElementById("navbar").style.padding = "1vh 1vw";
            document.getElementById("logo").style.fontSize = "25px";
            document.getElementById("nav-links").style.top = "6vh";
          } else {
            document.getElementById("navbar").style.padding = "2.5vh 1vw";
            document.getElementById("logo").style.fontSize = "32px";
            document.getElementById("nav-links").style.top = "8vh";
          }
        });
}

const allFunctions = ()=> {
    scrollSize();
    navSlide();
}

allFunctions();


/*
// When the user scrolls the page, execute myFunction
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
*/
