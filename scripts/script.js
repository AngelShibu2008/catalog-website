window.onload = function loadPage() {
    var back = document.getElementById('backArrow');
    back.style.display = 'none';
    var hamburger = document.getElementById('hamburger');
    hamburger.style.display = 'block';

}


function showHome() {
    document.getElementById('body').style.backgroundColor = "#353A29";
    document.getElementsByClassName('section').style.backgroundColor = "#d8d7d1d2";
}

function showGenre(genre, genreTitle, genreDescript) {
    // makes sure the page is still index.html
    if (!document.URL.includes("index.html")) {
      window.location.href = "../indexes/index.html";
    }

    // loops thru the sections and hides all the non-clicked genres
    const sections = document.getElementsByClassName('section');
    for (let i = 0; i < sections.length; i++) {
        if (sections[i].id !== genre) {
            sections[i].style.display = "none";
        }
    }
    // hides website title 
    document.getElementById('website').style.display = "none";

    // makes sure the section is visible
    document.getElementById(genre).style.display = "block";

    // adjusts size and spacing
    document.getElementById(genre).style.width = "85%";
    document.getElementById(genre).style.marginLeft = "90px";
    document.getElementById(genre).style.marginRight = "100px";
    document.getElementById(genre).style.paddingRight = "50px";
    document.getElementById(genre).style.paddingLeft = "50px";
    document.getElementById(genre).style.height = "100%";
    document.getElementById(genre).style.marginTop = "10px";

    // makes the fonts bigger
    document.getElementById(genreTitle).style.fontSize = "30px";
    document.getElementById(genreDescript).style.fontSize = "20px";

    // background changes
    if (genre === "romance") {
        document.getElementById('body').style.backgroundImage = "url('https://static.vecteezy.com/system/resources/thumbnails/027/597/859/small_2x/romantic-couple-silhouetted-against-blurred-background-love-and-valentine-s-concept-free-photo.jpg')";
    } else if (genre === "fantasy") {
        document.getElementById('body').style.backgroundImage = "url('https://www.toacorn.com/wp-content/uploads/images/2023-07-07/29p1.jpg')";
    } else if (genre === "scifi") {
        document.getElementById('body').style.backgroundImage = "url('https://imgcdn.stablediffusionweb.com/2024/5/1/2137c244-9114-431c-9b58-b4a46838a6b0.jpg')";
    } else {
        document.getElementById('body').style.backgroundImage = "url('https://i.pinimg.com/originals/62/e7/cc/62e7cc0dd3c8db504d1ad329b2978de7.jpg')";
    }
    
    document.getElementById(genre).style.backgroundColor = "rgba(216, 215, 209, 0.53)";
    
    
}