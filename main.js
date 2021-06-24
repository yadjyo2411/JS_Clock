var inc = 1000;
clock();
function clock() {
  const date = new Date();
  const hours = ((date.getHours() + 11) % 12 + 1);
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const hour = hours * 30;
  const minute = minutes * 6;
  const second = seconds * 6;
  const h = (hours < 10) ? "0" + hours : hours;
  const m = (minutes < 10) ? "0" + minutes : minutes;
  document.querySelector('.hours').innerHTML = h;
  document.querySelector('.mins').innerHTML = m;
  document.querySelector('.hour').style.transform = `rotate(${hour}deg)`
  document.querySelector('.minute').style.transform = `rotate(${minute}deg)`
  document.querySelector('.second').style.transform = `rotate(${second}deg)`

  
}

setInterval(clock, inc);

var d = (new Date()).toString().split(' ').splice(1,3).join(' ');
document.getElementById('date').innerHTML=d;

  var e = new Date();
  var weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";

  var n = weekday[e.getDay()];
  document.getElementById('day').innerHTML = n;
