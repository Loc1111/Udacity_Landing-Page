// Build a global variable
const navbarMenu = document.getElementById('navbar_list');
const sections = document.querySelectorAll('section');
  
  var i;
  for (i = 0; i < sections.length; i++){
    var navItem = document.createElement('LI');
    var elementName = sections[i].getAttribute('data-nav');
    var link = sections[i].textContent;
    navItem.append(elementName);
    navItem.append(link);
    navItem.setAttribute('style', 'navbar_menu li');
  };
  navbarMenu.appendChild(navItem);
  navbarMenu.setAttribute('style', 'menu_link');
  navbarMenu.setAttribute('style', 'menu_link:hover');
  document.body.appendChild(navbarMenu);
