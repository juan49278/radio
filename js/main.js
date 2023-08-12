addEventListener('DOMContentLoaded', () => {
  showTime()
  if (localStorage.getItem("visit") == null || localStorage.getItem("visit") == undefined) {
    novedades()
  }
  if (localStorage.getItem('chats')) {
    listaComentarios.innerHTML = localStorage.getItem('chats')
  }
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

chat.addEventListener("click", () =>{
  if(chat.innerHTML == "Mostrar chat"){
    collapseExample.classList.remove('d-none')
    collapseExample.classList.add('d-block')
    chat.innerHTML = `Ocultar chat`
  } else {
    collapseExample.classList.add('d-none')
    collapseExample.classList.remove('d-block')
    chat.innerHTML = `Mostrar chat`
  }
})