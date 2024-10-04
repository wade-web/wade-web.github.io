window.addEventListener("scroll", function () {
  var navbar = document.querySelector(".navbar");
  navbar.classList.toggle("stiky", window.scrollY > 0);
});

let toggle = document.querySelector(".toggle");
let nav = document.querySelector("nav");
toggle.addEventListener("click", function () {
  nav.classList.toggle("open");
});
function filterProperties(type) {
  document.querySelectorAll('.box').forEach(box => {
      box.classList.remove('active');
      if (box.classList.contains(type)) {
          box.classList.add('active');
      }
  });
  document.getElementById('featured').scrollIntoView({ behavior: 'smooth' });
}