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

(() => {
  'use strict'
  const forms = document.querySelectorAll('.needs-validation')
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }
      if (form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
        thankyou()
        publish()
        wipe()
        forms.reset()
      }
      form.classList.add('was-validated')
    }, false)
  })
})()

function wipe() {
  document.getElementById("text").value = ""
  document.getElementById("name").value = ""

}
function thankyou() {
  swal({
    title: "Listo",
    text: "Gracias por escribirnos",
    icon: "success"
  })
}

function publish() {
  msg = document.getElementById("text").value
  nombre = document.getElementById("name").value
  listaComentarios.innerHTML += `
  <li class="list-group-sm">${nombre} <span>dijo:</span><br>
  <p style="font-size:small;">${text.value}</p>`
  localStorage.setItem('chats', listaComentarios.innerHTML)
}