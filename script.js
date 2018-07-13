//Front page button - splash page
var tracksButton = document.getElementById("choose-tracks-button");

//Playlist div that populates albums
var albumDiv = document.getElementById("album-div");

//Playlist buttons
var clearTracksButton = document.getElementById("clear-tracks-button");
var submitBinButton = document.getElementById("submit-bin-button");


//Albums API
var albumsURL = `https://lit-fortress-6467.herokuapp.com/object`;

// Listeners for playlist page
window.addEventListener("load", function(){
  axios.get(albumsURL)
  .then(function(response){
    var data = response.data;
    var resultsArr = data.results;
    // console.log(resultsArr);

    for(var i=0; i<resultsArr.length; i++){
      console.log(resultsArr[i]);
      var albumCovers = resultsArr[i].cover_art;
      var albumIDs = resultsArr[i].id;
      albumDiv.innerHTML += `<div><img id=${albumIDs} class=album src=images/${albumCovers}></div>`
    }


    resultsArr.forEach(item => {
      var albumArtist = item.artist;
      var albumTitle = item.title;
      var albumContentBin = document.getElementById("album-content-div");
      var currentAlbum = document.getElementById(`${item.id}`);
      currentAlbum.addEventListener("click", function(){
        albumContentBin.innerHTML += `<p>${albumArtist}: ${albumTitle}</p>`
      });
    });

    clearTracksButton.addEventListener("click", function(){
      alert("clear tracks has been clicked");
    });

    submitBinButton.addEventListener("click", function(){
      alert("submit bin clicked");
    });
  });
});
