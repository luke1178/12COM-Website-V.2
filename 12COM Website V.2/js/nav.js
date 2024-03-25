/* Open navbar func*/
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("page-wrapper").style.marginLeft = "250px";
  document.getElementsByClassName("menu")[0].style.display = "none";
  /* Save navbar state */
  localStorage.setItem('navState', 'open');
}

/* Load open navbar state */
function applyNavState() {
  var navState = localStorage.getItem('navState');
  if (navState === 'open') {
      openNav();
  }
}

/* Navbar transition */
function transitionEnd(event) {
  if (event.propertyName === "width" && event.target.id === "mySidenav") {
      if (event.target.style.width === "0px") {
          /* Nav closed */
          document.querySelector(".menu").style.display = "block";
          document.querySelector("#page-wrapper").classList.remove('sidenav-open');
          /* Update localStorage */
          localStorage.setItem('navState', 'closed');
      } else {
          /* Nav opened */
          document.querySelector(".menu").style.display = "none";
          document.querySelector("#page-wrapper").classList.add('sidenav-open');
          /* Update localStorage */
          localStorage.setItem('navState', 'open');
      }
  }
}

/* Func for opening navbar */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("page-wrapper").style.marginLeft = "250px";
  document.querySelector(".menu").style.display = "none";
  /* Save navState when open */
  localStorage.setItem('navState', 'open');
}

/* Func for closing the navbar */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("page-wrapper").style.marginLeft = "0";
  document.querySelector(".menu").style.display = "block";
  /* Save navState when closed */
  localStorage.setItem('navState', 'closed');
}

/* Apply saved nav state*/
document.addEventListener('DOMContentLoaded', applyNavState);

/* Event listener for transition end */
document.getElementById("mySidenav").addEventListener("transitionend", transitionEnd);
