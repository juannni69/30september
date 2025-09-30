const btn = document.getElementById("fuck");
const ruta = document.getElementById("Hej");
const clickSound = new Audio('wlot.mp3'); // Create once

btn.addEventListener('click', function() {
  clickSound.currentTime = 0; // Reset to start (in case clicked rapidly)
  clickSound.play();
  
  ruta.classList.add("synlig");
  console.log(ruta);
  ruta.classList.remove("osynlig");
  console.log(ruta);
  btn.classList.remove("synlig");
  btn.classList.add("osynlig");
});