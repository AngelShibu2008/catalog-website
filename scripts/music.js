let songList = [];
let albumList = [];
// loading the page and data function
window.onload = function loadPage() {
    document.getElementById("backArrow").style.display = "none";
    document.getElementById("hamburger").style.display = "block";
    fetch('../jsons/music.json')
        .then(response => response.json())
        .then(data => {
          // TODO: Once music is populated, replace with shuffled data.
            //const shuffledData = data.sort(() => Math.random() - 0.5);
            // albumList = shuffledData;
            // populateAlbums(shuffledData);
            // populateArtists(shuffledData);

            albumList = data;
            populateAlbums(data);
            populateArtists(data);


            
        })
        .catch(error => {
            alert("Error fetching music");
            console.error('Error fetching music:', error);
        });
    fetch('../jsons/songs.json')
      .then(response => response.json())
      .then(data => {
        // TODO: Once music is populated, replace with shuffled data.
          //const shuffledData = data.sort(() => Math.random() - 0.5);
          // albumList = shuffledData;
          // populateAlbums(shuffledData);
          // populateArtists(shuffledData);

          songList = data;
          populateSongs(data);
          populateArtists(data);


          
      })
      .catch(error => {
          alert("Error fetching music");
          console.error('Error fetching music:', error);
      });
}

document.getElementById("aLink").addEventListener("click", function(event) {
  event.stopPropagation(); // stops it from also triggering the image
});
document.getElementById("iFrame").addEventListener("click", function(event) {
  event.stopPropagation(); // stops it from also triggering the image
});

// expanding the rows function
function expand(name) {
    var box = document.getElementById(name);
    expandHelper(box);
}


function populateSongs(songs) {
  const sections = Array.from(document.getElementsByClassName('container'));
  sections.forEach(section => {
    var type = section.id;
    songs.forEach(song => {
      var genre = song.genre;

      if (type === genre) {
          const songDiv = document.createElement('div');
          songDiv.className = "item";
          let idName = song.songName.replaceAll(" ", "_");
          songDiv.id = idName;
          // For Special Characters in the songNames
          let name = song.songName.replaceAll("'", "\\'");
          songDiv.innerHTML = `
              
              <img class="cover" src="${song.songCover}" title="${song.songName}" onclick="showSong('${name}')">
              <div class="text">    
                  <p class="artistName">${song.artist}</p>
                  <p class="albumName">${song.songName} </p>
                  <p class="releaseYear">${song.releaseYear}</p>
                  <p class="genre">${song.genre}</p>
              </div>
              
          `;
          section.appendChild(songDiv);
                
      }

    })

  })
}


function populateArtists(albums) {
  const container = document.getElementById('artists');
  albums.forEach(album => {
    const circle = document.createElement('div');
    circle.className = "item circle";
    idName = album.artist.replaceAll(" ", "_");
    circle.id = idName;
    circle.innerHTML = `
        <a class="artistImage" href="${album.channel}" target="_blank">
            <!--<img class="artistImage" src="${album.artistCover}" title="${album.artist}">-->
            <p class="artistText">${album.artist}</p>
        </a>
    `;
    if (!hasChild(circle, container)) {
        container.appendChild(circle);
    }
    
  });
}


function populateAlbums(albums) {
  const sections = Array.from(document.getElementsByClassName('container'));
    sections.forEach(section => {
        var type = section.id;
        albums.forEach(album => {

            var genre = album.genre;

            if (type === genre) {
                const albumDiv = document.createElement('div');
                albumDiv.className = "item";
                let idName = album.albumName.replaceAll(" ", "_");
                albumDiv.id = idName;
                // For Special Characters in the songNames
                let name = album.albumName.replaceAll("'", "\\'");
                
                albumDiv.innerHTML = `
                    
                    <img class="cover" src="${album.albumCover}" title="${album.albumName}" onclick="showCarousel('${name}')">
                    <div class="text">    
                        <p class="artistName">${album.artist}</p>
                        <p class="albumName">${album.albumName} </p>
                        <p class="releaseYear">${album.releaseYear}</p>
                        <p class="genre">${album.genre}</p>
                    </div>
                    
                `;
                section.appendChild(albumDiv);
                
            }

        
        });
    });
}


// if there's a repeating element, doesn't put it again.
function hasChild(child, parent) {
    const children = parent.children;
    for (let i = 0; i < children.length; i++) {
        if (child.id === children[i].id) {
            return true;
        }
    }
    return false;
}

function populateArtistPage(name) {
  const newList = [];
    for (let i = 0; i < albumList.length; i++) {
        var album = albumList[i];
        if (album.artist === name) {
            newList.push(album);
        }
    }
    populateAlbums(newList);
}

