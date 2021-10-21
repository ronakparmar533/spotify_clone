
var AudioElement = new Audio("1.mp3");

var playButton = document.querySelector("#play");
var gif  = document.querySelector("#gif");
var progressBar = document.querySelector("#range");

function playPauseMusic(){
    
    if(AudioElement.paused || AudioElement.currentTime<=0){
        playButton.src = "icons/circle-pause-solid.svg";
        AudioElement.play();
        gif.style.opacity = 1;
    }else{
        AudioElement.pause();   
        playButton.src = "icons/circle-play-solid.svg";
        gif.style.opacity = 0;
    }
    
}

function updateTimeHandler(){
    var progress = parseInt(AudioElement.currentTime / AudioElement.duration * 100)
    progressBar.value = progress;    
}

function changeHandler(){

    AudioElement.currentTime = (progressBar.value * AudioElement.duration / 100);

}

playButton.addEventListener("click" , playPauseMusic);
AudioElement.addEventListener("timeupdate" , updateTimeHandler);
progressBar.addEventListener("change" , changeHandler);