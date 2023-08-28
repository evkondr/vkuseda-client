const nav = document.querySelector(".nav");
const hambs = document.getElementsByClassName("hamburger")
const links = nav.getElementsByTagName("li");

for(let i = 0; i < hambs.length; i++){
  hambs[i].addEventListener("click", () => {
    nav.classList.toggle("active");
  })
}
for(let i = 0; i < links.length; i++){
  links[i].addEventListener("click", () => {
    nav.classList.remove("active");
  })
}
nav.addEventListener("click", () => {
  nav.classList.remove("active");
})