function albumInfo() { 
  const albumSlide = document.getElementById('album-slide'); 
  const albumImg = document.getElementById('albumImg'); 
  const albumText = document.getElementById('albumText'); 
  const iFrame = document.getElementById('iFrame'); 
  // iFrame.href = iFrame.href; 
  
  if (!albumImg.classList.contains("bg-images")) { 
    albumImg.classList.add("bg-images"); 
    albumText.style.opacity = "1"; 
    albumImg.style.transition = "all 1s ease"; 
    iFrame.style.display = "block"; 

  } else { 
    albumImg.classList.remove("bg-images"); 
    albumText.style.opacity = "0"; 
    iFrame.style.display = "none"; 

  } 
}


function fillCarousel(albumTitle) {
  let albumSongs = [];
  let album;
  for (let i = 0; i < albumList.length; i++) {
    if (albumList[i].albumName === albumTitle) {
      album = albumList[i];
      albumSongs = album.songs.split(", ");
    }
  }
  fillAlbumSlide(album);
  fillSongSlides(album, albumSongs);
}


function showSong(songName) {
  let song;
  for (let i = 0; i < songList.length; i++) {
    if (songList[i].songName === songName) {
      song = songList[i];
    }
  }
  fillSlide(song);
  let carousel = document.getElementById('wholeCarousel');
  carousel.style.display = "block";
  activateCarousel();
}

function fillSlide(song) {
  let albumSlide = document.getElementById('album-slide');
  albumSlide.innerHTML = `
                    <img class="slide-images" id="albumImg" src="${song.songCover}" />
                    <div id="albumText" class="text carouselText">
                        <h5>${song.artist}</h5>
                        <h6>${song.releaseYear}   |   ${song.genre}   |   ${song.albumName}</h6>
                        <a id="aLink" href="https://music.youtube.com/watch?v=${song.songID}" target="_blank" onclick="event.stopPropagation()"><h2 id="nameLink">${song.songName}</h2></a>
                        
                    </div>
                    <a class="text carouselText ytLinks" id="iFrame" href="https://music.youtube.com/watch?v=${song.songID}" target="_blank" onclick="event.stopPropagation()">
                              <img class="thumbnails" src="https://img.youtube.com/vi/${song.songID}/hqdefault.jpg">
                    </a>
  
  
  
  `;
}

function showCarousel(album) {
  fillCarousel(album);
  let carousel = document.getElementById('wholeCarousel');
  carousel.style.display = "block";
  activateCarousel();
}

function closeCarousel() {
  let carousel = document.getElementById('wholeCarousel');
  carousel.style.display = "none";
  let track = document.getElementById('track');
  let albumSlide = document.getElementById('album-slide');
  albumSlide.innerHTML = ``;
  let slides = Array.from(document.getElementsByClassName('carousel-slide'));
  for (let i = 0; i < slides.length; i++) {
    let slide = slides[i];
    if (slide !== albumSlide) {
      track.removeChild(slide);
    }
    
  }
}


function fillAlbumSlide(album) {
  let albumSlide = document.getElementById('album-slide');
  albumSlide.innerHTML = `
                    <img class="slide-images" id="albumImg" src="${album.albumCover}" />
                    <div id="albumText" class="text carouselText">
                        <h5>${album.artist}</h5>
                        <h6>${album.releaseYear}   |   ${album.genre}</h6>
                        <a id="aLink" href="${album.albumSongsLink}" target="_blank" onclick="event.stopPropagation()"><h2 id="nameLink">${album.albumName}</h2></a>
                        
                    </div>
                    <a class="text carouselText ytLinks" id="iFrame" href="https://www.youtube.com/watch?v=${album.conceptTrailer}" target="_blank" onclick="event.stopPropagation()">
                              <img class="thumbnails" src="https://img.youtube.com/vi/${album.conceptTrailer}/hqdefault.jpg">
                    </a>
  
  
  
  `;
}

function fillSongSlides(album, albumSongs) {
  let track = document.getElementById('track');

  for (let i = 0; i < albumSongs.length; i++) {
    let song = albumSongs[i];
    let ids = album.songID.split(", ");
    let slide = document.createElement('div');
    slide.className = "carousel-slide";
    
    slide.innerHTML = `
                    <img class="imgCover slide-images" src="${album.albumCover}" />
                    
                    <div class="content"> 
                        <div class="songContent">
                            <div class="text carouselText">
                                <h2> ${song} </h2>
                                <h5>${album.artist}  |  ${album.albumName}</h5>
                            </div>
                            <a class="ytLinks" href="https://www.youtube.com/watch?v=${ids[i]}" target="_blank">
                              <img class="thumbnails song" src="https://img.youtube.com/vi/${ids[i]}/hqdefault.jpg">
                            </a>
                            
                        </div>
                    
                        <img class="slide-images bg-images" src="${album.albumCover}" />
                
                    </div>
    `;
    track.appendChild(slide);

  }
}

