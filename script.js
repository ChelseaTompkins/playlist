var tracksButton = document.getElementById("choose-tracks-button");

// listeners for the front page button
tracksButton.addEventListener("click", function(){
  location.href = "playlist.html";
});

tracksButton.addEventListener("mouseover", function(){
  tracksButton.style.color = "white";
  tracksButton.style.backgroundColor = "black";
});

tracksButton.addEventListener("mouseleave", function(){
  tracksButton.style.color = '';
  tracksButton.style.backgroundColor = '';
});

//
