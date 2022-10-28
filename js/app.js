const navbar = document.querySelector("#nav");
const navBtn = document.querySelector("#nav-btn");
const closeBtn = document.querySelector("#close-btn");
const sidebar = document.querySelector("#sidebar");
const date = document.querySelector("#date");
// add fixed class to navbar
window.addEventListener("scroll", function () {
  if (window.pageYOffset > 80) {
    navbar.classList.add("navbar-fixed");
  } else {
    navbar.classList.remove("navbar-fixed");
  }
});
// show sidebar
navBtn.addEventListener("click", function () {
  sidebar.classList.add("show-sidebar");
});
closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});
// set year
date.innerHTML = new Date().getFullYear();

const options = {
  root: document.querySelector("#viewport"),
  rootMargin: "0px",
  threshold: 1.0,
};

const observer = new IntersectionObserver(callback, options);

const projectCard = document.querySelector("#projectCard");

const projectImage = document.querySelector("#projectImage");

const projectInfo = document.querySelector("#projectInfo");

observer.observe(projectCard);

const callback = function (entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.toggle("project-hover");
    }
  });
};
