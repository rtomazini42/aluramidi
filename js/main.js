



/*function tocaSomPom(){
    document.querySelector('#som_tecla_pom').play();
    console.log("Tocando");
}
*/

function tocaSom(idAudio){
    document.querySelector(idAudio).play();
}




const listaDeTeclas = document.querySelectorAll('.tecla');

/*let contador = 0;

while(contador < listaDeTeclas.length){
    const tecla = listaDeTeclas[contador]
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`
    tecla.onclick = function (){
        tocaSom(idAudio);
    };
    contador++;
}*/

for(let contador =0; contador < listaDeTeclas.length; contador++){
    const tecla = listaDeTeclas[contador]
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`
    tecla.onclick = function (){
        tocaSom(idAudio);
    };

    tecla.onkeydown = function (evento){
        if(evento.code === "Space" || evento.code =="Enter"){
            tecla.classList.add('ativa');
        }
        
    }
    tecla.onkeyup = function (){
        tecla.classList.remove('ativa');
    }
}
