const btn=document.getElementById("fuck");
const ruta=document.getElementById("Hej");

btn.addEventListener('click',function(){
  ruta.classList.add("synlig");
  console.log(ruta);
  ruta.classList.remove("osynlig");
  console.log(ruta);
  btn.classList.remove("synlig");
  btn.classList.add("osynlig");
});
  
