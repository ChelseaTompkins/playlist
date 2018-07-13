//Front page button - splash page
var tracksButton = document.getElementById("choose-tracks-button");

//Playlist div that populates albums
var albumDiv = document.getElementById("album-div");

//Playlist buttons
var clearTracksButton = document.getElementById("clear-tracks-button");
var submitBinButton = document.getElementById("submit-bin-button");


//Albums API
var albumsURL = `https://lit-fortress-6467.herokuapp.com/object`;
var bin = [];

// Listeners for playlist page
window.addEventListener("load", function(){
  axios.get(albumsURL)
  .then(function(response){
    var data = response.data;
    var resultsArr = data.results;

    for(var i=0; i<resultsArr.length; i++){
      var albumCovers = resultsArr[i].cover_art;
      var albumIDs = resultsArr[i].id;
      albumDiv.innerHTML += `<div><img id=${albumIDs} class=album src=images/${albumCovers}></div>`
    }

    var albumContentBin = document.getElementById("album-content-div");
    resultsArr.forEach(item => {
      var albumArtist = item.artist;
      var albumTitle = item.title;
      var currentAlbum = document.getElementById(`${item.id}`);
      currentAlbum.addEventListener("click", function(){
        albumContentBin.innerHTML += `<li style="padding-left:10px;list-style-type:none;">${albumArtist}: ${albumTitle}</li>`;
        bin.push({artist: albumArtist, title: albumTitle});
      });
    });

    var message = document.getElementById("message");

    submitBinButton.addEventListener("click", function(){
      axios.post("https://lit-fortress-6467.herokuapp.com/post", bin)
        .then(function(response){
          console.log(bin);
          message.style.display = "block";
          setTimeout(function(){message.style.display = "none";}, 1000);
          albumContentBin.innerHTML = '';
        });
      });

      clearTracksButton.addEventListener("click", function(){
        albumContentBin.innerHTML = '';
        bin = [];
      });
    });
  });
