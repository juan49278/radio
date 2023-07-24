addEventListener('DOMContentLoaded', () => {
  showTime()
  playStation()
})
const audio = document.getElementById("audio") 
const cover = document.getElementById("cover")
const title = document.getElementById("title")
const play = document.getElementById("play")

// Escuchar clicks en los controles
play.addEventListener("click", () => {
  if (audio.paused) {
    playStation()
  } else {
    pauseStation()
  }
})

// Actualiar controles
function updateControls() {
  if (audio.paused) {
    play.classList.remove("fa-pause")
    play.classList.add("fa-play")
  } else {
    play.classList.add("fa-pause")
    play.classList.remove("fa-play")
  }
}
// Reproducir estación
function playStation() {
    audio.play()
    updateControls()
    document.querySelector("span.playing").innerHTML = "Reproduciendo"
  }
  // Pausar canción
  function pauseStation() {
    audio.pause()
    updateControls()
    document.querySelector("span.playing").innerHTML = "Detenido"
  } 
function showTime(){
  myDate = new Date();
  hours = myDate.getHours();
  minutes = myDate.getMinutes();
  seconds = myDate.getSeconds();
  if (hours < 10) hours = 0 + hours;
  if (minutes < 10) minutes = "0" + minutes;
  if (seconds < 10) seconds = "0" + seconds;
  $("#horaActual").text("Hora Actual:" + " " +hours+ ":" +minutes+ ":" +seconds);
  setTimeout("showTime()", 1000);
}
