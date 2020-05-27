const navbarMenu = document.getElementById("navbar__list");
const sections = document.querySelectorAll("section");

function createNav(){
  for (let section of sections){
    let item = document.createElement("LI");
    item.className = section.getAttribute("navbar__menu li");
    item.title = section.getAttribute("data-nav");
    item.textContent = section.textContent;
    navbarMenu.appendChild(item);
  };
  document.body.appendChild(navbarMenu);
}
createNav();

