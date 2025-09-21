
function toggleNav() {
    const sideNav = document.getElementById("mySidenav");
    const body = document.body;
    const hamburger = document.getElementById('hamburger');
  
    if (sideNav.style.width === "250px") {
      sideNav.style.width = "0px";
      body.classList.add("nav-closed");
      body.classList.remove("nav-open");
      hamburger.style.color = "black";
      
      
    } else {
      sideNav.style.width = "250px";
      body.classList.add("nav-open");
      hamburger.style.color = "white";
      body.classList.remove("nav-closed");
      
    }

    if (window.location.href.includes("indexes/index.html") && sideNav.style.width === "0px") {
      hamburger.style.color = "black";
    } else {
      hamburger.style.color = "white";
    }
}

function goBack() {
  if (window.location.href.includes("book.html")) {
    window.location.href = "../indexes/index.html";
  } else if (window.location.href.includes("artist.html")) {
    window.location.href = "../indexes/music.html";
  } else if (window.location.href.includes("album.html")) {
    window.location.href = "../indexes/music.html"
  } else {
    alert("Error with goBack function");
  }
}

function expandHelper(box) {
  var collapsedHeight = 200;
    
  if (!box.style.transition) {
    box.style.transition = 'height 1s ease';
        
  }

  if (!box.style.height) {
    box.style.height = collapsedHeight + 'px';
  }

  var currentHeight = parseInt(box.style.height.substring(0,3));


  if (currentHeight === collapsedHeight) { // collapsed
      
    box.style.overflowY = 'scroll';
    box.style.overflowX = 'hidden';
    box.style.flexFlow = 'wrap row';
    if (box.scrollHeight > (collapsedHeight + 22)) {
      box.style.height = '410px'; // Expand to content height
    } else {
      box.style.height = collapsedHeight + 'px'; // Collapse
      box.style.overflowX = 'scroll';
      box.style.overflowY = 'hidden';
      box.style.flexFlow = 'nowrap';
    }
      
  } else {
    box.style.height = collapsedHeight + 'px'; // Collapse
    box.style.overflowX = 'scroll';
    box.style.overflowY = 'hidden';
    box.style.flexFlow = 'nowrap';
  }
}