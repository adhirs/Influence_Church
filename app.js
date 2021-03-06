// NAVBAR
const toggle = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("nav-links")[0];

toggle.addEventListener("click",function(){
  navbarLinks.classList.toggle("active");
  return false;
});


// INTERSECTION OBSERVER

const header = document.querySelector(".navbar");
const sectionOne = document.querySelector(".church-image");

const sectionOneOptions = {
  rootMargin: "-15% 0%"
};

const sectionOneObserver = new IntersectionObserver(function(
  entries,
  sectionOneObserver
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      header.classList.add("navbar-intersecting");
    } else {
      header.classList.remove("navbar-intersecting");
    }
  });
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);