function activateCarousel() {
    const carousel = document.getElementById('carousel');
    const slides = Array.from(document.querySelectorAll('.carousel-slide'));
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const dotsWrap = document.getElementById('dots');
    const track = document.getElementById('track');

    let index = 0;
    let dragging = false;
    let startX = 0;

    dotsWrap.innerHTML = ``;

    // build dots
    slides.forEach((_, i) => {
      const d = document.createElement('div');
      d.className = 'dot' + (i===index?' active':'');
      d.addEventListener('click', () => { 
        index = i; 
        layout(); 

        

      });
      dotsWrap.appendChild(d);
    });

    const dots = Array.from(dotsWrap.children);
    
    function updateCovers() {
      slides.forEach((slide, i) => {
        const content = slide.querySelector('.content');
        const img = slide.querySelector('.imgCover');
        
        if (!content || !img) return; // skip slides without both
        
        if (i === index) {
          content.style.display = 'block';
          img.style.display = 'none';
          
        } else {
          content.style.display = 'none';
          img.style.display = 'block';

        }
      });
    }


    function layout(offset = 0) {
      const carouselWidth = carousel.clientWidth;

      // Set slide width dynamically based on carousel width
      const slideWidth = Math.min(300, carouselWidth * 0.6); // max 300px, 60% of carousel
      const overlap = 0.6;                                  // fraction to overlap
      const spacing = slideWidth * overlap;

      const sideScale = 0.9;
      const farScale  = 0.8;

      slides.forEach((sl, i) => {
        let off = i - index;
        if (off > slides.length / 2) off -= slides.length;
        if (off < -slides.length / 2) off += slides.length;

        let x = off * spacing + offset;
        let scale = farScale;
        let z = 10;
        let op = 0;

        if (off === 0) { scale = 1.15; z = 40; op = 1; sl.style.boxShadow = "0 20px 40px rgba(0,0,0,0.5)"; }
        else if (off === -1 || off === 1) { scale = sideScale; z = 30; op = 0.9; sl.style.boxShadow = "none"; }
        else { sl.style.boxShadow = "none"; }

        sl.style.transform = `translateX(${x}px) translateY(-50%) scale(${scale})`;
        sl.style.zIndex = z;
        sl.style.opacity = op;


    
      });

      dots.forEach((d,i)=>d.classList.toggle('active', i===index));
      updateCovers();
    }

    layout();

    window.addEventListener('resize', layout);

    // buttons
    nextBtn.addEventListener('click', ()=>{ index=(index+1)%slides.length; layout(); });
    // slides[i+1].addEventListener('click', ()=>{ index=(index+1)%slides.length; layout(); });
    prevBtn.addEventListener('click', ()=>{ index=(index-1+slides.length)%slides.length; layout(); });
    // slides[i+1].addEventListener('click', ()=>{ index=(index+1)%slides.length; layout(); });

    slides.forEach((slide, i) => {
      slide.addEventListener('click', () => {
        if (i === (index + 1) % slides.length) {
          index = (index + 1) % slides.length; // click next slide
        } else if (i === (index - 1 + slides.length) % slides.length) {
          index = (index - 1 + slides.length) % slides.length; // click prev slide
        }
        layout();
      });
    });

    // dragging
    track.addEventListener('mousedown', e=>{
      startX = e.clientX; dragging = true; track.style.transition='none';
    });
    window.addEventListener('mousemove', e => {
      if(!dragging) return;

      let diff = e.clientX - startX;

      // Set your drag boundaries
      const maxDrag = 50;   // max pixels you can drag right
      const minDrag = -50;  // max pixels you can drag left

      // Clamp the diff to stay within limits
      if(diff > maxDrag) diff = maxDrag;
      if(diff < minDrag) diff = minDrag;

      layout(diff);
    });
    window.addEventListener('mouseup', e=>{
      if(!dragging) return;
      dragging = false;
      const diff = e.clientX - startX;
      if(diff<-50) index=(index+1)%slides.length;
      else if(diff>50) index=(index-1+slides.length)%slides.length;
      layout();
      track.style.transition='';
    });

    // touch support
    track.addEventListener('touchstart', e=>{ startX=e.touches[0].clientX; dragging=true; track.style.transition='none'; }, {passive:true});
    track.addEventListener('touchmove', e=>{ if(!dragging) return; const diff=e.touches[0].clientX-startX; layout(diff); }, {passive:true});
    track.addEventListener('touchend', e=>{ 
      if(!dragging) return; dragging=false; const diff=e.changedTouches[0].clientX-startX;
      if(diff<-50) index=(index+1)%slides.length; else if(diff>50) index=(index-1+slides.length)%slides.length;
      layout(); track.style.transition='';
    });

    window.addEventListener('resize', layout);

}

