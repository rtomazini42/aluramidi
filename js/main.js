



/*function tocaSomPom(){
    document.querySelector('#som_tecla_pom').play();
    console.log("Tocando");
}
*/

function tocaSom(idAudio){
    document.querySelector(idAudio).play();
}




const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

while(contador < listaDeTeclas.length){
    const tecla = listaDeTeclas[contador]
    const instrumento = tecla.classList[1];
    console.log(instrumento);
    tecla.onclick = function (){
        tocaSom('#som_' + instrumento);
    };
    contador++;
}