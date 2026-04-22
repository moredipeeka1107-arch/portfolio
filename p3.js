console.log("Portfolio Loaded 🚀");
window.addEventListener("scroll", () => {
  let sections = document.querySelectorAll("section");
  let navLinks = document.querySelectorAll("nav a");

  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if(top >= offset && top < offset + height){
      navLinks.forEach(link => {
        link.classList.remove("active");
        document.querySelector("nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
});
const text = document.querySelector(".about-text");
text.style.opacity = 0;

window.addEventListener("scroll", () => {
  const section = document.querySelector("#about");
  const position = section.getBoundingClientRect().top;

  if(position < window.innerHeight - 100){
    text.style.opacity = 1;
    text.style.transition = "1s";
  }
});    
