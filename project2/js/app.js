// Build a global variable 
const navbarMenu = document.getElementById('navbar_list');
const sections = document.querySelectorAll('section');

function createNav(){
  for( var i = 0; i < sections.length; i++){
    let item = document.createElement('LI');
    item.className = sections[i].getAttribute('navbar_menu li');
    item.title = sections[i].getAttribute('data-nav');
    item.textContent = sections[i].innerText;
    navbarMenu.appendChild(item);
  };
}
createNav();


