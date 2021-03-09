// NAVBAR
const toggle = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("nav-links")[0];

toggle.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
  return false;
});

changeNavColor();
loadPlugins();

function loadPlugins() {
  if ('loading' in HTMLIFrameElement.prototype) {
    const ytIframe = document.querySelector('#ytIframe');
    const fbIframe = document.querySelector('#fbIframe');
    if(!ytIframe && !fbIframe) return; //neither elements are present, bail out
    ytIframe.src = "http://www.youtube.com/embed/videoseries?list=UUBZKuZV7UrYa2NOlRxP5MEg&origin=https://influencechurchtt.org"
    fbIframe.src = "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Finfluencechurch.tt&tabs=timeline%2Cevents&width=500&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
  }
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
