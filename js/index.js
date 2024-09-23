document.addEventListener("DOMContentLoaded",function(){
 const input = document.getElementById("inputPoke");
 const btn = document.getElementById("btnBuscar");

 btn.addEventListener("click",function(){
        const pokemon = input.value;
        console.log(pokemon);
        alert(pokemon);
     });
});