addEventListener('DOMContentLoaded', () => {
  showTime()
  if(localStorage.getItem("visit")== null || localStorage.getItem("visit")== undefined)
  novedades()
})

addEventListener('click', () =>{
  clean()
})
function showTime() {
  myDate = new Date();
  hours = myDate.getHours();
  minutes = myDate.getMinutes();
  seconds = myDate.getSeconds();
  if (hours < 10) hours = 0 + hours;
  if (minutes < 10) minutes = "0" + minutes;
  if (seconds < 10) seconds = "0" + seconds;
  $("#horaActual").text("Hora Actual:" + " " + hours + ":" + minutes + ":" + seconds);
  setTimeout("showTime()", 1000);
}

function clean(){
  let remove = document.querySelector('div.elfsight-app-bc6bfd50-d9ce-4df4-abcc-48d319ce048d').querySelectorAll('a')
  $(remove).closest("a").remove()

}
function novedades() {
  swal({
    title: "Novedades",
    text: "Se agregó un Reproductor secundario para poder escuchar con menos uso de datos. Proximamente se agregará una seccion de contacto para que puedas comunicarte o dejarnos tus comentarios, gracias por escuchar Herz FM",
    icon: "info",
    button: "Entendido"
  }).then((result) => {
    if (result == true) {
      localStorage.setItem("visit", true)
    }
  })
}