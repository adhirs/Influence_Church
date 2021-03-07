// NAVBAR
const toggle = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("nav-links")[0];

toggle.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
  return false;
});

changeNavColor();

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
