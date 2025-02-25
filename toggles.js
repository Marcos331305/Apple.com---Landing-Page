// footer toggle handling
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
// nav-bar toggle handling
var toggle=document.querySelector('.nav-toggle');
var navList=document.querySelector('.navbar-list');
var closeToggle=document.querySelector('.close-toggle-btn');
toggle.addEventListener("click",()=>{
  if(navList.style.display=="none"){
    navList.style.display="block";
    closeToggle.style.display="block"
  }
  else{
    navList.style.display="none";
    closeToggle.style.display="none";
  }
})
// close-toggler handling
closeToggle.addEventListener("click",()=>{
  navList.style.display="none";
  closeToggle.style.display="none";
})
// scroll locking when nav-toggle-menu is opened.
