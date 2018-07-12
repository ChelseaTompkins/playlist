//Front page button - splash page
var tracksButton = document.getElementById("choose-tracks-button");

//Playlist div that populates albums
var albumDiv = document.getElementById("album-div");

//Album clicks - playlist
var police = document.getElementById("album-0");
var buhuru = document.getElementById("album-1");
var pfloyd = document.getElementById("album-2");
var mjackson = document.getElementById("album-3");
var adele = document.getElementById("album-4");


var clearTracksButton = document.getElementById("clear-tracks-button");
var submitBinButton = document.getElementById("submit-bin-button");

//Albums API
var albumsURL = `https://lit-fortress-6467.herokuapp.com/object`;

//test image
var testimg = document.getElementById("test");



// Listeners for playlist page
window.onload = function(){
  axios.get(albumsURL)
  .then(function(response){
    var data = response.data;
    var resultsArr = data.results;
    //console.log(resultsArr);

    for(var i=0; i<resultsArr.length; i++){
      // console.log(resultsArr[i]);
      var albumCovers = resultsArr[i].cover_art;
      // console.log(albumCovers);
      albumDiv.innerHTML += `<div><img id=album-${i} class=album src=images/${albumCovers}></div>`
    }
  });
}

police.addEventListener("click", function(){
  alert("police has been clicked");
});
