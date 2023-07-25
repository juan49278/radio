addEventListener('DOMContentLoaded', () => {
  showTime()
})

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
