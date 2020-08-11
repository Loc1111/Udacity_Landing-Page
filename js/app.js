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
const sections = document.getElementsByTagName('section');

  //build a nav
  //this loop iterates through sections
  for (section of sections){
    //create li  
    let list = document.createElement('li');
    //get id for list
    list.id = section.id;
    //add class to section
    list.className.add('menu__link');    
    //get content of section
    list.innerText = section.dataset.nav;
    //creating nav bar
    navbarMenu.appendChild(list);
  }  
// make section active
function makeActive(){
  for (const section of sections) {
    const box = section.getBoundingClientRect();
    if(box.top <= 150 && box.bottom >= 150){
      const nav_item = document.querySelector('.menu__link');
      nav_item.classList.add('your-active-class');
      nav_item.classList.add('active');
    }else{
      const nav_item = document.querySelector('.menu__link');
      nav_item.classList.remove('your-active-class');
      nav_item.classList.remove('active');
    }
  }
}

document.addEventListener('scroll', function(){
  makeActive()
});

