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
  }
  // Pausar canción
  function pauseStation() {
    audio.pause()
    updateControls()
  } 
