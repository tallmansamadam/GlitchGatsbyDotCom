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



let options = {
  root: null, // relative to document viewport
  rootMargin: "0px", // margin around root. Values are similar to css property. Unitless values not allowed
  threshold: .75, // visible amount of item shown in relation to root
};

const projectCard = document.querySelectorAll(".project");
const projectImage = document.querySelectorAll(".project-img");
projectCard.forEach((project) => observer.observe(project, {}));
projectImage.forEach((projectimg) => observer2.observe(projectimg, {}));


let observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    entry.target.classList.toggle("project-mobile-hover", entry.isIntersecting)
    ;
}, options)

let observer2 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    entry.target.classList.toggle("mobile-hover", entry.isIntersecting);
    // Element.classList.add(project-)
  });
});
// mobile hover work-around for project class
// const observer = new IntersectionObserver(
//     // Element.classList.add(project-)
//   });
// // );
// document
//   .querySelectorAll(".project")
//   .forEach((project) => observer.observe(project, {}));

// mobile hover work-around for project-img class
// let observer2 = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     entry.target.classList.toggle("mobile-hover", entry.isIntersecting);
//     // Element.classList.add(project-)
//   });
// });
// document
//   .querySelectorAll(".project-img")
//   .forEach((projectimg) => observer2.observe(projectimg, {}));
