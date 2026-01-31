// NAVBAR
const toggle = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("nav-links")[0];

toggle.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
  document.querySelector(".navbar").classList.toggle("nav-open");
  return false;
});

changeNavColor();
loadPlugins();

function loadPlugins() {
 
    const ytIframe = document.querySelector('#ytIframe');
    const fbIframe = document.querySelector('#fbIframe');
    if(!ytIframe && !fbIframe) return; //neither elements are present, bail out


    const sectionOneOptions = {
      rootMargin: "50% 0%",
    };
  
    const sectionOneObserver = new IntersectionObserver(
      (entries, sectionOneObserver) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if(!ytIframe.src) ytIframe.src = "https://www.youtube.com/embed/videoseries?list=UUBZKuZV7UrYa2NOlRxP5MEg&origin=https://influencechurchtt.org"
           // if(!fbIframe.src) fbIframe.src = "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Finfluencechurch.tt%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
          }
        });
      },
      sectionOneOptions
    );
    sectionOneObserver.observe(ytIframe);
}

function changeNavColor() {
  // INTERSECTION OBSERVER

  const header = document.querySelector(".navbar");
  const sectionOne = document.querySelector(".church-image");

  if (!sectionOne) return; //if the church image doesn't exist, exit function

  const sectionOneOptions = {
    rootMargin: "-15% 0%",
  };

  const sectionOneObserver = new IntersectionObserver(
    (entries, sectionOneObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          header.classList.add("navbar-intersecting");
        } else {
          header.classList.remove("navbar-intersecting");
        }
      });
    },
    sectionOneOptions
  );
  sectionOneObserver.observe(sectionOne);
}
