document.addEventListener("DOMContentLoaded",function(){
 const input = document.getElementById("inputPoke");
 const btn = document.getElementById("btnBuscar");

 btn.addEventListener("click",function(){
        const pokemon = input.value;
        const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
        
        fetch(url)
         .then(response => {
            if(!response.ok){
               throw new Error("Erro ao utilizar api"+ response.status);
            }
            return response.json();
         })
            .then(data => {
             console.log(data);
               
                  const visor = document.getElementById("visor");
                  visor.innerHTML = "";

                  const divNome = document.createElement("div");
                  divNome.classList.add("container-nome");
                  divNome.innerHTML = `<p>${data.name}</p>`;
                  visor.appendChild(divNome);

                  const divImg = document.createElement("div");
                  divImg.classList.add("container-imagem");
                  divImg.innerHTML = `<img src="${data.sprites.other.showdown.front_default}">
                  <img src="${data.sprites.other.showdown.front_shiny}">`; 
                  visor.appendChild(divImg);


                  const divAltura = document.createElement("div");
                  divAltura.classList.add("container-altura");
                  const alt = data.height*10;
                  divAltura.innerHTML = `<p>${alt} CM</p>`;
                  visor.appendChild(divAltura);

                  const divPeso = document.createElement("div");
                  divPeso.classList.add("container-peso");
                  const peso = data.weight/10;
                  divPeso.innerHTML = `<p>Peso= ${peso} Kg</p>`;
                  visor.appendChild(divPeso);

                  
                  data.stats.forEach(statusAtual => {
                     const divBase_stat = document.createElement("div");
                     divBase_stat.classList.add("container-base_stat");
                 
                     // Criar a barra de progresso personalizada
                     const progressContainer = document.createElement("div");
                     progressContainer.classList.add("progress-container");
                 
                     const progressBar = document.createElement("div");
                     progressBar.classList.add("progress-bar");
                     progressBar.style.width = `${statusAtual.base_stat}%`; // Define a largura com base no valor
                 
                     divBase_stat.innerHTML = `<h3>${statusAtual.stat.name}: ${statusAtual.base_stat}</h3>`;
                     progressContainer.appendChild(progressBar); // Adiciona a barra de progresso ao container
                     divBase_stat.appendChild(progressContainer); // Adiciona o container à div
                 
                     const sideVisor = document.getElementById("sideVisor");
                     sideVisor.appendChild(divBase_stat);
                 })
                 
                     
             });

             })

         .catch(error => {
            console.log("Erro ao utilizar API: ",error);

         })
     })
