const navbarMenu = document.getElementById("navbar__list");
const sections = document.querySelectorAll("section");

function createNav(){
  for (let item of sections){
    let section = document.createElement("li");
    section.className = "menu__link";
    section.dataset.nav = item.id;
    section.innerText = item.dataset.nav;
    navbarMenu.appendChild(section);
  };  
};
createNav();


