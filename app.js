/**
 * Build navigation.
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

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
