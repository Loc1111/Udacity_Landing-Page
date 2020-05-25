// Build a global variable
const navbarMenu = document.getElementById('navbar_list');

function createMenu(){
  var sections = document.getElementsByTagName('SECTION');
  
  let i;
  for( i = 0; i < sections.length; i++){
    var a = document.createElement('A');
    var nodeName = sections[i].getAttribute('data-nav');
    var link = sections[i].textContent;
    a.appendChild(nodeName);
    a.appendChild(link);
  }
    var node = document.createElement('LI');     
    node.appendChild(a);
    node.setAttribute('style','.navbar_menu');
    navbarMenu.appendChild(node);
  }
  document.body.appendChild(navbarMenu); 
  navbarMenu.setAttribute('style', '.menu_link');

 createMenu();



