/**
 * 
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
//set the starting time  to measure the speed of the code

//select a ul tag in nav
const navbarMenu = document.getElementById('navbar__list');
//select sections
const sections = document.querySelectorAll('section');

//build a nav
function createNav(){
  //this loop iterates through sections
  for (let item of sections){
    //creating li  
    let section = document.createElement('li');
    //assign class to section
    section.className = 'menu__link';
    //id. is used to get id of section
    section.dataset.nav = item.id;
    //get content of section
    section.innerText = item.dataset.nav;
    //creating nav bar
    navbarMenu.appendChild(section);
  }  
}
createNav();

// make section active
const makeActive = () => {
  sections.forEach(section => {
    const elementOffset = section.getBoundingClientRect().top;
    section.classList.remove('your-active-class');
    inviewport = () => elementOffset < 150 && elementOffset >=  -150;
    if(elementOffset < 150 && elementOffset <= -150){
      section.classList.add('your-active-class');
    }
    console.log(section.getBoundingClientRect());
  });
}
document.addEventListener('scroll', function(){
  makeActive()
});
}

document.addEventListener('scroll', function(){
  makeActive()
});
